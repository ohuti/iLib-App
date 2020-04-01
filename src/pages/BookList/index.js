import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, RefreshControl, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import styles from './styles'

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const BookList = () => {
  const navigation = useNavigation()

  const [refreshing, setRefreshing] = React.useState(false)

  const dataArray = [1, 2, 3, 4, 5]
  
  const navigateToHome = () => {
    navigation.navigate('Home')
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false))
  }, [refreshing])

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToHome}>
        <Feather name='chevron-left' size={50} color='#044C8C' />
      </TouchableOpacity>

      <FlatList
        style={{ }}
        data={dataArray}
        keyExtractor={ (dataArray, index) => index.toString() }
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
        renderItem={(item) => (
          <Text key={item}>Refresh test</Text>
        )}
      />
    </View>
  )
}

export default BookList