import { ChevronLeft, ChevronRight, Save } from "lucide-react";

export default function WeeklyTimesheetPage() {
    const days = ["Mon, Oct 26", "Tue, Oct 27", "Wed, Oct 28", "Thu, Oct 29", "Fri, Oct 30", "Sat, Oct 31", "Sun, Nov 1"];
    const projects = [
        { name: "ACME Rebrand - Design", hours: ["2:00", "4:30", "1:15", "", "", "", ""] },
        { name: "OpenClaw SaaS - Development", hours: ["", "3:00", "6:45", "7:30", "8:00", "", ""] },
        { name: "Internal Tools - Maintenance", hours: ["1:30", "", "0:45", "", "1:00", "", ""] },
    ];

    const totalCols = [3.5, 7.5, 8.75, 7.5, 9, 0, 0];
    const totalWeek = 36.25;

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, marginBottom: 4 }}>Weekly Timesheet</h1>
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                    <button className="btn btn-sm" style={{ padding: "4px" }}><ChevronLeft size={16} /></button>
                    <span style={{ fontWeight: 600, fontSize: "15px", color: "var(--color-text-secondary)" }}>Oct 26 - Nov 1, 2026</span>
                    <button className="btn btn-sm" style={{ padding: "4px" }}><ChevronRight size={16} /></button>
                </div>
            </div>
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
                <div className="mono" style={{ fontSize: "18px", fontWeight: 700, color: "var(--color-text-secondary)" }}>Total: {totalWeek}h</div>
                <button className="btn btn-primary"><Save size={16} /> Save Timesheet</button>
            </div>
        </div>

        <div className="card" style={{ overflow: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ background: "var(--color-bg-secondary)", borderBottom: "2px solid var(--color-border)" }}>
                        <th style={{ padding: "16px", textAlign: "left", fontWeight: 700, width: "300px" }}>Project & Task</th>
                        {days.map(d => <th key={d} style={{ padding: "16px", textAlign: "center", fontWeight: 700, fontSize: "13px", color: "var(--color-text-secondary)" }}>{d}</th>)}
                        <th style={{ padding: "16px", textAlign: "right", fontWeight: 700 }}>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((p, i) => (
                        <tr key={i} style={{ borderBottom: "1px solid var(--color-border)" }}>
                            <td style={{ padding: "16px", fontWeight: 600, fontSize: "15px" }}>{p.name}</td>
                            {p.hours.map((h, j) => (
                                <td key={j} style={{ padding: "12px" }}>
                                    <input type="text" defaultValue={h} style={{ width: "100%", textAlign: "center", padding: "8px", border: "1px solid var(--color-border)", borderRadius: "var(--radius-sm)", background: "var(--color-bg-primary)", color: "var(--color-text-primary)", fontFamily: "var(--font-mono)", fontWeight: 600 }} />
                                </td>
                            ))}
                            <td style={{ padding: "16px", textAlign: "right", fontWeight: 700, fontFamily: "var(--font-mono)" }}>
                                {p.hours.reduce((acc, curr) => acc + (parseFloat(curr) || 0), 0)}h
                            </td>
                        </tr>
                    ))}
                    <tr style={{ background: "var(--color-bg-tertiary)" }}>
                        <td style={{ padding: "16px", fontWeight: 700, color: "var(--color-text-inverse)" }}>Daily Totals</td>
                        {totalCols.map((t, i) => (
                            <td key={i} style={{ padding: "16px", textAlign: "center", fontWeight: 700, fontFamily: "var(--font-mono)", color: "var(--color-text-inverse)" }}>{t}h</td>
                        ))}
                        <td style={{ padding: "16px", textAlign: "right", fontWeight: 700, fontFamily: "var(--font-mono)", color: "var(--color-text-inverse)", fontSize: "18px" }}>{totalWeek}h</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>);
}
