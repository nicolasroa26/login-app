import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [
      {
      key: "1",
      proyecto: "MANTENIMIENTO DE LA RED VIAL SECUNDARIA Y TERCIARIA",
      requisitos: "I - 1. Carta de presentación del proyecto firmada por el representante legal de la Entidad que presenta el proyecto de inversión, la cual como mínimo debe contener: Nombre completo de proyecto, valor, fuentes de financiación, tiempo estimado de ejecución, población objetivo, empleos directos e indirectos generados y localización exacta de la obra. (ver Circular 0013 de abril 10 de 2018). Para la actualización de proyectos se complementará con el certificado SPC, la justificación y demás requsitos. (ver Circular 0013 de abril 10 de 2018).\nI - 2. Si la entidad que presenta el proyecto aporta recursos de cofinanciación, deberá adjuntar certificado suscrito por el representante legal de la misma, en el cual conste el compromiso de aportar los recursos correspondientes.\nI - 3. Proyecto formulado en la MGA WEB adoptada por el DNP para proyectos de inversión.\nI - 4. Certificado suscrito por el representante legal de la entidad que presenta el proyecto, en el cual conste que las actividades que se pretenden financiar no están siendo financiadas con otras fuentes ni ha sido financiadas con otras fuentes de recursos.\nI - 5. Certificación suscrita por el Jefe de Planeación o quien haga sus veces, donde conste que el proyecto se encuentra en concordancia con el Plan de Desarrollo de la entidad. Indicando su estructura. (eje estratégico, programa, subprograma, meta, etc.)\nI - 6. Certificación del Jefe de Planeación o quien haga sus veces, donde indique que el proyecto cumple con los lineamientos del POT; PBOT o EOT.\nI - 7. Certificación suscrita por el Jefe de Planeación o quien haga sus veces, donde conste que el proyecto no se encuentra localizado en zona que presente riesgo no mitigable.\nI - 8. Para proyectos en vías urbanas certificar que estas cuentan con la infraestructura de servicios públicos instalados como Acueducto, Alcantarillado Pluvial y Sanitario, Gas Natural, Energía Eléctrica, Telefonía, etc., y se encuentran en buen estado. Además que el proyecto no afectará las redes existentes, esta certificación debe venir firmada por el Jefe de Servicios Públicos o quien haga sus veces en el Municipio y el funcionario competente del operador de red respectivo.\nI - 9. Cuando no se intervengan estructuras existentes, se presentarán los chequeos técnicos pertinentes que garanticen la estabilidad y funcionalidad durante la vida útil proyectada, presentando la revisión de la capacidad hidráulica, estructural o funcional de las estructuras.\nI - 10. Certificación expedida por el funcionario competente donde se indique que el proyecto no está siendo intervenido. En caso contrario se debe especificar qué tipo de obras se llevan a cabo y con qué recursos se están ejecutando.\nI - 11. Certificación expedida por el representante legal de la entidad que presenta el proyecto, en la que conste que los documentos, estudios, diseños y planos originales se encuentran debidamente firmados y reposan en la entidad correspondiente.\nI - 12. Certificar si se requiere o no realizar gestión predial, de ser necesario justificar el ¿por qué? (ej. por ampliaciones o rectificaciones de la vía).\nI - 13. Certificación expedida por el representante legal de la entidad que presenta el proyecto de acuerdo con su competencia, o del ICCU para el caso en el cual la vía está a cargo del Departamento, donde garantice la operación y mantenimiento del mismo\nI - 14. Otros documentos. Cuando aplique.\nII - 1. Certificación expedida por el funcionario competente donde se indique que la vía del proyecto a intervenir NO pertenece a la red vial terciaria a cargo del INVIAS: (Ver Nota. 1)\nII - 2. Documento técnico. Modelo estandarizado por la Secretaría de Planeación de Cundinamarca.\nII - 3. Proceso constructivo del proyecto (Descripción detallada de las actividades a realizar)\nII - 4. Certificación expedida por el funcionario competente de la ubicación de las fuentes de materiales que cumplan con las especificaciones de construcción del proyecto y garantía del suministro según las distancias de acarreo.\nII - 5. Presentar el Plan de Manejo Transito (PMT) detallado para la obra a ejecutar (informe descriptivo y plano de señalización)\nII - 6. Certificación de Licencias ambientales, Plan de Manejo Ambiental, o Permisos requeridos y demás requisitos ambientales, dependiendo del tipo de proyecto. (Ver Nota 3 y 6)\nII - 7. Cuando el presupuesto incluya actividades diferentes a las contempladas en la cartilla de precios de referencia ICCU, deberá presentarse el Análisis de Precios Unitarios correspondiente.\nII - 8. Planos de construcción como planta, perfiles, cortes, estructurales, obras de drenaje. (Deben estar firmado por el profesional idóneo y avalado por el funcionario competente. (Ver Nota 4.)\nII - 9. Memoria de cálculo de las cantidades de obra.\nII - 10. Presupuesto de Obra. (Debe estar firmado por el profesional idóneo y avalado por el funcionario competente)\nII - 11. Esquema de localización exacta de la obra con abscisas y/o coordenadas geográficas\nII - 12. Levantamiento topográfico georeferenciado con implantación (para proyectos como mínimo se adjuntará el plano planta perfil levantado con GPS de precisión)\nII - 13. Registro fotográfico y Planos de planta y perfil y sección típica de la vía a intervenir, debidamente firmados por los profesionales competentes. Ver Nota 4.\nII - 14. Estudios de suelos. NOTA: En el caso que el proyecto corresponda a un puente, el estudio de suelos deberá contemplar lo consagrado en el CCP 14.\nII - 15. Estudios y diseños definitivos de los puntos críticos incluidos dentro del tramo del proyecto a presentar. Ver Nota 4.\nII - 16. Estudio Geológico\nII - 17. Estudio Geotécnico\nII - 18. Estudio Hidrológico (Estudios de socavación)\nII - 19. Estudios Hidráulicos\nII - 20. Estudio de tránsito, de conformidad con lo establecido en la normativa vigente.\nII - 21. Diseño de Pavimentos. Cuando se trate de pavimentos establecer las diferentes alternativas de diseño debidamente cuantificadas. (Ver Nota 4.)\nII - 22. Cálculo de diseño estructural cumpliendo con las normas vigentes\nII - 23. Diseño geométrico del tramo de vía a intervenir. (Ver Nota 4.)\nII - 24. Estudios y diseños firmados por el consultor o su representante legal en el caso de persona jurídicas. (Ver Nota 4.)\nII - 25. Certificación expedida por el profesional que elaboró los estudios y diseños donde se garantice la calidad e indique que estos cumplen con las normas de diseño vigentes, adjuntando matricula profesional y certificado del COPNIA actualizado y firmado (cuando el responsable de los estudios y diseños es persona jurídica la certificación debe estar firmada por el Representante Legal). (Ver Nota 4.)\nII - 26. Copia de la solicitud radicada ante la autoridad competente del trámite de las licencias y/o permisos ambientales. permisos de intervención de cauce requeridos y demás requisitos ambientales dependiendo del tipo de proyecto Cuando aplique\nII - 27. Otros estudios y diseños. Cuando Aplique.",
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