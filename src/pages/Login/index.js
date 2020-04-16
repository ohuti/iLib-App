import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './styles'

import logo from '../../assets/logo.png'
import { Feather } from '@expo/vector-icons'

export default class Login extends Component {
  constructor() {
    super()

    this.state = {      
      email: '',
      password: '',
      
      securePassword: true,
      eyeIcon: 'eye-off'
    }
  }

  showPassword = () => {
    this.setState({ securePassword: !this.state.securePassword })
    this.state.securePassword ? this.setState({ eyeIcon: 'eye' }) : this.setState({ eyeIcon: 'eye-off' })
    Keyboard.dismiss()
  }

  submit = () => {
    Keyboard.dismiss()
    console.log(this.state.email)
    console.log(this.state.password)

    this.state.email = ''
    this.state.password = ''

    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAwareScrollView style={styles.container}>
          <StatusBar backgroundColor='#FFF' barStyle='dark-content' />
          <Image style={styles.logo} source={logo} />

          <Text style={styles.description}>Faça empréstimos de livros e reserve salas de maneira descomplicada</Text>

          <TextInput
            style={styles.email}
            autoCapitalize='none'
            placeholder='E-mail'
            keyboardType='email-address'
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
            returnKeyType='go'
            onSubmitEditing={() => this.passwordInput.focus()}
          />

          <View style={styles.password}>
            <TextInput
              ref = { ref => this.passwordInput = ref }
              style={styles.passwordTextInput}
              autoCapitalize='none'
              placeholder='Senha'
              secureTextEntry={this.state.securePassword}
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
              onSubmitEditing={this.submit}
            />
            <TouchableOpacity onPress={this.showPassword}>
              <Feather name={this.state.eyeIcon} size={24} color='#044C8C' />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.login} onPress={this.submit}>
            <Text style={styles.loginText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ styles.link }>
            <Text style={styles.linkText}>esqueci minha senha</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ styles.link } onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.linkText}>não sou cadastrado</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    )
  }
}