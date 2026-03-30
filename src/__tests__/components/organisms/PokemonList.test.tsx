import { render, fireEvent, screen } from "@testing-library/react-native";
import PokemonList from "../../../components/organisms/PokemonList";

jest.mock("../../../components", () => {
  const { Text, TouchableOpacity } = require("react-native");

  return {
    PokemonCard: (props: any) => {
      // Accept both "item" or "name" + onPress
      const name = props?.item?.name ?? props?.name ?? "unknown";
      const handlePress = props?.onPress ?? (() => {});

      return (
        <TouchableOpacity testID={`pokemon-${name}`} onPress={handlePress}>
          <Text>{name}</Text>
        </TouchableOpacity>
      );
    },
  };
});

const mockData = [
  { name: "bulbasaur" },
  { name: "charmander" },
  { name: "squirtle" },
];

describe("PokemonList", () => {
  const mockOnPress = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders all pokemon items", () => {
    render(<PokemonList data={mockData} onPressItem={mockOnPress} />);

    expect(screen.getByText("bulbasaur")).toBeTruthy();
    expect(screen.getByText("charmander")).toBeTruthy();
    expect(screen.getByText("squirtle")).toBeTruthy();
  });

  it("calls onPressItem when a card is pressed", () => {
    render(<PokemonList data={mockData} onPressItem={mockOnPress} />);

    const firstItem = screen.getByTestId("pokemon-bulbasaur");

    fireEvent.press(firstItem);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
    expect(mockOnPress).toHaveBeenCalledWith(mockData[0]);
  });
});
