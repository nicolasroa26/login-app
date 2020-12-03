import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class Iplaneacion extends Component {
  state = {
    todoList: [{
      key: "1",
      metab: "Alcanzar el 100% de actualización de los indicadores regionales.",
      indicadorb: "Actualización de los indicadores regionales.",
      resultadob: "100%",
    }],
    metalist: [{
      key: "2",
      metap: "Mantener actualizado el 100% de la Infraestructura de Datos Espaciales Regional.",
      indicadorp:"Infraestructura de Datos Espaciales Regional actualizada",
      resultadop:"100%"
    }],
    thirdlist:[{
      key: "3",
      metab: "Contribuir en la implementación de instrumentos de planeación del territorio en los 116 municipios.",
      indicadorb:"Municipios con  instrumentos de planeación del territorio implementados",
      resultadob:"116"
    }],
    fourthlist: [{
      key: "4",
      metap: "Implementar una estrategia integral de estructuración de proyectos en el área de influencia del corredor Regiotram de occidente.",
      indicadorp:"Estrategia implementada",
      resultadop:"1"
    },{
      key: "5",
      metap: "Actualizar el 100% de la cartografía básica y temática de los municipios priorizados, requerida para los procesos de planificación y ordenamiento.",
      indicadorp:"Número de municipios con cartografía básica y temática actualizada",
      resultadop:"100"
    },{
      key: "6",
      metap: "Cofinanciar 25 municipios del departamento en los procesos de revisión y ajuste de sus planes de ordenamiento territorial o estudios básicos de gestión del riesgo. ",
      indicadorp: "Municipios cofinanciados ",
      resultadop: "87\n25 Nuevos",
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
            <View style = {{ flex: 1, paddingTop: Constants.statusBarHeight, backgroundColor: "#3280e4" }}>
              <ScrollView style = {styles.subcontainer}>
                <View style = {{ marginBottom:30 }}>
                  <Text style={{ color: '#9CAAC4', marginLeft:10 ,fontSize: 16, fontWeight: '600' }}>
                    Programa:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, }}>
                  Región, un territorio de todos
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Juntos somos imparables
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
                  Región, un territorio de todos
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Territorio con sentido
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