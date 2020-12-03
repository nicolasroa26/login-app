import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
      key: "1",
            proyecto: "MEJORAMIENTO DE BARRIOS",
            requisitos: "1. Documento Tecnico del proyecto E-DEAG-FR-076\n2. Formatos de Prespuesto  E-DAG-FR-094	\n3. Metodología General Ajustada MGA \n4. Carta de presentación \n5. Prespuesto de Obra Desagregado \n6. Cronograma de obra y flujo de inversión \n7. Analísis de precios unitarios \n8. Especificaciones técnicas detalladas, sistema constructivo y materiales \n9. Certificaciones expedidas por el Secretario de Planeación \n9,1. Certificación donde se indique que el o los predios No se encuentran en zona de alto riesgo y es compatible con el uso residencial, especificando urbano o rural según sea el caso del proyecto y que el proyecto presentado cumple con las normas de uso de suelo del POT, EOT o PBOT, y es viable el desarrollo de construcción o mejoramiento de vivienda urbana o rural. \n9,2. Para proyectos de mejoramiento integral de barrios en espacio público certificación donde establezca que la naturaleza de los predios objeto del proyecto son de espacio público y no tienen afectaciones, ni son patrimonio histórico, ni son carretera o ronda hídrica, área de reserva forestal o parque natural y en el viable el desarrollo del proyecto. \n9,3. Certificación, que el barrio o asentamiento en donde se encuentra la vivienda urbana a mejorar, se encuentra en proceso de legalización o que el mismo es un asentamiento legalizado. \n9,4. Certificación donde indique que el proyecto está relacionado con el cumplimiento del Plan de Desarrollo Nacional, Departamental, Municipal (identificado programa y meta por cada 1) y que se encuentra registrado en el banco de proyectos con el número del Banco de programas y proyectos municipal. \n9,5. Certificación donde indique que los beneficiarios del proyecto no cuentan con vivienda propia, para la modalidad de construcción de vivienda nueva. Para el caso de mejoramiento de vivienda y los miembros del hogar cuenten con otro predio o vivienda, certificar que el sitio a mejorar las condiciones de habitabilidad es su lugar de residencia permanente (este se adjunto, de acuerdo a quien lo expida en el municipio).\n9,10. Madres cabeza de familia, trabajadoras del sector informal y/o a las madres comunitarias \n9,11. Hogar víctima del desplazamiento o conflicto armado, inscritas en el registro único de víctimas- RUV – residir en municipio del departamento de Cundinamarca. \n9,12. Hogares con alta dependencia económica de adultos mayores \n9,13. Hogares con miembros en condición de discapacidad  \n9,14. Hogares con población LGTBI \n9,15. Hogares en condición de pobreza o pobreza extrema \n9,16. Hogares conformados por integrantes de comunidades indígenas, o negras, afrocolombianas, raizales, palenqueras, o ROM \n10. Listado de jefes de hogar participantes, en el proyecto (datos unicamente del jefe de hogar como aparecen en los documentos de identidad) \n9,14. Hogares con población LGTBI \n9,15. Hogares en condición de pobreza o pobreza extrema \n9,16. Hogares conformados por integrantes de comunidades indígenas, o negras, afrocolombianas, raizales, palenqueras, o ROM \n10. Listado de jefes de hogar participantes, en el proyecto (datos unicamente del jefe de hogar como aparecen en los documentos de identidad) \n11. Licencia de construcción y/o urbanismo y/o permisos - otras licencias \n12. Disponibildiad de servicios publicos \n13. Certificación de confinanciación \n13,1. Certificado de disponibilidad de recursos firmado por el ordenandor de gasto \n13,2. Certifación de bienes y/o servicios \n14. Caracterización familiar del hogar participante (organizar un archivo por hogar) que contenga:  (aplica a todas las modalidades de proyecto) \n14,1. Identificar con nombre completo y número de identificación quien es el Jefe de Hogar,  ubicación del hogar rural o urbano, vereda o barrio y dirección (todos los integrantes del hogar postulado sólo pueden formar parte de un núcleo familiar postulado \n14,2. Identificar los hogares con criterios especiales de Focalización \n14,3. Caracterización de los miembros del hogar (debe incluir el nombre y apellidos completos de cada uno de los miembros del hogar tal como aparecen en los documentos de identidad tipo de documento y número del documento de identidad  , parentesco) adjuntar la certificacion del SISBEN menor 53.4 puntos rural \n14,5. Diagnostico de la situación habitacional \n14,6. Localización y georreferenciación. Plano de localización, el cual debe estar georreferenciado. Para áreas urbanas identificar barrio y dirección, para área rural identificar vereda, finca y coorde \n14,7. Fotografía actual de la unidad a intervenir. Fotografía actual de la vivienda vista frontal, interna y externa de la vivienda. 4 FOTOS \n15. Documentos de los Hogares Participantes del proyecto: \n15,1. Fotocopia legible de la cédula de ciudadanía de los mayores de edad que componen el hogar participante. \n15,2. Fotocopia de registro civil de nacimiento  menores de 7 años y > 7  años a < 18 de años  Tarjeta de identidad \n15,3. Certificación escrita y firmada, por parte del jefe de hogar donde conste:\n• Que los miembros del hogar ninguno cuenta con vivienda propia en el territorio nacional, para proyectos específicos en la modalidad de construcción vivienda nueva, construcción en sitio propio. Para proyectos específicos modalidad mejoramiento, constancia que indique que ninguno de los miembros del hogar es propietario o poseedor de más de una vivienda de interés social en el territorio nacional, o constancia expedida por la autoridad competente donde indiquen que la vivienda a mejorar es su lugar de residencia permanente. Para hogares en reasentamiento de viviendas por estar ubicadas en zonas de riesgo no mitigable, debe certificar que algunos de los miembros del hogar son propietarios, y/o, poseedor y/o demostrar la condición de tenencia de la vivienda.\n• Donde conste que los ingresos del hogar son inferiores a cuatro (4) SMMLV. Y de No haber sido beneficiario de dos (2) intervenciones de vivienda, cualquier modalidad de proyecto, durante los últimos tres años por la Secretaria de Hábitat y Vivienda del Departamento, para superar carencias o deficiencias habitacionales\n• Que la información entregada es verdadera, autoriza a verificar la información suministrada y autoriza la exclusión de manera automática del proyecto en caso de verificarse fraude o falsedad de la documentación o la información.\n• Habeas Data o tratamiento de datos: el jefe de hogar autoriza voluntariamente para que la información suministrada sea utilizada por el la Secretaria de Hábitat y Vivienda \n16. Titularidad de predios a intervenir \n16,1. Certificado de tradición y libertad con máximo tres (3) meses de expedición, donde indique el si el predio es urbano o rural. Donde conste que uno o varios miembros del hogar beneficiario sean propietarios, o entidad territorial u oferente. Y que está libre de limitaciones al dominio, condiciones resolutorias, embargos y gravámenes. Modalidades vivienda nueva o construcción en sitio propio \n16,2. Declaración juramentada que se entenderá prestada por el aporte de documento privado, al que deberá acompañar la firma y fotocopia de documentos de identidad de dos testigos mayores de edad \n16,3. Certificado de tradición y libertad o en su defecto folio de matrícula inmobiliaria no superior a tres (3) meses, donde conste que el propietario del inmueble es la entidad territorial. • Para la modalidad de titularización predial y mejoramiento integral de barrios para parques, alamedas, plazoletas \n17. Documentos que acreditan la calidad e Representante Legal \n17,1. Cédula ampliada al 150% del representante legal del municipio \n17,2. Acto administrativo donde lo facultan para la firma de convenios/contratos \n17,3. Acta de posesión o acto administrativo de nombramiento o vinculación del representante legal \n17,4. RUT y NIT de la entidad municipal \n17,5. Certificación vigente que no se encuentra reportado en el boletín de responsables fiscales -Contraloría General de la República \n17,6. Certificación vigente que no se encuentra reportado en el boletín de responsables fiscales -Contraloría General de la República \n17,8. Certificación vigente de antecedentes penales expedido por la Policía Nacional y certificación de medidas correctivas \n17,9. Fotocopia de la resolución de constitución de si es Resguardo Indígena o Consejo Comunitario de Comunidades Negras, si aplica o son los proyectos a ser realizados dentro de los territorios pertenecientes a resguardos indígenas y territorios colectivos de comunidades negras, deberán adjuntar la respectiva resolución de constitución, expedida por el Ministerio del Interior. \n18. ANEXOS ADCIONALES - CONFORME A LA MODALIDAD DE PROYECTO ESPECIFICO",
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
            <View style = {{ flex: 1, paddingTop: Constants.statusBarHeight,backgroundColor: "#3280e4" }}>
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