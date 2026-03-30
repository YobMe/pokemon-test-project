import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/app/RootNavigator";
import AppThemeProvider from "./src/theme/ThemeProvider";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./src/reduxToolkit/store";

export default function App() {
  return (
    <StoreProvider store={store}>
      <AppThemeProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </AppThemeProvider>
    </StoreProvider>
  );
}
