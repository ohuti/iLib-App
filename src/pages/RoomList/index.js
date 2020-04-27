import React, { useEffect } from "react";
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
} from "react-native";
import { Feather } from "@expo/vector-icons";
//import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

const RoomList = ({ navigation }) => {
  // navigation = useNavigation();

  const [refreshing, setRefreshing] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [dataArray, setDataArray] = React.useState([]);
  const token = useSelector((state) => state.login.token);

  useEffect(() => {
    async function loadISBN() {
      const data = await api
        .get("/salas", {
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
  /*
  const salaObj1 = {
    id_sala: "1001",
    numero: "25",
    localizacao: "Segundo andar, lado esquerdo",
    descricao: "Sala de estudos Multimidia",
    disponibilidade: "disponivel",
  };

  const salaObj2 = {
    id_sala: "1002",
    numero: "24",
    localizacao: "Terceiro Andar, lado Esquerdo",
    descricao: "Sala de estudos em grupo",
    disponibilidade: "disponivel",
  };

  const salaObj3 = {
    id_sala: "1003",
    numero: "26",
    localizacao: "Segundo andar, lado direito",
    descricao: "Sala de Jogos",
    disponibilidade: "indisponível",
  };

  const salaObj4 = {
    id_sala: "1004",
    numero: "30",
    localizacao: "Primeiro andar, corredor 2",
    descricao: "Sala de Orientação TCC",
    disponibilidade: "indisponível",
  };
  const salaObj5 = {
    id_sala: "1005",
    numero: "30",
    localizacao: "Primeiro andar, corredor 2",
    descricao: "Sala de Orientação TCC",
    disponibilidade: "disponivel",
  };
  const salaObj6 = {
    id_sala: "1006",
    numero: "30",
    localizacao: "Primeiro andar, corredor 2",
    descricao: "Sala de Orientação TCC",
    disponibilidade: "disponivel",
  };
  const salaObj7 = {
    id_sala: "1007",
    numero: "30",
    localizacao: "Primeiro andar, corredor 2",
    descricao: "Sala de Orientação TCC",
    disponibilidade: "disponivel",
  };

  const dataArray = [
    salaObj1,
    salaObj2,
    salaObj3,
    salaObj4,
    salaObj5,
    salaObj6,
    salaObj7,
  ];

  */
  function verificaDisponibilidade(dataArray) {
    console.log(dataArray);
    if (dataArray === "1") {
      return <Text style={styles.mensagemDisponivel}>{`Disponível`}</Text>;
    } else {
      return <Text style={styles.mensagemIndisponivel}>{`Indisponível`}</Text>;
    }
  }

  const navigateToHome = () => {
    navigation.navigate("Home");
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
        keyExtractor={(dataArray) => dataArray.id_sala}
        showsVerticalScrollIndicator={true}
        renderItem={({ item: dataArray }) => (
          <>
            <View style={styles.roomContainer}>
              <View style={styles.boxCabecalhoMensagem}>
                <Text>
                  <Text style={styles.textoDestaque}>Código da Sala: </Text>
                  {dataArray.id}
                </Text>
                <View style={styles.boxDisponibilidade}>
                  {verificaDisponibilidade(dataArray.estado)}
                </View>
              </View>
              <Text>
                <Text style={styles.textoDestaque}>Numero:</Text>{" "}
                {dataArray.numero}
              </Text>
              <Text>
                <Text style={styles.textoDestaque}>Localizacao:</Text>{" "}
                {dataArray.localizacao}
              </Text>
              <Text>
                <Text style={styles.textoDestaque}>Descrição:</Text>{" "}
                {dataArray.descricao}
              </Text>
            </View>
          </>
        )}
      />
    </View>
  );
};

export default RoomList;
