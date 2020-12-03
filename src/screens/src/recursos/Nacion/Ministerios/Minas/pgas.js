import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../../data/Context';
import { Task } from '../../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
        proyecto: "REQUISITOS CONSTRUCCIÓN DE GASODUCTOS, SISTEMAS DE TRANSPORTE, DISTRIBUCIÓN DE GAS NATURAL Y CONEXIONES DOMICILIARIAS ",
        requisitos: "1. Carta de presentación para la solicitud de recursos (FECF - Formato 1B (proyectos de Conexiones), 1C (proyectos de Distribución), 1D (proyectos de Transporte)\n2. Aval Tecnico y financiero del prestador del servicio (FECF – SGR. Proyectos de redes de distribución - Formato 3B.; proyectos de transporte de gas natural - Formato 3C; proyectos conexiones a usuarios de menores ingresos - Formato 3D)\n3. Estudio de mercado\n4. Diseños técnicos \n5. Planos técnicos\n6. Presupuesto (FECF y SGR - Formato 5C)\n7. Análisis de Precios Unitarios -APU\n8. Cronograma de actividades\n9. Metodología general ajustada -MGA\n10. Certificado de Plan de Desarrollo (FECF y SGR - Formato 7A.)\n11. Certificado de no presentación a otros fondos\n12. Certificados de cofinanciación\n13. Certificado de Tradición y Libertad\n14. Avalúo del lote\n15. Licencias y permisos ambientales\n16. Listado de usuarios (FECF y SGR - Formato 11A)\n17. Estudio comparativo del proyecto versus el cilindro de GlP\n18. Plano de localización\n19. Certificado CREG de la no inclusión en planes de expansión \n20. Certificado de no inclusión del proyecto en Áreas de Servicio Exclusivo -ASE-\n21. Certificación de Necesidades Básicas Insatisfechas -NBI\n22. Certificado de Disponibilidad de Suministro (Formato 13A)\n23. Certificado de Disponibilidad de Transporte (Proyectos de redes de distribución: Formato 14B)\n24. Estudio de suelos\n25. Presentación del proyecto ante la autoridad ambiental\n26. Esquema de interventoría\n27. Esquema de cofinanciación del proyecto\n28. Características y valor de la franja a negociar por servidumbres",
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
                <Text style={{ fontSize: 20, marginHorizontal: 12, marginBottom:10, fontWeight: 'bold', color: "#18eac2" }}>
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