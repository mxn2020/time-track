import { Play, Square, Tag, Folder, Plus, MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function TimerDashboardPage() {
    const [isTracking, setIsTracking] = useState(false);

    const entries = [
        { desc: "Design Review", project: "ACME Rebrand", duration: "01:24:15", date: "Today", billable: true },
        { desc: "Standup & Sync", project: "Internal Tools", duration: "00:45:00", date: "Today", billable: false },
        { desc: "API Endpoint setup", project: "OpenClaw SaaS", duration: "03:12:40", date: "Yesterday", billable: true },
        { desc: "Documentation updates", project: "OpenClaw SaaS", duration: "00:55:10", date: "Yesterday", billable: true }
    ];

    return (<div style={{ padding: "var(--space-6)", maxWidth: 1000, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "var(--space-6)" }}>
            <div>
                <h1 style={{ fontSize: "var(--font-size-2xl)", fontWeight: 700, marginBottom: 4 }}>Time Tracker</h1>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "15px" }}>Track time effortlessly across your projects.</p>
            </div>
            <div className="mono" style={{ fontSize: "24px", fontWeight: 700, background: "var(--color-bg-tertiary)", padding: "8px 16px", borderRadius: "var(--radius-sm)", border: "2px solid var(--color-border-strong)" }}>
                Total: 06:17:05
            </div>
        </div>

        <div className="card" style={{ padding: "var(--space-4)", marginBottom: "var(--space-6)", display: "flex", gap: "var(--space-4)", alignItems: "center", background: isTracking ? "var(--color-accent-soft)" : "var(--color-bg-card)", borderColor: isTracking ? "var(--color-accent-primary)" : "var(--color-border)" }}>
            <input type="text" placeholder="What are you working on?" style={{ flex: 1, background: "transparent", border: "none", color: "var(--color-text-primary)", fontSize: "16px", fontWeight: 600, outline: "none", fontFamily: "inherit" }} />

            <div style={{ height: 32, width: 2, background: "var(--color-border)" }}></div>

            <button className="btn-ghost" style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", color: "var(--color-text-secondary)", fontWeight: 600 }}><Folder size={18} /> Project</button>
            <button className="btn-ghost" style={{ display: "flex", alignItems: "center", gap: "var(--space-2)", color: "var(--color-text-secondary)", fontWeight: 600 }}><Tag size={18} /> Tags</button>

            <div style={{ height: 32, width: 2, background: "var(--color-border)" }}></div>

            <div className="mono" style={{ fontSize: "24px", fontWeight: 700, width: 130, textAlign: "center", color: isTracking ? "var(--color-accent-primary)" : "var(--color-text-primary)" }}>
                {isTracking ? "00:04:12" : "00:00:00"}
            </div>

            <button className="btn btn-primary" style={{ padding: "12px", borderRadius: "50%", background: isTracking ? "var(--color-danger)" : "var(--color-accent-primary)", borderColor: isTracking ? "var(--color-danger)" : "var(--color-accent-primary)" }} onClick={() => setIsTracking(!isTracking)}>
                {isTracking ? <Square size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
            </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "var(--space-2)", borderBottom: "2px solid var(--color-border)", marginBottom: "var(--space-2)", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase" }}>
                    <span>Today</span>
                    <span className="mono">02:09:15</span>
                </div>
                <div className="card" style={{ overflow: "hidden" }}>
                    {entries.filter(e => e.date === "Today").map((e, i) => (
                        <div key={i} className="time-entry-row">
                            <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text-tertiary)" }}>10:00 AM</span>
                            <span style={{ fontWeight: 600, fontSize: "15px" }}>{e.desc}</span>
                            <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "13px", fontWeight: 600, color: "var(--color-accent-primary)" }}><Folder size={14} /> {e.project}</span>
                            <span className="mono" style={{ fontSize: "16px", fontWeight: 700, textAlign: "right" }}>{e.duration}</span>
                            <button className="btn-ghost" style={{ color: "var(--color-text-tertiary)" }}><MoreHorizontal size={18} /></button>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "var(--space-2)", borderBottom: "2px solid var(--color-border)", marginBottom: "var(--space-2)", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase" }}>
                    <span>Yesterday</span>
                    <span className="mono">04:07:50</span>
                </div>
                <div className="card" style={{ overflow: "hidden" }}>
                    {entries.filter(e => e.date === "Yesterday").map((e, i) => (
                        <div key={i} className="time-entry-row">
                            <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text-tertiary)" }}>09:30 AM</span>
                            <span style={{ fontWeight: 600, fontSize: "15px" }}>{e.desc}</span>
                            <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "13px", fontWeight: 600, color: "var(--color-accent-primary)" }}><Folder size={14} /> {e.project}</span>
                            <span className="mono" style={{ fontSize: "16px", fontWeight: 700, textAlign: "right" }}>{e.duration}</span>
                            <button className="btn-ghost" style={{ color: "var(--color-text-tertiary)" }}><MoreHorizontal size={18} /></button>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </div>);
}
