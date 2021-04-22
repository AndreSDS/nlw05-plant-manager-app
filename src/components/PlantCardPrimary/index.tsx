import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import {SvgFromUri} from 'react-native-svg'

const { heading, shape, green, green_light, green_dark } = colors;
const { header, text } = fonts;

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

function PlantCardPrimary({ data, ...rest }: PlantProps) {
  return (
    <RectButton style={ styles.container }>
      <SvgFromUri uri={data.photo} width={80} height={80} />
      <Text style={ styles.text }>{data.name}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10
  },
  text: {
    fontFamily: header,
    color: green_dark,
    marginVertical: 16
  },
});

export default PlantCardPrimary;
