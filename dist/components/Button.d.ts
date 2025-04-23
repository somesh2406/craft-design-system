import React from "react";
import { ViewStyle, TextStyle, GestureResponderEvent } from "react-native";
type ButtonProps = {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    disabled?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
};
declare const Button: React.FC<ButtonProps>;
export default Button;
