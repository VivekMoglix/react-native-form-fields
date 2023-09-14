import React, { useEffect, useState } from "react";
import {
  Text,
  TextInput as NativeInput,
  TextInputProps as NativeInputProps,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  Animated,
} from "react-native";
import { colors } from "../../themes/colors";

export interface TextInputProps extends NativeInputProps {
  withLabel?: boolean;
  label?: string;
  variant?: "standard" | "outlined";
  labelStyles?: StyleProp<TextStyle>;
  containerStyles?: StyleProp<ViewStyle>;
  leading?:
    | React.ReactNode
    | ((props: { color: string; size: number }) => React.ReactNode | null)
    | null;
  trailing?:
    | React.ReactNode
    | ((props: { color: string; size: number }) => React.ReactNode | null)
    | null;
  textStyles?: StyleProp<TextStyle>;
  backgroundColor?: string;
  placeholder?: string;
  focusColor?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  withLabel = true,
  label = "Input",
  labelStyles = { color: colors.DEFAULT_TEXT_LIGHT_GRAY },
  placeholder,
  placeholderTextColor = "#C6C7CC",
  variant = "outlined",
  backgroundColor = "#fff",
  containerStyles,
  leading,
  trailing,
  textStyles,
  focusColor = colors.SELECTED_OPTION_COLOR,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [labelActive, setLabelActive] = useState(false);
  const { value } = { ...rest };
  const floatingLabelAnim = new Animated.Value(10);

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

  useEffect(() => {
    if (value && value?.length > 0) {
      setLabelActive(true);
    }
  }, []);

  useEffect(() => {
    labelActive
      ? Animated.timing(floatingLabelAnim, {
          toValue: -12,
          duration: 100,
          useNativeDriver: false,
        }).start()
      : Animated.timing(floatingLabelAnim, {
          toValue: 10,
          duration: 0,
          useNativeDriver: false,
        }).start();
  }, [labelActive]);

  const handleFocus = () => {
    setLabelActive(true);
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      setLabelActive(false);
    }
  };

  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 6,
          paddingVertical: 8,
          borderRadius: variant === "outlined" ? 4 : 0,
          backgroundColor: "transparent",
          marginTop: 5,
          borderWidth: variant === "outlined" ? 1 : 0,
          borderBottomWidth:
            variant === "standard" ? 1 : variant === "outlined" ? 1 : 0,
          paddingRight: trailing ? 12 : 8,
          borderColor: isFocused ? focusColor : colors.DEFAULT_BUTTON_DARK_GRAY,
        },
        containerStyles,
      ]}
    >
      {withLabel && (
        <Animated.View
          pointerEvents="none"
          style={{
            backgroundColor: labelActive ? backgroundColor : "transparent",
            position: "absolute",
            top: floatingLabelAnim,
            left: leading ? 36 : 20,
            zIndex: 2,
            paddingLeft: 4,
            paddingRight: 8,
            paddingBottom: 0,
          }}
        >
          <Text
            style={[
              labelStyles,
              {
                color: isFocused ? focusColor : colors.textLightGray,
              },
            ]}
          >
            {label}
          </Text>
        </Animated.View>
      )}
      {leadingNode && <View>{leadingNode}</View>}
      <NativeInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
        style={[
          { flex: 2, paddingVertical: 0, paddingHorizontal: 4 },
          textStyles,
        ]}
        placeholder={isFocused ? placeholder : ""}
      />
      {trailingNode && (
        <View style={{ marginLeft: "auto" }}>{trailingNode}</View>
      )}
    </View>
  );
};

export default TextInput;
