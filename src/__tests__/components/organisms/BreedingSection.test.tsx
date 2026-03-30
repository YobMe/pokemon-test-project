import { render, screen } from "@testing-library/react-native";
import { BreedingSection } from "../../../components/organisms/BreedingSection";

// Mock theme hook
jest.mock("../../../theme/ThemeProvider", () => ({
  useAppTheme: () => ({
    theme: { colors: { surface: "#ffffff", text: "#000000" } },
    isDark: false,
  }),
}));

// Mock BreedingItem to render simple Text so tests can find it
jest.mock("../../../components/molecules/BreedingItem", () => {
  const { Text } = require("react-native");
  return {
    BreedingItem: ({ label, data }: any) => (
      <Text>
        {label}: {data?.imperial} / {data?.metric}
      </Text>
    ),
  };
});

describe("BreedingSection Component", () => {
  const mockData = {
    height: { imperial: "2'0\"", metric: "60cm" },
    weight: { imperial: "15 lbs", metric: "7 kg" },
  };

  it("renders the Breeding title", () => {
    render(<BreedingSection data={mockData} />);
    expect(screen.getByText("Breeding")).toBeTruthy();
  });

  it("renders height and weight items", () => {
    render(<BreedingSection data={mockData} />);

    expect(screen.getByText("Height: 2'0\" / 60cm")).toBeTruthy();
    expect(screen.getByText("Weight: 15 lbs / 7 kg")).toBeTruthy();
  });
});
