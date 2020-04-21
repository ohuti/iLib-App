import React from "react";
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

const BookList = ({ navigation }) => {
  //const navigation = useNavigation();

  const [refreshing, setRefreshing] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const dataArray = [
    {
      isbn: "978-8521207450",
      nome_livro: "Curso de Física Básica - Volume 1",
      editora: "Edgard Blucher; Ciencias Exatas edition (1969)",
      idioma: "Português",
      quantidade: 12,
    },
    {
      isbn: "978-8580556193",
      nome_livro: "Mecânica Vetorial para Engenheiros: Estática",
      editora: "AMGH (2019)",
      idioma: "Português",
      quantidade: 5,
    },
    {
      isbn: "0060763280",
      nome_livro: "SECRETS MILLIONAIRE MIND",
      editora: "HarperCollins e-books",
      idioma: "Inglês",
      quantidade: 100,
    },
    {
      isbn: "978-8522112593",
      nome_livro: "Cálculo - Volume 2",
      editora: "Cengage; E  dição: 7ª",
      idioma: "Português",
      quantidade: 0,
    },
    {
      isbn: "04-141-441",
      nome_livro: "As Aventuras de Poliana",
      editora: "Abril",
      idioma: "Russo",
      quantidade: 1,
    },
    {
      isbn: "104-141-11x",
      nome_livro: "Era uma vez na cadeia",
      editora: "Abril",
      idioma: "Alemão",
      quantidade: 5,
    },
    {
      isbn: "104-141-11y",
      nome_livro: "Era uma vez na cadeia",
      editora: "Abril",
      idioma: "Alemão",
      quantidade: 1,
    },
    {
      isbn: "114-1414-x1",
      nome_livro: "Luz Clarita e os duendes",
      editora: "Senac",
      idioma: "Português",
      quantidade: 0,
    },
    {
      isbn: "114-1414-44",
      nome_livro: "Era uma vez na Escuridão",
      editora: "Manir",
      idioma: "Português",
      quantidade: 0,
    },
    {
      isbn: "TEST-001-004",
      nome_livro: "Jorge Aragão",
      editora: "Abril",
      idioma: "Russo",
      quantidade: 0,
    },
  ];

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
              <Text style={styles.textoBotao}>Emprestimo</Text>
            </TouchableOpacity>
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
