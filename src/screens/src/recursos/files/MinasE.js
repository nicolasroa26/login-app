import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class MinasE extends Component {
  state = {
    todoList: [{
      key: "1",
      proyecto: "ENERGÍA\n I. Proyectos de construcción, ampliación, optimización, rehabilitación, montaje, instalación y puesta en funcionamiento de la infraestructura eléctrica para: i) generación de energía eléctrica en Zonas No Interconectadas (ZNI) de acuerdo con la definición del artículo 1° de la Ley 855 de 2003; ii) generación de energía eléctrica en el Sistema Interconectado Nacional correspondiente a proyectos de plantas menores de conformidad con la regulación vigente; iii) servicio de alumbrado público; iv) líneas del Sistema de Transmisión Regional (STR) o infraestructura del Sistema de Distribución Local (SDL); v) subestaciones eléctricas del STR y del SDL; vi) redes de distribución del SDL o adquisición e instalación de la acometida y el sistema de medición que requieren los usuarios para conectarse a la red pública; vii) normalización de las redes eléctricas de usuarios en barrios subnormales:",
      requisitos: "- Aval técnico y financiero del proyecto expedido por el representante legal del operador de red o la empresa prestadora del servicio de energía eléctrica constituida para tal fin, con una vigencia no mayor a doce (12) meses contados desde su expedición, que debe incluir como mínimo la siguiente información: \n- El compromiso por parte de la empresa prestadora del servicio de ejecutar la administración, operación, mantenimiento y la reposición de la infraestructura contemplada en el proyecto.\n- Número de viviendas a beneficiar. \n- Que se cuenta con los puntos de conexión y la disponibilidad de potencia suficiente para atender las nuevas viviendas.\n- Cumplimiento del Reglamento Técnico de Instalaciones Eléctricas (Retie) y Reglamento Técnico de Iluminación y Alumbrado Público (Retilap), cuando aplique.\n- Para proyectos de normalización de redes eléctricas, certificado expedido por el representante legal del operador de red o la empresa prestadora del servicio de energía eléctrica, donde manifieste que los barrios subnormales contemplados en el proyecto se encuentran registrados en el Sistema Único de Información (SUI), administrado por la Superintendencia de Servicios Públicos Domiciliarios (SSPD).\n- Para proyectos de rehabilitación o reposición de plantas de generación de energía en las ZNI, certificado del operador de red, la empresa prestadora del servicio o en su defecto, del representante legal de la entidad territorial, en el que conste que el costo de rehabilitarlos o recuperarlos es inferior al costo de realizar la inversión en activos nuevos, tomando como referencia su vida útil.\n- El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición: el análisis de alternativas en el que se precise que el costo de la rehabilitación o recuperación es inferior al costo de realizar la inversión en activos nuevos.",
    },{
      key: "2",
      proyecto: "GAS\nI. Proyectos que contemplen la prestación del servicio público de gas combustible domiciliario a través de: a) conexiones a usuarios pertenecientes a estratos socioeconómicos 1, y 2, y de la población del sector rural que cumpla con las condiciones para recibir el subsidio de vivienda de interés social rural; b) redes internas a usuarios pertenecientes a estratos socioeconómicos 1 y 2, y de la población del sector rural que cumpla con las condiciones para recibir el subsidio de vivienda de interés social rural; c) distribución; y d) transporte de gas combustible de conformidad con lo previsto en la Ley 142 de 1994. ",
      requisitos: "Fase I\n- Certificado expedido por la CREG en el cual se señale que la población beneficiaria del proyecto no cuenta con cargos aprobados o en proceso de aprobación para la distribución y comercialización de gas combustible por redes de tubería en un mercado relevante de distribución de gas combustible. Lo anterior, no aplica para proyectos de conexiones o de redes internas a usuarios pertenecientes a estratos socioeconómicos 1 y 2, y de la población del sector rural que cumpla con las condiciones para recibir el subsidio de vivienda de interés social rural.\n- El presupuesto de que trata el numeral 6 del artículo 4.1.2.1.1. del presente Acuerdo debe incluir: i) estudio de mercado; ii) análisis de demanda y iii) levantamiento de información de los usuarios.\n Fase II\n- Certificado expedido por la CREG en el cual se señale que la población beneficiaria del proyecto no cuenta con cargos aprobados o en proceso de aprobación para la distribución y comercialización de gas combustible por redes de tubería en un mercado relevante de distribución de gas combustible. Lo anterior, no aplica para proyectos de conexiones o de redes internas a usuarios pertenecientes a estratos socioeconómicos 1 y 2, y de la población del sector rural que cumpla con las condiciones para recibir el subsidio de vivienda de interés social rural.\n- Los estudios de la fase I con base en los cuales se definió la alternativa seleccionada, los cuales deben incluir análisis de alternativas para la prestación del servicio de gas combustible de acuerdo con las metodologías establecidas por la CREG. Lo anterior no aplica para proyectos de conexiones o de redes internas a usuarios pertenecientes a estratos socioeconómicos 1 y 2, y de la población del sector rural que cumpla con las condiciones para recibir el subsidio de vivienda de interés social rural.\nFase III\n- Aval técnico suscrito por el representante legal de la empresa de servicios públicos, con fecha de expedición no mayor a doce (12) meses, el cual debe señalar que se garantiza: i) la disponibilidad de suministro para atender la demanda de gas en el proyecto anexando los soportes, contratos o mecanismos complementarios, ii) la disponibilidad de transporte con la autorización de los puntos de conexión hasta el punto de entrega para atender la demanda de gas en el proyecto, anexando los soportes, contratos o mecanismos complementarios.\n- Certificado expedido por la CREG en el cual se señale que la población beneficiaria del proyecto no cuenta con cargos aprobados o en proceso de aprobación para la distribución y comercialización de gas combustible por redes de tubería en un mercado relevante de distribución de gas combustible. Lo anterior, no aplica para proyectos de conexiones o de redes internas a usuarios pertenecientes a estratos socioeconómicos 1 y 2, y de la población del sector rural que cumpla con las condiciones para recibir el subsidio de vivienda de interés social rural.\n- Para proyectos de conexiones o de redes internas a usuarios pertenecientes a estratos socioeconómicos 1 y 2, y de la población del sector rural que cumpla con las condiciones para recibir el subsidio de vivienda de interés social rural, certificado suscrito por el representante legal de la empresa de servicios públicos que prestará el servicio, en el que se señale que el proyecto de redes se encuentra dentro de su plan de expansión y garantice que se contará con la infraestructura de distribución necesaria para realizar efectivamente la conexión de usuarios al servicio, cumpliendo con lo establecido en el artículo 7 de la Resolución 202 de 2013 suscrita por la CREG. \n- Para los proyectos de redes de distribución y transporte, estudio de mercado que incluya información sobre los energéticos que se sustituirán con el proyecto y los consumos estimados para el sector residencial, comercial, oficial e industrial.\n- Listado de los potenciales hogares beneficiarios y su estrato socioeconómico.\n- La demanda anual de gas combustible proyectada a 20 años.\n- Para los proyectos que tengan como objeto o como uno de sus componentes redes internas,  el certificado de que trata el numeral 7 del artículo 4.1.2.1.1. del presente Acuerdo debe señalar que las viviendas no han sido beneficiarias con otros subsidios, en los cuales se haya incluido el servicio de gas combustible por red. \n- Estudio que determine que el costo económico de la prestación del servicio al usuario final con el proyecto presentado es igual o menor que el costo de prestación del servicio al usuario final de Gas Licuado de Petróleo (GLP) por cilindro, de acuerdo con las metodologías establecidas por la CREG. Lo anterior no aplica para proyectos de conexiones o de redes internas a usuarios pertenecientes a estratos socioeconómicos 1 y 2, y de la población del sector rural que cumpla con las condiciones para recibir el subsidio de vivienda de interés social rural.\n- Diagrama de prestación del servicio.",
    },{
      key: "3",
      proyecto: "MINAS\nI.  Proyectos de pequeña y mediana escala: i) fortalecimiento en temas de capacitación relacionados con la formalización minera, trabajo minero, manejo de explosivos, riesgos laborales, seguridad e higiene de las explotaciones mineras, buenas prácticas mineras, procesos de beneficio de oro con tecnologías limpias, ii) fortalecimiento en transferencia de tecnología, comercialización, desarrollo de valor agregado, desarrollo empresarial, estructuración de estrategias en mercadeo, integración de operaciones mineras, cierre y abandono de la explotación minera; iii) investigación e innovación en las fases de beneficio y transformación de minerales.",
      requisitos: "- Copia del acto administrativo que declare, delimite o defina el Área de Reserva Especial Minera, o copia del certificado del Registro Minero Nacional de título vigente o copia del certificado del Registro Minero Nacional de la anotación del subcontrato de formalización minera.\n- Para los proyectos ii y iii del numeral I: \n- Copia del acto administrativo donde se aprueba el Plan de trabajo y obras por la Agencia Nacional de Minería o quien haga sus veces o cuando exista subcontrato de formalización minera, documento que apruebe el plan de trabajo y obras complementario.\n- Copia de los actos administrativos donde se aprueba el instrumento ambiental (licencia ambiental o plan de manejo ambiental). En los casos en que la legalidad de la operación se compruebe con el subcontrato de formalización minera, se debe presentar el acto administrativo que acredite la adopción de las guías ambientales por la autoridad competente.\n-  Cuando se involucren grupos asociativos de la industria minera de pequeña y mediana escala, certificado de asociatividad expedido por la Cámara de Comercio o quien haga sus veces, el cual contemple dentro de su razón social la exploración y explotación de minerales.\n- Para proyectos que contemplen dentro de sus componentes la adquisición de equipos para uso minero, el plan de acción y certificado expedido por el representante legal de la entidad que presenta el proyecto en el cual se defina la entidad que debe tener la titularidad de los equipos y la entidad que será responsable de su administración, cuidado y custodia, avalado por las entidades correspondientes.",
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
            <View style = {{ flex: 1, paddingTop: Constants.statusBarHeightt, backgroundColor: "#3280e4" }}>
              <ScrollView>
			  	<Text style={{ fontSize: 20, marginHorizontal: 12, marginBottom:10, fontWeight: 'bold', color:"#18eac2" }}>
					Proyectos:
                </Text>
                <View style = {{ marginBottom:30, marginTop:10}}>
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
                          <Text style={{ color: '#7c7f7f', marginVertical:5, fontSize: 11, fontWeight: '700',marginTop: 20 }}>
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