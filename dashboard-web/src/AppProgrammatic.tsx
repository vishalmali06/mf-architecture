import { useEffect, useRef, useState } from "react";
import type { MicroApp } from "qiankun";
import './App.css';
import type { MicroAppName } from "./types/micro";
import { loadQiankunApp } from "./app/MicroAppLoader";
import SideDrawer from "./components/layout/SideDrawer";
import HomePage from "./components/sections/HomePage";
import BackToTop from "./ui/BackToTop";


export default function AppProgrammatic() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const microRef = useRef<MicroApp | null>(null);

  const [active, setActive] = useState<MicroAppName | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(true);

  useEffect(() => {
    return () => {
      if (microRef.current) {
        void microRef.current.unmount();
        microRef.current = null;
      }
    };
  }, []);
  

  const handleSelect = (name: MicroAppName | null) => {
    if (active === name) return;

    microRef.current?.unmount();
    microRef.current = null;
    setActive(name);

    if (!name || !containerRef.current) return;

    microRef.current = loadQiankunApp(name, containerRef.current);
  };

  return (
    <div style={{ opacity: 0.8 }}>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        <SideDrawer
          open={drawerOpen}
          active={active}
          onToggle={() => setDrawerOpen((v) => !v)}
          onSelect={handleSelect}
        />

        <main id="app-content" className="flex-1 overflow-y-auto">
          {!active && <HomePage />}
          <div ref={containerRef} />
        </main>
        <BackToTop />
      </div>
    </div>
  );
}

