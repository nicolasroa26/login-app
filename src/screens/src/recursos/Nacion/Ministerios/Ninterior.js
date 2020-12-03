import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
            proyecto: "PROYECTOS ALARMAS COMUNITARIAS",
            requisitos: "1. DOCUMENTOS LEGALES\n1,1. Carta de presentación del proyecto.\n1,2. Acta de posesión\n1,3. Copia cédula de ciudadanía.\n1,4. Copia RUT de la Entidad\n1,5. Autorización para contratar\n1,6. Disponibilidad de recursos de la Entidad Solicitante\n2. DOCUMENTOS DEL PREDIO\n2,1. Certificado de Tradición y Libertad, Escritura Pública y Estudio de Títulos\n2,2. Ficha Predial\n2,3. Certificación de la Oficina de Planeación del Municipio (aplicación POT/EOT/BOT)\n2,4. Certificación de Prevención y Atención de Desastres\n2,5. Registro fotográfico\n2,6. Plano de localización y Plano del Predio\n2,7. Levantamiento topográfico del predio\n3. INFORMACIÓN DEL PROYECTO\n3,1. Aval emitido por el Comandante de Policía Departamental, organismos de seguridad o Comandante de Fuerzas Militares (Ejército, Armada y Fuerza Aérea) Departamental, Seccional, Brigada, Batallón, según sea el caso.\n3,2. Aval del Ministerio de Defensa Nacional\n3,3. Formato FONSECON – PROYECTO DE INFRAES-TRUCTURA FÍSICA \n3,4. PRESUPUESTO PRELIMINAR Modelo de Presupuesto / Proyecto Infraestructura Física\n3,5. Certificación de Compromiso de Sostenibilidad y Mantenimiento\n4. DISPONIBILIDAD DE SERVICIOS PÚBLICOS\n4,1. Certificación disponibilidad de Servicio Acueducto\n4,2. Certificación disponibilidad de Servicio Alcantarillado, mixto, pluvial y/o de Aguas negras, según sea el caso.\n4,3. Certificación disponibilidad de Energía",
        },{
            key: "2",
            proyecto: "PROYECTOS DE CONSTRUCCIÓN, MEJORAMIENTO, ADECUACIÓN Y AMPLIACIÓN DE INFRAESTRUCTURA DE SEGURIDAD			",
            requisitos: "1. DOCUMENTOS LEGALES\n1,1. Carta de presentación del proyecto.\n1,2. Acta de posesión\n1,3. Copia cédula de ciudadanía.\n1,4. Copia RUT de la Entidad\n1,5. Autorización para contratar\n1,6. Disponibilidad de recursos de la Entidad Solicitante\n2. DOCUMENTOS DEL PREDIO\n2,1. Certificado de Tradición y Libertad, Escritura Pública y Estudio de Títulos\n2,2. Ficha Predial\n2,3. Certificación de la Oficina de Planeación del Municipio (aplicación POT/EOT/BOT)\n2,4. Certificación de Prevención y Atención de Desastres\n2,5. Registro fotográfico\n2,6. Plano de localización y Plano del Predio\n2,7. Levantamiento topográfico del predio\n3. INFORMACIÓN DEL PROYECTO\n3,1. Aval emitido por el Comandante de Policía Departamental, organismos de seguridad o Comandante de Fuerzas Militares (Ejército, Armada y Fuerza Aérea) Departamental, Seccional, Brigada, Batallón, según sea el caso.\n3,2. Aval del Ministerio de Defensa Nacional\n3,3. Formato FONSECON – PROYECTO DE INFRAES-TRUCTURA FÍSICA \n3,4. PRESUPUESTO PRELIMINAR Modelo de Presupuesto / Proyecto Infraestructura Física\n3,5. Certificación de Compromiso de Sostenibilidad y Mantenimiento\n4. DISPONIBILIDAD DE SERVICIOS PÚBLICOS\n4,1. Certificación disponibilidad de Servicio Acueducto\n4,2. Certificación disponibilidad de Servicio Alcantarillado, mixto, pluvial y/o de Aguas negras, según sea el caso.\n4,3. Certificación disponibilidad de Energía",
        },{
            key: "3",
            proyecto: "PROYECTOS DE MOVILIDAD (DOTACIÓN DE VEHICULOS Y EQUIPOS)	",
            requisitos: "1. DOCUMENTOS LEGALES\n1,1. Carta de presentación del proyecto.\n1,2. Acta de posesión\n1,3. Copia cédula de ciudadanía\n1,4. Copia RUT de la Entidad\n1,5. Autorización para contratar\n1,6. Disponibilidad de recursos de la Entidad Solicitante\n2. DOCUMENTOS DEL PREDIO\n2,1. Certificado de Tradición y Libertad, Escritura Pública y Estudio de Títulos\n2,2. Certificado de Impuestos y Retenciones\n2,3. Aval emitido por la Entidad Beneficiaria \n2,4. Aval del Grupo de Movilidad o Grupo de Transportes de la Entidad Beneficiaria\n2,5. Aval del Ministerio de Defensa Nacional\n2,6. Aval del Nivel Central de otras Entidades o Instituciones.\n3. INFORMACIÓN DEL PROYECTO	\n3,1. FONSECON - Proyecto de Movilidad	\n3,2. Certificado de compromiso de mantenimiento",
        },{
            key: "4",
            proyecto: "PROYECTOS ILUMINACIÓN DE PARQUES	",
            requisitos: "1. DOCUMENTOS LEGALES	\n1,1. Carta de presentación del proyecto. \n1,2. Acta de posesión\n1,3. Copia cédula de ciudadanía\n1,4. Copia RUT de la Entidad\n1,5. Autorización para contratar\n1,6. Disponibilidad de recursos de la Entidad Solicitante\n2. DOCUMENTOS DEL PREDIO	\n2,1. Certificado de Tradición y Libertad, Escritura Pública y Estudio de Títulos\n2,2. Ficha Predial\n2,3. Certificación de la Oficina de Planeación del Municipio (aplicación POT/EOT/BOT)\n2,4. Certificación de Prevención y Atención de Desastres \n2,5. Registro fotográfico \n2,6. Plano de localización y Plano del Predio\n3. INFORMACIÓN DEL PROYECTO\n3,1. Aval emitido por el Comandante de Policía Departamental, organismos de seguridad o Comandante de Fuerzas Militares (Ejército, Armada y Fuerza Aérea) Departamental, Seccional, Brigada, Batallón, según sea el caso.\n3,2. PRESUPUESTO PRELIMINAR Modelo de Presupuesto / Proyecto Infraestructura Física\n3,3. Certificación de Compromiso de Mantenimiento y Sostenibilidad \n4. DISPONIBILIDAD DE SERVICIOS PÚBLICOS\n4,1. Certificación disponibilidad de Servicio Alcantarillado, mixto, pluvial y/o de Aguas negras, según sea el caso.\n4,2. Certificación disponibilidad de Energía",
        },{
            key: "5",
            proyecto: "PROYECTOS SACÚDETE AL PARQUE	",
            requisitos: "1. DOCUMENTOS LEGALES	\n1,1. Carta de presentación del proyecto. \n1,2. Acta de posesión\n1,3. Copia cédula de ciudadanía\n1,4. Copia RUT de la Entidad\n1,5. Autorización para contratar\n1,6. Disponibilidad de recursos de la Entidad Solicitante\n2. DOCUMENTOS DEL PREDIO\n2,1. Certificado de Tradición y Libertad, Escritura Pública y Estudio de Títulos\n2,2. Ficha Predial\n2,3. Certificación de la Oficina de Planeación del Municipio (aplicación POT/EOT/BOT)\n2,4. Certificación de Prevención y Atención de Desastres \n2,5. Registro fotográfico \n2,6. Plano de localización y Plano del Predio\n2,7. Levantamiento Topográfico del Predio\n3. INFORMACIÓN DEL PROYECTO\n3,1. Aval emitido por el Comandante de Policía Departamental, organismos de seguridad o Comandante de Fuerzas Militares (Ejército, Armada y Fuerza Aérea) Departamental, Seccional, Brigada, Batallón, según sea el caso.\n3,2. PRESUPUESTO PRELIMINAR Modelo de Presupuesto / Proyecto Infraestructura Física\n3,3. Certificación de Compromiso de Mantenimiento y Sostenibilidad \n4. DISPONIBILIDAD DE SERVICIOS PÚBLICOS\n4,1. Certificación disponibilidad de Servicio Acueducto. Emitida por la entidad prestadora del servicio en la que se indique la dirección del predio /o matricula inmobiliaria.\n4,2. Certificación disponibilidad de Servicio Alcantarillado, mixto, pluvial y/o de Aguas negras, según sea el caso.\n4,3. Certificación disponibilidad de Energía	",
        },{
            key: "6",
            proyecto: "PROYECTOS PARA EL MEJORAMIENTO DE LA CONCIVENCIA CIUDADANA",
            requisitos: "1. DOCUMENTOS LEGALES	\n1,1. Carta de presentación del proyecto. \n1,2. Acta de posesión\n1,3. Antecedentes Disciplinarios\n1,4. Copia cédula de ciudadanía \n1,5. Copia RUT de la Entidad\n1,6. Autorización a contratar\n1,7. Disponibilidad de recursos de la Entidad Solicitante\n1,8. Plan Integral de Seguridad y Convivencia Ciudadana\n1,9. Comité Territorial del Orden Público\n1,10. Carta compromiso \n2. DOCUMENTOS DEL PREDIO\n2,1. Líneas de Acción para la cofinanciación de Proyectos en Convivencia Ciudadana.\n3. INFORMACIÓN DEL PROYECTO	\n3,1. Antecedentes y Diagnóstico del Proyecto\n3,2. Descripción del problema o necesidad\n3,3. Causas de Problema\n3,4. Efectos del problema \n3,5. Justificación\n3,6. Objetivo General\n3,7. Objetivos Específicos\n3,8. Alternativas de solución al problema\n3,9. Población Objetivo\n3,10. Descripción de componentes, metas y actividades\n3,11. Cronograma de actividades\n3,12. Cadena de Valor\n3,13. Indicadores y metas\n3,14. Articulación con las políticas\n3,15. Presupuesto",
        },{
            key: "7",
            proyecto: "PROYECTOS SIES ( SISTEMAS INTEGRADOS DE EMERGENCIAS Y SEGURIDAD)	",
            requisitos: "1. DOCUMENTOS LEGALES	\n1,1. Carta de presentación del proyecto. \n1,2. Acta de posesión\n1,3. Antecedentes Disciplinarios\n1,4. Copia cédula de ciudadanía \n1,5. Copia RUT de la Entidad\n1,6. Autorización a contratar\n1,7. Disponibilidad de recursos de la Entidad Solicitante\n1,8. Plan Integral de Seguridad y Convivencia Ciudadana\n1,9. Comité Territorial del Orden Público\n1,10. Carta compromiso \n2. INFORMACIÓN DEL PROYECTO\n2,1. Aval de la Policía Nacional al proyecto\n2,2. Certificación de disponibilidad de personal y autorización de la intervención del espacio para el centro de control \n2,3. Formato FONSECON – PROYECTO SIES\n2,4. Certificado de compromiso de mantenimiento y sostenibilidad \n2,5. Permiso o autorización para intervenir el espacio publico\n2,6. Carta de la empresa comercializadora de energía para la instalación del Sistema CCTV \n2,7. Carta de la empresa de comunicaciones para la instalación del Sistema CCTV (si aplica)\n2,8. Presupuesto detallado MODELO DE PRESUPUESTO PROYECTO SIES\n2,9. Descripción técnica de la torre de comunicaciones y plano del área en donde será ubicada (si aplica).  \n2,10. Plano de localización del centro de control SIES\n2,11. Plano del diseño del centro de control SIES\n2,12. Plano del Municipio donde se detalla la ubicación de los puntos de cámara (proyectos CCTV) \n3. DISPONIBILIDAD DE SERVICIOS PÚBLICOS\n3,1. Certificado de compromiso del proponente para la adquisición y sostenibilidad de las líneas telefónicas y/o E1 (Proyectos 123) \n3,12. Cadena de Valor",
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