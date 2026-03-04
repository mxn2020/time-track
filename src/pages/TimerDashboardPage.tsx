import { Play, Square, Tag, Folder, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import { Button, Card, Input } from "@geenius-ui/react-css";

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

        <Card padding="md" className={isTracking ? "timer-active" : ""}>
            <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
                <Input type="text" placeholder="What are you working on?" style={{ flex: 1, background: "transparent", border: "none", fontSize: "16px", fontWeight: 600, boxShadow: "none" }} />

                <div style={{ height: 32, width: 2, background: "var(--color-border)" }}></div>

                <Button variant="ghost"><Folder size={18} /> Project</Button>
                <Button variant="ghost"><Tag size={18} /> Tags</Button>

                <div style={{ height: 32, width: 2, background: "var(--color-border)" }}></div>

                <div className="mono" style={{ fontSize: "24px", fontWeight: 700, width: 130, textAlign: "center", color: isTracking ? "var(--color-accent-primary)" : "var(--color-text-primary)" }}>
                    {isTracking ? "00:04:12" : "00:00:00"}
                </div>

                <Button variant="primary" style={{ padding: "12px", borderRadius: "50%", background: isTracking ? "var(--color-danger)" : "var(--color-accent-primary)", borderColor: isTracking ? "var(--color-danger)" : "var(--color-accent-primary)" }} onClick={() => setIsTracking(!isTracking)}>
                    {isTracking ? <Square size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                </Button>
            </div>
        </Card>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)", marginTop: "var(--space-6)" }}>
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "var(--space-2)", borderBottom: "2px solid var(--color-border)", marginBottom: "var(--space-2)", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase" }}>
                    <span>Today</span>
                    <span className="mono">02:09:15</span>
                </div>
                <Card padding="none">
                    {entries.filter(e => e.date === "Today").map((e, i) => (
                        <div key={i} className="time-entry-row">
                            <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text-tertiary)" }}>10:00 AM</span>
                            <span style={{ fontWeight: 600, fontSize: "15px" }}>{e.desc}</span>
                            <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "13px", fontWeight: 600, color: "var(--color-accent-primary)" }}><Folder size={14} /> {e.project}</span>
                            <span className="mono" style={{ fontSize: "16px", fontWeight: 700, textAlign: "right" }}>{e.duration}</span>
                            <Button variant="ghost" size="sm" icon={<MoreHorizontal size={18} />} />
                        </div>
                    ))}
                </Card>
            </div>

            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "var(--space-2)", borderBottom: "2px solid var(--color-border)", marginBottom: "var(--space-2)", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase" }}>
                    <span>Yesterday</span>
                    <span className="mono">04:07:50</span>
                </div>
                <Card padding="none">
                    {entries.filter(e => e.date === "Yesterday").map((e, i) => (
                        <div key={i} className="time-entry-row">
                            <span style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-text-tertiary)" }}>09:30 AM</span>
                            <span style={{ fontWeight: 600, fontSize: "15px" }}>{e.desc}</span>
                            <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "13px", fontWeight: 600, color: "var(--color-accent-primary)" }}><Folder size={14} /> {e.project}</span>
                            <span className="mono" style={{ fontSize: "16px", fontWeight: 700, textAlign: "right" }}>{e.duration}</span>
                            <Button variant="ghost" size="sm" icon={<MoreHorizontal size={18} />} />
                        </div>
                    ))}
                </Card>
            </div>
        </div>
    </div>);
}
