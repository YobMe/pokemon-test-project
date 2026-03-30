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
