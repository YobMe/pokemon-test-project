import { render, fireEvent, screen } from "@testing-library/react-native";
import { PokemonListScreen } from "../../screens/PokemonListScreen";

// Mock react-native-paper
jest.mock("react-native-paper", () => {
  const RN = require("react-native");
  const Original = jest.requireActual("react-native-paper");

  return {
    ...Original,
    ActivityIndicator: (props: any) => <RN.ActivityIndicator {...props} />,
    IconButton: ({ icon, onPress, ...props }: any) => (
      <RN.TouchableOpacity
        onPress={onPress}
        testID={`icon-button-${String(icon)}`}
        {...props}
      >
        <RN.Text testID="icon-text">{icon || "★"}</RN.Text>
      </RN.TouchableOpacity>
    ),
  };
});

// Moked @expo/vector-icons  (helps prevent async font loading warnings)
jest.mock("@expo/vector-icons", () => {
  const RN = require("react-native");
  const MockIcon = ({ name, ...props }: any) => (
    <RN.Text {...props} testID={`icon-${name || "mock"}`}>
      {name || "★"}
    </RN.Text>
  );

  return {
    __esModule: true,
    default: MockIcon,
    Ionicons: MockIcon,
    MaterialIcons: MockIcon,
    MaterialCommunityIcons: MockIcon,
  };
});

// Mock navigation
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

// Mock theme

jest.mock("../../theme/ThemeProvider", () => ({
  useAppTheme: () => ({
    isDark: false,
    theme: { colors: { surface: "#fff", primary: "#000" } },
  }),
}));

// Moke vercor icon
jest.mock("@expo/vector-icons", () => {
  const React = require("react");
  return {
    __esModule: true,
    default: () => null,
    Ionicons: () => null,
    MaterialIcons: () => null,
  };
});

// Mock API query
jest.mock("../../reduxToolkit/services/gameApi", () => ({
  useGetCharactersQuery: () => ({
    data: {
      data: [
        {
          id: "001",
          name: "bulbasaur",
          image: "image1.png",
          types: ["grass", "poison"],
        },
        { id: "004", name: "charmander", image: "image2.png", types: ["fire"] },
      ],
    },
    isLoading: false,
    isError: false,
    error: null,
  }),
}));

// Mock SearchBar and PokemonCard
jest.mock("../../components/molecules/SearchBar", () => {
  const { Text } = require("react-native"); //require inside factory
  return {
    SearchBar: () => <Text>SearchBar</Text>,
  };
});

jest.mock("../../components/molecules/PokemonCard", () => {
  const { Text } = require("react-native"); //require inside factory
  return {
    PokemonCard: ({ item, onPress }: any) => (
      <>
        <Text>{item.name}</Text>
        <Text onPress={() => onPress(item)}>Press</Text>
      </>
    ),
  };
});

describe("PokemonListScreen", () => {
  it("renders header and search bar", () => {
    render(<PokemonListScreen />);
    expect(screen.getByText(/Who are you/i)).toBeTruthy();
    expect(screen.getByText("SearchBar")).toBeTruthy();
  });

  it("renders pokemon cards", () => {
    render(<PokemonListScreen />);
    expect(screen.getByText("bulbasaur")).toBeTruthy();
    expect(screen.getByText("charmander")).toBeTruthy();
  });

  it("calls onPress when PokemonCard is pressed", () => {
    const { getAllByText } = render(<PokemonListScreen />);
    const buttons = getAllByText("Press");
    fireEvent.press(buttons[0]); // first card
    // navigation is mocked, ensure press does not crash
  });
});
