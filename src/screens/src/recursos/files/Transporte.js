import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class Transporte extends Component {
  state = {
    todoList: [{
      key: "1",
      proyecto: "I. Proyectos de construcción, mantenimiento, adecuación, mejoramiento o rehabilitación de la infraestructura de transporte por carretera, fluvial, aeroportuaria, férrea, logística especializada - ILE, urbana, o por cable. Los estudios y diseños técnicos necesarios de acuerdo con los artículos 7 y 12 de la Ley 1682 de 2013, así como los siguientes, cuando aplique.",
      requisitos: "- Localización exacta de la obra.\n- Estudio hidrológico e hidráulico\n- Estudios geológico y geotécnico\n- Estudio de suelos\n- Diseños de estructuras\n- Planos de construcción generales y de detalle, como planta, perfiles, cortes, estructurales y obras de drenaje\n- Proceso constructivo del proyecto\n- Estudios ambientales de conformidad con la Ley 1682 de 2013 (literal c del artículo 7 y artículo 39) y el costeo para su implementación\n- Plan de manejo de tránsito y el costeo para su implementación. ",
    },{
      key: "2",
      proyecto: "II. Proyectos de construcción, mantenimiento, adecuación, mejoramiento o rehabilitación de infraestructura vial. Además de los requisitos señalados en el numeral I del presente anexo, los siguientes, cuando aplique:",
      requisitos: "- Certificado en donde conste que la intervención en la vía es competencia de la entidad. Si la intervención en las vías es competencia de otra entidad, documento que avale la intervención a realizar\n- Levantamiento topográfico\n- diseño geométrico para vías nuevas o proyectos que cambien alineamiento de la vía\n- estudio de tránsito\n- Diseño de estructura de pavimento\n- Cuando no se intervengan estructuras existentes, los chequeos técnicos pertinentes que garanticen la estabilidad y funcionalidad durante la vía útil proyectada, presentando la revisión de a capacidad hidráulica, estructural o funcional de las estructuras\n- Estudios y diseños definitivos de los puntos críticos incluidos dentro del tramo del proyecto a presentar, puntos críticos del orden geológico, geotécnico, de suelos, hidráulico, drenaje, entre otros\n- Estudios y diseños definitivos de estructuras especiales como puentes y túneles\n- Para proyectos que incluyen vías urbanas o centros poblados, se debe identificar y presentar en concordancia con el artículo 7 de la Ley 1682 de 2013, cuando aplique, certificación en la que se especifique:\n- Las redes y activos de servicios públicos, los activos e infraestructura de la industria del petróleo y la infraestructura de tecnologías de la información y las comunicaciones\n- Los inmuebles sobre los cuales recaigan medidas de protección al patrimonio de la población desplazada o restitución de tierras\n- Títulos mineros en procesos de adjudicación, otorgados, existentes o en explotación\n- Para proyectos de vías urbanas, certificación de que las vías no están siendo intervenidas con otro tipo de obras. En caso contrario, especificar que las características de la sobras son concordantes con el proyecto de inversión y con qué fuentes de recursos están siendo ejecutadas\n- Certificado que la vía a intervenir cuenta con redes de servicios públicos en buen estado y que no se planean intervenir\n- Esquema de localización o certificación de la ubicación de las fuentes de materiales que van a realizar y garanticen el suministro con las distancias de acarreo\n- Para vías primarias, certificado en el que conste que la vía está acorde con el Plan de Adaptación al Cambio Climático de la Red Vial Primaria de Colombia\n- Para vías terciarias, en las entidades territoriales donde exista inventario vial, certificación del representante legal en el cual señale que la vía a intervenir fue priorizada mediante la metodología señalada en el CONPES 3857\n- Caracterización del tramo vial, de acuerdo con lo dispuesto en las Resoluciones 1860 de 2013 y 1067 de 2015 del Ministerio de Transporte, como uno de los componentes del proyecto de inversión. En caso de que el tramo ya haya sido caracterizado o se está tramitando su financiación, la entidad certificará dicha circunstancia",
    },{
      key: "3",
      proyecto: "III. Proyectos de infraestructura de transporte fluvial como mantenimiento de muelles y terminales fluviales, encauzamiento y mantenimiento de la red fluvial navegable; protección y defensa sobre la infraestructura de transporte fluvial; construcción de muelles y malecones. Además de los requisitos señalados en el numeral I del presente anexo, los siguientes, cuando aplique:",
      requisitos: "- Estudios geomorfológico e hidráulicos fluviales\n- Estudios de demanda para proyectos de infraestructura portuaria y de navegabilidad\n- Análisis de riesgo hidráulico de las obras a construir\n- Para proyectos en el río Magdalena, certificado expedido por CORMAGDALENA en el cual conste que el proyecto fluvial en el río Magdalena está acorde con su plan de acción",
    },{
      key: "4",
      proyecto: "IV. Proyectos de infraestructura aeroportuaria que comprendan construcción, mantenimiento, adecuación, mejoramiento, rehabilitación de pistas, plataformas terminales para carga y pasajeros, cerramientos, calles de rodaje, hangares, plataformas, torres de control, cuarteles de bomberos, zonas de seguridad y demás infraestructura complementaría, según lo especificado en los Reglamentos Aeronáuticos de Colombia.Además de los requisitos señalados en el numeral I del presente anexo, los siguientes, cuando aplique:",
      requisitos: "- Estudios de localización, diseño y factibilidad de la plataforma logística, q e incluya la determinación y caracterización de la oferta y demanda actual y futura de servicios logísticos en el área de influencia, y la conceptualización de una solución específica de plataforma logística\n- Estructuración técnica, legal y financiera de la plataforma logística que incluya el modelo de gestión y la viabilidad de la unidades de negocio del proyecto",
    },{
      key: "5",
      proyecto: "V. Proyectos de infraestructura férrea y puesta en marcha de proyectos férreos de cara y pasajeros.Además de los requisitos señalados en el numeral I del presente anexo, los siguientes, cuando aplique:",
      requisitos: "- Levantamiento tipográfico\n- Estudio del diseño geométrico del alineamiento que contenga:\n- Trazado de líneas en planta y perfil\n- Secciones transversales\n- Diagrama de peraltes\n- Incluir desvíos, apartaderos y patios de maniobras\n- Diseños de la infraestructura y la superestructura de vía\n- Diseño de obras especiales como puentes, túneles, tratamiento de taludes\n- Señalización de vía\n- Estudio de seguridad en la vía, que incluya pasos de nivel\n- Estudio de equipos a utilizar como material rodante y equipos de vía",
    },{
        key: "6",
        proyecto: "VI. Proyectos de infraestructura logística especializada (ILE), según el artículo 87 de la Ley 1450 de 2011.Además de los requisitos señalados en el numeral I del presente anexo, los siguientes, cuando aplique:",
        requisitos: "- Estudios de localización, diseño y factibilidad de la plataforma logística, q e incluya la determinación y caracterización de la oferta y demanda actual y futura de servicios logísticos en el área de influencia, y la conceptualización de una solución específica de plataforma logística",
    },{
        key: "7",
        proyecto: "VII. Proyectos de transporte urbano.Además de los requisitos señalados en el numeral I del presente anexo, los siguientes, cuando aplique:",
        requisitos: "- Estudio de tránsito\n- Certificado de que la ubicación del proyecto no está siendo intervenida, en caso contrario debe especificar qué tipo de obras se llevan a cabo y con qué fuentes de recursos están siendo financiadas\n- Cuando no se intervengan estructuras existentes, los chequeos técnicos pertinentes que garanticen la estabilidad y funcionalidad durante la vida útil del proyecto",
    },{
        key: "8",
        proyecto: "VIII. Proyectos de infraestructura por cable.Además de los requisitos señalados en el numeral I del presente anexo, se debe tener en cuenta la reglamentación establecida en el título 5 del Decreto 1079 de 2015 y en particular las siguientes condiciones, cuando aplique:",
        requisitos: "- Zona de influencia\n- Análisis de a demanda de viajeros y proyección a 15 años\n- Sistema tecnológico y descripción del mismo\n- Costo de operación\n- Análisis de seguridad de equipos y protección de usuarios",
    },{
        key: "9",
        proyecto: "IX. Proyectos d e transporte urbanos que pertenezcan a la categoría de Sistemas Estratégicos de Transporte (SETP) y Sistemas de Transporte Masivo (SITM).De conformidad con la Ley 310 de 1996 y con el artículo 132 de la Ley 1450 de 2011, modificado por el artículo 32 de la Ley 1753 de 2015, las entidades territoriales podrán solicitar al OCAD las apropiaciones que considere necesarias hasta el monto señalado en los documentos CONPES, para suscribir el convenio de cofinanciación o los otrosíes correspondientes al mismo. Para ello debe adjuntar, adicional a los requisitos establecidos en el artículo 4.1.2.1.1. del presente Acuerdo y a los requisitos señalados en los numerales I y II del presente anexo, lo siguiente, cuando aplique:",
        requisitos: "- Para SITM, documentos en el que se señale los números de los documentos CONPES en los que el proyecto fue declarado de importancia estratégica para el país\n- Para proyectos del SETP, el decreto municipal o distrital de adopción del Sistema\n- Certificado de la constitución de un ente gestor, que será el titular del SETP o el SITM",
    },{
        key: "10",
        proyecto: "X. Proyectos de construcción, mantenimiento, adecuación, mejoramiento de terminales de transporte.Además de los requisitos señalados en el numeral I del presente anexo, se debe presentar lo siguiente, cuando aplique:",
        requisitos: "- Certificado expedido por la entidad territorial donde se va a ejecutar el proyecto en el cal conste que el mismo cumple con las condiciones y requisitos establecidos en los artículos 2.2.1.4.10.1 y subsiguientes del Decreto 1079 de 2015\n- Comunicaciones del ministerio de Transporte en el cual se señale que condiciones técnica de la infraestructura del proyecto cumplen con los estándares mínimos establecidos para terminales de transporte\n- Comunicaciones del municipio o distrito en el cual acepte la implantación del proyecto en su territorio",
    },{
        key: "11",
        proyecto: "XI. Proyectos destinados a la prevención de accidentes y atención en seguridad vial",
        requisitos: "- Certificado del representante legal de la entidad territorial en la que se va a ejecutar el proyecto, en el cual conste que el proyecto está en concordancia con el Plan Nacional de Seguridad Vial",

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