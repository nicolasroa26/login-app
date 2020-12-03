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
      proyecto: "CONSTRUCCIÓN SENDEROS TURISTICOS",
      requisitos: "1. Oficio presentación proyecto (Para Municipios)\n2. MGA en PDF\n3. Presupuesto del proyecto \n4. Documento técnico / Diagnóstico (Formato E-DAG-FR-076)\n5. Certificado servicios públicos\n6. Certificación Zona segura\n7. Certificado libertad y tradición\n8. Certificación uso del suelo\n9. Levantamiento topográfico\n10. Estudio de suelos\n11. Plano apiques\n12. Registro fotográfico\n13. Planos Arquitectónicos\n14. Planos urbanísticos\n15. Planos paisajísticos\n16. Planos estructurales\n17. Memorias descriptivas\n18. Instalaciones hidráulicas, sanitarias, contraincendios\n19. Redes eléctricas\n20. Instalaciones de redes\n21. Instalaciones metalmecánicas\n22. Planos de detalles constructivos\n23. Plano de implantación\n24. Cronograma de actividades",
    },{
      key: "2",
      proyecto: "CONSTRUCCIÓN PLAZOLETAS",
      requisitos: "1. Oficio presentación proyecto (Para Municipios)\n2. MGA en PDF\n3. Presupuesto del proyecto \n4. Documento técnico / Diagnóstico (Formato E-DAG-FR-076)\n5. Certificado servicios públicos\n6. Certificación Zona segura\n7. Certificado libertad y tradición\n8. Certificación uso del suelo\n9. Levantamiento topográfico\n10. Estudio de suelos\n11. Plano apiques\n12. Registro fotográfico\n13. Planos Arquitectónicos\n14. Planos urbanísticos\n15. Planos paisajísticos\n16. Planos estructurales\n17. Memorias descriptivas\n18. Instalaciones hidráulicas, sanitarias, contraincendios\n19. Redes eléctricas\n20. Instalaciones de redes\n21. Instalaciones metalmecánicas\n22. Planos de detalles constructivos\n23. Plano de implantación\n24. Cronograma de actividades",
    },{
      key: "3",
      proyecto: "EMBELLECIMIENTO DE LUGARES TURÍSTICOS",
      requisitos: "1. Oficio presentación proyecto (Para Municipios)\n2. MGA en PDF\n3. Presupuesto del proyecto \n4. Documento técnico / Diagnóstico (Formato E-DAG-FR-076)\n5. Certificado servicios públicos\n6. Certificación Zona segura\n7. Certificado libertad y tradición\n8. Certificación uso del suelo\n9. Levantamiento topográfico\n10. Estudio de suelos\n11. Plano apiques\n12. Registro fotográfico\n13. Planos Arquitectónicos\n14. Planos urbanísticos\n15. Planos paisajísticos\n16. Planos estructurales\n17. Memorias descriptivas\n18. Instalaciones hidráulicas, sanitarias, contraincendios\n19. Redes eléctricas\n20. Instalaciones de redes\n21. Instalaciones metalmecánicas\n22. Planos de detalles constructivos\n23. Plano de implantación\n24. Cronograma de actividades",
    },{
      key: "4",
      proyecto: "MEJORAMIENTO Y ADECUACIÓN DE PARQUES ECOLÓGICOS",
      requisitos: "1. Oficio presentación proyecto (Para Municipios)\n2. MGA en PDF\n3. Presupuesto del proyecto \n4. Documento técnico / Diagnóstico (Formato E-DAG-FR-076)\n5. Certificado servicios públicos\n6. Certificación Zona segura\n7. Certificado libertad y tradición\n8. Certificación uso del suelo\n9. Levantamiento topográfico\n10. Estudio de suelos\n11. Plano apiques\n12. Registro fotográfico\n13. Planos Arquitectónicos\n14. Planos urbanísticos\n15. Planos paisajísticos\n16. Planos estructurales\n17. Memorias descriptivas\n18. Instalaciones hidráulicas, sanitarias, contraincendios\n19. Redes eléctricas\n20. Instalaciones de redes\n21. Instalaciones metalmecánicas\n22. Planos de detalles constructivos\n23. Plano de implantación\n24. Cronograma de actividades",
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