import React, { ReactNode } from 'react';

import { Text, StyleSheet, TouchableOpacity } from 'react-native';

interface ButtonProps {
  title: string;
}

function Button({title}: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button}>
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#32B768',
    borderRadius: 16,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  }
});


export default Button;
