import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class Tecnología extends Component {
  state = {
    todoList: [{
      key: "1",
      proyecto: "I. Proyectos de infraestructura de conectividad a internet en sedes públicas y oficiales, así como proyectos de entrega de terminales.El documento técnico de que trata el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición: ",
      requisitos: "- Infraestructura eléctrica en sitio y del fluido eléctrico a instalar o existente, indicando si es o será proporcionado mediante la red nacional de interconexión o a través de medios alternativos, así como la existencia de fuentes de energía de respaldo para la red eléctrica\n- Infraestructura de redes TIC a instalar y existentes\n- Las estaciones de trabajo a instalar o existentes. Para el caso de las instalaciones existentes indicar cuántas permiten la funcionalidad del servicio de conectividad a internet",
    },{
      key: "2",
      proyecto: "II. Proyectos de entrega de terminales que beneficien sedes educativas oficiales de educación básica y media.El documento técnico de que trata el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición: ",
      requisitos: "- El componente de apropiación TIC para la comunidad Educativa, con su respectivo plan de apropiación, las metodologías y estrategias para la transferencia de conocimiento y el desarrollo de habilidades TIC\n- La inclusión de contenidos educativos digitales online u offline\n- Análisis de pertinencia de las terminales a adquirir para su uso en educación, así como del mobiliario o adecuaciones de infraestructura requeridos para su uso y almacenamiento\n- Censo de la matricula existente, computadores y tabletas por sede, que permita identificar el número de estudiantes por terminal en la entidad territorial y el aporte del proyecto en la relación de 2 niños por terminal",
    },{
      key: "3",
      proyecto: "III.  Proyectos que contemplen el uso y apropiación de las TIC en el aprovechamiento de la infraestructura existente en materia de acceso comunitario a Internet. El documento técnico de que trata el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición",
      requisitos: "- Identificación del punto de acceso comunitario a impactar, y el plan de apropiación propuesto que contemple la metodología y estrategia para la transferencia de conocimiento y el desarrollo de habilidades TIC",
    },{
      key: "4",
      proyecto: "IV. Proyectos de radiodifusión sonora de interés público que financien equipos para los estudios de radiodifusión y sistema de enlace, declaraciones de conformidad de emisiones radioeléctricas e infraestructura del Sistema Irradiante Antena y protecciones para estaciones de interés público en aquellas zonas donde no exista o para viabilidades autorizadas o para concesiones otorgadas.",
      requisitos: "- Copia de la viabilidad de la concesión o copia de la concesión para prestar un servicio público de radiodifusión sonora, expedida por el Ministerio de Tecnologías de la Información y las Comunicaciones\n- El certificado de sostenibilidad de que trata el numeral 10 del artículo 4.1.2.1.3.  del presente Acuerdo debe incluir también la forma en la que se realizará el pago por el uso del espectro radioeléctrico.",
    },{
      key: "5",
      proyecto: "V. Proyectos que incluyan dentro de sus componentes el desarrollo y adquisiciones de aplicaciones, plataformas y contenido.El documento técnico de que trata el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición: ",
      requisitos: "- El tipo de desarrollo, la pertinencia, el impacto esperado, la identificación de posibles riesgos y el proceso de selección de los beneficiarios\n- Inventario de propiedad intelectual de los insumos y de todos los productos y servicios que se deriven del proyecto, incluyendo los documentos de acuerdos allí generados\n- El plan de apropiación propuesto con la metodología y la estrategia para la transferencia de conocimiento",
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