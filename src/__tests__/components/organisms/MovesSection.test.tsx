import { render, screen } from "@testing-library/react-native";
import { MovesSection } from "../../../components";

// Mock theme hook
jest.mock("../../../theme/ThemeProvider", () => ({
  useAppTheme: () => ({
    theme: { colors: { surface: "#ffffff", text: "#000000" } },
  }),
}));

// Mock MoveChip so each move is rendered as separate Text
jest.mock("../../../components/atoms/MoveChip", () => {
  const { Text } = require("react-native"); //require inside factory
  return {
    MoveChip: ({ move }: any) => <Text>{move}</Text>,
  };
});

describe("MovesSection Component", () => {
  const mockMoves = ["Tackle", "Vine Whip", "Razor Leaf", "Solar Beam"];

  it("renders the Moves title", () => {
    render(<MovesSection moves={mockMoves} />);
    expect(screen.getByText("Moves")).toBeTruthy();
  });

  it("renders all moves passed via props", () => {
    render(<MovesSection moves={mockMoves} />);
    mockMoves.forEach((move) => {
      expect(screen.getByText(move)).toBeTruthy();
    });
  });

  it("renders the 'See All' button", () => {
    render(<MovesSection moves={mockMoves} />);
    expect(screen.getByText("See All")).toBeTruthy();
  });
});
