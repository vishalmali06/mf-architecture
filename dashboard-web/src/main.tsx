import ReactDOM from "react-dom/client";
// Option A: Programmatic
import AppProgrammatic from "./AppProgrammatic";
import { ThemeProvider } from "./context/ThemeContext";

// Option B: Route-based
// import AppRoutes from './AppRoutes';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <AppProgrammatic />
  </ThemeProvider>
  // <AppRoutes />
);
// Or: ReactDOM.createRoot(document.getElementById('root')!).render(<AppRoutes />);