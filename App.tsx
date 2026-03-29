import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/app/RootNavigator";
import AppThemeProvider from "./src/theme/ThemeProvider";

export default function App() {
  return (
    <AppThemeProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AppThemeProvider>
  );
}
