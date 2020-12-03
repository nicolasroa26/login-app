import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
        proyecto: "COOPERACIÓN PROGRAMAS Y PROYECTOS",
        descripcion: "Apoyo técnico y financiero no reembolsable a proyectos y programas. Con Corea por primera vez se adelantará un ejercicio Estrategia País, enmarcado en las cuatro áreas antes señaladas y en proceso de negociación. Sin embargo, todos los proyectos se realizan en el marco de la política pública nacional, regional o local",
        tproyectos: "* Construcción de Paz\n* Genero en dearrollo \n* Crecimiento Economico para la reducción de la pobreza",
        dirigido: "Entidades públicas nacionales y territoriales",
        mecanismo: "A través de APC-Colombia",
        como: "Todos los años se adelantan reuniones de coordinación entre APC-Colombia, Ministerio de Relaciones Exteriores y KOICA para negociar las prioridades o proyectos en el marco de las cuatro áreas",
        requisitos:"* Carta de presentación para la solicitud de recursos\n* Registro BPI o BPIN\n* Aval Tecnico y financiero del prestador del servicio\n* Aval Técnico y financiero del operador de Red\n* Certificado del operador de Red\n* Analis de costos y presupuesto\n* Diseño eléctricos y memorias de cálculo\n* Certificación manejo predial y ambiental",
        montos: "Entre 500 mil y 5 millones de dólares, con excepción del proyecto CRI-Centro de Rehabilitación Integral, 11,5 millones de dólares (Fondo de Cofinanciación con Mindefensa)",
        plazos: "N/A",
        medios: "A través de APC-Colombia"
    },{
        key: "2",
        proyecto: "COOPERACIÓN PROGRAMA KSP, KNOWLEDGE SHARING PROGRAM",
        descripcion: "Es un programa de cooperación que lidera la Embajada de Corea en Colombia con apoyo del Ministerio de Comercio y Relaciones Exteriores",
        tproyectos: "* Construcción de Paz\n* Genero en dearrollo \n* Crecimiento Economico para la reducción de la pobreza",
        dirigido: "Entidades del gobierno del orden nacional",
        mecanismo: "La Embajada comunica a APC-Colombia las fechas en que se puede presentar las propuestas; la Embajada de  Corea cuenta con formatos para la formulación de los proyectos",
        como: "No tenemos históricos de esta modalidad. Corea ofrece esta cooperación a Colombia por primera vez",
        requisitos:"*Carta de presentación para la solicitud de recursos\n* Registro BPI o BPIN\n* Aval Tecnico y financiero del prestador del servicio\n* Aval Técnico y financiero del operador de Red\n* Certificado del operador de Red\n* Analis de costos y presupuesto\n* Diseño eléctricos y memorias de cálculo\n* Certificación manejo predial y ambiental",
        montos: "Cada año, la Embajada indica las fechas",
        plazos: "N/A",
        medios: "Por medio de APC - Colombia"
    },{
        key: "3",
        proyecto: "COOPERACIÓN TÉCNICA",
        descripcion: "Actividades de asistencia técnica vinculadas a la construcción de capacidades y políticas públicas",
        tproyectos: "* Construcción de Paz\n* Genero en dearrollo \n* Crecimiento Economico para la reducción de la pobreza",
        dirigido: "Entidades públicas del orden nacional",
        mecanismo: "La Embajada de Corea comunica a través del Ministerio de Relaciones Exteriores, normalmente con copia a APCColombia, la posibilidad de presentar proyectos en el marco de las áreas priorizadas o en temas de interés para los dos gobiernos (enmarcados en KSP Knowledge Sharing Program). KSP es un programa de Corea que busca compartir las experiencias exitosas de desarrollo económico y social que aplicó ese país para alcanzar el nivel económico que tiene hoy",
        como: "Por primera vez la Embajada de Corea solicitó presentar propuestas el año anterior; se espera que para este año opere igual",
        requisitos:"*Carta de presentación para la solicitud de recursos\n* Registro BPI o BPIN \n* Aval Tecnico y financiero del prestador del servicio\n* Aval Técnico y financiero del operador de Red\n* Certificado del operador de Red\n* Analis de costos y presupuesto\n* Diseño eléctricos y memorias de cálculo\n* Certificación manejo predial y ambiental",
        montos: "No se estipula monto",
        plazos: "N/A",
        medios: "APC-Colombia remite comunicación a cada entidad, según sea el caso."    

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