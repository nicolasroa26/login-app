import React, {Component, } from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, TextInput} from 'react-native';
import Separator from './Separatorpdm'
import { Task } from '../../components/Task';
import { SafeAreaView } from 'react-native-safe-area-context';



export default class Detalles extends Component{
  state = {
    Responsable: "",
    Unidadm:"",
    Mcuatrenio:"",
    Actividadesr:"",
    Nombrep:"",
    Bpin:"",
    ismodalvisible: false,
    selectedTask: null,
    selectedbien: null
    };
	render(){
    const {
      state: {
        isModalVisible,
        selectedTask,
        selectedbien
      },
    } = this;
		return (
			<View style={styles.container}>
        <ScrollView style = {styles.subcontainer}>
        <View>
          <Text style={{color: '#9CAAC4', marginLeft:10 ,fontSize: 16, fontWeight: '600'}}>
            Programa del Plan de desarrolo:
          </Text>
          <Text style={{ fontSize: 16, marginHorizontal: 8, }}>
            {this.props.navigation.getParam('Programapdd', 'Null')}
          </Text>
			  </View>
        <View>
          <Text style={{color: '#9CAAC4', marginLeft:10 ,fontSize: 16, fontWeight: '600'}}>
            Programa Presupuestal:
          </Text>
          <Text style={{ fontSize: 16, marginHorizontal: 8, }}>
            {this.props.navigation.getParam('Programa', 'Null')}
          </Text>
			  </View>
        {selectedbien !== null && (
              <Task isModalVisible={isModalVisible}>
                <View style={styles.taskContainer}>
                  <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                    Indicador de Bienestar
                  </Text>
                  <Text style={styles.title}>
                    {selectedbien.indibien}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                  </View>
                  <View style={styles.notesContent} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                    Unidad de Medida (Numero o Porcentaje)
                    </Text>
                    <Text style={styles.title}>
                      {selectedbien.Udm}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                    Meta del Cuatrienio
                    </Text>
                    <Text style={styles.title}>
                    {selectedbien.Mdc}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          isModalVisible: !isModalVisible,
                        });
                      }}
                      style={styles.backButton}
                    >
                      <Text style={{ fontSize: 18, textAlign: 'center', color: '#fff' }}>
                        Volver
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Task>
            )}
            <ScrollView>
              <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                Indicador de Bienestar:
              </Text>
              {this.props.navigation.getParam('Todobien').map(item => (
                      <TouchableOpacity
                      onPress={() => {
                        this.setState({
                            selectedbien: item,
                            isModalVisible: true,
                          });
                      }}
                      key={item.key}
                      style={styles.taskListContent}
                      >
                        <View style={{ marginLeft: 13 }}>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                              {item.indibien}
                            </Text>
                          </View>
                          <View>
                            <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                          </View>
                        </View>
                      </TouchableOpacity>
                ))}
            </ScrollView>

            {selectedTask !== null && (
              <Task isModalVisible={isModalVisible}>
                <ScrollView style={styles.taskContainer}>
                <ScrollView style={{overflowY: "scroll", height: 610, width: "auto"}}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                          Meta de producto:
                        </Text>
                        <Text style={styles.title}>
                          {selectedTask.meta}
                        </Text>
                        <View>
                          <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                          Tipo de Meta
                          </Text>
                          <Text style={styles.title}>
                            {selectedTask.tmeta}
                          </Text>
                        </View>
                        <View>
                          <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                          Linea Base
                          </Text>
                          <Text style={styles.title}>
                            {selectedTask.Lineabase}
                          </Text>
                        </View>
                        <View>
                          <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                          Responsable
                          </Text>
                          <TextInput 
                          placeholder={selectedTask.responsable} 
                          placeholderTextColor="#9CAAC4" 
                          maxLength={10} style={styles.cuadrostext}
                          onChangeText={text => this.setState({Responsable:text})}/>
                        </View>
                        <View>
                          <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                          Producto de la MGA
                          </Text>
                          <Text style={styles.title}>
                            {selectedTask.producto}
                          </Text>
                        </View>
                        <View>
                          <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                          Indicador de Producto MGA
                          </Text>
                          <Text style={styles.title}>
                            {selectedTask.indicador}
                          </Text>
                        </View>
                        <View>
                          <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                          Unidad de Medida
                          </Text>
                          <TextInput 
                          placeholder={"Unidad de Medida"} 
                          placeholderTextColor="#9CAAC4" 
                          maxLength={10} style={styles.cuadrostext}
                          onChangeText={text => this.setState({Unidadm:text})}/>
                        </View>
                        <View>
                          <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                          Actividades a Realizar
                          </Text>
                          <TextInput 
                          placeholder={"Actividades a Realizar"} 
                          placeholderTextColor="#9CAAC4" 
                          maxLength={10} style={styles.cuadrostext}
                          onChangeText={text => this.setState({Actividadesr:text})}/>
                        </View>
                        <View>
                          <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                          Meta del Cuatrenio
                          </Text>
                          <TextInput 
                          placeholder={"Meta del Cuatrenio"} 
                          placeholderTextColor="#9CAAC4" 
                          maxLength={10} style={styles.cuadrostext}
                          onChangeText={text => this.setState({Mcuatrenio:text})}/>
                        </View>
                        <View>
                          <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                          Nombre del Proyecto
                          </Text>
                          <TextInput 
                          placeholder={"Nombre del Proyecto"} 
                          placeholderTextColor="#9CAAC4" 
                          maxLength={10} style={styles.cuadrostext}
                          onChangeText={text => this.setState({Nombrep:text})}/>
                        </View>
                        <View>
                          <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                          Bpin del Proyecto
                          </Text>
                          <TextInput 
                          placeholder={"Bpin del Proyecto"} 
                          placeholderTextColor="#9CAAC4" 
                          maxLength={10} style={styles.cuadrostext}
                          onChangeText={text => this.setState({Bpin:text})}/>
                        </View>
                        <View>
                          <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                          O.D.S
                          </Text>
                          <Text style={styles.title}>
                            {selectedTask.Ods}
                          </Text>
                        </View>
                  <View style={styles.Taskheadertwo}>
                    <View style={styles.Tasksubheaderone}>
                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{ color: '#9CAAC4', fontSize: 15, fontWeight: '500' }}>
                        Meta Programada
                        </Text>
                      </View>
                      <View style={{  flexDirection: 'row', justifyContent: 'center', alignItems: 'center'  }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({isModalVisible: !isModalVisible});
                            this.props.navigation.navigate('Progresop')}}
                          style={styles.backButtonm}
                        >
                          <Text style={{ fontSize: 17, textAlign: 'center', color: '#000' }}>
                          2020
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <TouchableOpacity
                          onPress={() => {
                            this.setState({isModalVisible: !isModalVisible});
                            this.props.navigation.navigate('Progresop1')}}
                          style={styles.backButtonm}
                        >
                          <Text style={{ fontSize: 17, textAlign: 'center', color: '#000' }}>
                          2021
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{  flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <TouchableOpacity
                          onPress={() => {
                            this.setState({isModalVisible: !isModalVisible});
                            this.props.navigation.navigate('Progresop2')}}
                          style={styles.backButtonm}
                        >
                          <Text style={{ fontSize: 17, textAlign: 'center', color: '#000' }}>
                          2022
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <TouchableOpacity
                          onPress={() => {
                            this.setState({isModalVisible: !isModalVisible});
                            this.props.navigation.navigate('Progresop3')}}
                          style={styles.backButtonm}
                        >
                          <Text style={{ fontSize: 17, textAlign: 'center', color: '#000' }}>
                          2023
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.Tasksubheadertwo}>
                      <View style={{ flexDirection: 'row', justifyContent: 'center',alignItems: 'center'}}>
                      <Text style={{ color: '#9CAAC4', fontSize: 15, fontWeight: '500' }}>
                        Meta Ejecutada
                        </Text>
                      </View>
                      <View style={{  flexDirection: 'row', justifyContent: 'center', alignItems: 'center'  }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({isModalVisible: !isModalVisible});
                            this.props.navigation.navigate('Progresoe')}}
                          style={styles.backButtonm}
                        >
                          <Text style={{ fontSize: 17, textAlign: 'center', color: '#000' }}>
                          2020
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <TouchableOpacity
                          onPress={() => {
                            this.setState({isModalVisible: !isModalVisible});
                            this.props.navigation.navigate('Progresoe1')}}
                          style={styles.backButtonm}
                        >
                          <Text style={{ fontSize: 17, textAlign: 'center', color: '#000' }}>
                          2021
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{  flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <TouchableOpacity
                          onPress={() => {
                            this.setState({isModalVisible: !isModalVisible});
                            this.props.navigation.navigate('Progresoe2')}}
                          style={styles.backButtonm}
                        >
                          <Text style={{ fontSize: 17, textAlign: 'center', color: '#000' }}>
                          2022
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <TouchableOpacity
                          onPress={() => {
                            this.setState({isModalVisible: !isModalVisible});
                            this.props.navigation.navigate('Progresoe3')}}
                          style={styles.backButtonm}
                        >
                          <Text style={{ fontSize: 17, textAlign: 'center', color: '#000' }}>
                          2023
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.setState({
                              selectedMetaP:null,
                              isModalVisible: !isModalVisible,
                            });
                          }}
                          style={styles.backButton}
                        >
                          <Text style={{ fontSize: 18, textAlign: 'center', color: '#fff' }}>
                            Volver
                          </Text>
                        </TouchableOpacity>
                    </View> 
                  </ScrollView>
                </ScrollView>
              </Task>
            )}
                  <ScrollView>
                    <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Metas de producto:
                    </Text>
                    {this.props.navigation.getParam('Todoproducto').map(item => (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          selectedTask: item,
                          isModalVisible: true,
                        });
                    }}
                    key={item.key}
                    style={styles.taskListContent}
                    >
                      <View style={{ marginLeft: 13 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.meta}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                    </ScrollView>
          </ScrollView>
        </View>
    );
	}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#3280e4'
  },
  letterTitle:{
    fontSize: 20,
    color:'#000000',
    fontWeight: 'bold',
  },
  title:{
    textAlign:'justify',
    marginHorizontal: 10,
    marginTop: 20
  },
  letterSubtitle:{
    color:'#000000',
    margin: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  textInfo:{
    color:'#000000',
    margin: 8,
    fontSize: 18,
    textAlign: 'left',
  }, 
  taskListContent: {
    height: 80,
    width: Dimensions.get('window').width - 70,
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
  backButton: {
    backgroundColor: '#18eac2',
    width: 100,
    height: 38,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 5,
    justifyContent: 'center',
    marginRight: 20
  },
  backButtonm: {
    backgroundColor: '#CACFD2',
    width: Dimensions.get('window').width -280,
    height: 30,
    alignSelf: 'center',
    marginTop: 13,
    borderRadius: 5,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    elevation: 5,
  },
  sepeerator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#979797',
    alignSelf: 'center',
    marginVertical: 20,
  },
  notesContent: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#979797',
    alignSelf: 'center',
    marginVertical: 20,
  },
  title: {
    borderColor: '#5DD976',
    borderLeftWidth: 1,
    paddingLeft: 8,
    fontSize: 14.5,
  },
  cuadrostext:{
    height: 40,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth:.5
  },
  taskContainer: {
    flex: 1,
    flexDirection: 'column',
    width:  Dimensions.get('window').width -40,
    alignSelf: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    elevation: 5,
    padding: 22
  },
  Taskheaderone: {
    flex: 1,
  },
  Taskheadertwo: {
    flex: 1,
    flexDirection: 'row',
  },
  Tasksubheaderone: {
    flex: 1,
    alignItems: 'center'
  },
  Tasksubheadertwo: {
    flex: 1,
    alignItems: 'center'
  },
  subcontainer:{
    marginHorizontal: 25,
    marginVertical: 25,
    width:310,
    borderRadius: 20,
    backgroundColor: "#ffffff"
  },
  sepeerator1: {
    height: 1,
    marginTop:3,
    width: '95%',
    backgroundColor: '#3280e4',
    alignSelf: 'center',
  },
});