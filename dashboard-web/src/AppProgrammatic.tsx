import { useEffect, useRef, useState } from "react";
import { loadMicroApp, type MicroApp } from "qiankun";

/* -----------------------------
   Types & Config (STATIC)
-------------------------------- */
type MicroAppName = "app1" | "app2" | "devtinder";

interface MicroAppConfig {
  name: MicroAppName;
  entry: {
    local: string;
    prod: string;
  };
}

const MICRO_APPS: Record<MicroAppName, MicroAppConfig> = {
  app1: {
    name: "app1",
    entry: {
      local: "http://localhost:3001/",
      prod: "https://vishalmali.com/app1/",
    },
  },
  app2: {
    name: "app2",
    entry: {
      local: "http://localhost:3002/",
      prod: "https://vishalmali.com/app2/",
    },
  },
  devtinder: {
    name: "devtinder",
    entry: {
      local: "http://localhost:3003/",
      prod: "https://vishalmali.com/devtinder/",
    },
  },
};

/* Runtime environment detection (NO .env) */
const isProd = window.location.hostname.endsWith("vishalmali.com");

/* -----------------------------
   Component
-------------------------------- */
export default function AppProgrammatic() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const microRef = useRef<MicroApp | null>(null);
  const [active, setActive] = useState<MicroAppName | null>(null);

  /* Cleanup on unmount */
  useEffect(() => {
    return () => {
      microRef.current?.unmount();
      microRef.current = null;
    };
  }, []);

  const loadApp = (name: MicroAppName | null) => {
    // Avoid reloading the same app
    if (active === name) return;

    microRef.current?.unmount();
    microRef.current = null;
    setActive(name);

    if (!name) return;

    const app = MICRO_APPS[name];
    const entry = isProd ? app.entry.prod : app.entry.local;

    microRef.current = loadMicroApp(
      {
        name: app.name,
        entry,
        container: containerRef.current!,
        props: {
          from: "dashboard",
          base: `/${app.name}`,
        },
      },
      {
        sandbox: { experimentalStyleIsolation: true },
        singular: false,
        prefetch: false,
      }
    );
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
            className={active === "app1" ? "active" : ""}
            onClick={() => loadApp("app1")}
          >
            App 1
          </a>
          <a
            className={active === "app2" ? "active" : ""}
            onClick={() => loadApp("app2")}
          >
            App 2
          </a>
          <a
            className={active === "devtinder" ? "active" : ""}
            onClick={() => loadApp("devtinder")}
          >
            devTinder
          </a>
        </nav>
      </header>

      <main className="container">
        {!active && (
          <div style={{ opacity: 0.8 }}>
            <h1>Welcome to Dashboard</h1>
            <p>
              Select <strong>App 1</strong> or <strong>App 2</strong> to load it
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
