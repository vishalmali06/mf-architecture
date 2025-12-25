import { useEffect, useRef, useState } from "react";
import { loadMicroApp, type MicroApp } from "qiankun";
import './App.css';
import Hero from "./components/sections/Hero";
import Timeline from "./components/sections/Timeline";
import Experience from "./components/sections/Experience";
import Mindset from "./components/sections/Mindset";
import Projects from "./components/sections/Projects";
import Teaching from "./components/sections/Teaching";
import Now from "./components/sections/Now";
import Contact from "./components/sections/Contact";
import Navbar from "./components/layout/Navbar";
import BackToTop from "./ui/BackToTop";

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
        {/* <span className="brand">Dashboard</span> */}
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

      <main className="w-full p-1">
        {!active && (
          <div style={{ opacity: 0.8 }}>
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
              <Navbar />
              <Hero />
              <Timeline />
              <Experience />
              <Mindset />
              <Projects />
              <Teaching />
              <Now />
              <Contact />
              <BackToTop />
            </div>
          </div>
        )}
        <div id="micro-container" ref={containerRef} />
      </main>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Vishal Mali
      </footer>

    </>
  );
}
