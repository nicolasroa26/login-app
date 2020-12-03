import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class Inclusion extends Component {
  state = {
    todoList: [{
      key: "1",
      proyecto: "I. Proyectos de construcción, ampliación, adecuación o dotación de infraestructura para la atención integral a la primera infancia en modalidad institucional, conforme a la política pública de primera infancia y los fundamentos políticos, técnicos y de gestión de la Estrategia de Atención Integral a la Primera Infancia De Cero a Siempre.",
      requisitos: "- Certificado expedido por el representante legal de la entidad que presenta el proyecto en el que conste que el proyecto cumple con lo establecido en la Resolución 13482 de 2016. \n- Para los proyectos cuya operación del servicio se realice a cargo del Instituto Colombiano de Bienestar Familiar (ICBF), el certificado de que trata el numeral 10 del artículo 4.1.2.1.3 del presente Acuerdo, debe ser emitido por dicha entidad.",
    },{
      key: "2",
      proyecto: "II. Proyectos que focalicen acciones que contribuyan a la atención, asistencia y reparación integral a las víctimas del conflicto armado interno de acuerdo con lo establecido en la Ley 1448 de 2011.",
      requisitos: "- Certificado expedido por el representante legal de la entidad territorial en la el que conste que el proyecto está incluido dentro del Plan de Acción de Atención y Reparación Integral a las Víctimas de la entidad territorial.\n- Certificado expedido por la Unidad Administrativa Especial para la Atención y Reparación Integral a las Víctimas en el que conste que  los potenciales beneficiarios están incluidos en el Registro Único de Víctimas. ",
    },{
      key: "3",
      proyecto: "III. Proyectos de capacitación y formación de apropiación del Sistema de Responsabilidad Penal para Adolescentes (SRPA); o proyectos de diseño, construcción, reconstrucción, adecuación o dotación especializada para los diferentes servicios de infraestructura de unidades de servicio del SRPA.",
      requisitos: "- Aval del proyecto de inversión expedido por la Subdirección de Responsabilidad Penal para Adolescentes de la Dirección General del ICBF en la que se señale que el proyecto cumple con lo previsto en la Ley 1098 de 2006.",
    },{
      key: "4",
      proyecto: "IV. Proyectos de mejoramiento locativo de los inmuebles donde se prestan los servicios de atención a primera infancia en modalidad comunitaria.",
      requisitos: "- Certificado sobre la vinculación laboral, expedida por la entidad administradora de servicio a la cual se encuentra vinculada la madre comunitaria.\n- Certificado de tradición y libertad expedido con una antelación no superior a tres (3) meses, contados desde la fecha de remisión a la instancia de verificación de requisitos, donde conste que la madre comunitaria es propietaria, o certificado de sana posesión expedido por autoridad competente en el que conste que la madre comunitaria es poseedora.\n- Certificado expedido por la entidad territorial en el cual conste que los beneficiarios no han recibido, o no están recibiendo subsidios para el mejoramiento y dotación de la vivienda",
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
                          <Text style={{ color: '#7c7f7f', marginVertical:5, fontSize: 11, fontWeight: '700' }}>
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