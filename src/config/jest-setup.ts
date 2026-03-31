declare var global: any;

// 1. Force the renderer environment to 'shared' (stops Winter Runtime)
global.process.env.EXPO_RENDERER = "shared";

// 2. Polyfill structuredClone immediately
if (typeof global.structuredClone === "undefined") {
  global.structuredClone = (obj: any) => JSON.parse(JSON.stringify(obj));
}

// 3. Define the registry that Expo is looking for
if (typeof global.__ExpoImportMetaRegistry === "undefined") {
  global.__ExpoImportMetaRegistry = {
    get: () => ({}),
  };
}

// ... rest of your mocks (react-native-paper, etc.)
// mock AsyncStorage
const mockAsyncStorage = require("@react-native-async-storage/async-storage/jest/async-storage-mock");

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

// mock vector icons globally (optional)
jest.mock("@expo/vector-icons", () => {
  const React = require("react");
  return {
    __esModule: true,
    default: () => null,
    Ionicons: () => null,
    MaterialIcons: () => null,
    FontAwesome: () => null,
  };
});

// mock ThemeProvider globally to avoid AsyncStorage
jest.mock("../theme/ThemeProvider", () => ({
  useAppTheme: () => ({
    isDark: false,
    theme: { colors: { surface: "#fff", primary: "#000" } },
  }),
}));
