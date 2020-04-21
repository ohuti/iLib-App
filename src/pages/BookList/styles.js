import { StyleSheet } from "react-native";
//import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    //paddingTop: Constants.statusBarHeight,
    paddingBottom: 100,
    borderStyle: "solid",
  },
  bookContainer: {
    borderWidth: 1,
    borderColor: "#FD5F00",
    padding: 25,
    margin: 6,
    borderRadius: 8,
  },
  boxCabecalhoMensagem: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  mensagemDisponivel: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    padding: 5,
    backgroundColor: "green",
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  mensagemIndisponivel: {
    textAlign: "center",
    color: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 5,
    backgroundColor: "gray",
  },
  boxDisponibilidade: {
    borderStyle: "solid",
    borderColor: "lightgreen",
    marginLeft: 10,
  },
  textoDestaque: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#044C8C",
  },
  textoNome: {
    fontSize: 18,
    color: "#044C8C",
  },
  searchContainer: {
    flexDirection: "row",
  },
  searchItem: {
    borderWidth: 1,
    borderColor: "#044C8C",
    padding: 5,
    margin: 6,
    width: "75%",
    borderRadius: 8,
  },
  searchItemInput: {
    textAlign: "center",
    fontSize: 14,
    color: "#044C8C",
  },
  searchContainerItem: {
    alignItems: "center",
    alignSelf: "center",
  },
  containerQuantidade: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  items: {
    marginTop: 5,
    width: "100%",
    height: 45,
    borderRadius: 8,
    borderColor: "#FD5F00",
    borderWidth: 2,
    paddingLeft: 20,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#044C8C",
  },
});
