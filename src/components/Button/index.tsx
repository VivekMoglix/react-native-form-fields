import React from "react";
import {
  ActivityIndicator,
  Text,
  TouchableOpacity as NativeTouchable,
  TouchableOpacityProps as NativeTouchableProps,
  View,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import { colors } from "../../themes/colors";

export interface CustomButtonProps extends NativeTouchableProps {
  label?: string;
  withLoader?: boolean;
  variant?: "outlined" | "filled";
  size?: "small" | "medium" | "full";
  loaderSize?: "small" | "large";
  isLoading?: boolean;
  textStyles: StyleProp<TextStyle>;
  loaderPosition?: "leading" | "trailing";
  backgroundColor?: string;
  loaderColor?: string;
  leading?: any;
  trailing?: any;
  buttonStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<CustomButtonProps> = ({
  label = "Button",
  withLoader = false,
  variant = "filled",
  size = "small",
  loaderSize = "small",
  isLoading,
  textStyles,
  loaderPosition = "leading",
  backgroundColor = colors.DEFAULT_BUTTON_DARK_GRAY,
  loaderColor = variant === "filled" ? "white" : "black",
  leading,
  trailing,
  buttonStyle,
  ...rest
}) => {
  return (
    <NativeTouchable
      {...rest}
      style={[
        {
          width:
            size === "small"
              ? 150
              : size === "medium"
              ? 250
              : size === "full"
              ? "100%"
              : null,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 5,
          borderWidth: variant === "outlined" ? 1 : 0,
          padding: 8,
          flexDirection: "row",
          borderRadius: 4,
          backgroundColor:
            variant === "filled" ? backgroundColor : "transparent",
        },
        buttonStyle,
      ]}
    >
      {loaderPosition === "leading" && withLoader ? (
        isLoading ? (
          <ActivityIndicator
            style={{
              position: "absolute",
              left: 10,
            }}
            size={loaderSize}
            color={loaderColor}
          />
        ) : null
      ) : null}
      {leading && <View>{leading()}</View>}
      <Text
        style={[
          {
            justifyContent: "center",
            marginLeft: leading && 8,
            marginRight: trailing && 8,
            color: variant === "filled" ? "white" : "black",
          },
          textStyles,
        ]}
      >
        {label}
      </Text>
      {trailing && <View>{trailing()}</View>}
      {loaderPosition === "trailing" && withLoader ? (
        isLoading ? (
          <ActivityIndicator
            style={{
              position: "absolute",
              right: 10,
            }}
            size={loaderSize}
            color={loaderColor}
          />
        ) : null
      ) : null}
    </NativeTouchable>
  );
};

export default Button;
