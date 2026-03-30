import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";
import { AppText } from "../../components";

type StatBarProps = {
  label: string;
  value: number;
  color: string;
};

export const StatBar = ({ label, value, color }: StatBarProps) => {
  const animated = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animated, {
      toValue: value / 100,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View className="mb-4">
      <AppText>{label}</AppText>

      <View className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <Animated.View
          style={{
            width: animated.interpolate({
              inputRange: [0, 1],
              outputRange: ["0%", "100%"],
            }),
            backgroundColor: color,
          }}
          className="h-full rounded-full"
        />
      </View>
    </View>
  );
};
