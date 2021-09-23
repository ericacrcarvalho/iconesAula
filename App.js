import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Foundation, FontAwesome } from '@expo/vector-icons';
import MyIcon from 'react-native-vector-icons/Ionicons'

const App = () => {

  const salvar = () => {
  }

  return (

    <View style={styles.container}>
      <Text style={styles.text}>Ícones</Text>
      <Foundation
        name='unlock'
        size={40}
        color='blue'
      />
      <FontAwesome
        name='android'
        size={30}
        color='red'
      />
      <MyIcon
        name='contrast-outline'
        size={20}
        color='black'
      />
      <Image
        source={require('./slack-icon.png')}
        style={{width: 20, height: 20}}
      />
      <TouchableOpacity
        onPress={salvar}
        style={{backgroundColor:'gray', padding: 6, margin: 2, flexDirection:'row'}}>
          <Foundation
            name='save'
            size={20}
            color='red'
          />        
        <Text>Salvar</Text>
      </TouchableOpacity>
      <Foundation.Button
        name='save'
        backgroundColor='gray'
        onPress={salvar}
        borderRadius={30}
      >Salvar
      </Foundation.Button>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  }
});
