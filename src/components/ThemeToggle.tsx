import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
export default function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">(() => typeof window !== "undefined" ? (localStorage.getItem("tt-theme") as "light" | "dark") || "light" : "light");
    useEffect(() => { document.documentElement.setAttribute("data-theme", theme); localStorage.setItem("tt-theme", theme); }, [theme]);
    return (<button className="btn btn-ghost" style={{ padding: 6 }} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">{theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}</button>);
}
