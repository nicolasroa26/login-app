

import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class TransporteO extends Component {
  state = {
    todoList: [{
      key: "1",
      proyecto: "XII. Proyectos que tengan por objeto el mejoramiento, mantenimiento y/o rehabilitación de vías terciarias. (Resolución nro. 09952 del 21 de diciembre de 2017, suscrita por el INVIAS). Tratándose de proyectos de inversión que tengan por objeto el mejoramiento, mantenimiento o rehabilitación de vías terciarias que sean susceptibles de ser viabilizados, priorizados y aprobados por el órgano colegiado de administración y decisión (OCAD) PAZ y cuando el proyecto de inversión presentado por la entidad facultada contemple:a. La realización de intervención de obras durables que estén orientadas a la atención de los puntos críticos, principalmente.b. Proponer ante el OCAD como entidad designada para la contratación de la interventoría al Instituto Nacional de Vías (INVIAS).Debe cumplir con los siguientes requisitos sectoriales para la viabilización:",
      requisitos: "- Certificado suscrito por el representante legal de la entidad territorial en el que conste que la intervención en la vía es competencia de la misma. Si la intervención en la vía es competencia de otra entidad, certificado suscrito por el representante legal de la entidad en el que se avale la intervención a realizar.\n- Descripción del tramo vial en términos de la matriz de asignación de puntajes para la priorización de las vías terciarias de un municipio o región, de conformidad con el CONPES 3857 de 2016. En caso de no contarse con el inventario vial se debe aplicar el esquema de priorización del INVIAS. \n- Localización esquemática de la vía con la ubicación de cada una de las obras existentes en el tramo a intervenir y de cada una de las obras que se va a ejecutar, acompañado de un documento en el que se realice una descripción de ellas. Lo anterior, debe ser aportado y suscrito por profesional competente con su respectiva matrícula profesional o acompañados de un certificado del representante legal o jefe de planeación de la entidad territorial o quien haga sus veces, en el que conste que los documentos o planos originales se encuentran debidamente firmados.\n- Formato del INVIAS de visita técnica de la vía a intervenir, debidamente diligenciado y suscrito por profesional competente con su respectiva matrícula profesional, en el que se deje constancia del conocimiento de la vía y que las obras propuestas son las requeridas para el funcionamiento de la misma. \n- Diseños típicos de las estructuras, cumpliendo con todas las exigencias técnicas que así lo ameriten, en las que se realicen: placa huella (única y exclusivamente en sitios críticos), intervenciones avaladas por el INVIAS, obras de drenaje, estructuras de contención y puentes de máximo 25 metros de largo, de conformidad con las guías del INVÍAS. Las anteriores intervenciones no pueden corresponder a obras en afirmado. \n- Proponer en la carta de presentación y solicitud de recursos como entidad pública designada para la contratación de la interventoría al Instituto Nacional de Vías (INVIAS). \n- Establecer dentro de los componentes del proyecto de inversión la complementación y ajustes de estudios y diseños base, lo cual debe reflejarse en el cronograma de actividades y en el presupuesto. En consecuencia, no podrán ejecutar otros componentes del proyecto hasta tanto se realice la complementación y ajustes de estudios y diseños base. \n- Certificación suscrita por el representante legal de la entidad que presenta el proyecto de inversión en la que se establezca que se identificó y analizó íntegramente la existencia de las áreas de influencia directas e indirectas del proyecto, de conformidad con lo dispuesto en el artículo 7 de la Ley 1682 de 2013. Adicionalmente se debe especificar en la mencionada certificación: \n- Que no existe condiciones especiales de tráfico, con relación a las condiciones de suelo y ambientales. \n- La no afectación a las redes y activos de servicios públicos, e infraestructura de la industria del petróleo, de tecnologías de la información y las comunicaciones. \n- La no intervención de inmuebles sobre los cuales recaigan medidas de protección al patrimonio de la población desplazada o restitución de tierras. \n- La existencia de títulos mineros en procesos de adjudicación, otorgados, existentes o en explotación. En todo caso, se deben adoptar las medidas pertinentes que eviten o mitiguen cualquier afectación de las señaladas. ",
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
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Requisitos:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.requisitos}
                    </Text>
                  </View>
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
            <View style = {{ flex: 1, paddingTop: Constants.statusBarHeight, backgroundColor: "#3280e4" }}>
              <ScrollView>
			  	<Text style={{ fontSize: 20, marginHorizontal: 12, marginBottom:10, fontWeight: 'bold', color:"#18eac2" }}>
					Proyectos:
                </Text>
                <View style = {{ marginBottom:30 }}>
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
  titlep: {
    borderColor: '#07FF',
    borderLeftWidth: 1,
    paddingLeft: 8,
    fontSize: 16,
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
});