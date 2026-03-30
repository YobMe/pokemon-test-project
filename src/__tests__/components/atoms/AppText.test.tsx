import { render, screen } from "@testing-library/react-native";
import { AppText } from "../../../components";

///// Mock react-native-paper Text
jest.mock("react-native-paper", () => {
  const { Text } = require("react-native");
  return { Text };
});

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

describe("AppText", () => {
  it("renders children correctly", () => {
    render(<AppText>Hello World</AppText>);

    expect(screen.getByText("Hello World")).toBeTruthy();
  });

  it("applies custom style correctly", () => {
    const customStyle = { color: "red", fontSize: 20 };

    render(<AppText style={customStyle}>Styled Text</AppText>);

    const text = screen.getByText("Styled Text");
    expect(text.props.style).toMatchObject(customStyle);
  });

  it("passes className correctly (nativewind)", () => {
    render(<AppText className="text-blue-500">Tailwind Text</AppText>);

    const text = screen.getByText("Tailwind Text");

    // className is not directly applied in Jest styles,
    // but we can still verify it exists in props
    expect(text.props.className).toBe("text-blue-500");
  });

  it("renders multiple children", () => {
    render(
      <AppText>
        Hello <AppText>Eyob</AppText>
      </AppText>,
    );

    expect(screen.getByText("Hello Eyob")).toBeTruthy();
    expect(screen.getByText("Eyob")).toBeTruthy();
  });
});
