import React from "react";
import initSqlJs from "sql.js";

type SQLJs = Awaited<ReturnType<typeof initSqlJs>>;

const SQLJsContext = React.createContext<SQLJs | null>(null);

function useSQLJs() {
  const context = React.useContext(SQLJsContext);
  if (!context) {
    throw new Error("useSQLJs must be used within a SQLJsProvider");
  }
  return context;
}

// Singleton
let SQL: SQLJs | null = null;

async function getSqlJs() {
  if (SQL) return SQL;

  SQL = await initSqlJs({
    locateFile: (file) => `/node_modules/sql.js/dist/${file}`,
  });

  return SQL;
}

function SQLJsProvider({ children }: { children: React.ReactNode }) {
  const [db, setDb] = React.useState<SQLJs | null>(null);

  React.useEffect(() => {
    getSqlJs().then(setDb);
  }, []);

  if (!db) {
    return <div>Loading...</div>;
  }

  return <SQLJsContext.Provider value={db}>{children}</SQLJsContext.Provider>;
}

export { SQLJsProvider, useSQLJs, type SQLJs };
