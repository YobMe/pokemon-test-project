import React from "react";
import { View } from "react-native";
import { render, screen } from "@testing-library/react-native";
import { TypeBadge } from "../../../components/atoms/TypeBadge";

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

describe("TypeBadge Component", () => {
  it("renders multiple types without crashing", () => {
    const types = ["grass", "poison", "fire"];

    render(
      <View>
        {types.map((t) => (
          <TypeBadge key={t} type={t} />
        ))}
      </View>,
    );

    types.forEach((t) => {
      expect(screen.getByText(t)).toBeTruthy();
    });
  });
});
