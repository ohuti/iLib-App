import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Picker } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './styles'

import logo from '../../assets/logo.png'
import { Feather } from '@expo/vector-icons'

export default class Login extends Component {
  constructor(){
    super()
        
    this.state = {
      name: '',
      cpf: '',
      email: '',
      password: '',
      type: 0,

      securePassword: true,
      eyeIcon: 'eye-off'
    }
  }

  showPassword = () => {
    this.setState({ securePassword: !this.state.securePassword })
    this.state.securePassword ? this.setState({ eyeIcon: 'eye' }) : this.setState({ eyeIcon: 'eye-off' })
    Keyboard.dismiss()
  }

  render = () => {
    return (
      <TouchableWithoutFeedback onPress={ Keyboard.dismiss }>
        <KeyboardAwareScrollView style={styles.container}>
          <Image source={logo} style={styles.logo} />

          <TextInput
            style={styles.formInput}
            placeholder='Nome'
            value={this.state.name}
            onChangeText={text => this.setState({ name: text })}
            returnKeyType='go'
            onSubmitEditing={() => this.cpfInput.focus()}
          />

          <TextInput
            ref={ ref => this.cpfInput = ref }
            style={styles.formInput}
            placeholder='CPF'
            value={this.state.cpf}
            onChangeText={text => this.setState({ cpf: text })}
            returnKeyType='go'
            onSubmitEditing={() => this.emailInput.focus()}
            keyboardType='numeric'
          />
          
          <TextInput
            ref={ ref => this.emailInput = ref }
            style={styles.formInput}
            placeholder='E-mail'
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
            returnKeyType='go'
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCapitalize='none'
          />

          <View style={styles.password}>
            <TextInput
              ref = { ref => this.passwordInput = ref }
              style={styles.passwordTextInput}
              placeholder='Senha'
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
              autoCapitalize='none'
              secureTextEntry={this.state.securePassword}
            />
            <TouchableOpacity onPress={this.showPassword}>
              <Feather name={this.state.eyeIcon} size={24} color='#044C8C' />
            </TouchableOpacity>
          </View>
          
          <Picker style={styles.userType} selectedValue={this.state.type} onValueChange={item => this.setState({ type: item })}>
            <Picker.Item label='Tipo de usuário:' value={0} />
            <Picker.Item label='Aluno' value={1} />
            <Picker.Item label='Professor' value={2} />
            <Picker.Item label='Funcionário' value={3} />
            <Picker.Item label='Administrador' value={4} />
          </Picker>

          <TouchableOpacity style={styles.register} onPress={this.submit}>
            <Text style={styles.registerText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ styles.link } onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.linkText}>já sou cadastrado</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    )
  }
}