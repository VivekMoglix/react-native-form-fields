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
import DefaultAppColors from "../../themes/colors";
import Dimension from "../../themes/dimensions";

export interface ButtonProps extends NativeTouchableProps {
  label?: string;
  withLoader?: boolean;
  variant?: "outlined" | "filled";
  size?: "small" | "full";
  loaderSize?: "small" | "large";
  isLoading?: boolean;
  textStyles: StyleProp<TextStyle>;
  loaderPosition?: "leading" | "trailing";
  backgroundColor?: string;
  loaderColor?: string;
  leading?:
    | React.ReactNode
    | ((props: { color: string; size: number }) => React.ReactNode | null)
    | null;
  trailing?:
    | React.ReactNode
    | ((props: { color: string; size: number }) => React.ReactNode | null)
    | null;
  buttonStyle?: StyleProp<ViewStyle>;
  isLabelUppercase?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label = "Button",
  withLoader = false,
  variant = "filled",
  size = "small",
  loaderSize = "small",
  isLoading,
  textStyles,
  loaderPosition = "leading",
  backgroundColor = DefaultAppColors.RedThemeColor,
  loaderColor = variant === "filled" ? "white" : "black",
  leading,
  trailing,
  buttonStyle,
  isLabelUppercase = false,
  ...rest
}) => {
  const leadingNode =
    typeof leading === "function"
      ? leading({ color: "#f00", size: 24 })
      : leading;

  const trailingNode =
    typeof trailing === "function"
      ? trailing({
          color: "#f00",
          size: 24,
        })
      : trailing;
  return (
    <NativeTouchable
      {...rest}
      style={[
        {
          width: size === "small" ? 150 : size === "full" ? "100%" : null,
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 5,
          borderWidth: variant === "outlined" ? 1 : 0,
          padding: 8,
          flexDirection: "row",
          borderRadius: 6,
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
              left: size === "small" ? 2 : 10,
            }}
            size={loaderSize}
            color={loaderColor}
          />
        ) : null
      ) : null}
      {leadingNode && <View>{leadingNode}</View>}
      <Text
        style={[
          {
            justifyContent: "center",
            color: variant === "filled" ? "white" : "black",
            fontSize: Dimension.font14,
            fontFamily: Dimension.CustomBoldFont,
          },
          textStyles,
        ]}
      >
        {isLabelUppercase ? label.toUpperCase() : label}
      </Text>
      {trailingNode && (
        <View style={{ marginLeft: "auto" }}>{trailingNode}</View>
      )}
      {loaderPosition === "trailing" && withLoader ? (
        isLoading ? (
          <ActivityIndicator
            style={{
              position: "absolute",
              right: size === "small" ? 2 : 10,
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
