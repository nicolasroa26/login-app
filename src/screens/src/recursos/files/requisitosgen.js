import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class re_gen extends Component {
  state = {
    todoList: [{
      key: "1",
      Articulo: "Requisitos generales (Artículo 4.1.2.1.1 del Acuerdo Único de 2017). Los proyectos de inversión presentados para viabilización deben cumplir con los siguientes requisitos.",
      Proyectos: "- Proyecto formulado en la Metodología General Ajustada (MGA).\n- Carta de presentación y solicitud de recursos firmada por el representante legal de quien presenta el programa o proyecto de inversión, donde se especifique:   a. Nombre completo del programa o proyecto de inversión y código BPIN.  b. Valor total del proyecto de inversión. Debe especificarse para cada fuente de financiación el valor correspondiente de cada vigencia y aportantes o entidades beneficiarias de la Asignación para la Paz, según corresponda.  c. Valor de la interventoría, cuando a ello hubiere lugar. Deberá especificarse para cada fuente de financiación el valor correspondiente de cada vigencia y los aportantes.  d. Entidad pública propuesta para ser ejecutora.  e. Entidad pública propuesta para adelantar la contratación de la interventoría, cuando a ello hubiere lugar.  f. Tiempo estimado de ejecución física y financiera.  g. Sector al que corresponde el proyecto de inversión.  h. Fase o fases en las que presenta el proyecto.  i. Para proyectos que se presenten en fase I o II, la carta debe incluir los siguientes compromisos:   i. Realizar el acompañamiento durante el desarrollo del proyecto, en caso de no designarse como ejecutor.  ii. En caso de que la alternativa resulte factible, presentar la siguiente fase a consideración del OCAD o a gestionar su financiación con otra fuente. En caso negativo, informar al OCAD de dicha circunstancia, a más tardar cuando se realice el cierre del proyecto.  iii. Incluir la estimación de los costos del proyecto en cada una de las fases subsiguientes.\n- Presupuesto detallado con las actividades necesarias para lograr los productos esperados, acompañado del análisis de precios unitarios o de costos, según aplique. Se debe anexar, además, certificación de la entidad que presenta el proyecto en la cual conste que los precios unitarios corresponden al promedio de la región y que son los utilizados para el tipo de actividades contempladas en el proyecto.\n- Certificado suscrito por el representante legal de la entidad que presenta el proyecto de inversión y de aquella donde se va a ejecutar el mismo en el cual se indique que las actividades que se pretenden financiar con recursos del SGR no están siendo, ni han sido financiadas con otras fuentes de recursos.\n- Para proyectos que incluyan intervención u ocupación del suelo, certificado de funcionario competente de la entidad territorial en la cual se va a ejecutar el proyecto, en el que conste que no está localizado en zona que presente alto riesgo no mitigable y que está acorde con el uso y tratamientos del suelo de conformidad con el respectivo instrumento de ordenamiento territorial: Plan de Ordenamiento Territorial (POT); Plan Básico de Ordenamiento Territorial (PBOT); o Esquema de Ordenamiento Territorial (EOT); de conformidad con lo señalado en la normativa vigente."
    },{
      key: "2",
      Articulo: "Requisitos generales para proyectos en fase II (Artículo 4.1.2.1.2, Acuerdo Único de 2017) Los proyectos de inversión en fase II, además de lo señalado en el artículo 4.1.2.1.1, deben presentar los siguientes requisitos.",
      Proyectos: "- Documento técnico que soporte y contenga lo siguiente: planteamiento del problema, antecedentes, justificación, análisis de participantes, objetivos (general y específicos), análisis de alternativas y cronograma de actividades físicas y financieras.",
    },{
      key: "3",
      Articulo: "Requisitos generales para proyectos en fase III (Artículo 4.1.2.1.3, Acuerdo Único de 2017) Los proyectos de inversión en fase III, además de lo señalado en el artículo 4.1.2.1.1, deben presentar los siguientes requisitos.",
      Proyectos: "- Estudios y especificaciones técnicas, con los soportes debidamente firmados por profesional competente, y certificado en el cual conste que se cumplen las Normas Técnicas Colombianas (NTC) aplicables, así como las normas que establecen mecanismos de integración para las personas con movilidad reducida.\n- Para el caso de los proyectos que contemplen componentes de infraestructura se deben incluir también los diseños, memorias y planos legibles que lo soportan técnica y financieramente, firmados por profesional competente con su respectiva matrícula profesional o acompañados de un certificado del representante legal o jefe de planeación de la entidad territorial o quien haga sus veces, en el que conste que los documentos o planos originales se encuentran debidamente firmados.  Para proyectos tipo, los diseños, memorias y planos legibles que soportan técnica y financieramente el proyecto deben ir firmados por el profesional que los implemente, con su respectiva matrícula profesional.\n- Documento técnico que soporte y contenga lo siguiente: planteamiento del problema, antecedentes, justificación, análisis de participantes, objetivos (general y específicos), cronograma de actividades físicas y financieras y descripción de la alternativa seleccionada.\n- Para acreditar la titularidad del inmueble:\n- Certificado de tradición y libertad expedido con una antelación no superior a tres (3) meses, contados desde la fecha de remisión a la instancia de verificación de requisitos, donde conste que la propiedad corresponde al departamento, municipio, distrito o entidad pública y se encuentra libre de gravámenes que impidan ejercer el derecho de disposición. Lo anterior no aplica para los bienes de uso público que conforme a las normas vigentes no son sujetos de registro. Dicho certificado solo debe adjuntarse una única vez.\n- Cuando se trate de inmuebles localizados en resguardos indígenas o asociaciones de cabildos o autoridades indígenas tradicionales, el acto colectivo del resguardo suscrito por la autoridad tradicional o cabildo gobernador, donde señale que el predio se encuentra en su jurisdicción.\n- Cuando se trate de inmuebles localizados dentro de los territorios colectivos de Comunidades Negras, Afrocolombianas, Raizales y Palenqueras, documento de titulación expedido por la entidad competente, el cual debe acompañarse de un aval suscrito por las correspondientes autoridades de las citadas comunidades certificadas por el Ministerio del Interior.\n-  En el caso de los municipios y en aplicación del artículo 48 de la Ley 1551 de 2012, bastará con que estos acrediten la posesión del bien objeto de intervención y su destinación al uso público o a la prestación de un servicio público.\n- Para los proyectos que contemplen dentro de sus componentes infraestructura y requieran para su funcionamiento y operación la prestación de servicios públicos certificado suscrito por los prestadores de servicios públicos domiciliarios o constancia del representante legal de la entidad donde se va a ejecutar el proyecto en el cual conste que los predios a intervenir cuentan con dicha disponibilidad.\n- Certificado de sostenibilidad del proyecto de inversión suscrito por el representante legal de la entidad donde se ejecutará el proyecto de acuerdo con su competencia, avalado por el operador de servicio, cuando aplique, en el cual garantice la operación y funcionamiento de los bienes o servicios entregados con ingresos de naturaleza permanente. Cuando no proceda realizar sostenibilidad del proyecto se debe justificar por escrito esta circunstancia.\n- Para los proyectos que contemplen dentro de sus componentes infraestructura, se debe elaborar análisis de riesgos de desastres, de conformidad con lo establecido en el artículo 38 de la Ley 1523 de 2012, de acuerdo con la escala de diseño del proyecto.",
    },{
      key: "5",
      Articulo: "Requisitos generales adicionales para proyectos de inversión que incluyan como uno de sus componentes a compra de predios  (Artículo 4.1.2.1.4, Acuerdo Único de 2017). Proyectos de inversión en fase II y III que incluyan como uno de sus componentes la compra de predios.",
      Proyectos: "- Plano de localización.\n- Estudio de alternativas de los predios, en el cual se identifique y sustente técnica, jurídica y financieramente la selección de los predios a comprar.\n- El certificado de que trata el numeral 4 del artículo 4.1.2.1.1 del presente Acuerdo debe además especificar usos, tratamiento, índices de ocupación y construcción aplicable a los predios seleccionados.\n- Avalúo comercial de los predios seleccionados elaborado por el Instituto Geográfico Agustín Codazzi (IGAC) o por persona natural o jurídica competente.\n- Estudio de títulos donde se demuestre que el predio está libre de cualquier tipo de gravamen o limitación a la propiedad para llevar a cabo la compra. Estudio de títulos tratándose de proyectos de infraestructura de transporte cuya adquisición de inmuebles se prevea mediante saneamiento automático por los motivos de utilidad pública e interés social en el marco de la Ley 1682 de 2013."
    },{
      key: "6",
      Articulo: "Requisitos generales adicionales para proyectos de inversión que incluyan como uno de sus componentes el trámite de licencias o permisos (Artículo 4.1.2.1.5, Acuerdo Único de 2017). Los proyectos de inversión en fase III podrán incluir como uno de sus componentes el pago del trámite para el otorgamiento de licencias o permisos.",
      Proyectos: "- En estos proyectos de inversión la obtención de las licencias y permisos debe ser el primer componente a ejecutar, lo cual debe reflejarse en el cronograma de actividades y en el presupuesto. En consecuencia, no se podrán ejecutar otros componentes hasta tanto no se cuente con las licencias o permisos respectivos, salvo cuando el proyecto de inversión incluya el componente de compra de predios y sobre éstos recaiga la solicitud de licencia o permiso."
    },{
      key: "7",
      Articulo: "Requisitos generales adicionales para proyectos de inversión que incluyan como uno de sus componentes la adquisición de maquinaria (Artículo 4.1.2.1.6, Acuerdo Único de 2017). Los proyectos de inversión que incluyan como uno de sus componentes la compra de maquinaria.",
      Proyectos: "- Certificado suscrito por el representante legal de la entidad que presenta el proyecto, en el cual se defina:\n - La entidad titular de la maquinaria.\n - La entidad responsable de la administración, cuidado y custodia. En caso de ser una entidad diferente a la entidad titular se debe adjuntar aval por dicha entidad.\n- Plan de acción de uso de la maquinaria consistente con el sector de clasificación del proyecto y delimitado al horizonte de ejecución del mismo. Este documento debe señalar las actividades que se realizarán, el lugar y la unidad de medida."
    },{
      key: "8",
      Articulo: "Requisitos generales adicionales para proyectos que tengan por objeto la culminación de proyectos ya iniciados  (Artículo 10, Acuerdo 4.1.2.1.7 del Acuerdo Único de 2017). Los proyectos de inversión que tengan por objeto la culminación de un proyecto de inversión ya iniciado, y que en su momento fue financiado con recursos diferentes a los del SGR.",
      Proyectos: "- Documento suscrito por el representante legal de la entidad territorial que contenga:\n - Justificación de los recursos adicionales mediante cuadro comparativo que dé cuenta de los componentes o actividades financiados inicialmente frente a los que se pretendan financiar con recursos del SGR y su respectiva explicación.\n - Estado actual de la contratación (póliza, suspensiones, modificaciones, reanudaciones)\n Copia del último informe de supervisión o de interventoría según corresponda y soporte fotográfico.\n- Documento técnico suscrito por el supervisor o interventor, según corresponda, en el cual se detalle el estado actual de la ejecución física y financiera del proyecto inicial.\n- Copia del informe de acciones judiciales o investigaciones de los entes de control frente al proyecto de inversión, siempre que la entidad haya sido puesta en conocimiento de las mismas, o certificado en el que se indique que no ha sido notificado de ninguna acción o investigación."
    },{
      key: "9",
      Articulo: "Requisitos generales adicionales para proyectos de inversión bajo el esquema de Asociación Público Privada (APP)  (Artículo 4.1.2.1.8, Acuerdo Único de 2017).",
      Proyectos: "- Copia de la aprobación de la valoración de obligaciones contingentes expedidas por el Ministerio de Hacienda y Crédito Público.\n- Concepto favorable sobre la utilización del mecanismo de APP expedida por el Departamento Nacional de Planeación, cuando se trate de proyectos cofinanciados por la Nación, o por la secretaria de planeación de la entidad territorial respectiva, tratándose de proyectos financiados por estas.\n- Copia de la aprobación de las clausulas contractuales y financieras cuando se trate  de proyectos cofinanciados por la Nación, expedida por el Ministerio de Hacienda y Crédito Público."
    },{
      key: "10",
      Articulo: "Requisitos generales para proyectos de recuperación tras una situación de desastre o calamidad pública  (Artículo 4.1.2.1.9, Acuerdo Único de 2017). situación de desastre o calamidad pública decretada en los términos establecidos en los artículos 55, 56, 57, 58 y 59 de la Ley 1523 de 2012, solamente deben cumplir con lo siguientes requisitos generales para su viabilización.",
      Proyectos: "- Proyecto formulado en la MGA.\n- Copia del acto administrativo de la declaratoria de la situación de desastre o de calamidad pública, que esté dentro del termino de vigencia (6 meses) de la situación de calamidad  o dentro de la prórroga de dicho término y que cumpla con lo establecido en el Capitulo VI de la Ley 1523 de 2012\n- Certificado del representante legal de la entidad que suscribió el plan de acción específico, de acuerdo con la naturaleza de la declaratoria, en la que se indique que el proyecto se encuentra en concordancia con el plan de acción de que trata el artículo 61 de la Ley 1523 de 2012."
    },{
      key: "11",
      Articulo: "Requisitos generales adicionales para proyectos de inversión financiados con los recursos del Acto Legislativo 4 de 2017 (Artículo 4.1.2.1.10, Acuerdo Único de 2017). Los proyectos de inversión susceptibles de ser financiados con los recursos a los que se refiere el Acto Legislativo 4 de 2017, deben presentar además el siguiente documento:  ",
      Proyectos: "- Certificado suscrito por el representante legal de quien presenta el proyecto de inversión en el que se determine la concordancia del proyecto con el Plan Marco de Implementación del Acuerdo Final para la Terminación del Conflicto y la Construcción de una Paz Estable y Duradera.  El certificado debe ser consistente con la información sobre la focalización del Acuerdo Final, registrada en el Banco de Programas y Proyectos del Sistema General de Regalías (SUIFP-SGR)."
    },{
      key: "12",
      Articulo: "Artículo 4.1.2.1.11. Requisitos generales adicionales para proyectos de inversión localizados en resguardos indígenas o territorios colectivos, o  que sean presentados por el representante de las comunidades Indígenas, Negras, Afrocolombianas, Raizales y Palenqueras. Los proyectos de inversión localizados en resguardos indígenas o territorios colectivos, o que sean presentados por el representante de las comunidades Indígenas, Negras, Afrocolombianas, Raizales y Palenqueras, además de los requisitos generales aplicables, deben presentar los siguientes:",
      Proyectos: "- Certificado suscrito por el secretario de planeación en el cual conste que el plan de vida o plan de etnodesarrollo está en concordancia con el Plan Nacional de Desarrollo y con el plan de desarrollo de las entidades territoriales.\n- Certificado suscrito por la autoridad de la comunidad étnica debidamente registrada ante el Ministerio del Interior en el que conste que el proyecto presentado es de su iniciativa y que está acorde con el plan de etnodesarrollo o el plan de vida. "
    },{
      key: "13",
      Articulo: "Artículo 4.1.2.1.12. Requisitos generales adicionales para proyectos de inversión que contemplen dentro de sus componentes la solicitud de reconocimiento de los costos de estructuración. ",
      Proyectos: "- Los proyectos de inversión que contemplen dentro de sus componentes la solicitud de reconocimiento de los costos de estructuración, además de los requisitos generales aplicables, deben presentar los documentos previstos en el artículo 2.2.4.1.1.5.5 del Decreto 1082 de 2015. "
    },{
      key: "14",
      Articulo: "Artículo 4.1.2.1.13. Requisitos generales adicionales para proyectos de inversión de integración y desarrollo fronterizo.",
      Proyectos: "- Los proyectos de inversión de integración y desarrollo fronterizo, además de los requisitos generales aplicables, deben presentar constancia del trámite de consulta previa expedida por el Ministerio de Relaciones Exteriores sobre la pertinencia del proyecto, de conformidad con la Ley 191 de 1995."
    },{
      key: "15",
      Articulo: "Artículo 4.1.2.1.14. Requisitos generales adicionales para proyectos de inversión presentados por las corporaciones autónomas regionales. ",
      Proyectos: "- Los proyectos de inversión presentados por las Corporaciones Autónomas Regionales, además de los requisitos generales aplicables, deben presentar certificado suscrito por el jefe de la oficina de planeación o quien haga sus veces, donde conste que el proyecto de inversión se encuentra en concordancia con el plan de acción institucional aprobado por su consejo directivo."
    },{
      key: "16",
      Articulo: "Artículo 4.1.2.1.15. Requisitos generales adicionales para proyectos de inversión cofinanciados con recursos del Presupuesto General de la Nación (PGN). ",
      Proyectos: "- Carta de intención que soporte el monto de la cofinanciación registrado en la MGA, suscrita por el ordenador del gasto o quien haga sus veces en la respectiva entidad del orden nacional.  Para el caso de los proyectos de inversión sujetos a convocatorias por parte de la Nación se debe presentar el documento que soporte la inscripción de la entidad territorial a la convocatoria, en el que se especifique el nombre de la convocatoria, fecha de inscripción, nombre del proyecto y los datos de radicación."
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
                    Nombre del Articulo
                  </Text>
                  <Text style={styles.titlep}>
                    {selectedTask.Articulo}
                  </Text>
                  <View style={styles.notesContent} />
                  <ScrollView>
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                    Proyectos
                    </Text>
                    <Text style={styles.titleg}>
                      {selectedTask.Proyectos}
                    </Text>
                  </View>
                  </ScrollView>
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
                    Artículos:
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
                      <View style={{ marginLeft: 13,  }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: '#7c7f7f', marginVertical:5, fontSize: 12, fontWeight: '700' }}>
                            {item.Articulo}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20}} />
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
    width: Dimensions.get('window').width - 20,
    alignSelf: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    backgroundColor: '#ffffff',
    marginTop: 25,
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
    width: 100,
    height: 38,
    alignSelf: 'center',
    marginTop: 10,
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
  titleg: {
    borderColor: '#5DD976',
    borderLeftWidth: 1,
    paddingLeft: 8,
    fontSize: 16,
  },
  titlee: {
    borderColor: '#B656C6',
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