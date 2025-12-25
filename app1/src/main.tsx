import ReactDOM from 'react-dom/client';

import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import App1 from './App';

let root: ReactDOM.Root | null = null;

function render(props: any) {
  const container = props?.container?.querySelector('#root') || document.getElementById('root');
  root = ReactDOM.createRoot(container!);
  root.render(<App1 />);
}

function unmount() {
  root?.unmount();
  root = null;
}

renderWithQiankun({
  bootstrap() {},
  mount(props) { render(props); },
  unmount() { unmount(); },
  update(props) { console.log('app1 update', props); }
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}