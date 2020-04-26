import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  FlatList,
  TextInput,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
//import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import api from "../../services/api";

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const BookList = ({ navigation }) => {
  //const navigation = useNavigation();
  const token = useSelector((state) => state.login.token);
  const [refreshing, setRefreshing] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [dataArray, setDataArray] = React.useState([]);

  useEffect(() => {
    async function loadISBN() {
      const data = await api
        .get("/isbn", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
          setDataArray(response.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    }

    loadISBN();
  }, []);

  function verificaAcao(dataArray) {
    if (dataArray !== 0) {
      return (
        <>
          <View>
            <Text>
              <Text style={styles.textoDestaque}>Quantidade:</Text>
              <Text>{dataArray}</Text>
            </Text>
          </View>

          <View style={styles.items}>
            <TouchableOpacity onPress={navigateToHome}>
              <Text style={styles.textoBotao}>Reserva</Text>
            </TouchableOpacity>
          </View>
        </>
      );
    } else {
      return (
        <View style={styles.items}>
          <TouchableOpacity onPress={navigateToHome}>
            <Text style={styles.textoBotao}>Reserva</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  const navigateToHome = () => {
    navigation.navigate("Home");
  };

  const navigateToScanEmprestimos = () => {
    navigation.navigate("ScanEmprestimos");
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToHome}>
        <Feather name="chevron-left" size={50} color="#044C8C" />
      </TouchableOpacity>
      <View>
        <Text style={styles.titulo}>Empréstimo</Text>
        <View style={styles.containerTitulo}>
          <TouchableOpacity onPress={navigateToScanEmprestimos}>
            <Ionicons name="md-qr-scanner" size={50} color="#044C8C" />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToScanEmprestimos}>
            <Text style={styles.textoOpcao}>Ler QR-Code</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchItem}>
          <TextInput
            style={styles.searchItemInput}
            autoCapitalize="none"
            placeholder="Pesquisar"
            placeholderTextColor="#044C8C"
            onChangeText={(text) => setSearch(text)}
            value={search}
            returnKeyType="go"
          />
        </View>

        <View style={styles.searchContainerItem}>
          <TouchableOpacity onPress={navigateToHome}>
            <Feather name={"search"} size={30} color="#044C8C" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainerItem}>
          <TouchableOpacity onPress={navigateToHome} s>
            <Feather name={"filter"} size={30} color="#044C8C" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        style={{}}
        data={dataArray}
        keyExtractor={(dataArray) => dataArray.isbn}
        showsVerticalScrollIndicator={true}
        renderItem={({ item: dataArray }) => (
          <>
            <View style={styles.bookContainer}>
              <View style={styles.boxCabecalhoMensagem}>
                <Text style={styles.textoNome}>{dataArray.nome_livro}</Text>
              </View>
              <Text>
                <Text style={styles.textoDestaque}>Editora:</Text>{" "}
                {dataArray.editora}
              </Text>
              <Text>
                <Text style={styles.textoDestaque}>Idioma:</Text>{" "}
                {dataArray.idioma}
              </Text>
              <Text>
                <Text style={styles.textoDestaque}>isbn:</Text> {dataArray.isbn}
              </Text>
              {verificaAcao(dataArray.quantidade)}
            </View>
          </>
        )}
      />
    </View>
  );
};

export default BookList;
