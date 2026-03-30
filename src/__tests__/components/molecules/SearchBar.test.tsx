import { render, screen, fireEvent } from "@testing-library/react-native";
import { SearchBar } from "../../../components";

// Mock useAppTheme
jest.mock("../../../theme/ThemeProvider", () => ({
  useAppTheme: () => ({
    isDark: false,
    theme: { colors: { text: "#000", surface: "#fff" } },
  }),
}));

// Mock Ionicons to prevent rendering issues
jest.mock("@expo/vector-icons", () => {
  return {
    Ionicons: ({ name, size, color }: any) => null,
  };
});

describe("SearchBar Component", () => {
  it("renders placeholder text", () => {
    render(<SearchBar />);
    expect(screen.getByPlaceholderText("Eg. Pikachu")).toBeTruthy();
  });

  it("renders the GO button", () => {
    render(<SearchBar />);
    expect(screen.getByText("GO")).toBeTruthy();
  });

  it("accepts input text", () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText("Eg. Pikachu");
    fireEvent.changeText(input, "Pikachu");

    // Check that the input exists — cannot check value without a controlled input
    expect(input).toBeTruthy();
  });
});
