import { Link, useLocation } from "react-router-dom";
import { Clock, CalendarDays, PieChart } from "lucide-react";
import { Avatar } from "@geenius-ui/react-css";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
    const loc = useLocation();
    const links = [
        { to: "/", icon: Clock, label: "Timer Dashboard" },
        { to: "/timesheet", icon: CalendarDays, label: "Weekly Timesheet" },
        { to: "/reports", icon: PieChart, label: "Reports" }
    ];
    return (<aside style={{ width: "var(--sidebar-width)", background: "var(--color-bg-card)", borderRight: "2px solid var(--color-border)", height: "100vh", position: "fixed", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-3)", borderBottom: "2px solid var(--color-border)" }}>
            <div style={{ color: "var(--color-accent-primary)" }}><Clock size={28} strokeWidth={2.5} /></div>
            <div>
                <strong style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.5px", textTransform: "uppercase" }}>TimeTrack</strong>
            </div>
        </div>

        <div style={{ padding: "var(--space-4) var(--space-4) var(--space-2)" }}>
            <h3 className="mono" style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: 1, marginBottom: "var(--space-3)" }}>Active Projects</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", padding: "6px 8px", color: "var(--color-text-secondary)", borderRadius: "var(--radius-sm)", fontWeight: 600 }}><div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-info)" }}></div> ACME Rebrand</div>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", padding: "6px 8px", color: "var(--color-text-secondary)", borderRadius: "var(--radius-sm)", fontWeight: 600 }}><div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-accent-primary)" }}></div> OpenClaw SaaS</div>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", padding: "6px 8px", color: "var(--color-text-secondary)", borderRadius: "var(--radius-sm)", fontWeight: 600 }}><div style={{ width: 10, height: 10, borderRadius: "50%", background: "var(--color-warning)" }}></div> Internal Tools</div>
            </div>
        </div>

        <div style={{ padding: "var(--space-4)", flex: 1 }}>
            <h3 className="mono" style={{ fontSize: "11px", fontWeight: 700, color: "var(--color-text-tertiary)", textTransform: "uppercase", letterSpacing: 1, marginBottom: "var(--space-3)" }}>Views</h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
                {links.map(l => <Link key={l.to} to={l.to} style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", padding: "10px 14px", borderRadius: "var(--radius-sm)", color: loc.pathname === l.to ? "var(--color-text-primary)" : "var(--color-text-secondary)", background: loc.pathname === l.to ? "var(--color-bg-secondary)" : "transparent", fontWeight: 700, fontSize: "14px", transition: "all var(--transition-fast)", border: loc.pathname === l.to ? "2px solid var(--color-border-strong)" : "2px solid transparent" }}><l.icon size={18} style={{ color: loc.pathname === l.to ? "var(--color-accent-primary)" : "inherit" }} />{l.label}</Link>)}
            </nav>
        </div>

        <div style={{ padding: "var(--space-4)", borderTop: "2px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-2)" }}>
                <Avatar fallback="MN" size="sm" />
                <div style={{ fontWeight: 700, fontSize: "14px" }}>Workspace</div>
            </div>
            <ThemeToggle />
        </div>
    </aside>);
}
