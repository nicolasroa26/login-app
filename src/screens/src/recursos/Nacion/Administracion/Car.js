import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
        proyecto: "REQUISITOS CONSTRUCCIÓN DE INFRAESTRUCTURA SANEAMIENTO BÁSICO",
        requisitos: "1. Carta de Intención de solicitud de cofinanciación.\n2. Ficha MGA\n3. Copia de los estudios y memorias de diseño de cálculo cuando se requiera:\n- Diseños y memorias de cálculos\n- Estudios Topográficos\n- Estudios hidrológicos e hidráulicos\n- Especificaciones técnicas\n-Presupuesto y cantidades de obra\n4. Plano de localización y diseño del proyecto.\n5. Copia de permiso, licencia, concesión o autorización ambiental del proyecto o del radicado de la solicitud.\n6. Cronograma de actividades, metas y flujo de fondos.\n7. Plan financiero del proyecto por usos, fuentes y aportes.\n8. Documento de Cofinanciación y valor.\n9. Paz y salvo con la CAR.\n10. DOCUMENTOS JURIDICOS\n11. Fotocopia de la cédula del Representante Legal\n12. Copia Acta de Posesión. del Representante Legal\n13. Copia Acuerdo que lo autoriza para firmar convenios.\n14. Póliza de Manejo\n15. Copia NIT del Municipio\n16. Acuerdo de pago o paz y salvo con la CAR, el cual será emitido por la Subdirección Administrativa y Financiera de la CAR",
      },{
        key: "2",
        proyecto: "REQUISITOS CONSTRUCCIÓN Y OPTIMIZACIÓN DE PTAR",
        requisitos: "1. Carta de Intención de solicitud de cofinanciación.\n2. Ficha MGA\n3. Copia de los estudios y memorias de diseño de cálculo cuando se requiera:\n- Diseños y memorias de cálculos\n- Estudios Topográficos\n- Estudios hidrológicos e hidráulicos\n- Especificaciones técnicas\n-Presupuesto y cantidades de obra\n4. Plano de localización y diseño del proyecto.\n5. Copia de permiso, licencia, concesión o autorización ambiental del proyecto o del radicado de la solicitud.\n6. Cronograma de actividades, metas y flujo de fondos.\n7. Plan financiero del proyecto por usos, fuentes y aportes.\n8. Documento de Cofinanciación y valor.\n9. Paz y salvo con la CAR.\n10. DOCUMENTOS JURIDICOS\n11. Fotocopia de la cédula del Representante Legal\n12. Copia Acta de Posesión. del Representante Legal\n13. Copia Acuerdo que lo autoriza para firmar convenios.\n14. Póliza de Manejo\n15. Copia NIT del Municipio\n16. Acuerdo de pago o paz y salvo con la CAR, el cual será emitido por la Subdirección Administrativa y Financiera de la CAR"
    },{
        key: "3",
        proyecto: "REQUISITOS ADECUACIÓN DE TALUDES	",
        requisitos: "1. Carta de Intención de solicitud de cofinanciación.\n2. Ficha MGA\n3. Copia de los estudios y memorias de diseño de cálculo cuando se requiera:\n- Diseños y memorias de cálculos\n- Estudios Topográficos\n- Estudios hidrológicos e hidráulicos\n- Especificaciones técnicas\n-Presupuesto y cantidades de obra\n4. Plano de localización y diseño del proyecto.\n5. Copia de permiso, licencia, concesión o autorización ambiental del proyecto o del radicado de la solicitud.\n6. Cronograma de actividades, metas y flujo de fondos.\n7. Plan financiero del proyecto por usos, fuentes y aportes.\n8. Documento de Cofinanciación y valor.\n9. Paz y salvo con la CAR.\n10. DOCUMENTOS JURIDICOS\n11. Fotocopia de la cédula del Representante Legal\n12. Copia Acta de Posesión. del Representante Legal\n13. Copia Acuerdo que lo autoriza para firmar convenios.\n14. Póliza de Manejo\n15. Copia NIT del Municipio\n16. Acuerdo de pago o paz y salvo con la CAR, el cual será emitido por la Subdirección Administrativa y Financiera de la CAR"
    },{
        key: "4",
        proyecto: "REQUISITOS CONSTRUCCIÓN MUROS DE CONTENCIÓN 	",
        requisitos: "1. Carta de Intención de solicitud de cofinanciación.\n2. Ficha MGA\n3. Copia de los estudios y memorias de diseño de cálculo cuando se requiera:\n- Diseños y memorias de cálculos\n- Estudios Topográficos\n- Estudios hidrológicos e hidráulicos\n- Especificaciones técnicas\n-Presupuesto y cantidades de obra\n4. Plano de localización y diseño del proyecto.\n5. Copia de permiso, licencia, concesión o autorización ambiental del proyecto o del radicado de la solicitud.\n6. Cronograma de actividades, metas y flujo de fondos.\n7. Plan financiero del proyecto por usos, fuentes y aportes.\n8. Documento de Cofinanciación y valor.\n9. Paz y salvo con la CAR.\n10. DOCUMENTOS JURIDICOS\n11. Fotocopia de la cédula del Representante Legal\n12. Copia Acta de Posesión. del Representante Legal\n13. Copia Acuerdo que lo autoriza para firmar convenios.\n14. Póliza de Manejo\n15. Copia NIT del Municipio\n16. Acuerdo de pago o paz y salvo con la CAR, el cual será emitido por la Subdirección Administrativa y Financiera de la CAR"
    },{
        key: "5",
        proyecto: "COMPRA DE PREDIOS HÍDRICOS",
        requisitos: "1. Oficio presentación proyecto (Para Municipios)\n2. MGA en PDF\n3. Presupuesto del proyecto \n4. Documento técnico / Diagnóstico (Formato E-DAG-FR-076)\n5. Avalúo comercial predio(s)\n6. Acto administrativo ambiental\n7. Reglamentación de uso del suelo\n8. Carta de intención de venta\n9. Certificación cuenta bancaria\n10. Certificado tradición y libertad\n11. Certificación avalúo catastral e impuestos\n12. Certificado de consulta de archivos catastrales\n13. Estudio jurídico de títulos\n14. Escritura pública\n15. Plancha predial en escala 1:10.000\n16. Censo de beneficiarios"
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