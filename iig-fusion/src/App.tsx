import React from "react";
import NavBar from "./components/NavBar";
import PageFooter from "./components/PageFooter";

function App({ children }: { children: React.ReactNode }) {
  const navRef = React.useRef<HTMLDivElement>(null);
  const onClickNavToggle = () => {
    const sidebar = navRef.current;
    if (sidebar) {
      sidebar.classList.toggle("open");
    }
  };
  return (
    <div className="page">
      <button className="nav-toggle" onClick={onClickNavToggle}>
        ☰ Menu
      </button>
      <div className="layout">
        <NavBar navRef={navRef} onClose={onClickNavToggle} />
        <div className="content">{children}</div>
      </div>
      <PageFooter />
    </div>
  );
}

export default App;
