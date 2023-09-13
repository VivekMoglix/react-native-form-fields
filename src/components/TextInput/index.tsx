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

export interface CustomTextInputProps extends NativeInputProps {
  withLabel?: boolean;
  label?: string;
  variant?: "standard" | "outlined" | "filled";
  labelStyles?: StyleProp<TextStyle>;
  inputContainerStyles?: StyleProp<ViewStyle>;
  leading?: any;
  trailing?: any;
  textStyles?: StyleProp<TextStyle>;
  backgroundColor?: string;
  placeholder?: string;
}

const TextInput: React.FC<CustomTextInputProps> = ({
  label = "Input",
  labelStyles = { color: colors.DEFAULT_TEXT_LIGHT_GRAY },
  placeholder,
  placeholderTextColor = "#C6C7CC",
  variant = "outlined",
  backgroundColor = "#fff",
  inputContainerStyles,
  leading,
  trailing,
  textStyles,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const floatingLabelAnim = new Animated.Value(16);

  useEffect(() => {
    isFocused
      ? Animated.timing(floatingLabelAnim, {
          toValue: -5,
          duration: 250,
          useNativeDriver: false,
        }).start()
      : Animated.timing(floatingLabelAnim, {
          toValue: 12,
          duration: 5000,
          useNativeDriver: false,
        }).start();
  }, [isFocused]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    const { value } = { ...rest };
    if (value && value.length > 0) {
      return;
    } else {
      setIsFocused(false);
    }
  };

  return (
    <View style={{ position: "relative" }}>
      <Animated.Text
        style={[
          labelStyles,
          {
            position: "absolute",
            top: floatingLabelAnim,
            left: leading ? 30 : 20,
            backgroundColor: isFocused ? "#fff" : "transparent",
            zIndex: 2,
            paddingLeft: 4,
            paddingRight: 8,
            paddingBottom: 0,
            color: isFocused ? "#000" : colors.textLightGray,
          },
        ]}
      >
        {label}
      </Animated.Text>

      <View
        style={[
          {
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 4,
            paddingVertical: 8,
            borderColor: colors.DEFAULT_BUTTON_DARK_GRAY,
            borderRadius:
              variant === "filled" || variant === "outlined" ? 4 : 0,
            backgroundColor:
              variant === "filled" ? backgroundColor : "transparent",
            marginTop: 5,
            borderWidth: variant === "outlined" ? 1 : 0,
            borderBottomWidth:
              variant === "standard" ? 1 : variant === "outlined" ? 1 : 0,
          },
          inputContainerStyles,
        ]}
      >
        {leading && <View>{leading()}</View>}
        <NativeInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
          style={[
            { flex: 2, paddingVertical: 0, paddingHorizontal: 4 },
            textStyles,
          ]}
        />
        {trailing && <View style={{ marginLeft: "auto" }}>{trailing()}</View>}
      </View>
    </View>
  );
};

export default TextInput;
