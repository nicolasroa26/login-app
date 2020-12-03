import React, { Component } from 'react';
import { StyleSheet, Dimensions, TouchableOpacity , View, Text, SafeAreaView, FlatList, TextInput } from 'react-native';
import informes from '../datafile/informes.json'

export default class TodoInformes extends Component {
  state={
    Busqueda:"",
    Informesdata:[]
  }
  componentDidMount(){
    this.setState({
      Informesdata:informes
    })
  }
  textobusqueda = async text =>{
    await this.setState({
      Busqueda:text
    })
    this.Busquedaelementos();
  }
  Busquedaelementos(){
    var Buscar = informes.filter(item=>{
      if(item.informe.includes(this.state.Busqueda))
      return item
    })
    this.setState({
      Informesdata:Buscar
    })
  }
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style= {styles.container}>
          <View style={styles.inputView}>
            <TextInput
            style={{fontSize: 15}}
            placeholder="Busqueda" 
            placeholderTextColor="#7c7f7f"
            onChangeText={this.textobusqueda}/>
          </View>
            <FlatList
              data = {this.state.Informesdata}
              renderItem = {({item, index}) =>
                <TouchableOpacity style={styles.taskListContent} onPress={this.informesinfo=()=>{this.props.navigation.navigate('Detalles', {informe: informes[index].informe, entidad: informes[index].entidad, como: informes[index].como, norma: informes[index].norma, periodo: informes[index].periodo, fecha: informes[index].fecha, formato: informes[index].formato, dependencia: informes[index].dependencia, vinculo: informes[index].vinculo})}}>
                  <View>
                      <Text style= {styles.buttonText}>
                        {item.informe}
                      </Text>
                  </View>
              </TouchableOpacity>
            }
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3280e4',
    paddingTop: 15,
  },
  taskListContent: {
    height: 70,
    width: Dimensions.get('window').width - 20,
    alignSelf: 'center',
    borderRadius: 10,
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
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "normal",
    padding: 10,
    color: '#7c7f7f',
    fontWeight: 'bold',
    justifyContent: 'space-around'
  },
  inputView:{
    width:"98%",
    borderRadius:20,
    height:35,
    marginBottom:10,
    alignSelf:"center",
    padding:10,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth:.5
  },
});