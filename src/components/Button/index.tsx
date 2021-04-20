import React from 'react';
import { Text, StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const { white, green, heading, gray } = colors;
const { header, text, complement } = fonts;

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

function Button({title, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} {...rest}>
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: green,
    height: 56,
    width: '100%',
    borderRadius: 16,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: white,
    fontFamily: header
  }
});


export default Button;
