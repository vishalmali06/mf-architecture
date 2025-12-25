// index.jsx
import ReactDOM from "react-dom/client";
import App from "./App"; // If App is in JSX, use ./App.jsx
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

let root = null;

function render(props) {
  const container =
    props?.container?.querySelector("#root") || document.getElementById("root");
  root = ReactDOM.createRoot(container);
  root.render(<App />);
}

function unmount() {
  root?.unmount();
  root = null;
}

renderWithQiankun({
  bootstrap() {},
  mount(props) {
    render(props);
  },
  unmount() {
    unmount();
  },
  update(props) {
    console.log("devtinder update", props);
  },
});

// Standalone mode (not under qiankun)
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}