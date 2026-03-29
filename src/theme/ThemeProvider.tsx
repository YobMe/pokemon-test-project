import React, { createContext, useContext } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { useColorScheme } from "react-native";

import { lightTheme, darkTheme } from "./index";

const ThemeContext = createContext<any>(null);

export const useAppTheme = () => useContext(ThemeContext);

export default function AppThemeProvider({ children }: any) {
  const scheme = useColorScheme();

  const isDark = scheme === "dark";
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, theme }}>
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </ThemeContext.Provider>
  );
}
