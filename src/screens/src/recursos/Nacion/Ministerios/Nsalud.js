import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
        proyecto: "REQUISITOS CONSTRUCCIÓN DE INFRAESTRUCTURA HOSPITALARIA",
        requisitos: "1. Carta de presentación del proyecto suscrita por la secretaria de salud departamental o distrital, dirigida a la Dirección de Prestación de Servicios y Atención Primaria en Salud, especificando nombre del proyecto, valor total, entidades que participan en su cofinanciación, fuentes de financiación y montos respectivos. \n2. Proyecto debidamente diligenciado en el formato Metodología General Ajustada – MGA. Para mayor información diríjase a la página web https://www.sgr.gov.co/Proyectos/MGA.aspx\n3. Concepto técnico de la Dirección Territorial de Salud departamental o distrital en la que se indique la conveniencia del proyecto en el marco del Programa de Reorganización, Rediseño y Modernización de redes de Empresas Sociales del Estado, viabilizado por el MSPS y se certifique su inclusión y aprobación en el Plan Bienal de Inversiones en Salud, cuando esto aplique\n4. Certificado de tradición y libertad. El certificado no deberá tener fecha de expedición mayor a 3 meses y deberá indicar que la titularidad del predio en el que se pretende adelantar la obra, está a nombre de la ESE/Municipio y no tiene limitaciones al dominio.\n5. Certificado expedido por la oficina de planeación municipal o su equivalente según corresponda, en el que conste que el proyecto cumple con el plan de ordenamiento territorial, plan básico de ordenamiento territorial o esquema de ordenamiento territorial, según corresponda, en lo atinente a uso de suelo; que el predio en el cual se va a desarrollar el proyecto no cuenta con ningún riesgo.\n6. Para obras nuevas, además de lo anterior, el certificado deber indicar que el predio cuenta con disponibilidad de servicios públicos.\n7. Certificado de disponibilidad presupuestal o documento que soporte el compromiso que permita el cierre financiero del proyecto\n8. Comparativo de la capacidad física actual de la entidad con la capacidad física propuesta.\n9. Programa médico arquitectónico en el que se incluyan áreas a cada ambiente, servicio por servicio, porcentaje para zonas comunes, circulaciones generales, teniendo en cuenta que cada servicio y sus componentes\n10. Diseños arquitectónicos a escala (se sugiere, 1:100 – 1:125 – 1:75 dependiendo el área), acotados, amoblados y firmados por el profesional responsable, indicando el número de matrícula profesional. El diseño deberá cumplir con los criterios y aspectos normativos contemplados anteriormente. Se aclara que los proyectos de remodelación deben incluir dentro de su alcance también, el componente de reforzamiento estructural con los requisitos establecidos para este tipo de proyectos\n11. Estudios de ingeniería: estructurales, hidro-sanitario (agua caliente cuando aplique, contraincendios), eléctrico, redes lógica (voz y datos), llamado de enfermería, mecánicos (redes de gases medicinales, ventilación, etc.).\n12. Presupuesto detallado de obra, firmado por el profesional responsable, indicando el número de matrícula.",
    },{
        key: "2",
        proyecto: "REQUISITOS INFRAAESTRUCTURA HOSPITALARIA CON REFORZAMIENTO ESTRUCTURAL",
        requisitos: "1. Carta de presentación del proyecto suscrita por la secretaria de salud departamental o distrital, dirigida a la Dirección de Prestación de Servicios y Atención Primaria en Salud, especificando nombre del proyecto, valor total, entidades que participan en su cofinanciación, fuentes de financiación y montos respectivos. \n2. Proyecto debidamente diligenciado en el formato Metodología General Ajustada – MGA. Para mayor información diríjase a la página web https://www.sgr.gov.co/Proyectos/MGA.aspx\n3. Concepto técnico de la Dirección Territorial de Salud departamental o distrital en la que se indique la conveniencia del proyecto en el marco del Programa de Reorganización, Rediseño y Modernización de redes de Empresas Sociales del Estado, viabilizado por el MSPS y se certifique su inclusión y aprobación en el Plan Bienal de Inversiones en Salud, cuando esto aplique\n4. Plantas de adecuación arquitectónica en la que se incluya la propuesta de reforzamiento estructural. Firmadas por el profesional responsable, indicando el número de matrícula profesiona\n5. Se aclara que los proyectos de reforzamiento estructural deben incluir dentro de su alcance también, el componente de adecuación arquitectónica.\n6. Plan de contingencia a implementar en el que se garantice que al momento de la intervención se minimizan los impactos de la misma en la operación de los servicios de salud\n7. Estudio de vulnerabilidad sísmica estructural en medio magnético, conforme a lo dispuesto en la normativa de sismo resistencia que incluya: memorias de cálculo, planos estructurales de la propuesta de reforzamiento, estudio de patología estructural, estudio de suelos.\n8. Informe de recibo a satisfacción de los estudios de vulnerabilidad, firmado por el interventor de los mismos, en cumplimiento de lo determinado en la ley 400 de 1997.",
    },{
        key: "3",
        proyecto: "REQUISITOS DOTACIÓN HOSPITALARIA	",
        requisitos: "1. Carta de presentación del proyecto suscrita por la secretaria de salud departamental o distrital, dirigida a la Dirección de Prestación de Servicios y Atención Primaria en Salud, especificando nombre del proyecto, valor total, entidades que participan en su cofinanciación, fuentes de financiación y montos respectivos. \n2. Proyecto debidamente diligenciado en el formato Metodología General Ajustada – MGA. Para mayor información diríjase a la página web https://www.sgr.gov.co/Proyectos/MGA.aspx\n3. Concepto técnico de la Dirección Territorial de Salud departamental o distrital en la que se indique la conveniencia del proyecto en el marco del Programa de Reorganización, Rediseño y Modernización de redes de Empresas Sociales del Estado, viabilizado por el MSPS y se certifique su inclusión y aprobación en el Plan Bienal de Inversiones en Salud, cuando esto aplique\n4. Matriz Equipamiento y Mobiliario Hospitalario debidamente diligenciada (anexo 1)\n5. Cotizaciones vigentes (mínimo dos que correspondan a la vigencia en la cual se está presentando el proyecto), por cada equipo o bien a adquirir, las cuales deben cumplir con los requisitos establecidos en la normatividad legal vigente, incluyendo impuestos y demás costos para la entrega y puesta en funcionamiento de los mismos.\n6. Presentar un cuadro comparativo de las ofertas donde se evidencie el análisis realizado, frente a cada uno de los equipos a adquirir, donde el criterio de escogencia será el del menor valor cotizado, para poder determinar el valor del presupuesto oficial del presente proyecto. Este criterio solo tendrá sentido si en las ofertas se evidencia que se están contemplando todas y cada una de las especificaciones exigidas por la Institución de salud.\n7. Certificación de la disponibilidad de la infraestructura y del personal de salud necesario para la puesta en funcionamiento, emitida por el representante legal de la Empresa Social del Estado.",
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