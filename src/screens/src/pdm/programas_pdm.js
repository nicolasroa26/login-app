import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity , View, Text, FlatList, ScrollView } from 'react-native';

export default class Ambiente extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style= {styles.letterSubtitle}>
        Programas:
        </Text>
        <FlatList
          data = {this.props.navigation.getParam('Programas')}
          renderItem = {({item, index}) => {
            return(
            <ScrollView>
                <TouchableOpacity style={styles.taskListContent}
                key={item.keyp}
                onPress={this.municipios=()=>{this.props.navigation.navigate('Detallespdm', {
                  Programapdd: this.props.navigation.getParam('Programas')[index].Programapdd,
                  Programa: this.props.navigation.getParam('Programas')[index].Programa,
                  Todobien: this.props.navigation.getParam('Programas')[index].Todobien,
                  Todoproducto: this.props.navigation.getParam('Programas')[index].Todoproducto,
                })}}>
                  <View>
                    <Text style= {styles.buttonText}>
                      {item.Programa}
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
  color:'#18eac2',
  margin: 8,
  fontSize: 19,
  fontWeight: 'bold',
  textAlign: 'left'
  }
});