"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeToggleProps = {
  className?: string;
  showLabel?: boolean;
};

export function ThemeToggle({ className = "", showLabel = false }: ThemeToggleProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const syncTheme = () => {
      const current = document.documentElement.dataset.theme === "dark" ? "dark" : "light";
      setTheme(current);
    };

    syncTheme();
    window.addEventListener("storage", syncTheme);
    window.addEventListener("aldeota-theme-change", syncTheme);
    return () => {
      window.removeEventListener("storage", syncTheme);
      window.removeEventListener("aldeota-theme-change", syncTheme);
    };
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem("aldeota-theme", next);
    setTheme(next);
    window.dispatchEvent(new Event("aldeota-theme-change"));
  }

  const label = theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro";

  return (
    <button
      className={`icon-button theme-toggle ${showLabel ? "theme-toggle-labeled" : ""} ${className}`.trim()}
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
    >
      {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
      {showLabel && <span>{theme === "dark" ? "Tema claro" : "Tema escuro"}</span>}
    </button>
  );
}
