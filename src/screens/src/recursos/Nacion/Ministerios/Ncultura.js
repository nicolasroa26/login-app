import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
            proyecto: "REQUISITOS CONSTRUCCIÓN, ADECUACIÓN Y MEJORAMIENTO DE BIBLIOTECAS PÚBLICAS",
            requisitos: "1. Presentación del proyecto:\n1.1 F-GIN-148 FORMATO PRESENTACIÓN PROYECTOS\n1.2 F-GIN-150 PLAN DE OPERACIÓN Y SOSTENIBILIDAD\n1.3 F-GIN-163 CERTIFICADO DE PERTINENCIA CULTURAL\n1.4 Certificado de uso del suelo y de alto riego no mitigable\n2. Competencia del Representante Legal:\n2.1 Copia de la Cédula de Ciudadanía y acta de posesión o documento que soporte la designación como representante legal de la entidad que presenta el proyecto.\n3. Inmueble o predio:\n3.1 Copia Escritura pública.\n3.2 Copia de la manzana catastral del predio\n3.3 Copia Certificado de libertad y tradición del inmueble o predio.\n4. Formulación del Proyecto:\n4.1 F-GIN-149 FICHA PRESENTACIÓN PROYECTO F-GIN-132 LISTADO DE INSUMOS\n4.2 F-GIN-147 ACTA DE COMPROMISOS Y RESPONSABILIDADES\n4.3 Anexo 2: Registro fotográfico del sitio donde se plantea el proyecto\n4.4 Anexo 3: Informe técnico de análisis de Riesgo de la Infraestructura y certificado de demolición\n4.5 Anexo 4: Soporte declaratoria de Patrimonio \n4.6 Anexo 5: Cartas de compromiso de otros aportantes y soporte de recursos.\n4.7 Anexo 6: Certificado de cumplimiento del plan de desarrollo, POT o EOT y banco de proyectos municipal\n4.8 Anexo 7: Certificado de disponibilidad de Servicio de Acueducto y Alcantarillado expedido por la empresa prestadora del servicio.\n4.9 Anexo 8:  Certificado de disponibilidad de Servicio de Energía expedido por la empresa prestadora del servicio.\n4.10 Anexo 9: Certificación expedida por la autoridad ambiental competente indicando explícitamente si el proyecto requiere o no permisos o licencias ambiental o si tienes restricciones ambientales.\n4.11 F-OPL-O14 FORMATO ACTA DE REUNIONES Y/O CONTROL DE ASISTENCIA\n4.12 Anexo 11: Documentos soporte que solicite cada área del Ministerio de acuerdo al tipo de proyecto.\n5. Topografía:\n5.1 Planos en planta y perfiles de terreno a escala adecuada de acuerdo al tamaño del predio.\n5.2 Informe con registro fotográfico georreferenciado en los planos\n5.3 Cartera topográfica de campo y de cálculo \n5.4 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n6. Estudio de Suelos:\n6.1 Copia Estudio de suelos\n6.2 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n7. Estudio de Vulnerabilidad Sismica:\n7.1 Copia Estudio de vulnerabilidad sísmica\n7.2 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n8. Anteproyecto Arquitectónico:\n8.1 Plantas, cortes y fachadas.\n8.2 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n9. Diseño Arquitectónico:\n9.1 Planos, cortes, fachadas y detalles constructivos\n9.2 F-GIN-164 MEMORIA DE CÁLCULO DE CANTIDADES (Etapa Viabilización)\n9.3 Organigrama arquitectónico y memoria descriptiva\n9.4 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n10. Diseño Estructural:\n10.1 Planos del diseño estructural que cumplan con la NSR 10\n10.2 Memorias de cálculo \n10.3 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n11. Diseño Hidrosanitario:\n11.1 Planos, cortes y detalles de redes del sistema de suministro de agua, aguas lluvias, aguas sanitarias y red contraincendios por separado, indicando diámetros, longitudes, equipos y accesorios, especificación de materiales, etc., incorporando las acometidas requeridas.\n11.2 Memorias de verificación, estudio y cálculo de diseño, incluyendo las tablas y parámetros utilizados, indicando la metodología utilizada, los criterios, normas y metodología seguida.\n11.3 Matricula, vigencia y memorial de responsabilidad del profesional responsable.\n12. Diseño Eléctrico:\n12.1 Plano general de localización de las redes eléctricas internas (iluminación, tomas, redes de voz y datos), plano de ruta de acometidas, plano de media tensión (S.A), planos del sistema de apantallamiento (S.A) indicando diámetro de tuberías y bandejas, calibre de conductores, aparatos, equipos, notas de instalación,  especificaciones de los materiales y equipos.)\n12.2 Diseño de iluminación con sus respectivas memorias de cálculo, fichas técnicas de las luminarias de acuerdo al RETILAP.\n12.3 Diagramas y tablas de cableados, especificando calibre de conductores, códigos y demás información necesaria para la ejecución del proyecto de acuerdo al RETIE. \n12.4 Memorias y cálculos eléctricos, indicando la metodología utilizada, los criterios, normas ( Según el Artículo 10.1 del RETIE)\n12.5 Aplicabilidad del RETIE, RETILAP y NTC2050.\n12.6 Factibilidad del proyecto.\n12.7 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n13. Diseño de Cimentación:\n13.1 Plantas, cortes y detalles constructivos estructurales que cumplan con la NSR 10 \n13.2 Memorias de cálculo\n13.3 Despieces de acero y estructurales\n13.4 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n14. Ajuste técnicos a los diseños de proyectos prototipo:\n14.1 Plantas, cortes y detalles constructivos estructurales que cumplan con la NSR 10\n14.2 Memorias de cálculo.\n14.3 Despieces de acero y estructurales\n14.4 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n15. Presupuesto de Obra del Proyecto:\n15.1 Presupuesto del proyecto\n15.2 F-GIN-092 ANÁLISIS DE PRECIOS UNITARIOS\n15.3 F-GIN-164 MEMORIA DE CÁLCULO DE CANTIDADES (Etapa Viabilización)\n15.4 Para obra : Especificaciones técnicas Y 3 cotizaciones de los equipos, materiales y elementos que se adquirirán con sus respectivas fichas técnicas.\n15.5 Cronograma de obra y plan financiero\n16. Licencias y Permisos:\n16.1 Copia Licencia de Construcción. (Tramite del municipio)\n16.2 Permisos especiales",
        },{
            key: "2",
            proyecto: "REQUISITOS CONSTRUCCIÓN, ADECUACIÓN Y MEJORAMIENTO DE CASAS DE CULTURA",
            requisitos: "1. Presentación del proyecto:\n1.1 F-GIN-148 FORMATO PRESENTACIÓN PROYECTOS\n1.2 F-GIN-150 PLAN DE OPERACIÓN Y SOSTENIBILIDAD\n1.3 F-GIN-163 CERTIFICADO DE PERTINENCIA CULTURAL\n1.4 Certificado de uso del suelo y de alto riego no mitigable\n2. Competencia del Representante Legal:\n2.1 Copia de la Cédula de Ciudadanía y acta de posesión o documento que soporte la designación como representante legal de la entidad que presenta el proyecto.\n3. Inmueble o predio:\n3.1 Copia Escritura pública.\n3.2 Copia de la manzana catastral del predio\n3.3 Copia Certificado de libertad y tradición del inmueble o predio.\n4. Formulación del Proyecto:\n4.1 F-GIN-149 FICHA PRESENTACIÓN PROYECTO F-GIN-132 LISTADO DE INSUMOS\n4.2 F-GIN-147 ACTA DE COMPROMISOS Y RESPONSABILIDADES\n4.3 Anexo 2: Registro fotográfico del sitio donde se plantea el proyecto\n4.4 Anexo 3: Informe técnico de análisis de Riesgo de la Infraestructura y certificado de demolición\n4.5 Anexo 4: Soporte declaratoria de Patrimonio \n4.6 Anexo 5: Cartas de compromiso de otros aportantes y soporte de recursos.\n4.7 Anexo 6: Certificado de cumplimiento del plan de desarrollo, POT o EOT y banco de proyectos municipal\n4.8 Anexo 7: Certificado de disponibilidad de Servicio de Acueducto y Alcantarillado expedido por la empresa prestadora del servicio.\n4.9 Anexo 8:  Certificado de disponibilidad de Servicio de Energía expedido por la empresa prestadora del servicio.\n4.10 Anexo 9: Certificación expedida por la autoridad ambiental competente indicando explícitamente si el proyecto requiere o no permisos o licencias ambiental o si tienes restricciones ambientales.\n4.11 F-OPL-O14 FORMATO ACTA DE REUNIONES Y/O CONTROL DE ASISTENCIA\n4.12 Anexo 11: Documentos soporte que solicite cada área del Ministerio de acuerdo al tipo de proyecto.\n5. Topografía:\n5.1 Planos en planta y perfiles de terreno a escala adecuada de acuerdo al tamaño del predio.\n5.2 Informe con registro fotográfico georreferenciado en los planos\n5.3 Cartera topográfica de campo y de cálculo \n5.4 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n6. Estudio de Suelos:\n6.1 Copia Estudio de suelos\n6.2 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n7. Estudio de Vulnerabilidad Sismica:\n7.1 Copia Estudio de vulnerabilidad sísmica\n7.2 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n8. Anteproyecto Arquitectónico:\n8.1 Plantas, cortes y fachadas.\n8.2 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n9. Diseño Arquitectónico:\n9.1 Planos, cortes, fachadas y detalles constructivos\n9.2 F-GIN-164 MEMORIA DE CÁLCULO DE CANTIDADES (Etapa Viabilización)\n9.3 Organigrama arquitectónico y memoria descriptiva\n9.4 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n10. Diseño Estructural:\n10.1 Planos del diseño estructural que cumplan con la NSR 10\n10.2 Memorias de cálculo \n10.3 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n11. Diseño Hidrosanitario:\n11.1 Planos, cortes y detalles de redes del sistema de suministro de agua, aguas lluvias, aguas sanitarias y red contraincendios por separado, indicando diámetros, longitudes, equipos y accesorios, especificación de materiales, etc., incorporando las acometidas requeridas.\n11.2 Memorias de verificación, estudio y cálculo de diseño, incluyendo las tablas y parámetros utilizados, indicando la metodología utilizada, los criterios, normas y metodología seguida.\n11.3 Matricula, vigencia y memorial de responsabilidad del profesional responsable.\n12. Diseño Eléctrico:\n12.1 Plano general de localización de las redes eléctricas internas (iluminación, tomas, redes de voz y datos), plano de ruta de acometidas, plano de media tensión (S.A), planos del sistema de apantallamiento (S.A) indicando diámetro de tuberías y bandejas, calibre de conductores, aparatos, equipos, notas de instalación,  especificaciones de los materiales y equipos.)\n12.2 Diseño de iluminación con sus respectivas memorias de cálculo, fichas técnicas de las luminarias de acuerdo al RETILAP.\n12.3 Diagramas y tablas de cableados, especificando calibre de conductores, códigos y demás información necesaria para la ejecución del proyecto de acuerdo al RETIE. \n12.4 Memorias y cálculos eléctricos, indicando la metodología utilizada, los criterios, normas ( Según el Artículo 10.1 del RETIE)\n12.5 Aplicabilidad del RETIE, RETILAP y NTC2050.\n12.6 Factibilidad del proyecto.\n12.7 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n13. Diseño de Cimentación:\n13.1 Plantas, cortes y detalles constructivos estructurales que cumplan con la NSR 10 \n13.2 Memorias de cálculo\n13.3 Despieces de acero y estructurales\n13.4 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n14. Ajuste técnicos a los diseños de proyectos prototipo:\n14.1 Plantas, cortes y detalles constructivos estructurales que cumplan con la NSR 10\n14.2 Memorias de cálculo.\n14.3 Despieces de acero y estructurales\n14.4 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n15. Presupuesto de Obra del Proyecto:\n15.1 Presupuesto del proyecto\n15.2 F-GIN-092 ANÁLISIS DE PRECIOS UNITARIOS\n15.3 F-GIN-164 MEMORIA DE CÁLCULO DE CANTIDADES (Etapa Viabilización)\n15.4 Para obra : Especificaciones técnicas Y 3 cotizaciones de los equipos, materiales y elementos que se adquirirán con sus respectivas fichas técnicas.\n15.5 Cronograma de obra y plan financiero\n16. Licencias y Permisos:\n16.1 Copia Licencia de Construcción. (Tramite del municipio)\n16.2 Permisos especiales",
        },{
            key: "3",
            proyecto: "REQUISITOS CONSTRUCCIÓN ESCUELAS DE MÚSICA",
            requisitos: "1. Presentación del proyecto:\n1.1 F-GIN-148 FORMATO PRESENTACIÓN PROYECTOS\n1.2 F-GIN-150 PLAN DE OPERACIÓN Y SOSTENIBILIDAD\n1.3 F-GIN-163 CERTIFICADO DE PERTINENCIA CULTURAL\n1.4 Certificado de uso del suelo y de alto riego no mitigable\n2. Competencia del Representante Legal:\n2.1 Copia de la Cédula de Ciudadanía y acta de posesión o documento que soporte la designación como representante legal de la entidad que presenta el proyecto.\n3. Inmueble o predio:\n3.1 Copia Escritura pública.\n3.2 Copia de la manzana catastral del predio\n3.3 Copia Certificado de libertad y tradición del inmueble o predio.\n4. Formulación del Proyecto:\n4.1 F-GIN-149 FICHA PRESENTACIÓN PROYECTO F-GIN-132 LISTADO DE INSUMOS\n4.2 F-GIN-147 ACTA DE COMPROMISOS Y RESPONSABILIDADES\n4.3 Anexo 2: Registro fotográfico del sitio donde se plantea el proyecto\n4.4 Anexo 3: Informe técnico de análisis de Riesgo de la Infraestructura y certificado de demolición\n4.5 Anexo 4: Soporte declaratoria de Patrimonio \n4.6 Anexo 5: Cartas de compromiso de otros aportantes y soporte de recursos.\n4.7 Anexo 6: Certificado de cumplimiento del plan de desarrollo, POT o EOT y banco de proyectos municipal\n4.8 Anexo 7: Certificado de disponibilidad de Servicio de Acueducto y Alcantarillado expedido por la empresa prestadora del servicio.\n4.9 Anexo 8:  Certificado de disponibilidad de Servicio de Energía expedido por la empresa prestadora del servicio.\n4.10 Anexo 9: Certificación expedida por la autoridad ambiental competente indicando explícitamente si el proyecto requiere o no permisos o licencias ambiental o si tienes restricciones ambientales.\n4.11 F-OPL-O14 FORMATO ACTA DE REUNIONES Y/O CONTROL DE ASISTENCIA\n4.12 Anexo 11: Documentos soporte que solicite cada área del Ministerio de acuerdo al tipo de proyecto.\n5. Topografía:\n5.1 Planos en planta y perfiles de terreno a escala adecuada de acuerdo al tamaño del predio.\n5.2 Informe con registro fotográfico georreferenciado en los planos\n5.3 Cartera topográfica de campo y de cálculo \n5.4 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n6. Estudio de Suelos:\n6.1 Copia Estudio de suelos\n6.2 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n7. Estudio de Vulnerabilidad Sismica:\n7.1 Copia Estudio de vulnerabilidad sísmica\n7.2 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n8. Anteproyecto Arquitectónico:\n8.1 Plantas, cortes y fachadas.\n8.2 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n9. Diseño Arquitectónico:\n9.1 Planos, cortes, fachadas y detalles constructivos\n9.2 F-GIN-164 MEMORIA DE CÁLCULO DE CANTIDADES (Etapa Viabilización)\n9.3 Organigrama arquitectónico y memoria descriptiva\n9.4 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n10. Diseño Estructural:\n10.1 Planos del diseño estructural que cumplan con la NSR 10\n10.2 Memorias de cálculo \n10.3 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n11. Diseño Hidrosanitario:\n11.1 Planos, cortes y detalles de redes del sistema de suministro de agua, aguas lluvias, aguas sanitarias y red contraincendios por separado, indicando diámetros, longitudes, equipos y accesorios, especificación de materiales, etc., incorporando las acometidas requeridas.\n11.2 Memorias de verificación, estudio y cálculo de diseño, incluyendo las tablas y parámetros utilizados, indicando la metodología utilizada, los criterios, normas y metodología seguida.\n11.3 Matricula, vigencia y memorial de responsabilidad del profesional responsable.\n12. Diseño Eléctrico:\n12.1 Plano general de localización de las redes eléctricas internas (iluminación, tomas, redes de voz y datos), plano de ruta de acometidas, plano de media tensión (S.A), planos del sistema de apantallamiento (S.A) indicando diámetro de tuberías y bandejas, calibre de conductores, aparatos, equipos, notas de instalación,  especificaciones de los materiales y equipos.)\n12.2 Diseño de iluminación con sus respectivas memorias de cálculo, fichas técnicas de las luminarias de acuerdo al RETILAP.\n12.3 Diagramas y tablas de cableados, especificando calibre de conductores, códigos y demás información necesaria para la ejecución del proyecto de acuerdo al RETIE. \n12.4 Memorias y cálculos eléctricos, indicando la metodología utilizada, los criterios, normas ( Según el Artículo 10.1 del RETIE)\n12.5 Aplicabilidad del RETIE, RETILAP y NTC2050.\n12.6 Factibilidad del proyecto.\n12.7 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n13. Diseño de Cimentación:\n13.1 Plantas, cortes y detalles constructivos estructurales que cumplan con la NSR 10 \n13.2 Memorias de cálculo\n13.3 Despieces de acero y estructurales\n13.4 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n14. Ajuste técnicos a los diseños de proyectos prototipo:\n14.1 Plantas, cortes y detalles constructivos estructurales que cumplan con la NSR 10\n14.2 Memorias de cálculo.\n14.3 Despieces de acero y estructurales\n14.4 F-GIN-133 MEMORIAL DE RESPONSABILIDAD\n15. Presupuesto de Obra del Proyecto:\n15.1 Presupuesto del proyecto\n15.2 F-GIN-092 ANÁLISIS DE PRECIOS UNITARIOS\n15.3 F-GIN-164 MEMORIA DE CÁLCULO DE CANTIDADES (Etapa Viabilización)\n15.4 Para obra : Especificaciones técnicas Y 3 cotizaciones de los equipos, materiales y elementos que se adquirirán con sus respectivas fichas técnicas.\n15.5 Cronograma de obra y plan financiero\n16. Licencias y Permisos:\n16.1 Copia Licencia de Construcción. (Tramite del municipio)\n16.2 Permisos especiales",
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