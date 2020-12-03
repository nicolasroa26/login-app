import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class Salud extends Component {
  state = {
    todoList: [{
      key: "1",
      proyecto: "I. Para proyectos de construcción, ampliación, adecuación, remodelación y reposición de infraestructura, para la prestación de los servicios de salud en el territorio nacional. ",
      requisitos: "- Concepto emitido por la secretaría departamental o distrital de salud, o la entidad competente que haga sus veces, en el que conste que el proyecto está articulado con el diseño de la red pública de prestación de servicios de salud e incluido en el plan bienal de inversiones en salud del respectivo distrito o departamento aprobado por el Ministerio de Salud y Protección Social, en los términos establecidos en los artículos 54 y 65 de la Ley 715 de 2001 y la Resolución 2514 de 2012.\n- El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3. del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición, análisis comparativo de la capacidad física actual de la entidad con la capacidad física propuesta, de acuerdo con la oferta de servicios y el nivel de complejidad. \n- Programa médico arquitectónico\n- Planos que incluyan los criterios y aspectos normativos contemplados en la Ley 400 de 1997, el Decreto 945 de 2017 y las Resoluciones 4445 de 1996, 2003 de 2014, 14861 de 1985 del Ministerio de Salud y Protección Social, así como, al artículo 14 de la Ley 1618 de 2013 y la NSR10, acompañados del certificado emitido por la entidad que presenta el proyecto en el que se señale que los planos cumplen con estas normas. \n- Pronunciamiento técnico del Ministerio de Salud y Protección Social cuando se trate de proyectos de infraestructura con valor igual o superior a mil (1.000) SMMLV, según lo previsto en el literal a) del artículo 8 de la Resolución 2514 de 2012 del Ministerio de Salud y Protección Social. Cuando el valor del proyecto sea inferior a los mil (1.000) SMMLV, el pronunciamiento será expedido por la Dirección Departamental o Distrital de Salud, o la entidad competente que haga sus veces, de conformidad con el señalado en el mencionado artículo.",
    },{
      key: "2",
      proyecto: "II. Proyectos de dotación y reposición de equipos biomédicos e industrial hospitalario, necesarios para la adecuada prestación de los servicios de salud que operan en el territorio nacional.",
      requisitos: "- Concepto emitido por la secretaría departamental o distrital de salud o la entidad competente que haga sus veces, en el que conste que el proyecto está articulado con el diseño de la red pública de prestación de servicios de salud e incluido en el plan bienal de inversiones en salud del respectivo distrito o departamento aprobado por el Ministerio de Salud y Protección Social, en los términos establecidos en los artículos 54 y 65 de la Ley 715 de 2001 y la Resolución 2514 de 2012. \n- Las especificaciones técnicas de que trata el numeral 1 del artículo 4.1.2.1.3  del presente Acuerdo deben contener el listado de la dotación a adquirir clasificada en: equipos biomédicos y dispositivos médicos,  mobiliario asistencial, mobiliario administrativo,  equipos TIC y equipos industriales de uso hospitalario;  y justificación de la necesidad de cada equipo relacionando especificaciones técnicas, cantidades e indicando los servicios y los ambientes donde van a funcionar.  Se debe tener en cuenta la normativa vigente para estas tecnologías tales como la Ley 9ª de 1979, el Decreto 1769 de 1994, la Resolución 2400 de 1979, en lo relacionado con los planes de mantenimiento, el Decreto 4725 de 2005, Decreto 1011 de 2006 y Resolución 2003 de 2014 del Ministerio de Salud y Protección Social.\n- Pronunciamiento técnico del Ministerio de Salud y Protección Social, según lo previsto en el literal b) del artículo 8 de la Resolución 2514 de 2012 del Ministerio de Salud y Protección Social, cuando el proyecto contemple la dotación de equipos biomédicos para la prestación de servicios de salud de control especial de oferta, descritos en el artículo 2 de la mencionada resolución.",
    },{
      key: "3",
      proyecto: "III.  Proyectos de construcción, ampliación, adecuación, remodelación o reposición de infraestructura o dotación o reposición de equipos biomédicos e industrial hospitalario en municipios no certificados en salud y que cuenten con una empresa social del Estado. Además de lo previsto en los literales I y II del presente anexo, según el tipo de proyecto",
      requisitos: "- Aval del departamento autorizando la inversión, en desarrollo del principio de complementariedad previsto en el literal d del artículo 3 de la Ley 1551 de 2012. ",
    },{
      key: "4",
      proyecto: "IV. Proyectos tendientes a la promoción de la salud, la prevención de enfermedad, gestión de la salud pública, la vigilancia, control y seguimiento de los eventos de interés en salud pública.",
      requisitos: "- Concepto técnico de la secretaría de salud o quien haga sus veces en la entidad que presenta el proyecto, en el que se describa el aporte del proyecto a las metas del plan territorial de salud pública; dicho aporte debe ser concordante y complementario con las prioridades definidas en el Análisis de Situación de Salud (ASIS) y el diagnóstico PASE. Si se trata de acciones contempladas en las rutas integrales de atención en salud o en el plan de intervenciones colectivas (PIC), la secretaría departamental o distrital de salud o la entidad competente que haga sus veces, debe describir la forma en que las acciones complementarán el PIC del territorio.\n- Los proyectos que requieran la adquisición o dotación de equipos, deben atender lo previsto en el literal II del presente anexo.",
    },{
      key: "5",
      proyecto: "V. Proyectos orientados a la implementación del programa de atención psicosocial a víctimas PAPSIVI. ",
      requisitos: "- Certificación de la Dirección Departamental o Distrital de salud, o quien haga sus veces en la entidad, en la que conste que el proyecto se estructuró de conformidad con el “Anexo técnico - lineamientos técnicos para la continuidad de la implementación, seguimiento y monitoreo del Programa de Atención Psicosocial y Salud Integral a Víctimas (PAPSIVI)” emitido por el Ministerio de Salud y Protección Social en cumplimiento de lo dispuesto en la Ley 1448 de 2011 y que se encuentra incluido en el Plan de Acción de Atención y Reparación integral a las Víctimas de la entidad territorial.",
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
    height: 90,
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