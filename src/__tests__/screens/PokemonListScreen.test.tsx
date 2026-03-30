import { render, fireEvent, screen } from "@testing-library/react-native";
import { PokemonListScreen } from "../../screens/PokemonListScreen";

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
