import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class Iambiente extends Component {
  state = {
    todoList: [{
      key: "1",
      metab: "Incrementar el puntaje de sostenibilidad de Cundinamarca en el Índice de Ciudades Modernas.",
      indicadorb: "Puntaje de sostenibilidad de Cundinamarca en el Índice de Ciudades Modernas",
      resultadob: "52.00",
    }],
    metalist: [{
      key: "2",
      metap: "Cofinanciar la construcción de la PTAR Canoas en cumplimiento de la sentencia 2001-90479 de marzo 28 de 2014 del Consejo de Estado.",
      indicadorp:"Recursos aportados",
      resultadop:"34,269,000,000"
    },{
      key: "3",
      metap: "Implementar 1 instrumento para la articulación de la inversión de áreas de importancia estratégica para la conservación de recursos hídricos ( art. 111 de la ley 99 de 1993).",
      indicadorp: "Instrumento de articulación implementado",
      resultadop: "1",
    },{
      key: "4",
      metap: "Implementar un proyecto articulado del POMCA del Río Bogotá.",
      indicadorp:"Proyecto del POMCA del Río Bogotá articulado",
      resultadop:"1"
    }],
    thirdlist:[{
      key: "5",
      metab: "Reducir la participación nacional de la región en emisiones de CO2.",
      indicadorb: "Participación nacional de la región en emisiones de CO2.",
      resultadob: "12.00%",
    }],
    fourthlist: [{
      key: "6",
      metap: "Ejecutar el plan de acción de crisis climatica para la región Cundinamarca  - Bogotá.",
      indicadorp: "Plan de acción de cambio climático implementado",
      resultadop: "1",
    },{
      key: "7",
      metap: "Implementar una estrategia tendiente a mejorar la calidad del aire en la región Cundinamarca - Bogotá. ",
      indicadorp: "Estrategia de mejoramiento de la calidad del aire implementado",
      resultadop: "1"
    }],
    isModalVisible: false,
    selectedTask: null,
    productoTask: null
  };

  render() {
    const {
      state: {
        metalist,
        todoList,
        thirdlist,
        fourthlist,
        isModalVisible,
        productoTask,
        selectedTask
      },
    } = this;

    return (
      <Context.Consumer>
        {() => (
          <>
          {selectedTask !== null && (
              <Task isModalVisible={isModalVisible}>
                <View style={styles.taskContainer}>
                  <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                    Meta de Bienestar
                  </Text>
                  <Text style={styles.title}>
                    {selectedTask.metab}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                  </View>
                  <View style={styles.notesContent} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Indicador de Bienestar
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.indicadorb}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Resultado esperado a 2024
                    </Text>
                    <Text style={styles.title}>
                    {selectedTask.resultadob}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          selectedTask:null,
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
            {productoTask !== null && (
              <Task isModalVisible={isModalVisible}>
                <View style={styles.taskContainer}>
                  <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                    Meta de producto:
                  </Text>
                  <Text style={styles.title}>
                    {productoTask.metap}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                  </View>
                  <View style={styles.notesContent} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Indicador de producto
                    </Text>
                    <Text style={styles.title}>
                      {productoTask.indicadorp}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Resultado esperado a 2024
                    </Text>
                    <Text style={styles.title}>
                    {productoTask.resultadop}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          productoTask:null,
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
            <View style = {{ flex: 1, paddingTop: Constants.statusBarHeight, backgroundColor: "#3280e4"  }}>
              <ScrollView style = {styles.subcontainer}>
                <View style = {{ marginBottom:30 }}>
                  <Text style={{ color: '#9CAAC4', marginLeft:10 ,fontSize: 16, fontWeight: '600' }}>
                    Programa:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, }}>
                  Región verde, Región de Vida
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Pacto por el Agua
				  </Text>
          <View style={styles.sepeerator1}/>
                  <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de bienestar:
                  </Text>
                  {todoList.map(item => (
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
                            {item.metab}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                    <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de producto:
                    </Text>
                    {metalist.map(item => (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          productoTask: item,
                          isModalVisible: true,
                        });
                    }}
                    key={item.key}
                    style={styles.taskListContent}
                    >
                      <View style={{ marginLeft: 13 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metap}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                </View>
                <View style = {{ backgroundColor: '#ffffff', marginBottom:30 }}>
                  <Text style={{ color: '#9CAAC4', marginLeft:10 ,fontSize: 16, fontWeight: '600' }}>
                    Programa:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, }}>
                  Región verde, Región de Vida
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Territorio que respira
				  </Text>
          <View style={styles.sepeerator1}/>
                  <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de bienestar:
                  </Text>
                  {thirdlist.map(item => (
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
                            {item.metab}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                    <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de producto:
                    </Text>
                    {fourthlist.map(item => (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          productoTask: item,
                          isModalVisible: true,
                        });
                    }}
                    key={item.key}
                    style={styles.taskListContent}
                    >
                      <View style={{ marginLeft: 13 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metap}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                </View>
              </ScrollView>
            </View>
          </>
        )}
      </Context.Consumer>
    );
  }
}

const styles = StyleSheet.create({
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
    marginRight: 20,
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
    fontSize: 16,
  },
  taskContainer: {
    height: Dimensions.get('window').height -80,
    width: Dimensions.get('window').width - 10,
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