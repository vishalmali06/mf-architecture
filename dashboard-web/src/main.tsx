import ReactDOM from "react-dom/client";
// Option A: Programmatic
import AppProgrammatic from "./AppProgrammatic";

// Option B: Route-based
// import AppRoutes from './AppRoutes';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AppProgrammatic />
  // <AppRoutes />
);
// Or: ReactDOM.createRoot(document.getElementById('root')!).render(<AppRoutes />);