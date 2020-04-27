import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api";

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  FlatList,
  TextInput,
  StyleSheet,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Ionicons, Feather } from "@expo/vector-icons";
import styles from "./styles";

export default function App({ navigation }) {
  //Token JWT
  const token = useSelector((state) => state.login.token);

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const dispatch = useDispatch();

  //Permissão para acessar a câmera
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  //Função que escaneia o qrcode type retorna o tipo do qrcode e data retorna o conteúdo do qrcode
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

    const responseEmprestimo = api
      .post(
        `/emprestimos/livros/`,
        { id_livro: data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch(function (err) {
        console.log(err);
      });
    //Get the ISBN of _currently not in use
    const apiResponse = api
      .get(`/livros/${data}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch(function (err) {
        console.log(err);
      });

    Promise.all([apiResponse, responseEmprestimo]).then(function (values) {
      navigation.navigate("MeusEmprestimos");
    });
  };

  if (hasPermission === null) {
    return <Text></Text>;
  }
  if (hasPermission === false) {
    return <Text></Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <TouchableOpacity onPress={navigateToHome}>
        <Feather
          style={{ zIndex: 10 }}
          name="chevron-left"
          size={50}
          color="#044C8C"
        />
      </TouchableOpacity>

      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={([StyleSheet.absoluteFillObject], styles.containerScan)}
      >
        <Text style={styles.description}> Escaneie o QR-Code do Livro</Text>
        <Ionicons
          style={styles.qr}
          name="ios-qr-scanner"
          size={400}
          color="#FD5F20"
        />
      </BarCodeScanner>

      {/*scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )*/}

      <View style={styles.container}></View>
    </View>
  );
}
