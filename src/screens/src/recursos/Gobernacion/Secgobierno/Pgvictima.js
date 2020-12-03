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
      proyecto: "GENERACION DE INGRESOS DE VCA",
      requisitos: "1. Oficio solicitando el registro del proyecto, firmado por el ordenador del gasto de la entidad responsable (aplica para los proyectos que envía cada Entidad Sectorial departamental a la Secretaría de Planeación) en formato PDF \n2. Oficio de presentación del proyecto en formato PDF, firmado por el representante de la Entidad Territorial (aplica para los proyectos que presentan los municipios a las Entidades Sectoriales Departamentales), en donde se especifique: \n a. Nombre completo del proyecto de inversión. \n b. Número del proyecto de inversión \n c. Valor total del proyecto de inversión. En caso de que el proyecto cuente con varias fuentes de financiación, debe especificarse para cada fuente el valor del aporte correspondiente \n3. Proyecto formulado en la Metodología General Ajustada MGA vigente en formato PDF \n4. Presupuesto del proyecto elaborado en el formato que determine la Secretaría de Gobierno con las actividades necesarias para lograr los productos esperados, en formato Excel (xls) y PDF firmado. Adicional a ello, si es un presupuesto de infraestructura, deberá tener en cuenta el modelo presupuestado consolidado por el ICCU. El presupuesto se debe elaborar teniendo en cuenta los precios establecidos por la entidad para la vigencia o en su defecto los precios de mercado \n5. Documento técnico definido por la Secretaría Departamental de Planeación que soporte la MGA del proyecto en formato PDF, firmado por el profesional competente \n6. Documentos que acrediten la calidad de representante legal, acta de posesión, certificado de existencia y representación legal y documento de identidad en formato PDF \n7. Certificación expedida por la secretaría de planeación de la entidad territorial donde se va a ejecutar el proyecto, en el que conste, que éste se encuentra en concordancia con el Plan de Desarrollo Nacional y territorial, en formato PDF \n8. Certificado de disponibilidad presupuestal, en formato PDF \n9. Para proyectos que requieren intervención u ocupación del suelo, certificado del funcionario competente, en el que conste que no está localizado en zona que representa alto riesgo no mitigable y que está acorde con las normas vigentes establecidas en el respectivo POT, PBOT o EOT. En formato PDF \n10. Para proyectos que requieren intervención u utilización de suelo para el caso de los agropecuarios, se requiere un documento que acredite la propiedad \n11. Plano de localización del bien inmueble. PDF \n12. Inscripción al Registro Único de Víctimas. PDF \n13. Certificado de residencia en el Departamento de Cundinamarca. PDF \n14. Carta de validación del proyecto expedida por la mesa municipal de víctimas PDF \n15. Acta de aprobación del proyecto del Comité justicia transicional de víctimas \n16. Carta de compromiso de seguimiento al desarrollo del proyecto, suscrita por el representante legal del municipio que se presenta ",
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
            <View style = {{ flex: 1, paddingTop: Constants.statusBarHeight,backgroundColor: "#3280e4" }}>
              <ScrollView>
                <Text style={{ fontSize: 20, marginHorizontal: 12, marginBottom:10, fontWeight: 'bold', color:"#18eac2"  }}>
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