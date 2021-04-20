import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Button from "../../components/Button";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

const { white, green, heading, gray } = colors;
const { header, text, complement } = fonts;

export default () => {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const handleNavigation = () => {
    navigation.navigate("Confirmation");
  }

  const inputBlur = () => {
    setIsFilled(!!name);
    setIsFocused(false);

  };
  const inputFocus = () => {
    setIsFocused(true);
  };

  const handleInputChange = (value: string) => {
    setIsFilled(!!value);
    setName(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.content}>
          <View style={styles.form}>
            <View style={styles.header}>
              <Text style={styles.emoji}>
                {isFilled ? '😄' : '😃'}
              </Text>
              <Text style={styles.title}>
                Como podemos{"\n"}
                chamar você?
              </Text>
            </View>
            <TextInput
              style={[
                styles.input,
                (isFocused || isFilled) && {borderColor: green}
              ]}
              placeholder="Nome"
              onChangeText={handleInputChange}
              onBlur={inputBlur}
              onFocus={inputFocus}
            />
            <View style={styles.footer}>
              <Button 
              onPress={handleNavigation}
              title="Confirmar"
              disabled={!isFilled}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: white,
  },
  content: {
    flex: 1,
    width: "100%",
  },
  header: {
    alignItems: "center",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 54,
  },
  emoji: {
    fontSize: 44,
  },
  title: {
    fontFamily: header,
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: heading,
    marginTop: 25,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: gray,
    color: heading,
    width: "100%",
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: "center",
  },
  footer: {
    marginTop: 40,
    width: "100%",
    paddingHorizontal: 20,
  },
});
