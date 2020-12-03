import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class Habitat extends Component {
  state = {
    BV1bList: [{
      key: "1",
      metab: "Reducir el déficit cualitativo de vivienda en el departamento.",
      indicadorb: "Déficit de vivienda cualitativo",
      resultadob: "121.262",
    }],
    BV2bList: [{
      key: "2",
      metab: "Reducir el déficit cuantitativo de vivienda en el departamento.",
      indicadorb: "Déficit de vivienda cuantitativo",
      resultadob: "84.401",
    }],
    BV1plist: [{
      key: "3",
      metap: "Mejorar 6.000 viviendas urbanas y  rurales con enfoque diferencial y territorial",
      indicadorp: "Número de viviendas mejoradas",
      resultadop: "11.963 - 6.000 Nuevas",
    },{
      key: "4",
      metap: "Mejorar integralmente 10 barrios y entornos urbanos y rurales en los municipios del departamento",
      indicadop: "Número de barrios y entornos beneficiados con obras de mejoramiento",
      resultadop: "10",
    },{
      key: "5",
      metap: "Ejecutar 10 procesos de acompañamiento social en las intervenciones de mejoramiento de condiciones de habitalidad de viviendas y entornos",
      indicadop: "Procesos  acompañados",
      resultadop: "10",
    }],
    BV2plist: [{
      key: "6",
      metap: "Apoyar la construcción y adquisición de 300 viviendas urbanas y rurales para Población Víctima del Conflicto Armado en el Departamento de Cundinamarca",
      indicadop: "Número de viviendas adquiridas por la población Victima",
      resultadop: "300",
    },{
      key: "7",
      metap: "Ejecutar 10 procesos de acompañamiento social para la integralidad de las intervenciones de construcción de vivienda",
      indicadop: "Número de procesos de acompañamiento social",
      resultadop: "10",
    },{
      key: "8",
      metap: "Apoyar la adquisición de 4.700 viviendas rurales y urbanas VIS y VIP en el Departamento de Cundinamarca",
      indicadop: "Número de viviendas adquiridas",
      resultadop: "9.652 - 4.700  Nuevas",
    },{
      key: "9",
      metap: "Apoyar la adquisición de 300 viviendas urbanas y rurales en sitio propio en el departamento",
      indicadop: "Numero de viviendas adquiridas",
      resultadop: "300",
    },{
      key: "10",
      metap: "Apoyar técnicamente 10 procesos de titulación y legalización de predios poseídos de manera informal con vivienda de interés social y prioritario",
      indicadop: "Número de procesos de titulación apoyados",
      resultadop: "10",
    },{
      key: "11",
      metap: "Apoyar la reubicación de 300 familias de las zonas de alto riesgo no mitigable",
      indicadop: "Número de familias reubicadas",
      resultadop: "1.036 - 300 Nuevas",
    },{
      key: "12",
      metap: "Apoyar técnicamente procesos de terminación de 5 proyectos de vivienda inconclusos de iniciativa comunitaria en el departamento",
      indicadop: "Número de procesos apoyados",
      resultadop: "8 - 5 Nuevos",
    },{
      key: "13",
      metap: "Implementar al 50% la Política de Hábitat y Vivienda del departamento",
      indicadop: "Avance en la implementación de política",
      resultadop: "50,00%",
    }],
    isModalVisible: false,
    selectedTask: null,
    productoTask: null
  };

  render() {
    const {
      state: {
        BV1bList,
        BV2bList,
        BV1plist,
        BV2plist,
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
                  Un buen vivir
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Entornos para la felicidad
				  </Text>
          <View style={styles.sepeerator1}/>
                  <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de bienestar:
                  </Text>
                  {BV1bList.map(item => (
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
                    {BV1plist.map(item => (
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
                  Un buen vivir
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Entornos para la felicidad
				  </Text>
          <View style={styles.sepeerator1}/>
                  <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de bienestar:
                  </Text>
                  {BV2bList.map(item => (
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
                    {BV2plist.map(item => (
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