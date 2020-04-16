import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#FFF'
  },

  logout: {
    alignItems: 'flex-end',
    paddingBottom: 9
  },

  logo: {
    alignSelf: 'center',
    marginBottom: 10
  },

  items: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    borderColor: '#FD5F00',
    borderWidth: 2,
    paddingLeft: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  text: {
    color: '#044C8C',
    fontSize: 48,
    paddingRight: 30
  },

  smallerText: {
    color: '#044C8C',
    fontSize: 36,
    width: '50%'
  }
})