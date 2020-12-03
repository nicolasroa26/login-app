import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
        proyecto: "REQUISITOS CONSTRUCCIÓN DISIPADORES DE ENEGÍA",
        requisitos: "1. Una carta de presentación del proyecto con la solicitud de cofinanciación.\n2. Certificado expedido por el secretario de planeación del municipio en el cual se exprese que el uso del suelo del o los predios demandados para la construcción de las obras puntuales se encuentran acordes con las actividades a realizar por el proyecto y no existen impedimentos para la ejecución del proyecto ni para las actividades de operación y mantenimiento; que el proyecto es compatible con el plan de ordenamiento territorial vigente; que los predios escogidos para la ejecución del proyecto, según la zonificación del plan de ordenamiento territorial vigente, no están ubicados en zonas de riesgo medio o superior por fenómenos naturales y no existen impedimentos para su acceso.\n3. Copia del permiso de vertimiento y ocupación de cauce. (Para proyectos de construcción, en caso que corresponda).\n4. Copia del permiso de aprovechamiento forestal. (Para proyectos de construcción, en casos en que se requiera).\n5. Licencia Ambiental. (Para proyectos de construcción en plantas de tratamiento que sirvan a una población igual o superior a 200.000 habitantes o para la construcción de obras o actividades que afecten las áreas del Sistema de Parques Nacionales Naturales).\n6. Certificación expedida por el operador del sitio para la disposición final de los residuos generados por el proyecto, tanto de su etapa de construcción como de su etapa de operación, en el cual se exprese su disponibilidad y capacidad para recibir los diferentes tipos de residuos generados, indicando el acto administrativo mediante el cual la autoridad ambiental lo autoriza para estas actividades.\n7. Certificado de tradición y libertad donde se evidencie que el o los predios a intervenir por el proyecto para las obras puntuales son de propiedad del ente territorial o de la empresa prestadora del servicio de alcantarillado, con fecha de expedición no mayor a un (1) mes de la de radicación del proyecto \n8. Documentos que evidencien la aplicación de los mecanismos de participación social en el área de influencia directa del proyecto y respuesta de aceptación del mismo\n9. Certificado sobre la existencia o no de territorios legalmente titulados a resguardos indígenas o títulos colectivos pertenecientes a comunidades afrocolombianas, expedido por la entidad competente.\n10. Copia del documento de aprobación del plan de manejo arqueológico o plan especial de manejo y protección expedido por el Instituto Colombiano de Antropología e Historia-ICANH. (En caso que corresponda).\n11. Documento de revisión y aprobación de los estudios y diseños por parte el interventor y su grupo interdisciplinario, en donde se exprese el control de las memorias de diseño, de los planos, de las especificaciones, del presupuesto de obras y de interventoría, así como el cumplimiento de los estudios y diseños con la normatividad legal vigente (Reglamento Técnico para el Sector de Agua Potable y Saneamiento Básico), avalado por la empresa prestadora del servicio público de alcantarillado y/o de la empresa operadora de la planta de tratamiento de aguas residuales\n12. Certificación de funcionalidad e integralidad del proyecto, en la que se indique que una vez se encuentren ejecutadas las obras consideradas en el proyecto, estas entrarán en funcionamiento y que su puesta en marcha no depende de obras o actividades adicionales, el cual debe estar suscrito por el responsable de los estudios y diseños, por el interventor, por el alcalde y por el gerente de la empresa prestadora del servicio público de alcantarillado y/o de la empresa operadora de la planta de tratamiento de aguas residuales. (Para proyectos de construcción).\n13. Certificado expedido por el interventor de los estudios y diseños del proyecto en el cual exprese que el proyecto contiene las obras y medidas para minimizar la vulnerabilidad a las situaciones de amenazas por inundación, movimientos en masa u otros, en caso que los predios escogidos para la ejecución del proyecto estén sujetos a este tipo de situaciones. (Para proyectos de construcción).\n14. Certificación de conformidad de redes eléctricas expedido por el prestador del servicio público de energía, de acuerdo con la naturaleza del proyecto y lo previsto en el Reglamento Técnico de Instalaciones Eléctricas-RETIE. (Para proyectos de construcción).\n15. Certificación expedida por el ente prestador del servicio público en el cual se exprese la disponibilidad del servicio que se requiera para la etapa de obra y operación. (Para proyectos de construcción).\n16. Pruebas de resultados certificados, según lo establecido en el Artículo 248-Tecnologías no convencionales de la Resolución MVCT 330 de 2017. (En caso que corresponda).",
    },{
        key: "2",
        proyecto: "REQUISITOS CONSTRUCCIÓN ESTACIÓN DE BOMBEO ",
        requisitos: "1. Una carta de presentación del proyecto con la solicitud de cofinanciación.\n2. Certificado expedido por el secretario de planeación del municipio en el cual se exprese que el uso del suelo del o los predios demandados para la construcción de las obras puntuales se encuentran acordes con las actividades a realizar por el proyecto y no existen impedimentos para la ejecución del proyecto ni para las actividades de operación y mantenimiento; que el proyecto es compatible con el plan de ordenamiento territorial vigente; que los predios escogidos para la ejecución del proyecto, según la zonificación del plan de ordenamiento territorial vigente, no están ubicados en zonas de riesgo medio o superior por fenómenos naturales y no existen impedimentos para su acceso.\n3. Copia del permiso de vertimiento y ocupación de cauce. (Para proyectos de construcción, en caso que corresponda).\n4. Copia del permiso de aprovechamiento forestal. (Para proyectos de construcción, en casos en que se requiera).\n5. Licencia Ambiental. (Para proyectos de construcción en plantas de tratamiento que sirvan a una población igual o superior a 200.000 habitantes o para la construcción de obras o actividades que afecten las áreas del Sistema de Parques Nacionales Naturales).\n6. Certificación expedida por el operador del sitio para la disposición final de los residuos generados por el proyecto, tanto de su etapa de construcción como de su etapa de operación, en el cual se exprese su disponibilidad y capacidad para recibir los diferentes tipos de residuos generados, indicando el acto administrativo mediante el cual la autoridad ambiental lo autoriza para estas actividades.\n7. Certificado de tradición y libertad donde se evidencie que el o los predios a intervenir por el proyecto para las obras puntuales son de propiedad del ente territorial o de la empresa prestadora del servicio de alcantarillado, con fecha de expedición no mayor a un (1) mes de la de radicación del proyecto \n8. Documentos que evidencien la aplicación de los mecanismos de participación social en el área de influencia directa del proyecto y respuesta de aceptación del mismo\n9. Certificado sobre la existencia o no de territorios legalmente titulados a resguardos indígenas o títulos colectivos pertenecientes a comunidades afrocolombianas, expedido por la entidad competente.\n10. Copia del documento de aprobación del plan de manejo arqueológico o plan especial de manejo y protección expedido por el Instituto Colombiano de Antropología e Historia-ICANH. (En caso que corresponda).\n11. Documento de revisión y aprobación de los estudios y diseños por parte el interventor y su grupo interdisciplinario, en donde se exprese el control de las memorias de diseño, de los planos, de las especificaciones, del presupuesto de obras y de interventoría, así como el cumplimiento de los estudios y diseños con la normatividad legal vigente (Reglamento Técnico para el Sector de Agua Potable y Saneamiento Básico), avalado por la empresa prestadora del servicio público de alcantarillado y/o de la empresa operadora de la planta de tratamiento de aguas residuales\n12. Certificación de funcionalidad e integralidad del proyecto, en la que se indique que una vez se encuentren ejecutadas las obras consideradas en el proyecto, estas entrarán en funcionamiento y que su puesta en marcha no depende de obras o actividades adicionales, el cual debe estar suscrito por el responsable de los estudios y diseños, por el interventor, por el alcalde y por el gerente de la empresa prestadora del servicio público de alcantarillado y/o de la empresa operadora de la planta de tratamiento de aguas residuales. (Para proyectos de construcción).\n13. Certificado expedido por el interventor de los estudios y diseños del proyecto en el cual exprese que el proyecto contiene las obras y medidas para minimizar la vulnerabilidad a las situaciones de amenazas por inundación, movimientos en masa u otros, en caso que los predios escogidos para la ejecución del proyecto estén sujetos a este tipo de situaciones. (Para proyectos de construcción).\n14. Certificación de conformidad de redes eléctricas expedido por el prestador del servicio público de energía, de acuerdo con la naturaleza del proyecto y lo previsto en el Reglamento Técnico de Instalaciones Eléctricas-RETIE. (Para proyectos de construcción).\n15. Certificación expedida por el ente prestador del servicio público en el cual se exprese la disponibilidad del servicio que se requiera para la etapa de obra y operación. (Para proyectos de construcción).\n16. Pruebas de resultados certificados, según lo establecido en el Artículo 248-Tecnologías no convencionales de la Resolución MVCT 330 de 2017. (En caso que corresponda).",
    },{
        key: "3",
        proyecto: "REQUISITOS CONSTRUCCIÓN DE PLANTAS DE TRATAMIENTO DE AGUAS RESIDUALES",
        requisitos: "1. Una carta de presentación del proyecto con la solicitud de cofinanciación.\n2. Certificado expedido por el secretario de planeación del municipio en el cual se exprese que el uso del suelo del o los predios demandados para la construcción de las obras puntuales se encuentran acordes con las actividades a realizar por el proyecto y no existen impedimentos para la ejecución del proyecto ni para las actividades de operación y mantenimiento; que el proyecto es compatible con el plan de ordenamiento territorial vigente; que los predios escogidos para la ejecución del proyecto, según la zonificación del plan de ordenamiento territorial vigente, no están ubicados en zonas de riesgo medio o superior por fenómenos naturales y no existen impedimentos para su acceso.\n3. Copia del permiso de vertimiento y ocupación de cauce. (Para proyectos de construcción, en caso que corresponda).\n4. Copia del permiso de aprovechamiento forestal. (Para proyectos de construcción, en casos en que se requiera).\n5. Licencia Ambiental. (Para proyectos de construcción en plantas de tratamiento que sirvan a una población igual o superior a 200.000 habitantes o para la construcción de obras o actividades que afecten las áreas del Sistema de Parques Nacionales Naturales).\n6. Certificación expedida por el operador del sitio para la disposición final de los residuos generados por el proyecto, tanto de su etapa de construcción como de su etapa de operación, en el cual se exprese su disponibilidad y capacidad para recibir los diferentes tipos de residuos generados, indicando el acto administrativo mediante el cual la autoridad ambiental lo autoriza para estas actividades.\n7. Certificado de tradición y libertad donde se evidencie que el o los predios a intervenir por el proyecto para las obras puntuales son de propiedad del ente territorial o de la empresa prestadora del servicio de alcantarillado, con fecha de expedición no mayor a un (1) mes de la de radicación del proyecto \n8. Documentos que evidencien la aplicación de los mecanismos de participación social en el área de influencia directa del proyecto y respuesta de aceptación del mismo\n9. Certificado sobre la existencia o no de territorios legalmente titulados a resguardos indígenas o títulos colectivos pertenecientes a comunidades afrocolombianas, expedido por la entidad competente.\n10. Copia del documento de aprobación del plan de manejo arqueológico o plan especial de manejo y protección expedido por el Instituto Colombiano de Antropología e Historia-ICANH. (En caso que corresponda).\n11. Documento de revisión y aprobación de los estudios y diseños por parte el interventor y su grupo interdisciplinario, en donde se exprese el control de las memorias de diseño, de los planos, de las especificaciones, del presupuesto de obras y de interventoría, así como el cumplimiento de los estudios y diseños con la normatividad legal vigente (Reglamento Técnico para el Sector de Agua Potable y Saneamiento Básico), avalado por la empresa prestadora del servicio público de alcantarillado y/o de la empresa operadora de la planta de tratamiento de aguas residuales\n12. Certificación de funcionalidad e integralidad del proyecto, en la que se indique que una vez se encuentren ejecutadas las obras consideradas en el proyecto, estas entrarán en funcionamiento y que su puesta en marcha no depende de obras o actividades adicionales, el cual debe estar suscrito por el responsable de los estudios y diseños, por el interventor, por el alcalde y por el gerente de la empresa prestadora del servicio público de alcantarillado y/o de la empresa operadora de la planta de tratamiento de aguas residuales. (Para proyectos de construcción).\n13. Certificado expedido por el interventor de los estudios y diseños del proyecto en el cual exprese que el proyecto contiene las obras y medidas para minimizar la vulnerabilidad a las situaciones de amenazas por inundación, movimientos en masa u otros, en caso que los predios escogidos para la ejecución del proyecto estén sujetos a este tipo de situaciones. (Para proyectos de construcción).\n14. Certificación de conformidad de redes eléctricas expedido por el prestador del servicio público de energía, de acuerdo con la naturaleza del proyecto y lo previsto en el Reglamento Técnico de Instalaciones Eléctricas-RETIE. (Para proyectos de construcción).\n15. Certificación expedida por el ente prestador del servicio público en el cual se exprese la disponibilidad del servicio que se requiera para la etapa de obra y operación. (Para proyectos de construcción).\n16. Pruebas de resultados certificados, según lo establecido en el Artículo 248-Tecnologías no convencionales de la Resolución MVCT 330 de 2017. (En caso que corresponda).",
    },{
        key: "4",
        proyecto: "REQUISITOS RECUPERAR, FORTALECER E IMPULSAR SISTEMAS DE CUIDADO PROPIO ASOCIADOS AL CONOCIMIENTO TRADICIONAL Y LA CONSERVACIÓN",
        requisitos: "1. Desarrollar la propuesta del proyecto en el formato destinado para ello, que se encuentra en la pagina www.ppcolombia.org y www.visionamazonia.minambiente.gov.co, o se puede solicitar al correo ana.barona@undp.org\n2. Certificado de existencia y representación legal con fecha reciente\n3. Copia del RUT (para organizaciones constituidas)\n4. Acta de compromiso de las mujeres participantes, donde definen su estructura organizativa.\n5. Copia legible del documento de identidad del representante legal de la entidad \n6. Listado con nombre completo, número de cedula, comunidad indigena y firma de las mujeres participantes del proyecto.",
    },{
        key: "5",
        proyecto: "REQUISITOS REALIZAR ACCIONES ORIENTADAS A SANAR Y RECUPERAR EL TEJIDO FAMILIAR INDÍGENA	",
        requisitos: "1. Desarrollar la propuesta del proyecto en el formato destinado para ello, que se encuentra en la pagina www.ppcolombia.org y www.visionamazonia.minambiente.gov.co, o se puede solicitar al correo ana.barona@undp.org\n2. Certificado de existencia y representación legal con fecha reciente\n3. Copia del RUT (para organizaciones constituidas)\n4. Acta de compromiso de las mujeres participantes, donde definen su estructura organizativa.\n5. Copia legible del documento de identidad del representante legal de la entidad \n6. Listado con nombre completo, número de cedula, comunidad indigena y firma de las mujeres participantes del proyecto.",
    },{
        key: "6",
        proyecto: "REQUISITOS GENERAR Y FORTALECER INICIATIVAS PRODUCTIVAS Y DE EMPRENDIMIENTO DE LAS MUJERES A PARTIR DEL USO SOSTENIBLE DE RECURSOS",
        requisitos: "1. Desarrollar la propuesta del proyecto en el formato destinado para ello, que se encuentra en la pagina www.ppcolombia.org y www.visionamazonia.minambiente.gov.co, o se puede solicitar al correo ana.barona@undp.org\n2. Certificado de existencia y representación legal con fecha reciente\n3. Copia del RUT (para organizaciones constituidas)\n4. Acta de compromiso de las mujeres participantes, donde definen su estructura organizativa.\n5. Copia legible del documento de identidad del representante legal de la entidad \n6. Listado con nombre completo, número de cedula, comunidad indigena y firma de las mujeres participantes del proyecto.",
    },{
        key: "7",
        proyecto: "REQUISITOS FORTALECER Y DIVERSIFICAR SISTEMAS DE CHAGRAS	",
        requisitos: "1. Desarrollar la propuesta del proyecto en el formato destinado para ello, que se encuentra en la pagina www.ppcolombia.org y www.visionamazonia.minambiente.gov.co, o se puede solicitar al correo ana.barona@undp.org\n2. Certificado de existencia y representación legal con fecha reciente\n3. Copia del RUT (para organizaciones constituidas)\n4. Acta de compromiso de las mujeres participantes, donde definen su estructura organizativa.\n5. Copia legible del documento de identidad del representante legal de la entidad \n6. Listado con nombre completo, número de cedula, comunidad indigena y firma de las mujeres participantes del proyecto.",
    },{
        key: "8",
        proyecto: "REQUISITOS SIEMBRA Y RESTAURACIÓN CON ESPECIES MADERABLES Y FRUTALES NATIVAS DE LA REGIÓN",
        requisitos: "1. Desarrollar la propuesta del proyecto en el formato destinado para ello, que se encuentra en la pagina www.ppcolombia.org y www.visionamazonia.minambiente.gov.co, o se puede solicitar al correo ana.barona@undp.org\n2. Certificado de existencia y representación legal con fecha reciente\n3. Copia del RUT (para organizaciones constituidas)\n4. Acta de compromiso de las mujeres participantes, donde definen su estructura organizativa.\n5. Copia legible del documento de identidad del representante legal de la entidad \n6. Listado con nombre completo, número de cedula, comunidad indigena y firma de las mujeres participantes del proyecto.",
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