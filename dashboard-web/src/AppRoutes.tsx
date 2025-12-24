import { useEffect } from 'react';
import { registerMicroApps, start } from 'qiankun';

export default function AppRoutes() {
  useEffect(() => {
    registerMicroApps(
      [
        {
          name: 'aap1',
          entry: 'http://localhost:5173/',
          container: '#micro-container',
          activeRule: '/aap1',
          props: { from: 'dashboard' }
        },
        {
          name: 'app2',
          entry: 'http://localhost:3002/',
          container: '#micro-container',
          activeRule: '/app2',
          props: { from: 'dashboard' }
        }
      ]
    );

    start({ sandbox: { experimentalStyleIsolation: true }, prefetch: false, singular: false });
  }, []);

  const go = (path: string) => { history.pushState(null, '', path); dispatchEvent(new PopStateEvent('popstate')); };

  return (
    <>
      <header>
        <span className="brand">Dashboard</span>
        <nav style={{ marginLeft: 16 }}>
          <a onClick={() => go('/')}>Home</a>
          <a onClick={() => go('/aap1')}>App 1</a>
          <a onClick={() => go('/app2')}>App 2</a>
        </nav>
      </header>

      <main className="container">
        <div id="micro-container" />
      </main>

      <footer>© {new Date().getFullYear()} Dashboard — qiankun + Vite</footer>
    </>
  );
}