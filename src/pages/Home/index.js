import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles";

import logo from "../../assets/logo.png";

const Home = ({ navigation }) => {

  const dispatch = useDispatch();

  const navigateToBookList = () => {
    navigation.navigate("BookList");
  };

  const navigateToRoomList = () => {
    navigation.navigate("RoomList");
  };
  
  const logout = () => {
    dispatch({
      type:"SIGNOUT"
    })

    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* <Text>Olá, {name}</Text> */}

      <TouchableOpacity style={styles.logout} onPress={logout}>
        <MaterialCommunityIcons name="power" size={50} color="#044C8C" />
      </TouchableOpacity>

      <Image source={logo} style={styles.logo} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.items} onPress={navigateToBookList}>
          <MaterialCommunityIcons
            name="book-open-variant"
            size={100}
            color="#044C8C"
          />
          <Text style={styles.text}>Livros</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.items} onPress={navigateToRoomList}>
          <MaterialCommunityIcons name="door" size={100} color="#044C8C" />
          <Text style={styles.text}>Salas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.items}>
          <MaterialCommunityIcons name="account" size={100} color="#044C8C" />
          <Text style={styles.smallerText}>Área do Usuário</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Home;
