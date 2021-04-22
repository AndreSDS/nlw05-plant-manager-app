import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import avatarimg from "../../assets/avatar.png";

const { heading} = colors;
const { header, text } = fonts;

function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>André</Text>
      </View>
      <Image style={styles.image} source={avatarimg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontFamily: text,
    fontSize: 32,
    lineHeight: 36,
    color: heading,
  },
  userName: {
    fontFamily: header,
    color: heading,
    fontSize: 32,
    lineHeight: 36,
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    color: "#fff",
  },
});

export default Header;
