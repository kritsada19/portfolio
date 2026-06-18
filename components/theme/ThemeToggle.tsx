"use client";

import { useTheme } from "next-themes";
import { CiDark, CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";
import { MdImportExport } from "react-icons/md";

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            aria-label="Toggle theme"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800
                            text-slate-700 dark:text-slate-300
                            hover:bg-purple-100 dark:hover:bg-purple-900/40
                            hover:text-purple-600 dark:hover:text-purple-400
                            transition-all duration-200"
        >
            <div className="relative w-5 h-5 overflow-hidden">
                <CiLight
                    className={`
                        absolute inset-0 w-full h-full text-yellow-500 
                        transition-all duration-500 ease-spring
                        ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
                    `}
                />
                <CiDark
                    className={`
                        absolute inset-0 w-full h-full text-blue-400 
                        transition-all duration-500 ease-spring
                        ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}
                    `}
                />
            </div>
        </button>
    );
}