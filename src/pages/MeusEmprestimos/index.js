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

const MeusEmprestimos = ({ navigation }) => {
  //const navigation = useNavigation();
  const token = useSelector((state) => state.login.token);
  const userId = useSelector((state) => state.login.id);

  const [refreshing, setRefreshing] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [dataArray, setDataArray] = React.useState([]);

  useEffect(() => {
    async function loadEmprestimos() {
      const data = await api
        .get(`/emprestimos/livros/`, {
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

    loadEmprestimos();
  }, []);

  function converterData(data) {
    const dataFormat = new Date(data);
    return `${dataFormat.getDate()}/${
      dataFormat.getMonth() + 1
    }/${dataFormat.getFullYear()}`;
  }

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
        <Text style={styles.titulo}>Meus Empréstimos</Text>
        <View style={styles.containerTitulo}></View>
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
              <Text>
                <Text style={styles.textoDestaque}>Devolução:</Text>
                {converterData(dataArray.vencimento)}
              </Text>

              {/*verificaAcao(dataArray.quantidade)*/}
            </View>
          </>
        )}
      />
    </View>
  );
};

export default MeusEmprestimos;
