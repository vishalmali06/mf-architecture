import ReactDOM from 'react-dom/client';
import App2 from './App';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

let root: ReactDOM.Root | null = null;

function render(props: any) {
  const container = props?.container?.querySelector('#root') || document.getElementById('root');
  root = ReactDOM.createRoot(container!);
  root.render(<App2 />);
}

function unmount() {
  root?.unmount();
  root = null;
}

renderWithQiankun({
  bootstrap() {},
  mount(props) { render(props); },
  unmount() { unmount(); },
  update(props) { console.log('app2 update', props); }
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}