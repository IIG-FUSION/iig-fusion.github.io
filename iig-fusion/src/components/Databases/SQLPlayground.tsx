import React from "react";
import { type Database, type QueryExecResult } from "sql.js";
import { useSQLJs } from "./SQLJsContext";

const SQL_CREATE_DB = `
        CREATE TABLE Students (
          id INTEGER PRIMARY KEY,
          name TEXT,
          year INTEGER,
          house TEXT
        );

        INSERT INTO Students VALUES
        (1,'Alex',10,'Red'),
        (2,'Jess',11,'Blue'),
        (3,'Tom',10,'Red'),
        (4,'Sam',12,'Green');
      `;

const SQL_DEFAULT_QUERY = "SELECT * FROM Students;";

const win = window as Window & {
  showSaveFilePicker?: (options?: unknown) => Promise<FileSystemFileHandle>;
};

function SqlPlayground() {
  const SQL = useSQLJs();
  const [db, setDb] = React.useState<Database | null>(null);
  const [sql, setSql] = React.useState(SQL_DEFAULT_QUERY);
  const [results, setResults] = React.useState<QueryExecResult[]>([]);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!SQL) return;

    async function loadDb() {
      const db = new SQL.Database();

      db.run(SQL_CREATE_DB);

      setDb(db);
    }

    loadDb();
  }, [SQL]);

  async function exportDatabase() {
    if (!db) return;

    const bytes = new Uint8Array(db.export());

    const handle = await win.showSaveFilePicker?.({
      suggestedName: "database.sqlite",
      types: [
        {
          description: "SQLite Database",
          accept: {
            "application/x-sqlite3": [".sqlite", ".db"],
          },
        },
      ],
    });

    if (!handle) return;

    const writable = await handle.createWritable();

    await writable.write(bytes);
    await writable.close();
  }

  function runQuery() {
    if (!db) return;

    try {
      const result = db.exec(sql);
      setResults(result);
    } catch (err) {
      setError(String(err));
    }
  }

  function importDatabase() {
    if (!selectedFile) return;

    const file = selectedFile;

    const reader = new FileReader();
    reader.onload = () => {
      const data = new Uint8Array(reader.result as ArrayBuffer);
      const db = new SQL.Database(data);
      setDb(db);
    };
    reader.readAsArrayBuffer(file);
  }

  function onChooseImport(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
  }

  return (
    <div>
      <h1>SQL Playground</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <textarea
        rows={8}
        cols={80}
        value={sql}
        onChange={(e) => setSql(e.target.value)}
      />

      <input type="file" accept=".sqlite,.db" onChange={onChooseImport} />

      <br />

      <button onClick={runQuery}>Run Query</button>
      <button onClick={importDatabase}>Import Database</button>
      <button onClick={exportDatabase}>Export Database</button>

      <table>
        <thead>
          {results.length > 0 && results[0].columns && (
            <tr>
              {results[0].columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          )}
        </thead>
        <tbody>
          {results.length > 0 && results[0].values && (
            <>
              {results[0].values.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SqlPlayground;
