import React from "react";
import { render, screen } from "@testing-library/react-native";
import { StatBar } from "../../../components/atoms/StatBar";

jest.mock("../../../components/atoms/AppText", () => {
  const React = require("react");
  const { Text } = require("react-native");
  return {
    AppText: ({ children, ...props }: any) => (
      <Text {...props}>{children}</Text>
    ),
  };
});

// Mock Animated.timing to instantly call start
import { Animated } from "react-native";
Animated.timing = (value: any, config: any) => {
  return {
    start: (callback?: any) => {
      value.setValue(config.toValue);
      if (callback) callback();
    },
  } as any;
};

describe("StatBar Component", () => {
  it("renders the label correctly", () => {
    render(<StatBar label="HP" value={60} color="#22C55E" />);
    expect(screen.getByText("HP")).toBeTruthy();
  });

  it("renders the animated bar", () => {
    const { getByTestId } = render(
      <StatBar label="Attack" value={50} color="#EF4444" />,
    );
  });
});
