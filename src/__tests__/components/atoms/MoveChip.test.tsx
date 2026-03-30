import { render, screen } from "@testing-library/react-native";
import { MoveChip } from "../../../components/atoms/MoveChip";

jest.mock("../../../theme/ThemeProvider", () => ({
  useAppTheme: () => ({
    isDark: false,
  }),
}));

jest.mock("../../../components/atoms/AppText", () => {
  const React = require("react");
  const { Text } = require("react-native");
  return {
    AppText: ({ children, ...props }: any) => (
      <Text {...props}>{children}</Text>
    ),
  };
});

describe("MoveChip Component", () => {
  it("renders move text correctly", () => {
    render(<MoveChip move="Tackle" />);
    expect(screen.getByText("Tackle")).toBeTruthy();
  });

  it("renders light theme correctly", () => {
    const { getByText } = render(<MoveChip move="Vine Whip" />);
    const moveWrapper = getByText("Vine Whip").parent;
    expect(moveWrapper).toBeTruthy();
  });

  it("renders dark theme correctly", () => {
    // Re-mock theme to dark
    jest.mock("../../../theme/ThemeProvider", () => ({
      useAppTheme: () => ({ isDark: true }),
    }));

    const { getByText } = render(<MoveChip move="Razor Leaf" />);
    const moveWrapper = getByText("Razor Leaf").parent;
    expect(moveWrapper).toBeTruthy();
  });
});
