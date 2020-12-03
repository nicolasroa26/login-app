import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
        proyecto: "COOPERACIÓN TÉCNICA",
        descripcion: "Actividades de asistencia técnica vinculada a la construcción de capacidades propias en Colombia. Pública, universitaria y privada y especializada",
        tproyectos: "* Crecimiento económico sostenible: mejoramiento de la infraestructura económica, fomento de las pequeñas y medianas empresas, de la productividad y promoción de la inversión y exportaciones, desarrollo local y rural y mecanismos de revitalización económica.\n* Medio ambiente y prevención de desastres: mejoramiento del medio ambiente natural, mitigación y adaptación al  cambio climático, energías renovables y nuevas formas de energía y medidas contra desastres y gestión del riesgo\n* Construcción de la Paz: mejoramiento de la infraestructura social; medidas contra minas antipersonal; reintegración  socioeconómica; promoción de procesos integrales y sostenibles de desarrollo alternativo; apoyo a la promoción de la cultura, la educación y el deporte",
        dirigido: "Entidades públicas nacionales y territoriales",
        mecanismo: "Se definen, demandan y proveen desde la iniciativa las entidades públicas del país socio, conjuntamente con la Oficina Técnica de Cooperación de AECID/Ministerio de la AGE española",
        como: "Funciona a demanda de las entidades públicas nacionales y territoriales. Enmarcada en los cuatro sectores prioritarios de la Cooperación Española en Colombia",
        requisitos:"N/A",
        montos: "Costos entre 5.000 y 25.000 €",
        plazos: "N/A",
        medios: "Coordinación directa entre JICA y APC-Colombia con la entidad beneficiaria"
    },{
        key: "2",
        proyecto: "COOPERACIÓN PROYECTOS Y PROGRAMAS",
        descripcion: "Apoyo técnico y financiero no reembolsable a proyectos y programas dentro de los tres sectores prioritarios. Se priorizan programas para periodos entre dos y cuatro años, en el marco de una política pública nacional, regional o local y fortalezas del Japón",
        tproyectos: "* Crecimiento económico sostenible: mejoramiento de la infraestructura económica, fomento de las pequeñas y medianas empresas, de la productividad y promoción de la inversión y exportaciones, desarrollo local y rural y mecanismos de revitalización económica.\n* Medio ambiente y prevención de desastres: mejoramiento del medio ambiente natural, mitigación y adaptación al  cambio climático, energías renovables y nuevas formas de energía y medidas contra desastres y gestión del riesgo\n* Construcción de la Paz: mejoramiento de la infraestructura social; medidas contra minas antipersonal; reintegración  socioeconómica; promoción de procesos integrales y sostenibles de desarrollo alternativo; apoyo a la promoción de la cultura, la educación y el deporte",
        dirigido: "Entidades públicas nacionales y territoriales",
        mecanismo: "Cada año JICA se reúne con APC-Colombia y el MRE para programar la cooperación del año fiscal japonés siguiente, de acuerdo con la identificación de líneas priorizadas; una vez definidas, se coordina entre APC-Colombia, JICA y la entidad beneficiaria la formulación del proyecto",
        como: "JICA financia solamente cooperación técnica mediante sus propios procedimientos y donaciones en especie para el sector cultura",
        requisitos:"* PRESUPUESTO DETALLADO NO MAYOR A 300 MILLONES CON MANO DE OBRA, TRANSPORTE,MATERIALES Y A.I.U (INTERVENTORIA MUNICIPIO)\n* AREA A CONSTRUIR EN M2\n* CORDENADAS GEOGRAFICAS\n* NUMERO DE HABITANTES DEL MUNICIPIO, POBLACION DERZPLAZADA\n* DIAGNOSTICO\n* Licencia de construcción.\n* Análisis de suelos.\n* Planos de obra: Estructurales, hidráulicos, eléctricos, arquitectónicos.\n* Norma Técnica Colombiana NTC 4595 (Ambientes escolares).\n* Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico RAS 2000.\n* Describa cómo se realizaría el mantenimiento de la donación, y quién estaría a cargo de estas actividades. Se requiere de un compromiso por al menos 8 años después de ejecutado el proyecto).\n* Formulario https://www.colombia.emb-japan.go.jp/ESP/cooperacion/apc.htm",
        montos: "Entre 500 mil y 5 millones de dólares, pero no hay montos límites",
        plazos: "31 de julio de cada año.",
        medios: "Coordinación directa entre JICA y APC-Colombia con la entidad beneficiaria"
    },{
        key: "3",
        proyecto: "COOPERACIÓN APOYO A PROYECTOS COMUNITARIOS",
        descripcion: "La Embajada del Japón abre convocatorias a través de la página web",
        tproyectos: "* Crecimiento económico sostenible: mejoramiento de la infraestructura económica, fomento de las pequeñas y medianas empresas, de la productividad y promoción de la inversión y exportaciones, desarrollo local y rural y mecanismos de revitalización económica.\n* Medio ambiente y prevención de desastres: mejoramiento del medio ambiente natural, mitigación y adaptación al  cambio climático, energías renovables y nuevas formas de energía y medidas contra desastres y gestión del riesgo\n* Construcción de la Paz: mejoramiento de la infraestructura social; medidas contra minas antipersonal; reintegración  socioeconómica; promoción de procesos integrales y sostenibles de desarrollo alternativo; apoyo a la promoción de la cultura, la educación y el deporte",
        dirigido: "Alcaldías, Plan Padrino.",
        mecanismo: "La Embajada del Japón abre convocatorias a través de la página web: http://www.colombia.emb-japan.go.jp/ ESP/apc.htm",
        como: "Las alcaldías pueden presentar sus propuestas directamente a la Embajada para proyectos de infraestructura en temas relacionados con Servicios básicos de salud, Educación elemental, Paliación de la pobreza, Bienestar público y Medio ambiente, siguiendo el procedimiento establecido en la página web de la Embajada",
        requisitos:"* PRESUPUESTO DETALLADO NO MAYOR A 300 MILLONES CON MANO DE OBRA, TRANSPORTE,MATERIALES Y A.I.U (INTERVENTORIA MUNICIPIO)\n* AREA A CONSTRUIR EN M2\n* CORDENADAS GEOGRAFICAS\n* NUMERO DE HABITANTES DEL MUNICIPIO, POBLACION DERZPLAZADA\n* DIAGNOSTICO\n* Licencia de construcción.\n* Análisis de suelos.\n* Planos de obra: Estructurales, hidráulicos, eléctricos, arquitectónicos.\n* Norma Técnica Colombiana NTC 4595 (Ambientes escolares).\n* Reglamento Técnico del Sector de Agua Potable y Saneamiento Básico RAS 2000.\n* Describa cómo se realizaría el mantenimiento de la donación, y quién estaría a cargo de estas actividades. Se requiere de un compromiso por al menos 8 años después de ejecutado el proyecto).\n* Formulario https://www.colombia.emb-japan.go.jp/ESP/cooperacion/apc.htm",
        montos: "Hasta 80 mil dólares.",
        plazos: "A lo largo de todo el año",
        medios: "A través de la página web: http://www.colombia.emb-japan.go.jp/ESP/apc.htm"

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