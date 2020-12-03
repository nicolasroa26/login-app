import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
            proyecto: "AYUDAS A LA CREACIÓN EN RESIDENCIA",
            requisitos: "1  Los Espacios de Creación deberán garantizar, como mínimo:\n*El espacio físico (o virtual) óptimo para el desarrollo del proyecto \n*El equipo humano requerido por el proyecto para acompañar la experiencia y promover la creación \n*La documentación del proceso de creación en formato audiovisual con el fin de dar visibilidad al desarrollo del mismo \n*El hospedaje (en función de la modalidad de participación escogida) \n2, Los proyectos únicamente serán presentados por Espacios de Creación en Residencia de un país perteneciente al programa IBERESCENA (los/as creadores/as no podrán solicitar de forma directa esta ayuda, tan sólo los Espacios de Creación). El/la solicitante, ya sea persona física/natural o jurídica, se considerará del país en donde esté ubicado el Espacio de Creación en Residencia al que representa \n3, Los Espacios de Creación que propongan, como mínimo, a un (1) creador/a invitado/a perteneciente (o residente de forma legal) a uno (1) de los países integrantes del Programa IBERESCENA distintos al país sede. Los/as creadores/as invitados/as en Residencia se considerarán procedentes del país en donde esté su residencia legal \n4, El presupuesto del proyecto presentado sólo podrá ser destinado a financiar los gastos de los/as residentes provenientes de países miembros diferentes al país sede donde tiene lugar la Residencia (por lo tanto, la ayuda de IBERESCENA no podrá ser utilizada presupuestariamente para costos de posibles creadores/as residentes en el mismo país de la Residencia). Se podrán incluir materiales para el proceso de creación siempre y cuando estén debidamente fundamentados (estos gastos no incluirán honorarios para las personas que conforman el espacio de creación) \n5, Los proyectos y Espacios de Creación que fomenten la indagación de nuevos modelos creativos pensando en la producción de contenidos dirigidos a la circulación en vivo y/o a través de medios alternativos \n6, Presupuesto: http://www.iberescena.org/documentos/PRESUPUESTO%20CREACION%20CONVOCATORIA%202020%202021-es.xlsx \n7, Bases: http://www.iberescena.org/documentos/BASES%20CREACION%20CONVOCATORIA%202020%202021-es.pdf ",
    },{
        key: "2",
            proyecto: "AYUDAS A LA COPRODUCCIÓN DE ESPECTACULOS DE ARTES ESCÉNICAS",
            requisitos: "1 Presupuesto: http://www.iberescena.org/documentos/PRESUPUESTO%20CREACION%20CONVOCATORIA%202020%202021-es.xlsx \n2, Bases: http://www.iberescena.org/documentos/BASES%20CREACION%20CONVOCATORIA%202020%202021-es.pdf \n3, Que se trate de coproducciones iberoamericanas de Artes Escénicas (teatro, danza, circo, artes vivas y/o todas las interdisciplinas derivadas de la combinación de las mismas) de carácter profesiona \n4, Las co-producciones podrán consistir en formatos virtuales (streaming, diferido, etc), presenciales (en espacios escénicos y/o alternativos) y/o mixtos. Además, se abre la posibilidad a indagar propuestas de pequeño formato y/o de formatos alternativos (monólogos, solos, radioteatro, teatro breve, etc) \n5, Los proyectos deberán ajustarse al sistema de derechos de autoría en vigor en los estados coproductores \n6, Que los proyectos, de una forma bien fundamentada y clara, contengan la identificación de los núcleos coproductores así como la especificación de las tareas de cada una de las partes junto con el cronograma de ejecución del proyecto, su plan de funciones y un presupuesto correctamente planteado \n7, Las coproducciones deberán respetar las siguientes reglas mínimas:\n*Los proyectos deberán conformar dos núcleos coproductores con un mínimo de un (1) participante de un (1) país miembro diferente al país que solicita (pertenecientes a los Estados Miembros del Programa IBERESCENA) \n*Estos núcleos de coproducción deberán ejercer los siguientes roles, de acuerdo a su experiencia profesional comprobada: director/a, coreógrafo/a, dramaturgo/a, intérpretes y/o diseñadores/as escénicos/as (no se cuantificará la conformación de núcleos de coproducción con roles de asistencias o con duplicaciones de roles). El resto de roles y labores de los demás participantes del proyecto, fuera de los anteriormente mencionados, son decisión interna de los núcleos coproductores \n*Los núcleos de coproducción podrán ser de participación presencial (con desplazamientos internacionales), virtual (incluyendo intercambio 100% virtual) o mixta (con fases del proceso virtuales y presenciales)",
    },{ 
        key: "3",
            proyecto: "AYUDAS A LA PROGRAMACIÓN DE FESTIVALES Y ESPACIOS ESCÉNICOS",
            requisitos: "1 Presupuesto: http://www.iberescena.org/documentos/PRESUPUESTO%20CREACION%20CONVOCATORIA%202020%202021-es.xlsx \n2, Bases: http://www.iberescena.org/documentos/BASES%20CREACION%20CONVOCATORIA%202020%202021-es.pdf \n3, Aquellos festivales y/o espacios escénicos que tengan su sede y personalidad jurídica en países integrantes del Programa \n4, Que en las programaciones de los festivales y/o los espacios escénicos se contemple la programación de, como mínimo, un (1) espectáculo de un (1) país miembro del programa IBERESCENA distinto al país sede \n5, Los proyectos que respondan a las siguientes modalidades de participación: \n*Participación presencial (incluye desplazamientos internacionales) \n*Participación virtual (incluye intercambio y desarrollo 100% virtual) \n*Participación mixta (incluye fases del proceso virtuales y presenciales)\n6, Los proyectos que respondan a las siguientes modalidades de programación:\n*Los festivales y/o espacios escénicos deberán presentar preferentemente una programación cerrada en el momento de la solicitud \n*Para aquellos festivales y/o espacios escénicos que deban realizar convocatorias abiertas para la elección de sus programaciones, existirá la posibilidad de no presentar una programación cerrada, pero corresponderá al CII la valoración de la trayectoria del festival o espacio escénico en las ediciones pasadas. En este último caso, el/la REPPI del país donde fue presentada la solicitud, deberá avalar la programación final presentada antes del primer desembolso de la ayuda concedida, y como mínimo, tres meses antes del inicio de la actividad \n*Se establece como mecanismo alternativo de programación, la posibilidad de presentar proyectos para festivales y/o espacios escénicos que permitan la presentación de espectáculos no sólo de manera presencial sino de forma virtual (ya sea en streamming o en diferido) \n*De la misma forma, se tendrá en cuenta la inclusión de desarrollos de nuevas plataformas de circulación alternativas a las existentes, fomentando la generación de encuentros, foros y demás espacios que permitan otros productos asociados a las Artes Escénica ",           
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