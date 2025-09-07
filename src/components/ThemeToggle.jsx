import { FaRegMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = ({ className = "" }) => {
    const [isDarkMode, setIsDarkmode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkmode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkmode(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkmode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkmode(true);
        }
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "rounded-full transition-colors duration-300 focus:outline-none",
                className,
            )}
        >
            {isDarkMode ? (
                <FaSun className="text-yellow-300" />
            ) : (
                <FaRegMoon className="text-blue-900" />
            )}
        </button>
    );
};
