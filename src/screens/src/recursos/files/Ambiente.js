import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class Ambiente extends Component {
  state = {
    todoList: [{
      key: "1",
      proyecto: "I. Proyectos de i) gestión integral de la biodiversidad y sus servicios ecosistémicos; ii) lucha contra la degradación de tierras, desertificación y la sequía; iii) gestión integral del recurso hídrico; iv) planes de manejo, uso y conservación del Sistema Nacional de Áreas Protegidas, v) mejora del conocimiento del riesgo de origen natural, socionatural o antrópico no intencional y su incorporación en instrumentos de planificación; vi) monitoreo de amenazas de origen natural o socionatural; vii) reducción de la condición de riesgo de desastre; viii) análisis de vulnerabilidad de la biodiversidad y sus servicios ecosistémicos al cambio climático e implementación de acciones de adaptación al cambio climático; ix) reducción de emisiones de gases efecto invernadero por deforestación y degradación de bosques; x) proyectos que permitan la captura de carbono, xi) control y prevención de la contaminación ambiental:",
      requisitos: "- Certificado expedido por la dependencia competente de la autoridad ambiental en el que se sustente la coherencia del proyecto con sus instrumentos de planificación, así:\n- Si el proyecto se va a ejecutar en jurisdicción de las Corporaciones Autónomas Regionales o de Desarrollo Sostenible, serán estas entidades las competentes para certificar la coherencia del proyecto con el Plan de Gestión Ambiental Regional (PGAR) y el Plan de Acción cuatrienal de la entidad\n- Si el proyecto se va a ejecutar en jurisdicción de autoridades ambientales de grandes centros urbanos o de establecimientos públicos que desempeñan funciones ambientales urbanas, según lo establecido en el artículo 66 de la Ley 99 de 1993 y en el artículo 13 de la Ley 768 de 2002 respectivamente, serán estas entidades las competentes para expedir la certificación en el marco de sus instrumentos de planificación de largo y mediano plazo vigentes\n- Si el proyecto se va a ejecutar al interior de un área protegida pública del Sistema Nacional de Áreas Protegidas, será la Unidad Administrativa Especial Parques Naturales de Colombia o la Corporación Autónoma Regional o de Desarrollo Sostenible según corresponda, de acuerdo con las competencias establecidas en el Decreto 1076 de 2015, quien certifique la coherencia del proyecto con el Plan de Manejo del Área del Sistema de Parques Nacionales Naturales de Colombia respectivo\n- Cuando el proyecto implique intervención física sobre predios, documento que contenga relación detallada de los propietarios y número de documento de identidad, la vereda a la que pertenece el predio, nombre o dirección de los predios y la proyección de la extensión a intervenir en el proyecto, así como la autorización de cada uno de los propietarios por medio de la cual permite la ejecución de las actividades u obras previstas en el proyecto. Adicionalmente, cuando medie un contrato de arrendamiento o comodato sobre un inmueble, autorización por parte del propietario por medio de la cual permite la ejecución de las actividades u obras previstas en el proyecto.",
    }],
    isModalVisible: false,
    selectedTask: null
  };

  render() {
    const {
      state: {
        todoList,
        isModalVisible,
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
                    Nombre de Proyecto
                  </Text>
                  <Text style={styles.titlep}>
                    {selectedTask.proyecto}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                  </View>
                  <View style={styles.notesContent} />
                  <ScrollView>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Requisitos:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.requisitos}
                    </Text>
                  </ScrollView>
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
            <View style = {{ flex: 1, paddingTop: Constants.statusBarHeight, backgroundColor: "#3280e4"  }}>
              <ScrollView>
			  	<Text style={{ fontSize: 20, marginHorizontal: 12, marginBottom:10, fontWeight: 'bold', color:"#18eac2"  }}>
					Proyectos:
                </Text>
                <View style = {{ marginBottom:30}}>
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
                          <Text style={{ color: '#7c7f7f', marginVertical:5, fontSize: 12, fontWeight: '700' }}>
                            {item.proyecto}
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
  backButton: {
    backgroundColor: '#2E66E7',
    width: 200,
    height: 38,
    alignSelf: 'center',
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
  titlep: {
    borderColor: '#07FF',
    borderLeftWidth: 1,
    paddingLeft: 8,
    fontSize: 16,
  },
  title: {
    borderColor: '#5DD976',
    borderLeftWidth: 1,
    paddingLeft: 7,
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
});