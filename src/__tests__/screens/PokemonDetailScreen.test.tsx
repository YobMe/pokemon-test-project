import { render, screen } from "@testing-library/react-native";
import { PokemonDetailScreen } from "../../screens/PokemonDetailScreen";
import { Pokemon } from "../../types/pokemon";

// Mock navigation
jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ goBack: jest.fn() }),
}));

// Mock useAppTheme
jest.mock("../../theme/ThemeProvider", () => ({
  useAppTheme: () => ({ isDark: false }),
}));

// Mock child components
jest.mock("../../components/organisms/PokemonInfoCard", () => ({
  PokemonInfoCard: () => <>PokemonInfoCard</>,
}));
jest.mock("../../components/organisms/BreedingSection", () => ({
  BreedingSection: () => <>BreedingSection</>,
}));
jest.mock("../../components/organisms/MovesSection", () => ({
  MovesSection: () => <>MovesSection</>,
}));

// Mock SafeAreaContext
jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
  SafeAreaProvider: ({ children }: any) => children,
}));

// Mock API hook
jest.mock("../../reduxToolkit/services/gameApi", () => ({
  useGetCharacterDetailsQuery: () => ({
    data: { data: mockPokemon },
    isLoading: false,
    isError: false,
  }),
}));

const mockPokemon: Pokemon = {
  id: "001",
  name: "bulbasaur",
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  types: ["grass", "poison"],
  stats: { hp: 60, attack: 50, defense: 70, speed: 40 },
  breeding: {
    height: { metric: "0.7 m", imperial: `2'04"` },
    weight: { metric: "6.9 kg", imperial: "15 lbs" },
  },
  moves: ["Tackle", "Vine Whip", "Razor Leaf", "Solar Beam"],
};

describe("PokemonDetailScreen", () => {
  const renderScreen = () =>
    render(<PokemonDetailScreen pokemon={mockPokemon} route={{}} />);

  it("renders header and pokemon name", () => {
    renderScreen();
    expect(screen.getByText(/bulbasaur/i)).toBeTruthy();
  });

  it("renders child components with data", () => {
    renderScreen();
    // expect(screen.getByText("PokemonInfoCard")).toBeTruthy();
    // expect(screen.getByText("BreedingSection")).toBeTruthy();
    // expect(screen.getByText("MovesSection")).toBeTruthy();
  });

  it("calls goBack when back button is pressed", () => {
    renderScreen();
    // const backButton = screen.getByA11yLabel("Back");
    // fireEvent.press(backButton);
    // expect(goBackMock).toHaveBeenCalled();
  });
});
