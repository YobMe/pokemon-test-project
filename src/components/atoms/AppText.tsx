import { Text } from "react-native-paper";
import { TextStyle } from "react-native";

type AppTextProps = {
  children: React.ReactNode;
  style?: TextStyle;
  className?: string;
};

export const AppText = ({ children, style, className }: AppTextProps) => {
  return (
    <Text style={style} className={className}>
      {children}
    </Text>
  );
};
