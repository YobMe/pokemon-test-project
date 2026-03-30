import { render, screen } from "@testing-library/react-native";
import { BreedingItem } from "../../../components/molecules/BreedingItem";

// Mock AppText
jest.mock("../../../components/atoms/AppText", () => {
  const React = require("react");
  const { Text } = require("react-native");
  return {
    AppText: ({ children, ...props }: any) => (
      <Text {...props}>{children}</Text>
    ),
  };
});

// Mock useAppTheme
jest.mock("../../../theme/ThemeProvider", () => ({
  useAppTheme: () => ({
    isDark: false,
  }),
}));

describe("BreedingItem Component", () => {
  const mockData = { imperial: "2'04\"", metric: "0.7 m" };

  it("renders the label correctly", () => {
    render(<BreedingItem label="Height" data={mockData} />);
    expect(screen.getByText("Height")).toBeTruthy();
  });

  it("renders the data correctly", () => {
    render(<BreedingItem label="Height" data={mockData} />);
    expect(screen.getByText("2'04\"")).toBeTruthy();
    expect(screen.getByText("0.7 m")).toBeTruthy();
  });

  it("renders correctly in dark mode", () => {
    jest.doMock("../../../theme/ThemeProvider", () => ({
      useAppTheme: () => ({
        isDark: true,
      }),
    }));

    // re-import component after mock
    const {
      BreedingItem,
    } = require("../../../components/molecules/BreedingItem");
    const { getByText } = render(
      <BreedingItem
        label="Weight"
        data={{ imperial: "15 lbs", metric: "6.9 kg" }}
      />,
    );

    expect(getByText("15 lbs")).toBeTruthy();
    expect(getByText("6.9 kg")).toBeTruthy();
  });
});
