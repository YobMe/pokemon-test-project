import React from "react";
import { Text } from "react-native-paper";
import { TextStyle, StyleProp } from "react-native";

type AppTextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  className?: string;
};

export const AppText = ({ children, style, className }: AppTextProps) => {
  return (
    <Text style={style} className={className}>
      {children}
    </Text>
  );
};
