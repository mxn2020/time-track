import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TimerDashboardPage from "./pages/TimerDashboardPage";
import WeeklyTimesheetPage from "./pages/WeeklyTimesheetPage";
import ReportsPage from "./pages/ReportsPage";

export default function App() {
  return (<BrowserRouter>
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ marginLeft: "var(--sidebar-width)", flex: 1, minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<TimerDashboardPage />} />
          <Route path="/timesheet" element={<WeeklyTimesheetPage />} />
          <Route path="/reports" element={<ReportsPage />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>);
}
