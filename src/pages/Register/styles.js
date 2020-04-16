import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 24,
    backgroundColor: '#FFF',
  },

  logo: {
    alignSelf: 'center'
  },

  formInput: {
    width: '100%',
    height: 40,
    marginTop: 30,
    borderBottomColor: '#FD5F00',
    borderBottomWidth: 1,
    textAlign: 'center',
    color: '#044C8C'
  },

  password: {
    width: '100%',
    height: 40,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: '17%',
    paddingRight: '5%',
    alignItems: 'center',
    color: '#044C8C',
    borderBottomColor: '#FD5F00',
    borderBottomWidth: 1,
  },

  passwordTextInput: {
    textAlign: 'center',
    width: '85%'
  },

  userType: {
    marginVertical: 20,
    width: '100%',
    color: '#044C8C'
  },

  register: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: '#FD5F00',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  registerText: {
    fontSize: 18,
    color: '#044C8C'
  },

  link: {
    width: '40%'
  },

  linkText: {
    marginTop: 10,
    color: '#044C8C',
    textDecorationLine: 'underline',
  }
})