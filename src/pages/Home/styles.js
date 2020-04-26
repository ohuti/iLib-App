import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#FFF",
  },

  logout: {
    alignItems: "flex-end",
    paddingBottom: 9,
  },

  logo: {
    alignSelf: "center",
    marginBottom: 10,
  },

  items: {
    width: "75%",
    height: 120,
    borderRadius: 8,
    borderColor: "#FD5F00",
    borderWidth: 2,
    paddingLeft: 20,
    marginBottom: 10,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
  },

  text: {
    color: "#044C8C",
    fontSize: 25,
    paddingRight: 30,
  },

  smallerText: {
    color: "#044C8C",
    fontSize: 25,
    width: "50%",
  },
  welcomeText: {
    textAlign: "center",
    color: "black",
    fontSize: 15,
    width: "100%",
    marginBottom: 15,
  },
  welcomeTextBold: {
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    width: "100%",
  },
});
