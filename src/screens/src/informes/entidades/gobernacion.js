import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity , View, Text, FlatList } from 'react-native';
import informes from '../../../datafile/informes';

export default class Gobernacion extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <FlatList
          data = {informes}
          renderItem = {({item, index}) => {
            if(item.entidad.includes('Gobernaciòn del departamento')){
              return(
                <TouchableOpacity style={styles.taskListContent} onPress={this.informesinfo=()=>{this.props.navigation.navigate('Detalles', {informe: informes[index].informe, entidad: informes[index].entidad, como: informes[index].como, norma: informes[index].norma, periodo: informes[index].periodo, fecha: informes[index].fecha, formato: informes[index].formato, dependencia: informes[index].dependencia, vinculo: informes[index].vinculo})}}>
                  <View>
                    <Text style= {styles.buttonText}>
                      {item.informe}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            }
          }
        keyExtractor={(item, index) => index.toString()}
        />
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
    fontSize: 18,
    padding: 10,
    color: '#7c7f7f',
    fontWeight: 'bold',
    justifyContent: 'space-around'
  }
});