import { createContext, useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { useEffect } from "react";

// 1. create context
const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  // isDarkMode === key
  // false === initioalest
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.remove("dark-mode");
        document.documentElement.classList.add("light-mode");
      }
    },
    [isDarkMode]
  );

  return (
    <DarkModeContext.Provider value={{ toggleDarkMode, isDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

//2. create useContext
function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined) {
    console.error("The context used is not in the provider");
    throw new Error("The context used is not in the provider");
  }
  return context;
}

//3. export
export { useDarkMode, DarkModeProvider };
