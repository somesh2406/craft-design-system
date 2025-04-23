import React from "react";
import { TouchableOpacity, Text, StyleSheet, } from "react-native";
import { colors, spacing } from "../theme";
const Button = ({ title, onPress, disabled = false, style, textStyle, }) => {
    return (<TouchableOpacity onPress={onPress} activeOpacity={0.8} disabled={disabled} style={[styles.button, disabled && styles.disabled, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>);
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.lg,
        borderRadius: spacing.sm,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "600",
    },
    disabled: {
        backgroundColor: colors.disabled,
    },
});
export default Button;
