import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class Agricultura extends Component {
  state = {
    todoList: [{
      key: "1",
      proyecto: "I. Proyectos que promuevan el desarrollo rural, agropecuario o agroforestal, el fortalecimiento y fomento de la productividad y competitividad de los productos, el fomento a la producción, la asistencia técnica, asociatividad, alianzas productivas, la formalización empresarial, infraestructura productiva y generación de valor agregado en los productos agropecuarios como centros de acopio, plantas de transformación, redes de frío, plantas de beneficio animal, desprese, desposte, almacenamiento y expendio de productos de abasto público, central de abastos y similares. ",
      requisitos: "- El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición:\n - Tipo de actividad productiva que se va a implementar.\n - Áreas de producción, la producción estimada y la caracterización del producto.\n - Organizaciones de productores beneficiarias del proyecto, cuando aplique\n - Los volúmenes que se manejarán, compromisos de oferta y de compra, periodos de suministro y los esquemas de comercialización.\n- Para los proyectos de centros de acopio, plantas de transformación, redes de frío, plantas de beneficio animal, desprese, desposte, almacenamiento y expendio de animales de abasto público o centrales de abasto, autorización de la Unidad Administrativa Especial de la Aeronáutica Civil en los términos de los Reglamentos Aeronáuticos de Colombia (Resolución 3152 de 2004, adicionada por la Resolución 4072 de 2010) relativa al peligro aviario como obstáculo para la seguridad de la aviación.\n- Para los proyectos de plantas de beneficio animal, certificado del departamento en el que conste que el proyecto está de acuerdo con el plan de racionalización de plantas de beneficio animal departamental.",
    },{
      key: "2",
      proyecto: "II. Proyectos de adecuación de tierras a través de la construcción, rehabilitación, ampliación o complementación de obras de infraestructura de distritos de riego y drenaje. Plan agropecuario y de negocios que desarrollará el proyecto como resultado de la adecuación con riego y drenaje de una región, el cual debe contener como mínimo:",
      requisitos: "- Número mínimo de beneficiarios\n- Cultivos, áreas.\n- Tipos de productores.\n- Descripción de las organizaciones formalmente constituidas. \n- Cronograma de actividades.\n- Mercados objetivo.\n- Contribución a la consolidación de conglomerados productivos, cuando aplique.\n- Descripción de las obras complementarias.\n- Actividades relacionadas con la conservación de cuencas y el manejo adecuado de las aguas servidas."
    },{
      key: "3",
      proyecto: "III. Proyectos de acuicultura y pesca. Además de los requisitos señalados en el numeral I de este Anexo, presentar:",
      requisitos: "- Permiso para el ejercicio de la actividad expedida por la Autoridad Nacional de Acuicultura y Pesca (Aunap)\n- Documento expedido por el representante legal de la entidad territorial en el cual se determinen los criterios de priorización y focalización que deben cumplir los hogares a beneficiar. Tratándose de proyectos cofinanciados con recursos del PGN, certificación expedida por el representante legal de la entidad mediante el cual se acogen los criterios de priorización y focalización expedidos por el Ministerio de Agricultura y Desarrollo Rural\n- Para proyectos de vivienda de interés social rural cofinanciados con recursos del PGN, certificado expedido por el representante legal de la entidad territorial en el que conste que el proyecto de vivienda cumple con las condiciones establecidas en el artículo 2.2.1.2.5 del Decreto 1071 de 2015\n- Proyectos en la modalidad de construcción en sitio propio o mejoramiento y saneamiento básico:\n - Listado de los potenciales hogares beneficiarios y las respectivas obras a ejecutar en cada hogar\n - Certificado de tradición y libertad expedido con una antelación no superior a tres (3) meses, contados desde la fecha de remisión a la instancia de verificación de requisitos, donde conste la titularidad de la propiedad de uno o varios miembros del hogar a beneficiar, por cada inmueble. En los casos en que uno o varios miembros del hogar sean poseedores, se debe adjuntar la documentación que demuestre la posesión por un término no menor a cinco (5) años, en la forma señalada en el Reglamento Operativo del Programa o el certificado de sana posesión expedido por autoridad competente."
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
                          <Text style={{ color: '#7c7f7f', marginVertical:5, fontSize: 13, fontWeight: '700' }}>
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