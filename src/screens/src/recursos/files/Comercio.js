import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class Comercio extends Component {
  state = {
    todoList: [{
      key: "1",
      proyecto: "I. Proyectos de creación, fortalecimiento o desarrollo empresarial que obedezcan al diseño o ejecución de una estrategia competitiva para mejorar la productividad de las empresas, o unidades productivas y su capacidad de generar valor agregado",
      requisitos: "- El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3  del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición:\n- Número de los potenciales beneficiarios (empresarios, gremios, unidades productivas por tamaño y sector, entre otros) y criterios de priorización, focalización y selección\n- Impacto económico que generará el proyecto\n- Descripción de los productos y/o servicios y el valor agregado de los mismos\n- Descripción de la estrategia competitiva que incluya las acciones a realizar y la proyección del  impacto sobre la productividad de las empresas o emprendimientos a beneficiar",
    },{
      key: "2",
      proyecto: "II. Proyectos de infraestructura turística",
      requisitos: "- Estudio de mercado en el que se incluya estudio de demanda o información de fuentes secundarias con que cuente el sector y los impactos económicos que generará\n- El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición: el número de los potenciales beneficiarios (gremios, unidades productivas por tamaño y sector) y criterios de priorización, focalización y selección\n- Para proyectos de áreas protegidas, certificado expedido por la autoridad competente definida en el Decreto 1076 de 2015, en el que conste que el acceso y acojo de los visitantes en las zona general de uso público del área protegida está dentro de su capacidad de carga"
    },{
      key: "3",
      proyecto: "III.  Proyectos que contemplen la promoción de un destino turístico. El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición:",
      requisitos: "- Número y caracterización de los potenciales beneficiarios, líneas estratégicas del plan de promoción sectorial y regional a las que contribuye el proyecto, y vocación turística de los territorios y sus productos"
    },{
      key: "4",
      proyecto: "IV. Proyectos de diseño e implementación de producto turístico. El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición: ",
      requisitos: "- Número y caracterización de los potenciales beneficiarios, diagnóstico inicial de elementos o características generales como la institucionalidad del turismo en el territorio (oficinas de turismo), número de prestadores de servicios turísticos con Registro Nacional de Turismo (RNT) vigente de acuerdo con el tipo de prestador, y la evaluación de las condiciones actuales del producto turístico en la que conste si el destino ya cuenta con algún producto definido para fortalecer o reestructurar, o si se requiere desarrollar uno nuevo"
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