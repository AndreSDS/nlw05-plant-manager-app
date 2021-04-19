import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";

import wateringImg from "../../assets/watering.png";
import Button from '../../components/Button';

export function Welcome() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
        Gerencie{'\n'}
        suas plantas de{'\n'}
        forma fácil
        </Text>
        <Image style={styles.image} source={wateringImg} />
        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>
        <Button title="Avançar" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    textAlign: 'center',
    color:'#52665A',
    marginTop: 38
  },
  subtitle: {
    fontSize: 17,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: '#5C6660'
  },
  image: {
    width: 292,
  }
});
