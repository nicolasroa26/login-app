import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
            proyecto: "REQUISITOS PROYECTOS DE PRODUCCIÓN AGROPECUARIA",
            requisitos: "1. Certificar como mínimo una (1) de las siguientes condiciones, para lo cual debe presentar por lo menos uno (1) de los siguientes documentos4,los cuales no son subsanables después del cierre de la convocatoria: SISBEN: Resultado de la consulta en la página web del SISBEN (https://www.sisben.gov.co/atencion-al-ciudadano/Paginas/consulta-delpuntaje.aspx), o certificado expedido por Oficina SISBEN en oficina de la Alcaldía Municipal cuya vigencia debe coincidir con el último corte vigente del SISBEN publicado en página Web. ESTRATEGIA UNIDOS: Resultado de la consulta de la Certificación del estado de vinculación de UNIDOS en la página web de Prosperidad Social (http://portalservicios.prosperidadsocial.gov.co/Paginas/Unidos.aspx) con fecha de expedición no mayor a tres (3) meses a la fecha de presentación a la convocatoria.\n2. Ser residentes permanentes del municipio donde se desarrollará el Plan de Negocio, por lo menos durante el último año certificado por la Alcaldía Municipal o la Inspección de Policía del municipio correspondiente, con fecha de expedición no mayor a tres (3) meses a la fecha de presentación a la convocatoria. Para el caso de los grupos conformados por comunidades indígenas, esta certificación puede ser expedida por el Cabildo o Resguardo al cual pertenezcan y debe identificar el número de la resolución otorgada por el Ministerio del Interior al mismo. No subsanable\n3. Los representantes de las familias beneficiarias deben estar preferiblemente asentados en el ámbito rural. No obstante, se atenderán familias asentadas en las cabeceras de los municipios donde se ejecuta la convocatoria, siempre y cuando su Plan de Negocio aporte al desarrollo rural integral del municipio.\n4. Los representantes de las familias deben ser colombianos mayores de edad, para tal efecto, deben presentar copia legible de la cédula de ciudadanía colombiana, o en su defecto copia del comprobante de que se encuentra en trámite la expedición de la cédula de ciudadanía (contraseña con foto y huella). Subsanable sólo por calidad de la copia suministrada. \n5. No ser requerido por las autoridades judiciales para el cumplimiento de pena privativa de la libertad, impuesta mediante sentencia condenatoria en firme. Presentar el resultado de la consulta de antecedentes judiciales en la página web de la Policía Nacional de Colombia (https://antecedentes.policia.gov.co:7005/WebJudicial/index.xhtml), con fecha de expedición no mayor a tres (3) meses a la fecha de presentación a la convocatoria. Subsanable.\n6. Mínimo el 27% de los representantes de las familias en cada grupo deben ser mujeres rurales para las categorías general y jóvenes rurales. En la Categoría mujeres rurales el 100% de las representantes de familia del grupo deberán cumplir esta condición\n7. Al momento de presentarse a la convocatoria manifestar por escrito la voluntad e interés de desarrollar el trabajo de manera asociativa y asumir los compromisos de contrapartida requeridos por el Proyecto. Anexo No. 4, Acta de Interés.\n8. Los integrantes del grupo no deben haber sido beneficiarios de los Programas Oportunidades Rurales o Alianzas Productivas ejecutados por el MADR en los últimos cuatro (4) años anteriores a la fecha de apertura de la presente convocatoria (desde el año 2016). En caso de encontrar hasta un (1) integrante que hubiese sido beneficiario, el grupo puede solicitar y realizar el respectivo cambio por un integrante que cumpla con las condiciones de los presentes Términos de Referencia. Numeral 16 del Anexo No. 4, Acta de Interés.\n9. Ninguno de los integrantes del grupo debe ser servidor o funcionario público. Numeral 17 del Anexo No. 4, Acta de Interés.\n10. Ninguno de los integrantes del grupo debe desarrollar actividades ilícitas en su(s) predio(s) o participar de ellas. Numeral 18 del Anexo No. 4, Acta de Interés.\n11. En caso de que alguno(s) de los integrantes del grupo sea(n) familiar(es) hasta en cuarto grado de consanguinidad o segundo de afinidad6 del Promotor Rural asignado al municipio o del Coordinador Territorial de la UT o de algún integrante de la UNC, el grupo deberá informar por escrito esta situación al momento de su inscripción, a fin de asignar una persona diferente por parte del Proyecto para acompañar las etapas de la convocatoria y la implementación del Plan de Negocio. En caso de no presentar dicho documento y de comprobarse la familiaridad en los grados descritos el Proyecto inhabilitará al grupo o se adelantará el proceso de incumplimiento del contrato de adhesión.",
        },{
            key: "2",
            proyecto: "REQUISITOS PRODUCCIÓN O COMERCIALIZACIÓN DE ARTESANÍAS",
            requisitos: "1. Certificar como mínimo una (1) de las siguientes condiciones, para lo cual debe presentar por lo menos uno (1) de los siguientes documentos4,los cuales no son subsanables después del cierre de la convocatoria: SISBEN: Resultado de la consulta en la página web del SISBEN (https://www.sisben.gov.co/atencion-al-ciudadano/Paginas/consulta-delpuntaje.aspx), o certificado expedido por Oficina SISBEN en oficina de la Alcaldía Municipal cuya vigencia debe coincidir con el último corte vigente del SISBEN publicado en página Web. ESTRATEGIA UNIDOS: Resultado de la consulta de la Certificación del estado de vinculación de UNIDOS en la página web de Prosperidad Social (http://portalservicios.prosperidadsocial.gov.co/Paginas/Unidos.aspx) con fecha de expedición no mayor a tres (3) meses a la fecha de presentación a la convocatoria.\n2. Ser residentes permanentes del municipio donde se desarrollará el Plan de Negocio, por lo menos durante el último año certificado por la Alcaldía Municipal o la Inspección de Policía del municipio correspondiente, con fecha de expedición no mayor a tres (3) meses a la fecha de presentación a la convocatoria. Para el caso de los grupos conformados por comunidades indígenas, esta certificación puede ser expedida por el Cabildo o Resguardo al cual pertenezcan y debe identificar el número de la resolución otorgada por el Ministerio del Interior al mismo. No subsanable\n3. Los representantes de las familias beneficiarias deben estar preferiblemente asentados en el ámbito rural. No obstante, se atenderán familias asentadas en las cabeceras de los municipios donde se ejecuta la convocatoria, siempre y cuando su Plan de Negocio aporte al desarrollo rural integral del municipio.\n4. Los representantes de las familias deben ser colombianos mayores de edad, para tal efecto, deben presentar copia legible de la cédula de ciudadanía colombiana, o en su defecto copia del comprobante de que se encuentra en trámite la expedición de la cédula de ciudadanía (contraseña con foto y huella). Subsanable sólo por calidad de la copia suministrada. \n5. No ser requerido por las autoridades judiciales para el cumplimiento de pena privativa de la libertad, impuesta mediante sentencia condenatoria en firme. Presentar el resultado de la consulta de antecedentes judiciales en la página web de la Policía Nacional de Colombia (https://antecedentes.policia.gov.co:7005/WebJudicial/index.xhtml), con fecha de expedición no mayor a tres (3) meses a la fecha de presentación a la convocatoria. Subsanable.\n6. Mínimo el 27% de los representantes de las familias en cada grupo deben ser mujeres rurales para las categorías general y jóvenes rurales. En la Categoría mujeres rurales el 100% de las representantes de familia del grupo deberán cumplir esta condición\n7. Al momento de presentarse a la convocatoria manifestar por escrito la voluntad e interés de desarrollar el trabajo de manera asociativa y asumir los compromisos de contrapartida requeridos por el Proyecto. Anexo No. 4, Acta de Interés.\n8. Los integrantes del grupo no deben haber sido beneficiarios de los Programas Oportunidades Rurales o Alianzas Productivas ejecutados por el MADR en los últimos cuatro (4) años anteriores a la fecha de apertura de la presente convocatoria (desde el año 2016). En caso de encontrar hasta un (1) integrante que hubiese sido beneficiario, el grupo puede solicitar y realizar el respectivo cambio por un integrante que cumpla con las condiciones de los presentes Términos de Referencia. Numeral 16 del Anexo No. 4, Acta de Interés.\n9. Ninguno de los integrantes del grupo debe ser servidor o funcionario público. Numeral 17 del Anexo No. 4, Acta de Interés.\n10. Ninguno de los integrantes del grupo debe desarrollar actividades ilícitas en su(s) predio(s) o participar de ellas. Numeral 18 del Anexo No. 4, Acta de Interés.\n11. En caso de que alguno(s) de los integrantes del grupo sea(n) familiar(es) hasta en cuarto grado de consanguinidad o segundo de afinidad6 del Promotor Rural asignado al municipio o del Coordinador Territorial de la UT o de algún integrante de la UNC, el grupo deberá informar por escrito esta situación al momento de su inscripción, a fin de asignar una persona diferente por parte del Proyecto para acompañar las etapas de la convocatoria y la implementación del Plan de Negocio. En caso de no presentar dicho documento y de comprobarse la familiaridad en los grados descritos el Proyecto inhabilitará al grupo o se adelantará el proceso de incumplimiento del contrato de adhesión.",
        },{
            key: "3",
            proyecto: "REQUISITOS SERVICIOS AL TURISMO RURAL",
            requisitos: "1. Certificar como mínimo una (1) de las siguientes condiciones, para lo cual debe presentar por lo menos uno (1) de los siguientes documentos4,los cuales no son subsanables después del cierre de la convocatoria: SISBEN: Resultado de la consulta en la página web del SISBEN (https://www.sisben.gov.co/atencion-al-ciudadano/Paginas/consulta-delpuntaje.aspx), o certificado expedido por Oficina SISBEN en oficina de la Alcaldía Municipal cuya vigencia debe coincidir con el último corte vigente del SISBEN publicado en página Web. ESTRATEGIA UNIDOS: Resultado de la consulta de la Certificación del estado de vinculación de UNIDOS en la página web de Prosperidad Social (http://portalservicios.prosperidadsocial.gov.co/Paginas/Unidos.aspx) con fecha de expedición no mayor a tres (3) meses a la fecha de presentación a la convocatoria.\n2. Ser residentes permanentes del municipio donde se desarrollará el Plan de Negocio, por lo menos durante el último año certificado por la Alcaldía Municipal o la Inspección de Policía del municipio correspondiente, con fecha de expedición no mayor a tres (3) meses a la fecha de presentación a la convocatoria. Para el caso de los grupos conformados por comunidades indígenas, esta certificación puede ser expedida por el Cabildo o Resguardo al cual pertenezcan y debe identificar el número de la resolución otorgada por el Ministerio del Interior al mismo. No subsanable\n3. Los representantes de las familias beneficiarias deben estar preferiblemente asentados en el ámbito rural. No obstante, se atenderán familias asentadas en las cabeceras de los municipios donde se ejecuta la convocatoria, siempre y cuando su Plan de Negocio aporte al desarrollo rural integral del municipio.\n4. Los representantes de las familias deben ser colombianos mayores de edad, para tal efecto, deben presentar copia legible de la cédula de ciudadanía colombiana, o en su defecto copia del comprobante de que se encuentra en trámite la expedición de la cédula de ciudadanía (contraseña con foto y huella). Subsanable sólo por calidad de la copia suministrada. \n5. No ser requerido por las autoridades judiciales para el cumplimiento de pena privativa de la libertad, impuesta mediante sentencia condenatoria en firme. Presentar el resultado de la consulta de antecedentes judiciales en la página web de la Policía Nacional de Colombia (https://antecedentes.policia.gov.co:7005/WebJudicial/index.xhtml), con fecha de expedición no mayor a tres (3) meses a la fecha de presentación a la convocatoria. Subsanable.\n6. Mínimo el 27% de los representantes de las familias en cada grupo deben ser mujeres rurales para las categorías general y jóvenes rurales. En la Categoría mujeres rurales el 100% de las representantes de familia del grupo deberán cumplir esta condición\n7. Al momento de presentarse a la convocatoria manifestar por escrito la voluntad e interés de desarrollar el trabajo de manera asociativa y asumir los compromisos de contrapartida requeridos por el Proyecto. Anexo No. 4, Acta de Interés.\n8. Los integrantes del grupo no deben haber sido beneficiarios de los Programas Oportunidades Rurales o Alianzas Productivas ejecutados por el MADR en los últimos cuatro (4) años anteriores a la fecha de apertura de la presente convocatoria (desde el año 2016). En caso de encontrar hasta un (1) integrante que hubiese sido beneficiario, el grupo puede solicitar y realizar el respectivo cambio por un integrante que cumpla con las condiciones de los presentes Términos de Referencia. Numeral 16 del Anexo No. 4, Acta de Interés.\n9. Ninguno de los integrantes del grupo debe ser servidor o funcionario público. Numeral 17 del Anexo No. 4, Acta de Interés.\n10. Ninguno de los integrantes del grupo debe desarrollar actividades ilícitas en su(s) predio(s) o participar de ellas. Numeral 18 del Anexo No. 4, Acta de Interés.\n11. En caso de que alguno(s) de los integrantes del grupo sea(n) familiar(es) hasta en cuarto grado de consanguinidad o segundo de afinidad6 del Promotor Rural asignado al municipio o del Coordinador Territorial de la UT o de algún integrante de la UNC, el grupo deberá informar por escrito esta situación al momento de su inscripción, a fin de asignar una persona diferente por parte del Proyecto para acompañar las etapas de la convocatoria y la implementación del Plan de Negocio. En caso de no presentar dicho documento y de comprobarse la familiaridad en los grados descritos el Proyecto inhabilitará al grupo o se adelantará el proceso de incumplimiento del contrato de adhesión.",
        },{
            key: "4",
            proyecto: "REQUISITOS ADECUACIÓN O TRANSFORMACIÓN DE LA PRODUCCIÓN PRIMARIA		",
            requisitos: "1. Certificar como mínimo una (1) de las siguientes condiciones, para lo cual debe presentar por lo menos uno (1) de los siguientes documentos4,los cuales no son subsanables después del cierre de la convocatoria: SISBEN: Resultado de la consulta en la página web del SISBEN (https://www.sisben.gov.co/atencion-al-ciudadano/Paginas/consulta-delpuntaje.aspx), o certificado expedido por Oficina SISBEN en oficina de la Alcaldía Municipal cuya vigencia debe coincidir con el último corte vigente del SISBEN publicado en página Web. ESTRATEGIA UNIDOS: Resultado de la consulta de la Certificación del estado de vinculación de UNIDOS en la página web de Prosperidad Social (http://portalservicios.prosperidadsocial.gov.co/Paginas/Unidos.aspx) con fecha de expedición no mayor a tres (3) meses a la fecha de presentación a la convocatoria.\n2. Ser residentes permanentes del municipio donde se desarrollará el Plan de Negocio, por lo menos durante el último año certificado por la Alcaldía Municipal o la Inspección de Policía del municipio correspondiente, con fecha de expedición no mayor a tres (3) meses a la fecha de presentación a la convocatoria. Para el caso de los grupos conformados por comunidades indígenas, esta certificación puede ser expedida por el Cabildo o Resguardo al cual pertenezcan y debe identificar el número de la resolución otorgada por el Ministerio del Interior al mismo. No subsanable\n3. Los representantes de las familias beneficiarias deben estar preferiblemente asentados en el ámbito rural. No obstante, se atenderán familias asentadas en las cabeceras de los municipios donde se ejecuta la convocatoria, siempre y cuando su Plan de Negocio aporte al desarrollo rural integral del municipio.\n4. Los representantes de las familias deben ser colombianos mayores de edad, para tal efecto, deben presentar copia legible de la cédula de ciudadanía colombiana, o en su defecto copia del comprobante de que se encuentra en trámite la expedición de la cédula de ciudadanía (contraseña con foto y huella). Subsanable sólo por calidad de la copia suministrada. \n5. No ser requerido por las autoridades judiciales para el cumplimiento de pena privativa de la libertad, impuesta mediante sentencia condenatoria en firme. Presentar el resultado de la consulta de antecedentes judiciales en la página web de la Policía Nacional de Colombia (https://antecedentes.policia.gov.co:7005/WebJudicial/index.xhtml), con fecha de expedición no mayor a tres (3) meses a la fecha de presentación a la convocatoria. Subsanable.\n6. Mínimo el 27% de los representantes de las familias en cada grupo deben ser mujeres rurales para las categorías general y jóvenes rurales. En la Categoría mujeres rurales el 100% de las representantes de familia del grupo deberán cumplir esta condición\n7. Al momento de presentarse a la convocatoria manifestar por escrito la voluntad e interés de desarrollar el trabajo de manera asociativa y asumir los compromisos de contrapartida requeridos por el Proyecto. Anexo No. 4, Acta de Interés.\n8. Los integrantes del grupo no deben haber sido beneficiarios de los Programas Oportunidades Rurales o Alianzas Productivas ejecutados por el MADR en los últimos cuatro (4) años anteriores a la fecha de apertura de la presente convocatoria (desde el año 2016). En caso de encontrar hasta un (1) integrante que hubiese sido beneficiario, el grupo puede solicitar y realizar el respectivo cambio por un integrante que cumpla con las condiciones de los presentes Términos de Referencia. Numeral 16 del Anexo No. 4, Acta de Interés.\n9. Ninguno de los integrantes del grupo debe ser servidor o funcionario público. Numeral 17 del Anexo No. 4, Acta de Interés.\n10. Ninguno de los integrantes del grupo debe desarrollar actividades ilícitas en su(s) predio(s) o participar de ellas. Numeral 18 del Anexo No. 4, Acta de Interés.\n11. En caso de que alguno(s) de los integrantes del grupo sea(n) familiar(es) hasta en cuarto grado de consanguinidad o segundo de afinidad6 del Promotor Rural asignado al municipio o del Coordinador Territorial de la UT o de algún integrante de la UNC, el grupo deberá informar por escrito esta situación al momento de su inscripción, a fin de asignar una persona diferente por parte del Proyecto para acompañar las etapas de la convocatoria y la implementación del Plan de Negocio. En caso de no presentar dicho documento y de comprobarse la familiaridad en los grados descritos el Proyecto inhabilitará al grupo o se adelantará el proceso de incumplimiento del contrato de adhesión.",
        },{
            key: "5",
            proyecto: "REQUISITOS NEGOCIOS VERDES",
            requisitos: "1. Certificar como mínimo una (1) de las siguientes condiciones, para lo cual debe presentar por lo menos uno (1) de los siguientes documentos4,los cuales no son subsanables después del cierre de la convocatoria: SISBEN: Resultado de la consulta en la página web del SISBEN (https://www.sisben.gov.co/atencion-al-ciudadano/Paginas/consulta-delpuntaje.aspx), o certificado expedido por Oficina SISBEN en oficina de la Alcaldía Municipal cuya vigencia debe coincidir con el último corte vigente del SISBEN publicado en página Web. ESTRATEGIA UNIDOS: Resultado de la consulta de la Certificación del estado de vinculación de UNIDOS en la página web de Prosperidad Social (http://portalservicios.prosperidadsocial.gov.co/Paginas/Unidos.aspx) con fecha de expedición no mayor a tres (3) meses a la fecha de presentación a la convocatoria.\n2. Ser residentes permanentes del municipio donde se desarrollará el Plan de Negocio, por lo menos durante el último año certificado por la Alcaldía Municipal o la Inspección de Policía del municipio correspondiente, con fecha de expedición no mayor a tres (3) meses a la fecha de presentación a la convocatoria. Para el caso de los grupos conformados por comunidades indígenas, esta certificación puede ser expedida por el Cabildo o Resguardo al cual pertenezcan y debe identificar el número de la resolución otorgada por el Ministerio del Interior al mismo. No subsanable\n3. Los representantes de las familias beneficiarias deben estar preferiblemente asentados en el ámbito rural. No obstante, se atenderán familias asentadas en las cabeceras de los municipios donde se ejecuta la convocatoria, siempre y cuando su Plan de Negocio aporte al desarrollo rural integral del municipio.\n4. Los representantes de las familias deben ser colombianos mayores de edad, para tal efecto, deben presentar copia legible de la cédula de ciudadanía colombiana, o en su defecto copia del comprobante de que se encuentra en trámite la expedición de la cédula de ciudadanía (contraseña con foto y huella). Subsanable sólo por calidad de la copia suministrada. \n5. No ser requerido por las autoridades judiciales para el cumplimiento de pena privativa de la libertad, impuesta mediante sentencia condenatoria en firme. Presentar el resultado de la consulta de antecedentes judiciales en la página web de la Policía Nacional de Colombia (https://antecedentes.policia.gov.co:7005/WebJudicial/index.xhtml), con fecha de expedición no mayor a tres (3) meses a la fecha de presentación a la convocatoria. Subsanable.\n6. Mínimo el 27% de los representantes de las familias en cada grupo deben ser mujeres rurales para las categorías general y jóvenes rurales. En la Categoría mujeres rurales el 100% de las representantes de familia del grupo deberán cumplir esta condición\n7. Al momento de presentarse a la convocatoria manifestar por escrito la voluntad e interés de desarrollar el trabajo de manera asociativa y asumir los compromisos de contrapartida requeridos por el Proyecto. Anexo No. 4, Acta de Interés.\n8. Los integrantes del grupo no deben haber sido beneficiarios de los Programas Oportunidades Rurales o Alianzas Productivas ejecutados por el MADR en los últimos cuatro (4) años anteriores a la fecha de apertura de la presente convocatoria (desde el año 2016). En caso de encontrar hasta un (1) integrante que hubiese sido beneficiario, el grupo puede solicitar y realizar el respectivo cambio por un integrante que cumpla con las condiciones de los presentes Términos de Referencia. Numeral 16 del Anexo No. 4, Acta de Interés.\n9. Ninguno de los integrantes del grupo debe ser servidor o funcionario público. Numeral 17 del Anexo No. 4, Acta de Interés.\n10. Ninguno de los integrantes del grupo debe desarrollar actividades ilícitas en su(s) predio(s) o participar de ellas. Numeral 18 del Anexo No. 4, Acta de Interés.\n11. En caso de que alguno(s) de los integrantes del grupo sea(n) familiar(es) hasta en cuarto grado de consanguinidad o segundo de afinidad6 del Promotor Rural asignado al municipio o del Coordinador Territorial de la UT o de algún integrante de la UNC, el grupo deberá informar por escrito esta situación al momento de su inscripción, a fin de asignar una persona diferente por parte del Proyecto para acompañar las etapas de la convocatoria y la implementación del Plan de Negocio. En caso de no presentar dicho documento y de comprobarse la familiaridad en los grados descritos el Proyecto inhabilitará al grupo o se adelantará el proceso de incumplimiento del contrato de adhesión.",
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