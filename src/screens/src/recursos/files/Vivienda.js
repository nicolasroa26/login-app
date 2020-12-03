import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class Justicia extends Component {
  state = {
    todoList: [{
      key: "1",
      proyecto: "I. Proyectos de inversión encaminados a la prestación de los servicios de agua y saneamiento básico en zonas urbanas y rurales relacionadas con la ejecución de obras para sistemas de acueductos, alcantarillados y drenajes urbanos; soluciones individuales de evacuación y tratamiento de excretas y de alcantarillados no convencionales; sistemas de tratamiento de agua potable y residuales; recolección, manejo, disposición y tratamiento de residuos sólidos; embalses y represas.",
      requisitos: "- Certificado expedido por el representante legal de la entidad que presenta el proyecto donde avale los estudios y diseños presentados y dé constancia de lo siguiente: \n- Que los diagnósticos, estudios y diseños de los componentes del proyecto cumplen con el Reglamento Técnico del Sector de Agua y Saneamiento (RAS) y las priorizaciones que el mismo establece.\n- Que el proyecto aprovecha la infraestructura existente y la adopción de tecnologías sostenibles, ajustadas a la realidad del área de influencia del proyecto, a las condiciones socioeconómicas y a la capacidad de pago de los usuarios del servicio.\n- Para los proyectos de residuos sólidos, adicional a lo establecido en los literales a y b, se debe dar constancia que el proyecto cumple con los lineamientos establecidos en la Resolución 754 de 2014, en el Título 2 de la Parte 3 del Decreto 1077 de 2015, así como lo establecido en el capítulo 6 de la Resolución 330 de 2017\n- Que el documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo contiene el análisis de alternativas, el cual incluya los costos de operación, el impacto dentro de la tarifa y justificación de la selección para proyectos de sistemas nuevos de abastecimiento, potabilización, recolección y evacuación de aguas residuales domésticas y pluviales, tratamiento de aguas residuales o rellenos sanitarios.\n- El prestador de los servicios de acueducto, alcantarillado o aseo, debe diligenciar el formato Anexo V – “Diagnóstico entidades prestadoras de servicios públicos” de la Resolución 0379 de 2012 del Ministerio de Vivienda, Ciudad y Territorio y avalar técnicamente el proyecto. En los casos que exista operador vinculado mediante un contrato, se debe presentar certificado del interventor o supervisor del contrato, dando constancia de que el proyecto no se encuentra incluido en el plan de obras e inversiones del prestador del servicio. \n- Para proyectos que incluyan dentro de sus componentes el paso para tuberías por predios privados, documento en el que se dé la autorización de paso para tuberías con identificación del predio del propietario o poseedor.  \n- Para proyectos de residuos sólidos, además de lo previsto en los numerales anteriores:\n- Copia de los actos administrativos en los cuales se adopta el Plan de Gestión Integral de Residuos Sólidos (Pgirs), donde se evidencia que el proyecto presentado forma parte del mismo y que se encuentra debidamente sustentado de acuerdo con la Resolución 754 de 2014, así como lo previsto en el Decreto 1077 de 2015 y la  Resolución 330 de 2017 expedidos por el Ministerio de Vivienda, Ciudad y Territorio. \n- Para proyectos de rellenos sanitarios, autorización de la Unidad Administrativa Especial de la Aeronáutica Civil en los términos de los Reglamentos Aeronáuticos de Colombia (Resolución 3152 de 2004, adicionada por la Resolución 4072 de 2010) relativa al peligro aviario como obstáculo para la seguridad de la aviación.\n- Estudio de mercado para el aprovechamiento de los residuos. ",
    },{
      key: "2",
      proyecto: "II. Proyectos de conexiones intradomiciliarias para los inmuebles de estratos 1 y 2, en el marco del artículo 130 de la Ley 1450 de 2011.",
      requisitos: "- Certificado de la entidad territorial donde conste que el proyecto presentado está enmarcado en las disposiciones y requisitos del Capítulo 4 del Título 4 (artículos 2.3.4.4.1 al 2.3.4.4.11), artículos 2.3.4.4.1, 2.3.4.4.3, 2.3.4.4.4, 2.3.4.4.7, 2.3.4.4.9 del Decreto 1077 de 2015 y las Resoluciones 494 de 2012 y 169 de 2013, y se señale:\n- Que la priorización de barrios se ha realizado acorde con los lineamientos establecidos en la normatividad vigente del Programa de Conexiones Intradomiciliarias\n- El número de viviendas potenciales a beneficiar, producto del análisis de las encuestas realizadas, especificando el número total encuestado por cada barrio priorizado. \n- Además se debe indicar el número de viviendas potenciales a intervenir, producto del análisis de los diagnósticos realizados.",
    },{
      key: "3",
      proyecto: "III. Proyectos relacionados con soluciones dispersas de acueducto y alcantarillado en zonas rurales.",
      requisitos: "- El documento técnico requerido en el numeral 3 del artículo 4.1.2.1.3  del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición, el listado de los potenciales hogares beneficiarios y las respectivas obras a ejecutar en cada hogar.\n- Certificado de tradición y libertad expedido con una antelación no superior a tres (3) meses, contados desde la fecha de remisión a la instancia de verificación de requisitos, donde conste la titularidad de la propiedad de uno o varios miembros del hogar a beneficiar, por cada inmueble. En los casos en que uno o varios miembros  del hogar sean poseedores, se debe adjuntar el certificado de sana posesión expedido por autoridad competente donde se demuestre la posesión por un término no menor a cinco (5) años. ",
    },{
      key: "4",
      proyecto: "IV. Proyectos relacionados con los sistemas de alcantarillados.",
      requisitos: "- Copia del acto administrativo expedido por la autoridad ambiental competente en el que se aprobó el Plan de Saneamiento y Manejo de Vertimientos (PSMV), cuando exista. Este plan debe contener la evidencia de que el proyecto presentado forma parte del PSMV.",
    },{
      key: "5",
      proyecto: "V. Proyectos de operaciones urbanas integrales regionales o locales dirigidos a la habilitación de suelo urbanizable tales como macroproyectos urbanos, macroproyectos de interés social nacional.",
      requisitos: "- Fase II\n Acto administrativo de anuncio de la Operación Urbana Integral, de conformidad con la normativa aplicable con su respectivo documento técnico.\n- Fase II\n Estudio financiero preliminar del urbanismo y la vivienda.\n- Fase III\n Acto administrativo de anuncio de la Operación Urbana Integral, de conformidad con la normativa aplicable con su respectivo documento técnico.\n-Fase III\n El documento técnico de que trata el numeral 3 del artículo 4.1.2.1.3 del presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición: \n- Descripción detallada del área de influencia del proyecto así como el tipo de intervención: construcción de Vivienda de Interés Social (VIS) y Vivienda de Interés Prioritario (VIP), espacio público y equipamientos y de infraestructura en el sistema vial y de servicios públicos.\n- Estudio de tráfico y movilidad.\n- Planos del sistema vial y de transporte, cuando aplique.\n- Planos de servicios públicos.\n- Factibilidades de servicios públicos, según requerimientos del proyecto.\n- Estructura financiera de la Operación Urbana Integral",
    },{
        key: "6",
        proyecto: "VI. Proyectos de vivienda de interés social urbana que atienda las características geográficas, climáticas y culturales de cada región.",
        requisitos: "- Certificado suscrito por el representante legal de la entidad territorial en el que conste que el lote de terreno en donde se desarrollará el plan de vivienda no está invadido, ocupado y que no tiene afectación que impida el normal desarrollo del plan de vivienda.\n- Certificado suscrito por el oferente en el que se indique la modalidad del proyecto según lo establecido en el artículo 2.1.1.1.1.1.2 del Decreto 1077 de 2015, y si el mismo está en ejecución.\n- Certificado suscrito por el representante legal de la entidad territorial en el que se indique el monto del subsidio a otorgar a cada hogar expresado en SMMLV. \n- Tratándose de proyectos en la modalidad de adquisición de vivienda nueva urbana nucleada y dispersa, además de los requisitos señalados en los numerales anteriores\n- Documento expedido por el representante legal de la entidad territorial en el cual se determinen los criterios de priorización y focalización que deben cumplir los hogares a beneficiar.\n- Certificado de tradición y libertad expedido con una antelación no superior a tres (3) meses, contados desde la fecha de remisión a la instancia de verificación de requisitos donde conste la titularidad de la propiedad de uno o varios miembros del hogar a beneficiar, por cada inmueble.\n- Para los casos en que el predio o lote sea propiedad de una Organización Popular de Vivienda (OPV), carta de compromiso de la organización donde se manifieste la intención de aportar el lote para ejecutar el proyecto y posterior enajenación del predio.\n- Cuando el proyecto sea en la modalidad de adquisición de vivienda nueva urbana nucleada y dispersa, y contemple dentro sus componentes obras de urbanismo que incluyan la construcción parcial o total de las redes de servicios públicos, certificado en el que conste que la entidad prestadora podrá operar los servicios públicos domiciliarios a su cargo. \n- Tratándose de proyectos en la modalidad de construcción en sitio propio y mejoramiento de vivienda urbana, además de los requisitos previstos en los numerales 1, 2, 3, y 4, del numeral VI del presente anexo, se deben adjuntar los siguientes\n- Documento expedido por el representante legal de la entidad territorial en el cual se determinen los criterios de priorización y focalización que deben cumplir los hogares a beneficiar.\n- Los proyectos de mejoramiento de vivienda, deben aportar el listado de potenciales beneficiarios y las respectivas obras a ejecutar en cada vivienda.\n- Certificado de tradición y libertad expedido con una antelación no superior a tres (3) meses, contados desde la fecha de remisión a la instancia de verificación de requisitos, donde conste la titularidad de la propiedad de uno o varios miembros del hogar a beneficiar, por cada inmueble y que el tipo de predio es urbano. En los casos en que uno o varios miembros del hogar sean poseedores, se debe adjuntar el certificado de sana posesión expedido por autoridad competente donde se demuestre la posesión por un término no menor a cinco (5) años. \n- Para construcción en sitio propio o mejoramiento (nucleado o disperso), el certificado de que trata el numeral 5 del artículo 4.1.2.1.3. del presente Acuerdo, debe ser expedido por las empresas prestadoras de los servicios públicos domiciliarios de acueducto, alcantarillado y energía eléctrica e indicar que se cuenta con la disponibilidad inmediata de dichos servicios, relacionando los hogares a beneficiar; o sus respectivos recibos de pago.",
    },{
        key: "7",
        proyecto: "VII. Proyectos de titulación de bienes fiscales urbanos ocupados con vivienda de interés social que deben gestionar las entidades territoriales de acuerdo con lo dispuesto en el artículo 2 de la Ley 1001 de 2005 y su Decreto reglamentario 4825 de 2011.",
        requisitos: "- Listado de predios potenciales a ser titulados con identificación de número predial catastral, con sus respectivas mejoras y ubicación en un plano de conjunto.\n- Certificado suscrito por el representante legal de la entidad territorial donde conste que los inmuebles susceptibles a ser titulados no se encuentran en zonas insalubres o de riesgo para la población, de conformidad con las disposiciones fiscales sobre la materia.\n- Certificado de tradición y libertad de que trata el numeral 4 del artículo 4.1.2.1.3.  o en su defecto folio de matrícula inmobiliaria con fecha de expedición no superior a tres (3) meses, donde conste que el propietario del inmueble es la entidad territorial. En ningún caso podrá aplicarse el artículo 2 de la Ley 1001 de 2005, en favor de las personas que sean meros tenedores de bienes inmuebles por cuenta de las entidades públicas o de particulares o aquellos que aleguen la condición de ocupantes, sin hacer uso del inmueble en su carácter de vivienda.\n- Acto administrativo de facultades para ceder gratuitamente los bienes inmuebles fiscales de propiedad de la entidad territorial, que debe estar vigente durante el programa de titulación, expedido por la autoridad administrativa correspondiente.\n- Certificado suscrito por el representante legal de la entidad territorial, donde conste que la ocupación ocurrió con anterioridad al treinta (30) de noviembre de 2001.\n- Certificado del profesional responsable en el que se confirme que la titularidad de pleno dominio de los inmuebles recae en la entidad territorial y se verifique que están libres de gravámenes, limitaciones de dominio y afectaciones, acompañada del estudio de títulos.\n- Certificado suscrito por el secretario de planeación municipal o quien haga sus veces, basado en el instrumento de ordenamiento territorial, en el que conste que los predios a titular no son bienes de uso público, ni están destinados a fines institucionales de salud o educación. ",
    },{
        key: "8",
        proyecto: "VIII. Proyectos de renovación urbana que se desarrollen para la transformación de zonas urbanizadas que tienen condiciones de deterioro en el espacio público, en las estructuras privadas y en los aspectos socio-económicos, conflicto funcional o subutilización de las estructuras físicas existentes para aprovechar al máximo su potencial de desarrollo.",
        requisitos: "- Acto administrativo de adopción del plan parcial, macroproyecto urbano o instrumento de planificación y gestión complementario al POT. \n- Documento técnico de soporte de formulación, con su correspondiente cartografía, del plan parcial, macroproyecto urbano o instrumento de planificación y gestión complementaria al POT.\n- Censo de población localizada en el área del proyecto, diagnóstico y documento de gestión social.",
    },{
        key: "9",
        proyecto: "IX. Proyectos de mejoramiento integral de barrios dirigidos a intervenciones de un asentamiento a escala barrial o zonal. Para Fase II",
        requisitos: "- Acto administrativo mediante el cual el representante legal de la entidad reconozca que el barrio a intervenir está legalizado, salvo que la legalización se incluya como parte integral del proyecto a que se refiere este numeral.\n- Certificado suscrito por el representante legal de la entidad territorial en el que señale los criterios de priorización y selección del barrio o la zona a intervenir con el proyecto.\n- Documento en el cual se especifiquen los componentes de la intervención del mejoramiento. En todo caso, el proyecto debe contar con la infraestructura de saneamiento básico y cubrir al menos dos de los siguientes componentes:\n- Infraestructura: infraestructura básica o servicios públicos, como redes de acueducto, alcantarillado pluvial y sanitario, redes de energía eléctrica, entre otros.\n- Ambiente: obras y acciones de protección ambiental, arborización, control de erosión, estabilización de suelos y protección natural de taludes, recuperación o construcción de canales de drenaje y obras de mitigación de riesgo.\n- Accesibilidad y movilidad.\n- Espacio público: espacio público y equipamientos.\n- Social: desarrollo social, acompañamiento social, planeación participativa, organización social, seguridad y convivencia.",
    },{
        key: "10",
        proyecto: "X. Proyectos dirigidos a generar o intervenir espacio público efectivo en los términos del Decreto 1077 de 2015, como zonas verdes, parques, plazas y plazoletas, alamedas o paseos peatonales.",
        requisitos: "- Certificado suscrito por el representante legal de la entidad territorial en el que conste que la naturaleza de los predios objeto del proyecto tienen destinación de espacio público. ",
    },{
        key: "11",
        proyecto: "XI. Proyectos de saneamiento de bienes baldíos urbanos de las entidades territoriales. ",
        requisitos: "- En el marco de lo dispuesto en el artículo 123 de la Ley 388 de 1997 y el Instructivo No. 3 de 2015 expedido por la Superintendencia de Notariado y Registro, certificado del representante legal de la entidad territorial donde conste la voluntad de aceptar la titularidad de los bienes baldíos entregados en virtud de la ley, declarando el área y linderos del bien inmueble cuya identidad registral se pretende sanear. ",
    },{
        key: "12",
        proyecto: "XII. Proyectos de formulación, revisión o ajuste de POT, PBOT o EOT. ",
        requisitos: "- El documento técnico de que trata el numeral 3 del artículo 4.1.2.1.3. presente Acuerdo debe contener adicionalmente a lo señalado en esta disposición:\n- El tipo de revisión  y ajuste del POT (de mediano o largo plazo) y el propósito de las modificaciones que se pretenden efectuar.\n- El listado de los documentos que resultan del proyecto: i) Estudios básicos para la incorporación de la gestión de riesgo en el POT, cuando aplique, ii) Memoria justificativa, iii) Documento de seguimiento y evaluación, cuando aplique, iv) Documento técnico de soporte: diagnóstico territorial, formulación componentes general, urbano y rural, cartografía de diagnóstico y formulación, programa de ejecución, v) Proyecto de Acuerdo, vi) Documento Resumen. \n- Lista de los perfiles de los profesionales requeridos para la ejecución del proyecto y su dedicación, con la justificación de la necesidad y pertinencia de cada uno de ellos.\n- Descripción de las acciones que se adelantarán para garantizar la participación comunitaria\n- Documento de seguimiento y evaluación de los resultados obtenidos respecto de los objetivos planteados en el POT vigente. De no contar con este documento, debe incluirse dentro del alcance del proyecto, con su justificación y, asimismo, se debe anexar un análisis preliminar del POT existente que le permita determinar el alcance de la revisión o ajuste y los estudios técnicos requeridos para sustentar el desarrollo del proyecto. Este requisito no aplica para proyectos de formulación.\n- Estudios básicos para la incorporación de la gestión de riesgo en el ordenamiento territorial, conforme con lo señalado en los artículos de la Sección 3 del Capítulo 1 del Título 2, Parte 2, del Decreto 1077 de 2015.De no existir los estudios señalados, deben incluirse dentro del alcance del proyecto y su justificación.",
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
                          <Text style={{ color: '#7c7f7f', marginVertical:5, fontSize: 12, fontWeight: '700' }}>
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