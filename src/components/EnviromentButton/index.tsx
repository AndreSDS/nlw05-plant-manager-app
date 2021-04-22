import React from "react";

import { View, Text, StyleSheet } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

const { heading, shape, green, green_light, green_dark } = colors;
const { header, text } = fonts;

interface EnviromentProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

function EnviromentButton({ title, active = false, ...rest }: EnviromentProps) {
  return (
    <RectButton
      style={[styles.container, active && styles.containerActive]}
      {...rest}
    >
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: shape,
    width: 76,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 5
  },
  containerActive: {
    backgroundColor: green_light,
  },
  text: {
    fontFamily: text,
    fontSize: 13,
    color: heading,
  },
  textActive: {
    fontFamily: header,
    fontSize: 13,
    color: green_dark,
  },
});

export default EnviromentButton;
