import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class Deporte extends Component {
  state = {
    todoList: [{
      key: "1",
      proyecto: "I. Proyectos de dotación, construcción, reconstrucción o mejoramiento de infraestructura de instituciones educativas oficiales en los niveles de básica y media.",
      requisitos: "- Certificado en el que conste la creación o el funcionamiento actual de la sede educativa oficial, expedido por la secretaría de educación de la entidad territorial certificada\n- Cuando el objeto del proyecto busque la ampliación de la cobertura, certificado de la secretaría de educación de la respectiva entidad territorial certificada en el que se indique la planta docente y administrativa que prestará el servicio en la infraestructura generada\n- Certificado de la secretaría de educación de la entidad territorial certificada en el que conste que los planos arquitectónicos que soportan el proyecto están acordes con la NTC 4595 de 2015, y las guías de estándares establecidas por el Ministerio de Educación Nacional en la Resolución 10281 de 2016\n- Diagnóstico detallado de la disponibilidad y uso de la dotación actual que soporte la necesidad del proyecto. Cuando el proyecto incluya dentro de sus componentes la compra de mobiliario y equipamiento escolar, debe indicarse, la relación específica del número de unidades a adquirir por cada tipo de bien, la cual debe relacionarse con el número de aulas y espacios complementarios del establecimiento educativo a dotar, de acuerdo con las especificaciones técnicas señaladas por el Ministerio de Educación Nacional y las guías de estándares de la Resolución 21483 de 2015\n- En el caso de ser una intervención en una edificación en uso, el plan de contingencia para garantizar el funcionamiento del establecimiento educativo durante la ejecución del proyecto. El mencionado plan debe contemplar los mecanismos para garantizar las condiciones ambientales, condiciones de salubridad, condiciones de seguridad, idoneidad e integridad de los estudiantes en los espacios físicos temporales que se designen, de manera que no se afecte la prestación del servicio y que no impacte negativamente la permanencia de los estudiantes",
    },{
      key: "2",
      proyecto: "II. Proyectos de construcción, reconstrucción, mejoramiento de infraestructura física y proyectos de infraestructura tecnológica y equipamiento de instituciones de educación superior",
      requisitos: "- Concepto favorable del Consejo Superior Universitario o del Consejo Directivo en donde conste que el proyecto está formulado con las políticas contenidas en el plan de desarrollo de la institución de educación superior\n- Cuando el proyecto incluya dotación de laboratorios y medios educativos:\n- Diagnóstico detallado de la disponibilidad y uso de los materiales que den cuenta de las necesidades de dotación y equipamiento\n- Especificaciones técnicas acorde con las necesidades del área de conocimiento y los estándares de actualización del equipamiento con respecto al diagnóstico realizado.\n- Cuando el proyecto incluya dentro de sus componentes equipamiento tecnológico e infraestructura de red:\n- Requerimientos del sistema o dotación de equipos tecnológicos que va a adquirir la institución de educación superior, incluyendo las especificaciones técnicas y los estándares de actualización\n- Si el proyecto contempla la adquisición de software, especificaciones de los requisitos que debe cumplir el proveedor, según las necesidades identificadas en la institución de educación superior precisando en este documento, el área, el proceso, la actividad y la necesidad de sistematizar",
    },{
      key: "3",
      proyecto: "III.  Proyectos destinados a financiar la alimentación escolar en instituciones educativas oficiales en los niveles de básica y media",
      requisitos: "- El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición:\n- Número de días de atención. Para los proyectos cuyos días de atención sean inferiores a 180 días, la entidad territorial debe certificar las demás fuentes de financiación con sus respectivos días de atención en los que garantice la presentación del servicio durante la totalidad del calendario escolar\n- Número de raciones a entregar acorde con el literal f del presente numeral\n- Especificar tipo de ración: complemento a.m. p.m., refrigerio, refrigerio reforzado, almuerzo o cena; y la modalidad ración preparada en sitio o industrializada\n- Costo de la ración a suministrar\n- Descripción detallada de la ración y minuta a suministrar, acorde con los formatos establecidos en la Resolución 16432 de 2015 del Ministerio de Educación Nacional\n- Relación de establecimientos educativos beneficiados con el proyecto y población a atender en cada uno acorde con los criterios de focalización establecidos en el artículo 4.1.2 de la Resolución 16432 de 2015 del Ministerio de Educación Nacional\n- Certificado del secretario de educación o quien haga sus veces en la entidad territorial, en el cual se especifique que el proyecto cumple con los lineamientos del Programa de Alimentación Escolar establecidos por el Ministerio de Educación Nacional en la Resolución 16432 de 2015\n- Certificado suscrito por el representante legal de la entidad que presenta el proyecto en el que conste que los recursos disponibles, distintos al SGR, son insuficientes para financiar la alimentación escolar en instituciones educativas oficiales en los niveles de básica y media, y que por tal razón requieren de la cofinanciación con recursos del SGR",
    },{
      key: "4",
      proyecto: "IV. Proyectos destinados a financiar la prestación del servicio de transporte escolar en instituciones educativas oficiales en los niveles de básica y media",
      requisitos: "- El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición:\n- Relación de establecimientos educativos beneficiados con el proyecto y población a atender en cada uno\n- Número de días de atención y población a atender por modalidad: transporte terrestre, fluvial/marítimo y tipo de apoyo (subsidios monetarios, vales para pago de transporte público, vehículo propio de la entidad territorial o del establecimiento educativo)\n- Enunciar los criterios de focalización para seleccionar a los beneficiarios (p.ej. situación de discapacidad, entorno inseguro, distancia del establecimiento más cercano a su vivienda, tiempo del desplazamiento entre el establecimiento educativo y el hogar, condiciones de acceso)\n- Certificado suscrito por el representante legal de la entidad que presenta el proyecto, en el cual conste que el proyecto cumple con los lineamientos sobre transporte escolar establecidos en el Decreto 1079 del 2015\n- Certificado suscrito por el representante legal de la entidad que presenta el proyecto en el cual conste que los recursos disponibles, distintos al SGR, son insuficientes para financiar el transporte escolar en instituciones educativas oficiales en los niveles de básica y media, y que por tal razón requieren de la cofinanciación con recursos del SGR",
    },{
      key: "5",
      proyecto: "V. Formación o capacitación del capital humano en educación superior o terciaria",
      requisitos: "- Cuando la formación o capacitación del capital humano en educación superior o terciaria sea el principal objeto del proyecto de inversión, términos de referencia para los procesos de formación y capacitación, los cuales deben contener:\n- Reglamento de operación de la(s) convocatoria(s) para proyecto(s)\n- Criterios y requisitos de participación de los candidatos entre los que se incluya que no se financiarán aquellos que hayan sido beneficiados por un crédito o beca educativa pública para el mismo nivel de formación\n- Criterios de focalización y metodología de evaluación y calificación para seleccionar los beneficiarios, así como los puntajes definidos para cada uno de ellos\n- Reglamento de condonación y condiciones de compromiso de los beneficiarios para contribuir con el desarrollo local o regional al finalizar su formación por un tiempo igual al empleado durante sus estudios",
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
                          <Text style={{ color: '#7c7f7f', fontSize: 12, fontWeight: '700' }}>
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