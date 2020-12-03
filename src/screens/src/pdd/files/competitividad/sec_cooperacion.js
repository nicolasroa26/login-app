import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class CCooperacion extends Component {
  state = {
    Nccblist: [{
      key: "1",
      metab: "Aumentar el subpilar (Dinámica Empresarial) del Índice  Departamental de Competitividad",
      indicadorb: "Puntaje de Cundinamarca en el subpilar de Dinámica Empresarial del Índice  Departamental de Competitividad",
      resultadob: "5,50",
    }],
    Nccplist: [{
      key: "2",
      metap: "Implementar la estrategia de internacionalización del departamento.",
      indicadorp:"Estrategia de internacionalización implementada",
      resultadop:"1"
    },{
      key: "3",
      metap: "Mantener 2 líneas efectivas de cooperación nacional e Internacional",
      indicadorp:"Número de líneas de Cooperación",
      resultadop:"2"
    }],
    Ncdblist: [{
      key: "4",
      metab: "Alcanzar el puesto 7 en el índice de competitividad turística regional de Colombia",
      indicadorb: "Puesto en el Ranking índice de competitividad  turística regional de Colombia - ICTRC",
      resultadob: "7",
    }],
    Ncdplist: [{
      key: "5",
      metap: "Implementar 1 estrategia de promoción de la marca territorial del departamento (Cundinamarca, EL DORADO !LA LEYENDA VIVE!)",
      indicadorp:"Estrategia de promoción de la marca territorial implementada",
      resultadop:"1"
    },{  
      key: "6",
      metap: "Realizar 2 ferias Expo Cundinamarca",
      indicadorp:"Número de ferias realizadas",
      resultadop:"2"
    }],
    isModalVisible: false,
    selectedTask: null,
    productoTask: null
  };

  render() {
    const {
      state: {
        Nccblist,
        Nccplist,
        Ncdblist,
        Ncdplist,
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
                  Nuevos mercados + oportunidades
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Cundinamarca crea, transforma y progresa
				  </Text>
          <View style={styles.sepeerator1}/>
                  <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de bienestar:
                  </Text>
                  {Nccblist.map(item => (
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
                    {Nccplist.map(item => (
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
                  Nuevos mercados + oportunidades
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Cundinamarca del mundo y para el mundo
				  </Text>
          <View style={styles.sepeerator1}/>
                  <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de bienestar:
                  </Text>
                  {Ncdblist.map(item => (
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
                    {Ncdplist.map(item => (
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