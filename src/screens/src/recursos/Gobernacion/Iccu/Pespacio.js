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
      proyecto: "CONSTRUCCIÓN DE PARQUES PRINCIPALES",
      requisitos: "1. MGA en PDF\n2. Presupuesto del proyecto ( FORMATO PRESUPUESTO )\n3. Documento técnico / Diagnóstico ( FORMATO E-DEAG-FR-076 )\n4. Certificado de cofinanciación\n5. Certificado actividades no tienen financiación\n6. Certificado Plan de Desarrollo\n7. Certificado cumplimiento POT\n8. Certificado zona de no riesgo\n9. Certificado servicios públicos\n10. Chequeos técnicos\n11. Certificado proyecto no intervenido\n12. Certificado documentos originales firmados\n13. Certificado Tradición y Libertad\n14. Licencia de Construcción\n15. Certificado Matrícula Inmobiliaria\n16. Certificado predio disponible\n17. Certificado operación y mantenimiento\n18. Certificado zona no es reserva arqueológica\n19. Plan de Manejo Ambiental\n20. Memoria de cálculo\n21. Cronograma\n22. Estudio de suelos\n23. Topografía y registro topográfico\n24. Diseños arquitectónicos\n25. Diseños estructurales\n26. Diseños eléctricos\n27. Diseños hidrosanitarios y de gas",
    },{
      key: "2",
      proyecto: "ADECUACIÓN DE PARQUES PRINCIPALES",
      requisitos: "1. MGA en PDF\n2. Presupuesto del proyecto ( FORMATO PRESUPUESTO )\n3. Documento técnico / Diagnóstico ( FORMATO E-DEAG-FR-076 )\n4. Certificado de cofinanciación\n5. Certificado actividades no tienen financiación\n6. Certificado Plan de Desarrollo\n7. Certificado cumplimiento POT\n8. Certificado zona de no riesgo\n9. Certificado servicios públicos\n10. Chequeos técnicos\n11. Certificado proyecto no intervenido\n12. Certificado documentos originales firmados\n13. Certificado Tradición y Libertad\n14. Certificado Matrícula Inmobiliaria\n15. Certificado predio disponible\n16. Certificado operación y mantenimiento\n17. Certificado zona no es reserva arqueológica\n18. Plan de Manejo Ambiental\n19. Memoria de cálculo\n20. Cronograma\n21. Estudio de suelos\n22. Topografía y registro topográfico\n23. Diseños arquitectónicos\n24. Diseños estructurales\n25. Diseños eléctricos\n26. Diseños hidrosanitarios y de gas",
    },{
      key: "3",
      proyecto: "MEJORAMIENTO DE ESPACIO PÚBLICO (ZONAS COMUNES DONDE LA MALLA VIAL SEA EL PRINCIPAL PROBLEMA)		",
      requisitos: "1. MGA en PDF\n2. Presupuesto del proyecto ( FORMATO PRESUPUESTO )\n3. Documento técnico / Diagnóstico ( FORMATO E-DEAG-FR-076 )\n4. Certificado de cofinanciación\n5. Certificado actividades no tienen financiación\n6. Certificado Plan de Desarrollo\n7. Certificado cumplimiento POT\n8. Certificado zona de no riesgo\n9. Certificado servicios públicos\n10. Chequeos técnicos\n11. Certificado proyecto no intervenido\n12. Certificado documentos originales firmados\n3. Certificado operación y mantenimiento\n14. Certificado zona no es reserva arqueológica\n15. Plan de Manejo Ambiental\n16. Memoria de cálculo\n17. Cronograma\n18. Estudio de suelos\n19. Topografía y registro topográfico\n20. Diseños arquitectónicos\n21. Diseños estructurales",
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
            <View style = {{ flex: 1, paddingTop: Constants.statusBarHeight, backgroundColor: "#3280e4"  }}>
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