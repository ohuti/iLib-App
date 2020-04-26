import React, { useState, useEffect } from "react";
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
  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
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
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
