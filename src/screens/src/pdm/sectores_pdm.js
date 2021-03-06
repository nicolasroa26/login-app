import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity , View, Text, FlatList, ScrollView } from 'react-native';

export default class Ambiente extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <FlatList
          data = {this.props.navigation.getParam('Sectores')}
          renderItem = {({item, index}) => {
              return(
                <ScrollView>
                    <TouchableOpacity style={styles.taskListContent} 
                    key={item.keys}
                    onPress={this.municipios=()=>{this.props.navigation.navigate('Programas_pdm', {
                        Sector: this.props.navigation.getParam('Sectores')[index].Sector,
                        Programas: this.props.navigation.getParam('Sectores')[index].Programas
                      })}}>
                    <View>
                        <Text style= {styles.buttonText}>
                        {item.Sector}
                        </Text>
                    </View>
                    </TouchableOpacity>
                </ScrollView>
                )}
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
});