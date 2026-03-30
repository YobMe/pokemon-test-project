import { render, fireEvent, screen } from "@testing-library/react-native";
import { PokemonCard } from "../../../components/molecules/PokemonCard";

jest.mock("../../../theme/ThemeProvider", () => ({
  useAppTheme: () => ({
    theme: {
      colors: {
        text: "#000000",
        surface: "#ffffff",
      },
    },
  }),
}));

const mockItem = {
  id: "001",
  name: "bulbasaur",
  image: "https://example.com/bulbasaur.png",
  types: ["grass", "poison"],
};

describe("PokemonCard Component", () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Pokemon name, ID, and image correctly", () => {
    render(<PokemonCard item={mockItem} onPress={mockOnPress} />);

    // Check name (case-insensitive)
    expect(screen.getByText(/bulbasaur/i)).toBeTruthy();

    // Check ID
    expect(screen.getByText("#001")).toBeTruthy();

    // Check Image source
    const image = screen.getByLabelText(/bulbasaur image/i);
    expect(image.props.source.uri).toBe(mockItem.image);
  });

  it("renders all pokemon types provided", () => {
    render(<PokemonCard item={mockItem} onPress={mockOnPress} />);

    expect(screen.getByText(/grass/i)).toBeTruthy();
    expect(screen.getByText(/poison/i)).toBeTruthy();
  });

  it("calls onPress with the correct item data when clicked", () => {
    render(<PokemonCard item={mockItem} onPress={mockOnPress} />);

    // If you added testID="pokemon-card"
    const card = screen.getByTestId("pokemon-card");
    fireEvent.press(card);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
    expect(mockOnPress).toHaveBeenCalledWith(mockItem);
  });
});
