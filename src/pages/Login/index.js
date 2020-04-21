import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./styles";
import api from "../../services/api";

import logo from "../../assets/logo.png";
import { Feather } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(true);
  const [eyeIcon, setEyeIcon] = useState("eye-off");
  const [falhaAut, setFalhaAut] = useState(false);
  const dispatch = useDispatch();

  let isLogged = useSelector((state) => state.login.logged);

  useEffect(() => {
    if (isLogged) {
      navigation.navigate("Home");
    }
  }, [isLogged]);

  const verificaErro = () => {
    if (falhaAut === true) {
      return "Usuário e/ou senha incorreto";
    }
  };

  const showPassword = () => {
    setSecurePassword(!securePassword);
    securePassword ? setEyeIcon("eye") : setEyeIcon("eye-off");
    Keyboard.dismiss();
  };

  const submit = async () => {
    Keyboard.dismiss();

    let logged = false;
    const data = await api
      .post("/sessao", {
        email,
        senha: password,
      })
      .then(function (response) {
        dispatch({
          type: "LOGGED",
          id: response.data.usuario.id,
          nome: response.data.usuario.nome,
          tipo: response.data.usuario.tipo,
          email: response.data.usuario.email,
          token: response.data.token,
        });
      })
      .catch(function (err) {
        console.log(err);
      });

    if (isLogged === true) {
      //setFalhaAut(false);
    } else {
      setFalhaAut(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAwareScrollView style={styles.container}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <Image style={styles.logo} source={logo} />

        <Text style={styles.description}>
          Faça empréstimos de livros e reserve salas de maneira descomplicada
        </Text>
        <Text style={styles.mensagemErro}>{verificaErro()}</Text>
        <TextInput
          style={styles.email}
          autoCapitalize="none"
          placeholder="E-mail"
          keyboardType="email-address"
          onFocus={() => setFalhaAut(false)}
          onChangeText={(text) => setEmail(text)}
          value={email}
          returnKeyType="go"
          //onSubmitEditing={() => this.passwordInput.focus()}
        />

        <View style={styles.password}>
          <TextInput
            //ref={(ref) => (this.passwordInput = ref)}
            style={styles.passwordTextInput}
            autoCapitalize="none"
            placeholder="Senha"
            onFocus={() => setFalhaAut(false)}
            secureTextEntry={securePassword}
            onChangeText={(text) => setPassword(text)}
            value={password}
            onSubmitEditing={submit}
          />
          <TouchableOpacity onPress={showPassword}>
            <Feather name={eyeIcon} size={24} color="#044C8C" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.login} onPress={submit}>
          <Text style={styles.loginText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.link}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.linkText}>não sou cadastrado</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
}
