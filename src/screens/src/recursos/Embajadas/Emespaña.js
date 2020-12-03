import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
        proyecto: "COOPERACIÓN PROYECTOS Y PROGRAMAS",
        descripcion: "Apoyo técnico y financiero no reembolsable a proyectos y programas dentro de los cuatro sectores prioritarios. Se priorizan programas plurianuales en el marco de una política pública nacional, regional o local",
        tproyectos: "* Construcción de Paz\n* Genero en dearrollo \n* Crecimiento Economico para la reducción de la pobreza\n* Servicios sociales Básicos: Agua Potables y Saneamiento",
        dirigido: "Entidades públicas nacionales y territoriales.",
        mecanismo: "Las entidades públicas interesadas en acceder a este tipo de ayuda deben contactar a APC-Colombia,  o a la Oficina Técnica de Cooperación (AECID) de la Embajada de España para identificar posibles acciones de apoyo en el marco de los cuatro sectores mencionados. Contactar a las delegaciones de Agencias de Comunidades Autónomas y Entidades Locales españolas en Colombia y en España",
        como: "La Oficina Técnica de Cooperación (AECID) de la Embajada de España apoya financieramente aquellos rubros que tengan como objetivo promover procesos de asistencia técnica y, o, transferencia tecnológica y, eventualmente, los equipos necesarios para el desarrollo de este objetivo. Se requiere contrapartida nacional en torno al 20% del presupuesto.\nAlgunas Agencias de Cooperación de Comunidades Autónomas y Entidades Locales españolas realizan financiación directa, principalmente a entidades públicas del nivel departamental y local, en menor medida a través de entidades privadas",
        requisitos:"N/A",
        montos: "100.000 a 500.000 € anuales",
        plazos: "N/A",
        medios: "www.aecid.org.co y www.aecid.esPáginas web de las Agencias de Cooperación de Comunidades Autónomas y Entidades Locales españolas."
    },{
        key: "2",
        proyecto: "COOPERACIÓN TÉCNICA",
        descripcion: "Actividades de asistencia técnica vinculada a la construcción de capacidades propias en Colombia. Pública, Universitaria y Privada y Especializada",
        tproyectos: "* Construcción de Paz\n* Genero en dearrollo \n* Crecimiento Economico para la reducción de la pobreza\n* Servicios sociales Básicos: Agua Potables y Saneamiento",
        dirigido: "Entidades públicas nacionales y territoriales",
        mecanismo: "Se define, demanda y provee desde la iniciativa las entidades públicas del país socio, conjuntamente con la Oficina Técnica de Cooperación de AECID/Ministerio de la AGE española",
        como: "Funciona a demanda de las Entidades Públicas del Orden Nacional y Territorial. Enmarcada en los 4 sectores prioritarios de la Cooperación Española en Colombia",
        requisitos:"N/A",
        montos: "Costos entre 5.000 y 25.000 €",
        plazos: "N/A",
        medios: "www.aecid.org.co y www.aecid.esPáginas web de las Agencias de Cooperación de Comunidades Autónomas y Entidades Locales españolas"
    },{
        key: "3",
        proyecto: "COOPERACIÓN FONDO PARA LA PROMOCIÓN DE DESARROLLO FONPRONE",
        descripcion: "Apoyo financiero y reembolsable a proyectos de desarrollo y fondos",
        tproyectos: "* Construcción de Paz\n* Genero en dearrollo \n* Crecimiento Economico para la reducción de la pobreza\n* Servicios sociales Básicos: Agua Potables y Saneamiento",
        dirigido: "Entidades públicas y privadas nacionales y territoriales",
        mecanismo: "Las entidades públicas y privadas interesadas en acceder a este tipo de ayuda deben contactar a APC-Colombia o a la Oficina Técnica de Cooperación (AECID) de la Embajada de España para identificar posibles acciones de apoyo en el marco de los cuatro sectores mencionados",
        como: "La Oficina del FONPRODE valora la viabilidad técnica de la contribución reembolsable propuesta y es aprobada en una instancia interinstitucional en Madrid",
        requisitos:"N/A",
        montos: "Preferiblemente superiores a 5 millones de €",
        plazos: "N/A",
        medios: "www.aecid.es"    

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
                  <ScrollView style={{overflowY: "scroll", height: "auto", width: "auto"}}>
                  <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                    Nombre de Proyecto
                  </Text>
                  <Text style={styles.titlep}>
                    {selectedTask.proyecto}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                  </View>
                  <View style={styles.notesContent} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                     Descripcion:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.descripcion}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Tipo de proyectos:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.tproyectos}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Dirigido a:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.dirigido}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Mecanismos de acceso:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.mecanismo}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Como funciona:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.como}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Requisitos:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.requisitos}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Montos:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.montos}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Plazos o periodos de presentacion:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.plazos}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Medios de publicacion:
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.medios}
                    </Text>
                  </View>
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
                  </ScrollView>
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