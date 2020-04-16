import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 50,
    paddingHorizontal: 24,
    backgroundColor: '#FFF'
  },

  logo: {
    alignSelf: 'center'
  },

  description: {
    marginVertical: 57,
    fontSize: 16,
    color: '#044C8C',
    textAlign: 'center'
  },

  email: {
    width: '100%',
    height: 40,
    borderBottomColor: '#FD5F00',
    borderBottomWidth: 1,
    textAlign: 'center',
    color: '#044C8C'
  },

  password: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '17%',
    paddingRight: '5%',
    alignItems: 'center',
    color: '#044C8C',
    borderBottomColor: '#FD5F00',
    borderBottomWidth: 1,
    marginTop: 30,
    marginBottom: 35
  },

  passwordTextInput: {
    textAlign: 'center',
    width: '85%'
  },

  login: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: '#FD5F00',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25
  },

  loginText: {
    fontSize: 18,
    color: '#044C8C'
  },

  link: {
    width: '45%'
  },

  linkText: {
    marginTop: 5,
    color: '#044C8C',
    textDecorationLine: 'underline',
  }
})