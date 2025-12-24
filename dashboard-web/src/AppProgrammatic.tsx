
import { useEffect, useRef, useState } from "react";
import { loadMicroApp, type MicroApp } from "qiankun";

export default function AppProgrammatic() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const microRef = useRef<MicroApp | null>(null);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      microRef.current?.unmount();
      microRef.current = null;
    };
  }, []);

  const loadApp = (name: "devTinder" | "app2" | null) => {
    microRef.current?.unmount();
    microRef.current = null;
    setActive(name);
    if (!name) return;

    const entry =
      // name === "devTinder" ? "http://localhost:3001/" : "http://localhost:3002/";
      name === "devTinder" ? "https://vishalmali.com/devtinder/" : "https://vishalmali.com/florist/";

    const micro = loadMicroApp(
      {
        name,
        entry,
        container: containerRef.current!,
        props: { from: "dashboard" },
      },
      {
        sandbox: { experimentalStyleIsolation: true },
        singular: false,
        prefetch: false,
      }
    );

    microRef.current = micro;
  };

  return (
    <>
      <header>
        <span className="brand">Dashboard</span>
        <nav style={{ marginLeft: 16 }}>
          <a className={!active ? "active" : ""} onClick={() => loadApp(null)}>
            Home
          </a>
          <a
            className={active === "devTinder" ? "active" : ""}
            onClick={() => loadApp("devTinder")}
          >
            devTinder
          </a>
          <a
            className={active === "app2" ? "active" : ""}
            onClick={() => loadApp("app2")}
          >
            App 2
          </a>
        </nav>
      </header>

      <main className="container">
        {!active && (
          <div style={{ opacity: 0.8 }}>
            <h1>Welcome to Dashboard</h1>
            <p>
              Select <strong>devTinder</strong> or <strong>App 2</strong> to load it
              here.
            </p>
          </div>
        )}
        <div id="micro-container" ref={containerRef} />
      </main>

      <footer>© {new Date().getFullYear()} Dashboard — qiankun + Vite</footer>
    </>
  );
}