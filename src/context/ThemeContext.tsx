import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type theme = "light" | "dark";

interface ThemeContextValue {
    theme: theme;
    toggleTheme: () => void;
}

interface ThemeContextProps {
    children: ReactNode
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);


export const ThemeProvider = ({ children }: ThemeContextProps) => {

    const [theme, setTheme] = useState<theme>(() => {
        const stored = localStorage.getItem("theme");

        if (stored === "light" || stored === "dark") {
            return stored;
        }
        return "light";
    });

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used in inside provider");
    }

    return context;
}