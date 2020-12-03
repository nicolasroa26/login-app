import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity , View, Text, FlatList } from 'react-native';
import municipios from '../../datafile/pdm.json';

export default class  Cultura extends Component {
  render() {
    return (
      <View style = {styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3280e4',
    paddingTop: 15,
    flex: 1
  },
  taskListContent: {
    height: 80,
    width: Dimensions.get('window').width - 20,
    alignSelf: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    backgroundColor: '#ffffff',
    marginTop: 5,
    marginBottom:5,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boton: {
    marginBottom: 30,
    width: 330,
    height: 100,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 16,
    padding: 10,
    color: '#7c7f7f',
    fontWeight: 'bold',
    justifyContent: 'space-around'
  },
letterSubtitle:{
  color:'#000000',
  margin: 8,
  fontSize: 19,
  fontWeight: 'bold',
  textAlign: 'left'
  }
})
