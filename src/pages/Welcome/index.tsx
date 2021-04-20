import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import wateringImg from "../../assets/watering.png";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { useNavigation } from "@react-navigation/core";

const { white, green, heading } = colors;
const { header, text, complement } = fonts;
const height = Dimensions.get("window").width * 0.7;

export default () => {
  const navigation = useNavigation()

  const handleNavigation = () => {
    navigation.navigate("UserIdentification");
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>
            Gerencie{"\n"}
            suas plantas de{"\n"}
            forma fácil
          </Text>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={wateringImg}
          />
          <Text style={styles.subtitle}>
            Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
            sempre que precisar.
          </Text>
          <TouchableOpacity onPress={handleNavigation} activeOpacity={0.7} style={styles.button}>
            <Feather name="chevron-right" size={30} color={white} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20
  },
  title: {
    fontFamily: header,
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 34,
    textAlign: "center",
    color: heading,
    marginTop: 38,
  },
  subtitle: {
    fontFamily: text,
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: "center",
    color: heading,
  },
  image: {
    height: height,
  },
  button: {
    width: 56,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: green,
    borderRadius: 16,
    marginBottom: 10,
  },
  buttonIcon: {
    color: white,
  },
});
