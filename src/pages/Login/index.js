import React, { useState } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard,  } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'

import styles from './styles'

import logo from '../../assets/logo.png'

const Login = () => {
  const navigation = useNavigation()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const [ securePassword, setSecurePassword ] = useState(true)
  const [ eyeIcon, setEyeIcon ] = useState('eye-off')
  
  const showPassword = () => {
    securePassword ? setSecurePassword(false) : setSecurePassword(true)
    securePassword ? setEyeIcon('eye') : setEyeIcon('eye-off') 
  }
  
  const submit = () => {
    Keyboard.dismiss()
    console.log(email)
    console.log(password)
    
    setEmail('')
    setPassword('')

    navigation.navigate('Home')
  }

  return (
    <KeyboardAvoidingView behavior='position' style={styles.container}>
      <Image style={styles.logo} source={logo} />

      <Text style={styles.description}>Faça empréstimos de livros e reserve salas de maneira descomplicada</Text>

      <TextInput
        style={styles.email}
        autoCapitalize='none'
        placeholder='E-mail'
        keyboardType='email-address'
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <View style={styles.password}>
        <TextInput
          style={styles.passwordTextInput}
          autoCapitalize='none'
          placeholder='Senha'
          secureTextEntry={securePassword}
          onChangeText={text => setPassword(text)}
          value={password}
          onSubmitEditing={submit}
        />
        <TouchableOpacity onPress={showPassword}>
          <Feather name={eyeIcon} size={24} color='#044C8C' />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.login} onPress={submit}>
        <Text style={styles.loginText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>não sou cadastrado</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default Login