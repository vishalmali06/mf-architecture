import { useEffect } from 'react';
import { registerMicroApps, start } from 'qiankun';

export default function AppRoutes() {
  useEffect(() => {
    registerMicroApps(
      [
        {
          name: 'app1',
          entry: 'http://localhost:3001/',
          // entry: 'https://vishalmali.com/app1/',
          container: '#micro-container',
          activeRule: '/app1',
          props: { from: 'dashboard', base: 'app1'}
        },
        {
          name: 'app2',
          entry: 'http://localhost:3002/',
          // entry: 'https://vishalmali.com/app2/',
          container: '#micro-container',
          activeRule: '/app2',
          props: { from: 'dashboard', base: 'app2'}
        },
        {
          name: 'devtinder',
          entry: 'http://localhost:3003/',
          // entry: 'https://vishalmali.com/devtinder/',
          container: '#micro-container',
          activeRule: '/devtinder',
          props: { from: 'dashboard', base: 'devtinder'}
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
          <a onClick={() => go('/app1')}>App 1</a>
          <a onClick={() => go('/app2')}>App 2</a>
          <a onClick={() => go('/devtinder')}>devTinder</a>
        </nav>
      </header>

      <main className="container">
        <div id="micro-container" />
      </main>

      <footer>© {new Date().getFullYear()} Dashboard — qiankun + Vite</footer>
    </>
  );
}