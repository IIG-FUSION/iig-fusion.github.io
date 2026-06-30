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

function SqlPlayground() {
  const SQL = useSQLJs();
  const [db, setDb] = React.useState<Database | null>(null);
  const [sql, setSql] = React.useState(SQL_DEFAULT_QUERY);
  const [results, setResults] = React.useState<QueryExecResult[]>([]);
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

  function runQuery() {
    if (!db) return;

    try {
      const result = db.exec(sql);
      setResults(result);
    } catch (err) {
      setError(String(err));
    }
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

      <br />

      <button onClick={runQuery}>Run Query</button>

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
