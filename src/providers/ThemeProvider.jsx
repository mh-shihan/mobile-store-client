import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = (props = {}) => {
  const { children } = props || {};

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const darkMode = () => {
    console.log("dark");
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  };
  const lightMode = () => {
    setTheme("light");
    localStorage.setItem("theme", "light");
  };
  return (
    <ThemeContext.Provider value={{ darkMode, lightMode, theme, setTheme }}>
      <div data-theme={theme}>{children}</div>;
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
