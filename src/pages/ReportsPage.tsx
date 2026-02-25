import { BarChart2, PieChart as PieIcon, Calendar, ArrowRight } from "lucide-react";

export default function ReportsPage() {
    const projects = [
        { name: "OpenClaw SaaS", hours: 145, color: "var(--color-accent-primary)", pct: "65%" },
        { name: "ACME Rebrand", hours: 45, color: "var(--color-info)", pct: "20%" },
        { name: "Internal Tools", hours: 25, color: "var(--color-warning)", pct: "11%" },
        { name: "Admin/Misc", hours: 8, color: "var(--color-text-tertiary)", pct: "4%" }
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, marginBottom: 4 }}>Time Reports</h1>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "15px" }}>Analyze where your time went this month.</p>
            </div>
            <div style={{ display: "flex", gap: "var(--space-3)" }}>
                <button className="btn btn-ghost" style={{ borderColor: "var(--color-border)" }}><Calendar size={16} /> This Month</button>
                <button className="btn btn-primary">Export CSV</button>
            </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-6)", marginBottom: "var(--space-6)" }}>
            <div className="card" style={{ padding: "var(--space-6)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 300 }}>
                <div style={{ width: 200, height: 200, borderRadius: "50%", background: "conic-gradient(var(--color-accent-primary) 0% 65%, var(--color-info) 65% 85%, var(--color-warning) 85% 96%, var(--color-text-tertiary) 96% 100%)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 140, height: 140, borderRadius: "50%", background: "var(--color-bg-card)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--color-text-secondary)" }}>Total Hours</span>
                        <span className="mono" style={{ fontSize: "28px", fontWeight: 700 }}>223h</span>
                    </div>
                </div>
            </div>

            <div className="card" style={{ padding: "var(--space-6)" }}>
                <h2 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "var(--space-4)" }}>Projects Breakdown</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
                    {projects.map((p, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
                                <div style={{ width: 12, height: 12, borderRadius: "50%", background: p.color }}></div>
                                <span style={{ fontWeight: 600, fontSize: "15px" }}>{p.name}</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                                <span className="mono" style={{ fontWeight: 700 }}>{p.hours}h</span>
                                <span className="mono" style={{ color: "var(--color-text-secondary)", fontSize: "13px", width: 40, textAlign: "right" }}>{p.pct}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="btn-ghost" style={{ width: "100%", marginTop: "var(--space-6)", padding: 12, fontWeight: 600, color: "var(--color-text-secondary)" }}>View Detailed Report <ArrowRight size={16} /></button>
            </div>
        </div>
    </div>);
}
