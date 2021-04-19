import React, { ReactNode } from 'react';

import { Text, StyleSheet, TouchableOpacity } from 'react-native';

function Button() {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.button}>
      <Text style={styles.buttonText}>
        >
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center', 
    backgroundColor: '#32B768',
    borderRadius: 16,
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 'bold'
  }
});


export default Button;
