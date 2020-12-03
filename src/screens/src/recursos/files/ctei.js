import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class Agricultura extends Component {
  state = {
    todoList: [{
      key: "1",
      proyecto: "Un programa o proyecto se clasifica en este sector, siempre y cuando se circunscriba a los lineamientos conceptuales y exclusiones de la Guía Sectorial de Programas y Proyectos de CTeI expedida por Colciencias. ",
      requisitos: "- Carta firmada por el representante legal de cada una de las entidades que participan en el proyecto en la que se incluya y exprese la siguiente información:\n- Nombre completo del proyecto\n- Conocimiento del contenido del programa o proyecto y compromiso con el desarrollo de las actividades descritas a su cargo\n- Para aquellas entidades que participen a través de grupos de investigación nacionales, se debe incluir el nombre del grupo o grupos de investigación\n- Justificación sobre la capacidad técnica e idoneidad para participar en el proyecto\n- Acuerdo de propiedad intelectual suscrito por los representantes legales de las entidades que cooperen a nivel científico e intelectual y las entidades que financiarán el proyecto, teniendo en cuenta las normas que regulan la materia. En caso de no requerir acuerdo de propiedad intelectual, justificar por qué no se requiere\n- Certificado expedido por el representante legal de la entidad que presenta el proyecto en el que se defina la titularidad, administración, custodia y cuidado de los bienes y resultados derivados del programa o proyecto, en el cual conste que con la expedición de este certificado se entiende que la entidad que presenta el proyecto concertó este asunto previamente con los cofinanciadores del proyecto, según sea el caso\n- Certificado suscrito por la secretaría de planeación o quien haga sus veces de la entidad territorial donde se va a ejecutar el programa o proyecto de inversión, en el que conste que el mismo está incluido en el Plan y Acuerdo Estratégico Departamental de Ciencia, Tecnología e Innovación.",
    },{
      key: "2",
      proyecto: "I. Proyectos para la creación o fortalecimiento de centros de investigación, centros de desarrollo tecnológico, centros de ciencia y centros de innovación.",
      requisitos: "- El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición, la información de factibilidad de los centros, incluyendo:\n- Definición del campo científico y de áreas del conocimiento del centro\n- Estudio de oferta y demanda de los servicios y clientes potenciales\n- Estructura organizacional y perfil del talento humano requerido\n- Infraestructura y equipamiento científico y tecnológico\n- Flujo de fondos proyectado al menos a cinco (5) años una vez finalizado el proyecto, en donde se incluyan los ingresos y egresos totales\n- Para los centros de ciencia, guion museográfico, detalle del equipamiento científico y museal, portafolio de los programas y servicios en apropiación social de CTeI; y justificación de la forma en que el programa o proyecto incluye integralmente los siguientes componentes: participación ciudadana en CTeI, comunicación de la CTeI, intercambio de conocimientos y gestión del conocimiento para la apropiación social de la CTeI\n- Para los centros de investigación, desarrollo e innovación se debe evidenciar la participación de al menos un grupo de investigación de categorías A1, A o B, o su equivalente, de acuerdo con la clasificación prevista por Colciencias, en áreas del conocimiento acordes con las líneas de investigación del centro\n- Acuerdo de compromiso firmado por las entidades socias del centro en donde se especifique:\n- Responsabilidades de cada uno de los socios\n- Para los casos que se busque el fortalecimiento de un centro de investigación, realizar el proceso para buscar su reconocimiento en un plazo no mayor a dos (2) años\n- Para los casos que se busque la creación de un centro de investigación, realizar ante Colciencias el proceso para buscar su reconocimiento en un plazo no mayor a tres (3) años luego de su entrada en operación\n- Para proyectos distintos de los centros de ciencia, además:\n- Portafolio de proyectos estructurados en las líneas de investigación e innovación previstas para el centro\n- Carta de compromiso firmada por todos los socios del centro en la que conste que al menos el treinta por ciento (30%) del personal que conformará el centro son investigadores y se encuentran activos en la plataforma ScienTI\n- Soporte de por lo menos cinco (5) años de experiencia según reporte ScienTI, de al menos dos socios y los grupos de investigación que apoyarán las líneas de investigación e innovación previstas para el centro. "
    },{
      key: "3",
      proyecto: "II. Proyectos para la creación o fortalecimiento de parques científicos, tecnológicos y de innovación.",
      requisitos: "- El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición, la información de factibilidad de los parques, incluyendo:\n- Plan maestro del parque\n- Campo científico del parque y los focos o áreas de conocimiento en las que se desarrollará\n- Portafolio de proyectos estructurados en las líneas de investigación, desarrollo tecnológico e innovación\n- Infraestructura y equipamiento científico y tecnológico\n- Estudio de oferta y demanda de los servicios y clientes potenciales\n- Evidenciar la vinculación de al menos un grupo de investigación de categorías A1, A o B, o su equivalente, de acuerdo con la clasificación prevista por Colciencias, en áreas del conocimiento acordes con las líneas de investigación del parque\n- Cartas de compromisos de las empresas que harán parte del parque, dentro de las cuales debe haber entidades provenientes del sector científico, tecnológico, productivo y público\n- Acuerdo de compromiso firmado por los socios del parque en donde se certifique sus responsabilidades y aportes\n- Copia de la acreditación de alta calidad otorgada por el Ministerio de Educación Nacional, de por lo menos un programa de formación académica de una de las universidades socias del parque, en alguna de las áreas de conocimiento del parque. "
    },{
        key: "4",
        proyecto: "III. Formación y capacitación científica y tecnológica del capital humano que fortalece capacidades en CTeI.",
        requisitos: "* Cuando la formación sea el principal objeto del proyecto a nivel de maestría, doctorado, post doctorado, especializaciones clínicas y entrenamiento especializado para científicos, investigadores, ingenieros y técnicos:\n- El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe además justificar el carácter estratégico de los focos de conocimiento priorizados en los cuales se desarrollará la formación del capital humano de acuerdo con las prioridades de la región, de conformidad con lo definido en el Plan y Acuerdo Estratégico Departamental\n- Términos de referencia para los procesos de formación y capacitación científica y tecnológica que deben contener:\n- Reglamento de operación de la(s) convocatoria(s)\n- Criterios y requisitos de participación de los candidatos entre los que se incluya que no se financiarán aquellos que hayan sido beneficiados por un crédito o beca educativa pública para el mismo nivel de formación\n- Criterios y metodología de evaluación y calificación para seleccionar los beneficiarios, así como los puntajes definidos para cada uno de ellos\n- Reglamento de condonación y condiciones de compromiso de los beneficiarios para contribuir con el desarrollo de la región al finalizar su formación por un tiempo igual al empleado durante sus estudios\n* Cuando uno de los componentes del proyecto incluya la formación del capital humano:\n- El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe además justificar la formación como un elemento necesario para alcanzar el objetivo del proyecto, y la articulación de los tiempos del proceso de formación con el tiempo de ejecución del proyecto\n- Términos de referencia para los procesos de formación y capacitación científica y tecnológica, que deben contener:\n- Criterios y requisitos de participación de los candidatos\n- Criterios y metodología de evaluación y calificación para seleccionar los beneficiarios, así como los puntajes definidos para cada uno de ellos\n- Condiciones de compromiso de los beneficiarios para contribuir con el objeto del proyecto."
    },{
        key: "5",
        proyecto: "IV. Apropiación social de la ciencia, la tecnología y la innovación.",
        requisitos: "- El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe además justificar la forma en la que el proyecto incluye integralmente los siguientes componentes: participación ciudadana en CTeI, comunicación de la CTeI, intercambio de conocimientos y gestión del conocimiento para la apropiación social de la CTeI\n- Cuando la formación temprana de vocaciones científicas para niños y jóvenes sea el principal objetivo del programa o proyecto:\n- El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe además incluir las capacidades y habilidades de investigación e innovación que se esperan desarrollar y la población objetivo\n- Para los proyectos ONDAS, nexo global y jóvenes investigadores deben cumplir con los lineamientos establecidos por Colciencias. "
    },{
        key: "6",
        proyecto: "V. Transferencia de conocimiento y tecnología.",
        requisitos: "- El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición: descripción y estado de madurez de la tecnología a trasferir, descripción de la problemática a solucionar y escala de implementación, potenciales beneficiarios, valoración de la tecnología, descripción del mecanismo de acceso a la tecnología, descripción de la metodología de trasferencia y adopción por los potenciales beneficiarios. "
    },{
        key: "7",
        proyecto: "VI. Proyectos que contemplen actividades de apoyo de ciencia, tecnología e innovación.",
        requisitos: "* Cuando el proyecto contemple entre sus componentes el levantamiento de datos como encuestas y sistemas estadísticos.\n- Certificado de la entidad competente en que conste que la información que se pretende levantar no se encuentra incluida en bases de datos o sistemas de información estadísticos de carácter económico, social o natural\n- Metodología de articulación de los resultados obtenidos de la recolección de información con el sistema de estadística nacional o regional\n* Cuando el proyecto contemple actividades nuevas de metrología, estandarización, acreditación de pruebas y de laboratorios: Concepto técnico emitido por el Instituto Nacional de Metrología en donde se establezca que el proyecto está articulado con los lineamientos establecidos por este instituto en el marco del subsistema nacional de la calidad."
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
                <View style = {{ marginBottom:40 }}>
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