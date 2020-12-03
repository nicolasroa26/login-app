import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
        proyecto: "COOPERACIÓN FONDO LOCAL DE RESPONSABILIDAD SOCIAL EMPRESARIAL (CSR)",
        descripcion: "Promover el crecimiento económico sostenible de comunidades; asistir a los diferentes actores del sector extractivo en el manejo de los recursos naturales, y mitigar los riesgos inherentes a la explotación de estos recursos. La iniciativa también busca apoyar la implementación de acciones constructivas y positivas de Responsabilidad Social Empresarial mediante alianzas entre el sector privado, la sociedad civil, autoridades regionales/locales y las mismas comunidades. Los proyectos, a su vez, deberán promover el crecimiento económico sostenible al nivel comunitario, con enfoque en alguna de las siguientes temáticas: Medio Ambiente; Desarrollo de Negocios, y, o, Educación para el Empleo",
        tproyectos: "* Derechos y protección de la niñez y la adolescencia (calidad de la educación, prevención del reclutamiento de niños, niñas, adolescentes; prevención del trabajo infantil; prevención de la explotación sexual comercial; atención a  víctimas minas antipersonas).\n* Desarrollo económico (responsabilidad social corporativa; educación técnica y vocacional, asistencia técnica relacio nada con el comercio; desarrollo económico con jóvenes rurales; diálogo social y desarrollo rural).\n* Temas transversales: género, medio ambiente y gobernabilidad",
        dirigido: "ONG, fundación u organización nacional o internacional. Sin embargo, la propuesta deberá reflejar claramente la conformación de alianzas con empresas del sector extractivo, autoridades locales, comunidades y otros actores de la sociedad civil",
        mecanismo: "Convocatorias periódicas",
        como: "El proceso de aplicación y, o, los requisitos podrán ser enviados al correo fondolocalcsrcolombia@gmail.com",
        requisitos:"Formulario de Inscripción https://www.canadainternational.gc.ca/colombia-colombie/highlights-faits/2017/canada_provides_supporttocolombia-sp.aspx?lang=spa",
        montos: "Tentativamente entre CAN$400 y 600.000",
        plazos: "Convocatoria abierta desde el 9 de julio hasta el 7 de septiembre",
        medios: "http://www.usacc.org.pe/seccion.php?idsec=14"
    },{
        key: "2",
        proyecto: "COOPERACIÓN FONDO CANADIENSE PARA LA NIÑEZ FCN",
        descripcion: "Mecanismo de la Agencia Canadiense para el Desarrollo Internacional, ACDI, destinado a apoyar iniciativas que contribuyan a la promoción, garantía y disfrute de los derechos de las niñas, niños, adolescentes y jóvenes como sujetos de derechos y asegurar que estén protegidos de las consecuencias de todo tipo de violencia.Las iniciativas apoyadas por el Fondo promueven que los niños, niñas, adolescentes y jóvenes fortalezcan sus capacidades para aportar activamente en la construcción de la paz y la seguridad humana en Colombia",
        tproyectos: "* Derechos y protección de la niñez y la adolescencia (calidad de la educación, prevención del reclutamiento de niños, niñas, adolescentes; prevención del trabajo infantil; prevención de la explotación sexual comercial; atención a  víctimas minas antipersonas).\n* Desarrollo económico (responsabilidad social corporativa; educación técnica y vocacional, asistencia técnica relacio nada con el comercio; desarrollo económico con jóvenes rurales; diálogo social y desarrollo rural).\n* Temas transversales: género, medio ambiente y gobernabilidad",
        dirigido: "Organizaciones locales, instituciones multilaterales, organizaciones de la sociedad civil, organizaciones no gubernamentales y actores estatales",
        mecanismo: "Convocatorias periódicas",
        como: "Las propuestas se someten al siguiente proceso de evaluación:\n• Primera evaluación por parte del FCN.\n• Segunda evaluación por parte del Comité de Selección de Propuestas, conformado por representantes de ACDI en Colombia y en Canadá.\n• Envío de las propuestas finalistas por parte del FCN para la aprobación definitiva por la sede de ACDI en  Canadá",
        requisitos:"Formulario de Inscripción https://www.canadainternational.gc.ca/colombia-colombie/highlights-faits/2017/canada_provides_supporttocolombia-sp.aspx?lang=spa",
        montos: "Hasta CAN$500.000",
        plazos: "Todos los años",
        medios: "www.fondocanadienseparalaninez.com                   www.acdi-cida.gc.ca"
    },{
        key: "3",
        proyecto: "COOPERACIÓN FONDO CANADIENSE PARA LAS INICIATIVAS LOCALES FCIL",
        descripcion: "Canal de apoyo a las comunidades organizadas más necesitadas, a través de pequeños proyectos productivos, sociales (salud, nutrición, educación y protección de niños) y de derechos humanos presentados por las propias organizaciones de base. Tiene cobertura nacional con duración máxima de un año",
        tproyectos: "* Derechos y protección de la niñez y la adolescencia (calidad de la educación, prevención del reclutamiento de niños, niñas, adolescentes; prevención del trabajo infantil; prevención de la explotación sexual comercial; atención a  víctimas minas antipersonas).\n* Desarrollo económico (responsabilidad social corporativa; educación técnica y vocacional, asistencia técnica relacio nada con el comercio; desarrollo económico con jóvenes rurales; diálogo social y desarrollo rural).\n* Temas transversales: género, medio ambiente y gobernabilidad",
        dirigido: "Organizaciones comunitarias de base",
        mecanismo: "Convocatorias periódicas",
        como: "Las propuestas son analizadas por la Coordinación del FCIL. Aquellas que son viables las estudia un Comité de Selección, que las recomienda para aprobación directa en la Embajada del Canadá en Colombia.",
        requisitos:"Formulario de Inscripción https://www.canadainternational.gc.ca/colombia-colombie/highlights-faits/2017/canada_provides_supporttocolombia-sp.aspx?lang=spa",
        montos: "Hasta CAN$10.500",
        plazos: "N/A",
        medios: "www.acdi-cida.gc.ca"    

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
                  <ScrollView style={{overflowY: "scroll", height: "auto", width: "auto"}}>
                  <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                    Nombre de Proyecto
                  </Text>
                  <Text style={styles.titlep}>
                    {selectedTask.proyecto}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                  </View>
                  <View style={styles.notesContent} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                     Descripcion:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.descripcion}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Tipo de proyectos:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.tproyectos}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Dirigido a:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.dirigido}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Mecanismos de acceso:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.mecanismo}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Como funciona:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.como}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Requisitos:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.requisitos}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Montos:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.montos}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Plazos o periodos de presentacion:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.plazos}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Medios de publicacion:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.medios}
                    </Text>
                  </View>
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
                  </ScrollView>
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