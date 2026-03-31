import React, {
  createContext,
  useContext,
  useMemo,
  useEffect,
  useState,
} from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { useColorScheme } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { lightTheme, darkTheme } from "./index";
import { setIsDarkTheme } from "../reduxToolkit/features/gameSlice";

const ThemeContext = createContext<any>(null);

export const useAppTheme = () => useContext(ThemeContext);

export default function AppThemeProvider({ children }: any) {
  const dispatch = useDispatch();

  const reduxTheme = useSelector((state: any) => state.game.isDarkTheme);
  const systemScheme = useColorScheme();

  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const saved = await AsyncStorage.getItem("theme");

        if (saved !== null) {
          dispatch(setIsDarkTheme(JSON.parse(saved)));
        } else {
          // fallback to system theme
          dispatch(setIsDarkTheme(systemScheme === "dark"));
        }
      } catch (e) {
        console.log("Failed to load theme", e);
      } finally {
        setIsHydrated(true);
      }
    };

    loadTheme();
  }, []);

  useEffect(() => {
    if (reduxTheme !== null && reduxTheme !== undefined) {
      AsyncStorage.setItem("theme", JSON.stringify(reduxTheme));
    }
  }, [reduxTheme]);

  const isDark = useMemo(() => {
    return reduxTheme ?? systemScheme === "dark";
  }, [reduxTheme, systemScheme]);

  const theme = isDark ? darkTheme : lightTheme;

  const toggleTheme = () => {
    dispatch(setIsDarkTheme(!isDark));
  };

  if (!isHydrated) return null;

  return (
    <ThemeContext.Provider value={{ isDark, theme, toggleTheme }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
}

// import React, { createContext, useContext } from "react";
// import { Provider as PaperProvider } from "react-native-paper";
// import { useColorScheme } from "react-native";

// import { lightTheme, darkTheme } from "./index";

// const ThemeContext = createContext<any>(null);

// export const useAppTheme = () => useContext(ThemeContext);

// export default function AppThemeProvider({ children }: any) {
//   const scheme = useColorScheme();

//   const isDark = scheme === "dark";
//   const theme = isDark ? darkTheme : lightTheme;

//   return (
//     <ThemeContext.Provider value={{ isDark, theme }}>
//       <PaperProvider theme={theme}>{children}</PaperProvider>
//     </ThemeContext.Provider>
//   );
// }
