import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";
import EnviromentButton from "../../components/EnviromentButton";

import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import api from "../../services/api";
import PlantCardPrimary from "../../components/PlantCardPrimary";

const { white, green, heading, gray, background } = colors;
const { header, text, complement } = fonts;

interface EnviromentsProps {
  key: string;
  title: string;
}

interface PlantsProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export default () => {
  const [enviroments, setEnviroments] = useState<EnviromentsProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
  const [environSelected, setEnvironSelected] = useState('all');

  const handleEnvironSelected = (environment: string) => {
    setEnvironSelected(environment);

    if (environment === 'all') {
      setFilteredPlants(plants);
    }

    const filtered = plants.filter(plant => plant.environments.includes(environment))

    setFilteredPlants(filtered);
  }

  useEffect(() => {
    async function fetchEnviroment() {
      const { data } = await api
      .get("plants_environments?_sort=title&_order=asc");
      setEnviroments([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ]);
    }
    fetchEnviroment();
  }, []);

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get("plants?_sort=name&_order=asc");
      setPlants(data);
    }
    fetchPlants();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.wrapper}>
        <Text style={styles.title}>Em qual hambiente</Text>
        <Text style={styles.subtile}>você quer colocar sua planta?</Text>
      </View>

      <View>
        <FlatList
          data={enviroments}
          renderItem={({ item }) => 
          <EnviromentButton 
          title={item.title}
          active={item.key === environSelected}
          onPress={() => handleEnvironSelected(item.key)}
          />
        }
          keyExtractor={(item) => item.key}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
  },
  wrapper: {
    paddingHorizontal: 30,
  },
  title: {
    fontFamily: header,
    fontSize: 17,
    lineHeight: 23,
    color: heading,
    marginTop: 15,
  },
  subtile: {
    fontFamily: text,
    fontSize: 17,
    lineHeight: 23,
    color: heading,
  },
  enviromentList: {
    height: 40,
    paddingBottom: 5,
    justifyContent: "center",
    marginVertical: 30,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  plantList: {},
});
