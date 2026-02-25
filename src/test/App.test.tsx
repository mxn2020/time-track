import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TimerDashboardPage from "../pages/TimerDashboardPage";
import WeeklyTimesheetPage from "../pages/WeeklyTimesheetPage";
import ReportsPage from "../pages/ReportsPage";

function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }

describe("Pages", () => {
    it("Sidebar renders", () => { wrap(<Sidebar />); expect(screen.getByText("TimeTrack")).toBeInTheDocument(); });
    it("TimerDashboardPage renders", () => { wrap(<TimerDashboardPage />); expect(screen.getByText("Time Tracker")).toBeInTheDocument(); });
    it("WeeklyTimesheetPage renders", () => { wrap(<WeeklyTimesheetPage />); expect(screen.getByText("Weekly Timesheet")).toBeInTheDocument(); });
    it("ReportsPage renders", () => { wrap(<ReportsPage />); expect(screen.getByText("Time Reports")).toBeInTheDocument(); });
});
