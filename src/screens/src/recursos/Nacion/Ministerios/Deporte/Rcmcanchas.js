import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../../data/Context';
import { Task } from '../../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [
      {
      key: "1",
      proyecto: "PROYECTOS DE INFRAESTRURA DEPORTIVA Y RECREATIVA ( CANCHAS DE FÚTBOL, CANCHAS SINTÉTICAS Y CANCHAS MULTIFUNCIONALES)",
      requisitos: "1. REQUISITOS GENERALES\n1,1. Necesidad a atender\n1,2. Alcance del proyecto\n1,3. Infraestructura asociada\n1,4. Tipología general del proyecto\n1,5. Documentación\n2. REQUISITOS TECNICOS(El listado de documentos puede variar dependiendo del tipo y alcance de los proyectos)\n2,1. Carta de presentación del proyecto y solicitud de recursos\n2,2. Ficha de presentación del proyecto en la Metodología General Ajustada – MGA\n2,3. Constancia de radicación en el banco de proyectos del municipio y/o departamento de ubicación del proyecto.\n2,4. Certificado del jefe de planeación municipal y/o departamental sobre la viabilidad y conveniencia del proyecto, donde indique que el proyecto está incluido en el plan de desarrollo respectivo y se ajusta al plan de ordenamiento territorial, con su nombre e ítem de identificación del proyecto\n2,5. Certificado de compromiso de sostenibilidad del proyecto expedido por parte de la autoridad competente\n2,6. Certificado de licencia ambiental (requisito minimo si se requiere).\n2,7. Acta de concertación con la comunidad\n2,8. Levantamiento topográfico. (requisito minimo)\n2,9. Estudios de suelos firmados por el profesional con número de tarjeta profesional responsable de los resultados\n2,10. Plano de localización general.\n2,11. Planos arquitectónicos firmados por el arquitecto con número de tarjeta profesional, responsable de los diseños. (requisito minimo)\n2,12. Planos estructurales completos debidamente firmados por el ingeniero calculista diseñador con matricula profesional, incluye estructuras en concreto y metalicas, detalles constructivos y descripcion de sistema constructivo detalles de elementos estructurales y no estructurales planos de taller, memorias de calculo estructural. (requisito minimo)\n2,13. Planos hidráulicos, firmados por el profesional responsable de los diseños y cálculo,con detalles constructivos, firmados por el profesional responsable de los diseños y cálculo. (requisito minimo)\n2,14. Planos sanitarios y/o de desagües aguas lluvias, firmados por el profesional responsable de los diseños y cálculo con detalles constructivos, firmados por el profesional responsable de los diseños y cálculo.(requisito minimo) \n2,15. Planos eléctricos, firmados por el profesional responsable de los diseños y cálculo con detalles constructivos, firmados por el profesional responsable de los diseños y cálculo. (requisito minimo)\n2,16. Presupuesto detallado, incluye especificaciones tecnicas y análisis de precios unitarios Incluir memoria de cálculo de las cantidades de obras. (requisito minimo)\n2,17. Cronograma de actividades y flujo de fondos.\n2,18. Registro fotográfico a color del estado actual.\n2,19. Escritura pública de propiedad del predio. (requisito minimo)\n2,20. Certificado de tradición y libertad del predio\n2,21. Licencia de construcción y/o de ocupación del espacio público. (requisito minimo)\n2,22. Certificación juramentada de que el proyecto no ha sido presentado a otra entidad del estado.\n2,23. Carta o cedula catastral. (requisito minimo)\n2,24. Certificado del estrato y presencia de población vulnerable en la zona (SISBEN) emitido por la oficina de Planeación de la Entidad ejecutora. (requisito minimo)",
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
                <Text style={{ fontSize: 20, marginHorizontal: 12, marginBottom:10, fontWeight: 'bold', color: "#18eac2" }}>
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
                          <Text style={{ color: '#7c7f7f', fontSize: 15, fontWeight: '700' }}>
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