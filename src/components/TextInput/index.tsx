import React, { useEffect, useRef, useState } from "react";
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

export interface CustomTextInputProps extends NativeInputProps {
  withLabel?: boolean;
  label?: string;
  variant?: "standard" | "outlined" | "filled";
  labelStyles?: StyleProp<TextStyle>;
  containerStyles?: StyleProp<ViewStyle>;
  leading?: any;
  trailing?: any;
  textStyles?: StyleProp<TextStyle>;
  backgroundColor?: string;
  placeholder?: string;
  focusColor?: string;
}

const TextInput: React.FC<CustomTextInputProps> = ({
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

  useEffect(() => {
    if (value && value?.length > 0) {
      setLabelActive(true);
    }
  }, []);

  useEffect(() => {
    labelActive
      ? Animated.timing(floatingLabelAnim, {
          toValue: -10,
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
          borderRadius: variant === "filled" || variant === "outlined" ? 4 : 0,
          backgroundColor:
            variant === "filled" ? backgroundColor : "transparent",
          marginTop: 5,
          borderWidth: variant === "outlined" ? 1 : 0,
          borderBottomWidth:
            variant === "standard" ? 1 : variant === "outlined" ? 1 : 0,
          paddingRight: trailing && 12,
        },
        containerStyles,
      ]}
    >
      {withLabel && (
        <Animated.View
          pointerEvents="none"
          style={{
            backgroundColor: labelActive ? "#fff" : "transparent",
            borderColor: isFocused
              ? focusColor
              : colors.DEFAULT_BUTTON_DARK_GRAY,
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
      {leading && <View>{leading()}</View>}
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
      {trailing && <View style={{ marginLeft: "auto" }}>{trailing()}</View>}
    </View>
  );
};

export default TextInput;
