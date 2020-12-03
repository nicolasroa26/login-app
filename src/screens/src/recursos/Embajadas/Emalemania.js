import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
      key: "1",
      proyecto: "COOPERACIÓN FINANCIERA REEMBOLSABLE Y NO REEMBOLSABLE A TRAVES DE KFW",
      descripcion: "Consiste en la asignación de recursos no reembolsables (donaciones) o reembolsables (créditos blandos) para desarrollar programas o proyectos que apunten a las líneas prioritarias de Alemania en Cooperación Internacional.",
      tproyectos: "*Construcción de paz y prevención de crisis.\n*Politica Ambiental\n*Protección y uso sostenible de recursos naturales",
      dirigido: "Entidades públicas nacionales y territoriales, sector privado, Organizaciones No Gubernamentales.",
      mecanismo: "El proyecto debe ser presentado a APC-Colombia para que sea incluido entre los temas propuestos en las consultas y, o, negociaciones.",
      como: "Los recursos se asignan por proyectos y pueden ser no reembolsables, de crédito o una combinación de las dos modalidades. Las extensiones de proyectos de cooperación financiera pueden ser apoyados con recursos no reembolsables.",
      requisitos: "N/A",
      montos: "Dependen de la demanda del proyecto, de la viabilidad del mismo, de la capacidad de endeudamiento y de las posibilidades de entregarle garantías por parte de la Nación.",
      plazos: "Cada dos años se realizan las negociaciones, en las cuales se asignan los recursos",
      medios: "www.bogota.diplo.de"	
  },{
      key: "2",
      proyecto: "COPERACIÓN TECNICA",
      descripcion: "La Agencia Alemana de Cooperación –GIZ–,  brinda apoyo a contrapartes políticas a través de programas bila-terales y regionales. Apoya procesos de construcción de paz, fortalecimiento del Estado de derecho, apoyo a la implementación de la Ley de Justicia y Paz, fomento de los derechos de la mujer para prevención de la violencia. De igual forma, mediante fortalecimiento institucional, formulación y acompañamiento de proyectos de impacto social, en temas de paz y medio ambiente",
      tproyectos: "*Construcción de paz y prevención de crisis.\n*Politica Ambiental\n*Protección y uso sostenible de recursos naturales",
      dirigido: "Entidades públicas nacionales y territoriales, sector privado, Organizaciones No Gubernamentales ",
      mecanismo: "Una vez se ha hecho la asignación de la cooperación técnica en el marco de las Negociaciones Intergubernamentales, Colombia debe enviar una solicitud formal de dicha cooperación a través de la Embajada de Alemania en el país; dicha solicitud llega al BMZ, que asigna a la GIZ la tarea de llevar a cabo un estudio de factibilidad en el marco del cual, conjuntamente entre Alemania y Colombia, se formula el proyecto o programa de cooperación, se definen líneas de acción, tiempos y actores, entre otros",
      como: "Funciona a demanda de las entidades públicas nacionales y territoriales, sector privado y Organizaciones No Gubernamentales. Enmarcada en las dos áreas prioritarias de la Cooperación Alemana en Colombia ",
      requisitos: "N/A",
      montos: "No hay monto definido. El valor del alcance del programa o proyecto",
      plazos: "Cada dos años se realizan las negociaciones, en las cuales se asignan los recursos",
      medios: "www.bogota.diplo.de"
  },{
      key: "3",
      proyecto: "MICROPROYECTOS",
      descripcion: "Los microproyectos tienen como objetivo el fomento del desarrollo social y económico en Colombia",
      tproyectos: "*Construcción de paz y prevención de crisis.\n*Politica Ambiental\n*Protección y uso sostenible de recursos naturales",
      dirigido: "Organismos locales que no están en capacidad de financiar en su totalidad proyectos que vinculen y beneficien a población con bajos recursos",
      mecanismo: "Convocatoria anual",
      como: "A la solicitud para el apoyo de microproyectos se debe anexar la siguiente documentación:\n• Descripción de la organización solicitante, documento de existencia (Registro Cámara de Comercio, personería jurídica, representante legal);\n• Objetivo y metodología del proyecto;\n• Descripción de los riesgos que se podrían presentar en el transcurso de la realización del proyecto;\n• Plan de Financiación, incluidos rubros sobre aportes propios y, si es el caso, aportes por parte de un tercero; \nSe deben anexar cotizaciones vigentes para los rubros que solicitarán a la embajada. Las solicitudes no deben ser enviadas por Correo electrónico. Debido al gran número de proyectos presentados, la información se debe limitar a máximo 10 páginas. El envío de documentación fotográfica es bienvenido. Si un proyecto resulta seleccionado, se firma un Contrato de Apoyo Financiero. Este incluye una cláusula de obligación de concluir el proyecto en el mismo año calendario y el solicitante se compromete a presentar un Reporte de Cierre junto con facturas originales (las cuales serán devueltas una vez revisadas y aprobadas). En caso de incumplimiento de las normas del Contrato de Apoyo Financiero, la entidad responsable se debe comprometer de devolver la suma recibida",
      requisitos: "N/A",
      montos: "Monto máximo por microproyecto: 25.000 euros",
      plazos: "N/A",
      medios: "www.bogota.diplo.de"
  },{
      key: "4",
      proyecto: "PROYECTOS DE APOYO EN EMERGENCIAS",
      descripcion: "Apoyo a la Ayuda Humanitaria inmediata y en desastres",
      tproyectos: "Ayudas Humanitarias por desastres naturales",
      dirigido: "Refugiados y desplazados en caso de fenómenos naturales extremos",
      mecanismo: "ONG nacionales que tengan una intervención directa en la zona en la que ocurra el desastre",
      como: "Estos recursos se aplican exclusivamente para la atención de desastres naturales. Organizaciones sociales que esténcen la zona del desastre o que puedan realizar una atención integral a las víctimas podrán aplicar a los fondos",
      requisitos: "N/A",
      montos: "No hay monto definido. El valor del alcance del programa o proyecto",
      plazos: "No hay Plazos definidos, toda vez que se presenten los fenomenos naturales",
      medios: "www.bogota.diplo.de"
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