import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import Button from "../../components/Button";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const { white, heading, } = colors;
const { header, text } = fonts;

export default () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😀</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas
          {"\n"}
          plantinhas com muito cuidado.
        </Text>
        <View style={styles.footer}>
          <Button onPress={() => navigation.navigate('Plantselect')} title="Começar" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: white,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    padding: 30,
  },
  title: {
    fontFamily: header,
    fontSize: 24,
    lineHeight: 30,
    textAlign: "center",
    color: heading,
    marginTop: 20,
  },
  subtitle: {
    fontFamily: text,
    fontSize: 17,
    lineHeight: 25,
    textAlign: "center",
    color: heading,
    marginVertical: 15
  },
  emoji: {
    fontSize: 64,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50
  },
});
