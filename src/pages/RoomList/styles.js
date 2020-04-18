import { StyleSheet } from "react-native";
//import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    //paddingTop: Constants.statusBarHeight,
    paddingBottom: 100,
    borderStyle: "solid",
  },
  roomContainer: {
    borderWidth: 1,
    borderColor: "#FD5F00",
    padding: 25,
    margin: 6,
    borderRadius: 8,
  },
  boxCabecalhoMensagem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  mensagemDisponivel: {
    textAlign: "center",
    color: "white",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 5,
    backgroundColor: "green",
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
    width: "35%",
    borderStyle: "solid",
    borderColor: "lightgreen",
    borderRadius: 12,
  },
  textoDestaque: {
    fontSize: 15,
    fontWeight: "bold",
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
});
