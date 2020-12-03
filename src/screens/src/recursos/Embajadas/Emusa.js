import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
        proyecto: "COOPERACIÓN GOBERNANZA,  DEMOCRACIA Y DERECHOS HUMANOS",
        descripcion: "Tiene como objetivo apoyar los esfuerzos de la sociedad civil y el gobierno para mejorar el respeto por los Derechos Humanos; expandir el acceso a la justicia y a los servicios del Estado en áreas remotas afectadas por el conflicto y promover la participación ciudadana en los procesos políticos",
        tproyectos: "* Gobernabilidad, democracia y derechos Humanos",
        dirigido: "El programa trabaja en coordinación con el Gobierno Nacional, la Rama Judicial, la Procuraduría General de la Nación, la Defensoría del Pueblo y la sociedad civil, entre otros",
        mecanismo: "USAID Colombia implementa sus programas a traves de contratos, subvenciones y acuerdos cooperativos con organizaciones no gubernamentales, nacionales e internacionales, el sector privado y empresas contratistas",
        como: "En esta línea se implementan los siguientes programas de ámbito nacional: Programa de Acceso a la Justicia (AJP), operado en Colombia por MSD –Managment Sciences for Development–; Programa de Política Pública (PPP), operado por AECOM; Programa de Derechos Humanos, ejecutado por Chemonics International, ejecutados por operadores directos de USAID",
        requisitos:"*Diligenciar el formulario de postulación disponible en www.colombiaproductiva.com/premio-turismo-naturaleza\n* Adjuntar soportes dependiendo si es persona natural o jurídica: Persona natural: RUT y fotocopia de cédula de la persona que postula la iniciativa o solución. Persona jurídica: registro de Cámara de Comercio y fotocopia de cédula del representante legal",
        montos: "Los montos son fijados en las convocatorias.",
        plazos: "Cada operador define los plazos y los periodos de presentación de propuestas.",
        medios: "N/A"
    },{
        key: "2",
        proyecto: "COOPERACIÓN PARA LA CONSOLIDACIÓN, MEDIOS DE SUSTENTO Y MEDIO AMBIENTE - CLE",
        descripcion: "Apoyar exclusivamente el Plan Nacional de Consolidación del Gobierno de Colombia –PNC–, el cual busca consolidar la presencia del Estado en áreas estratégicamente priorizadas. Entre los resultados esperados por los programas implementados por esta oficina están: establecer el control territorial permanente por parte del Estado  colombiano, eliminar los cultivos de coca, garantizar el acceso a los servicios públicos, promover el desarrollo  económico legal y fortalecer el sector privado",
        tproyectos: "* Consolidación y medios de sustento\n* Población vulnerable. 4) Medio ambiente",
        dirigido: "Gobiernos locales, población en situación de desplazamiento, grupos de personas en proceso de desmovilización, reintegración y reinserción",
        mecanismo: "USAID Colombia implementa sus programas a traves de contratos, subvenciones y acuerdos cooperativos con organizaciones no gubernamentales, nacionales e internacionales, el sector privado y empresas contratistas",
        como: "Se enfoca en 33 de los 53 municipios priorizados por el Gobierno colombiano, en zonas con necesidades críticas en lugares donde el Estado haya restablecido la seguridad. Apoya proyectos inmediatos, con alto valor político y viables socioeconómicamente en las siguientes zonas: Región de Montes de María, operada en Colombia por Cooperative Housing Foundation –CHF–; Región Central, operada en Colombia por Associates in Rural Development Inc. –ARD–;  Región norte-sur, operada en Colombia por Chemonics International.",
        requisitos:"*Diligenciar el formulario de postulación disponible en www.colombiaproductiva.com/premio-turismo-naturaleza\n* Adjuntar soportes dependiendo si es persona natural o jurídica:Persona natural: RUT y fotocopia de cédula de la persona que postula la iniciativa o solución.Persona jurídica: registro de Cámara de Comercio y fotocopia de cédula del representante legal.",
        montos: "El monto de cada proyecto depende de las condiciones de cada una de las regiones donde se está operando.",
        plazos: "Cada operador define los plazos y los periodos de presentación de propuestas.",
        medios: "N/A"
    },{
        key: "3",
        proyecto: "COOPERACIÓN MEDIO AMBIENTE",
        descripcion: "Este programa responde a la Estrategia Bilateral de 5 años (2011-2016), específicamente para el tema de Medio ambiente, que incluye inversiones en la gestión del medio ambiente, la biodiversidad y el cambio climático – adaptación, mitigación, energía limpia",
        tproyectos: "* Consolidación y medios de sustento\n* Población vulnerable. 4) Medio ambiente",
        dirigido: "Los programas ambientales de USAID están dirigidos a trabajar con el Gobierno de Colombia y las comunidades. Incluye el fortalecimiento de la gobernabilidad para la conservación de áreas protegidas, territorios étnicos y la preservación, recuperación y mejoramiento de los servicios ambientales",
        mecanismo: "USAID Colombia implementa sus programas a traves de contratos, subvenciones y acuerdos cooperativos con organizaciones no gubernamentales, nacionales e internacionales, el sector privado y empresas contratistas",
        como: "Funciona a través de los componentes de Gobernabilidad medioambiental, Adaptación al cambio climático, Mitigación del cambio climático y Conservación de la biodiversidad",
        requisitos:"*Diligenciar el formulario de postulación disponible en www.colombiaproductiva.com/premio-turismo-naturaleza\n* Adjuntar soportes dependiendo si es persona natural o jurídica: Persona natural: RUT y fotocopia de cédula de la persona que postula la iniciativa o solución. Persona jurídica: registro de Cámara de Comercio y fotocopia de cédula del representante legal",
        montos: "Los montos son fijados en cada convocatoria, de acuerdo con las acciones convenidas con el Gobierno colombiano.",
        plazos: "Cada operador define los plazos y los periodos de presentación de propuestas.",
        medios: "N/A"

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