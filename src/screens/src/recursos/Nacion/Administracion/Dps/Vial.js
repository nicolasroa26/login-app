import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../../data/Context';
import { Task } from '../../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
        proyecto: "REQUISITOS PAVIMENTACIÓN DE VÍAS URBANAS	",
        requisitos: "1. Carta de presentación:\na) Nombre completo del proyecto de inversión y código BPIN.\nb) Indicar si el proyecto se encuentra en Fase III o prefactibilidad.\nc) En caso que haya lugar a cofinanciación, especificar línea de inversión a la que corresponde el proyecto de inversión\n2. El Proyecto en Forato DVD, segun anexo de los requisitos especificos.\n3. Las Entidades Territoriales que hayan suscrito con Prosperidad Social convenios en vigencias anteriores para la ejecución de proyectos de infraestructura social o mejoramientos de habitabilidad, deben contar con la legalización del 100% de los recursos aportados por Prosperidad Social. \n4. No podrán presentar iniciativas las Entidades Territoriales que hayan suscrito con Prosperidad Social convenios en vigencias anteriores para la ejecución de proyectos de infraestructura social y mejoramientos de habitabilidad, cuyo plazo determinado en el Convenio para la liquidación bilateral haya culminado, sin que efectivamente se hubiese llevado a cabo el trámite.\n5. Plano de localización de (las) área (s) propuesta (s) para la implantación del Proyecto\n6. Certificado disponibilidad servicios públicos-Acueducto, expedido por la empresa de servicios públicos. Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n7. Certificado disponibilidad servicios públicos- Alcantarillado, expedido por la empresa de servicios públicos.   Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n8. Certificado disponibilidad servicios públicos- Energía, expedido por la empresa de servicios públicos.    Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n9. Certificado disponibilidad servicios públicos- Aseo, expedido por la empresa de servicios públicos.\n10. Certificado disponibilidad servicios públicos- Gas, , expedido por la empresa de servicios públicos.  Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n11. Certificado de uso de suelo. \n12. Certificado que el POT permite uso para  el tipo de proyecto que se va a desarrollar.\n13. Certificado zona de riesgos.\n14. Concepto de afectación y/o reserva vial.\n15. Certificado de la autoridad ambiental.\n16. Certificado de la Oficina de Planeación Municipal  sobre Sitio o sitios del municipio en los que está autorizado el depósito de escombros.\n17. Certificado de la Oficina de Planeación Municipal  sobre Canteras del municipio autorizadas para extracción de materiales. \n18. Permiso de intervención\n19. Certificado de Disponibilidad Presupuestal y plan de sostenibilidad de la obra.\n20. Estudios Fase III\n21. Estudio de suelos.\n22. Estudio topográfico (m2 del predio).\n23. Diseño vial, estructural, de elementos no estructurales y urbanisticos.\n24. Memoria Descriptiva del alcance del proyecto\n25. Diseño hidraulico y electrico.\n26. Diseño redes eléctricas (contemplando acometida principal, integrando al diseño eléctrico elementos que ayuden a la sostenibilidad del proyecto y el sistema de iluminación).\n27. Presupuesto detallado de referencia. (Este presupuesto será utilizado únicamente como referencia, pero no constituye el presupuesto contractual del proyecto)\n28. Cronograma de Actividades de la Obra.\n29. Memorias de Cantidades de Obra (tomado como producto de referencia).\n30. Consolidación de Especificaciones Técnicas conforme a lo solicitado en este proceso.\n31. Análisis de Precios Unitarios (Documentación utilizada como referencia y soporte del presupuesto)\n32. Plan de Manejo Ambiental, Plan de Contingencia y plan de manejo de tránsito.\n33. Gestión con Empresas de Servicios Públicos y obtención de permisos y licencias que permitan la construcción del proyecto.\n34. Carta de ofrecimiento del lote para el proyecto, suscrita por el alcalde municipal o el representante de la comunidad indígena o afrocolombiana.\n35. Certificación expedida por el Alcalde Municipal,  a través de la cual el municipio se compromete a gestionar y apropiar los recursos anuales requeridos para la operación y mantenimiento del proyecto.\n36. Certificación del Alcalde Municipal o representante de la comunidad en donde conste que el predio no ha sido propuesto ni hace parte de ningún proyecto diferente al del presente estudio.\n37. Escritura del predio.\n38. Certificado tradición y libertad.\n39. Certificado catastral y manzana catastral.\n40. Paz y Salvo de Impuesto predial.\n41. Paz y Salvo de impuesto valorización.\n42. Paz y Salvo de servicios públicos.\n43. Certificado de la Oficina de Planeación Municipal que el lote se encuentra libre de arriendos, invasiones, demandas, embargos y demás afectaciones que impidan la construcción del proyecto.\n44. Certificado de la Oficina de Planeación Municipal donde indique si el predio ha sido objeto o no de rellenos u otras acciones que puedan afectar la estabilidad del terreno.\n45. Plan de sostenibilidad de la obra",
      },{
        key: "2",
        proyecto: "REQUISITOS PAVIMENTACIÓN DE VÍAS RURALES	",
        requisitos: "1. Carta de presentación:\na) Nombre completo del proyecto de inversión y código BPIN.\nb) Indicar si el proyecto se encuentra en Fase III o prefactibilidad.\nc) En caso que haya lugar a cofinanciación, especificar línea de inversión a la que corresponde el proyecto de inversión\n2. El Proyecto en Forato DVD, segun anexo de los requisitos especificos.\n3. Las Entidades Territoriales que hayan suscrito con Prosperidad Social convenios en vigencias anteriores para la ejecución de proyectos de infraestructura social o mejoramientos de habitabilidad, deben contar con la legalización del 100% de los recursos aportados por Prosperidad Social. \n4. No podrán presentar iniciativas las Entidades Territoriales que hayan suscrito con Prosperidad Social convenios en vigencias anteriores para la ejecución de proyectos de infraestructura social y mejoramientos de habitabilidad, cuyo plazo determinado en el Convenio para la liquidación bilateral haya culminado, sin que efectivamente se hubiese llevado a cabo el trámite.\n5. Plano de localización de (las) área (s) propuesta (s) para la implantación del Proyecto\n6. Certificado disponibilidad servicios públicos-Acueducto, expedido por la empresa de servicios públicos. Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n7. Certificado disponibilidad servicios públicos- Alcantarillado, expedido por la empresa de servicios públicos.   Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n8. Certificado disponibilidad servicios públicos- Energía, expedido por la empresa de servicios públicos.    Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n9. Certificado disponibilidad servicios públicos- Aseo, expedido por la empresa de servicios públicos.\n10. Certificado disponibilidad servicios públicos- Gas, , expedido por la empresa de servicios públicos.  Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n11. Certificado de uso de suelo. \n12. Certificado que el POT permite uso para  el tipo de proyecto que se va a desarrollar.\n13. Certificado zona de riesgos.\n14. Concepto de afectación y/o reserva vial.\n15. Certificado de la autoridad ambiental.\n16. Certificado de la Oficina de Planeación Municipal  sobre Sitio o sitios del municipio en los que está autorizado el depósito de escombros.\n17. Certificado de la Oficina de Planeación Municipal  sobre Canteras del municipio autorizadas para extracción de materiales. \n18. Permiso de intervención\n19. Certificado de Disponibilidad Presupuestal y plan de sostenibilidad de la obra.\n20. Estudios Fase III\n21. Estudio de suelos.\n22. Estudio topográfico (m2 del predio).\n23. Diseño vial, estructural, de elementos no estructurales y urbanisticos.\n24. Memoria Descriptiva del alcance del proyecto\n25. Diseño hidraulico y electrico.\n26. Diseño redes eléctricas (contemplando acometida principal, integrando al diseño eléctrico elementos que ayuden a la sostenibilidad del proyecto y el sistema de iluminación).\n27. Presupuesto detallado de referencia. (Este presupuesto será utilizado únicamente como referencia, pero no constituye el presupuesto contractual del proyecto)\n28. Cronograma de Actividades de la Obra.\n29. Memorias de Cantidades de Obra (tomado como producto de referencia).\n30. Consolidación de Especificaciones Técnicas conforme a lo solicitado en este proceso.\n31. Análisis de Precios Unitarios (Documentación utilizada como referencia y soporte del presupuesto)\n32. Plan de Manejo Ambiental, Plan de Contingencia y plan de manejo de tránsito.\n33. Gestión con Empresas de Servicios Públicos y obtención de permisos y licencias que permitan la construcción del proyecto.\n34. Carta de ofrecimiento del lote para el proyecto, suscrita por el alcalde municipal o el representante de la comunidad indígena o afrocolombiana.\n35. Certificación expedida por el Alcalde Municipal,  a través de la cual el municipio se compromete a gestionar y apropiar los recursos anuales requeridos para la operación y mantenimiento del proyecto.\n36. Certificación del Alcalde Municipal o representante de la comunidad en donde conste que el predio no ha sido propuesto ni hace parte de ningún proyecto diferente al del presente estudio.\n37. Escritura del predio.\n38. Certificado tradición y libertad.\n39. Certificado catastral y manzana catastral.\n40. Paz y Salvo de Impuesto predial.\n41. Paz y Salvo de impuesto valorización.\n42. Paz y Salvo de servicios públicos.\n43. Certificado de la Oficina de Planeación Municipal que el lote se encuentra libre de arriendos, invasiones, demandas, embargos y demás afectaciones que impidan la construcción del proyecto.\n44. Certificado de la Oficina de Planeación Municipal donde indique si el predio ha sido objeto o no de rellenos u otras acciones que puedan afectar la estabilidad del terreno.\n45. Plan de sostenibilidad de la obra"
    },{
        key: "3",
        proyecto: "REQUISITOS MEJORAMIENTO DE VÍAS TERCIARIAS CON OBRAS COMPLEMENTARIAS (ALCANTARILLAS, BOX CULVERT, GAVIONES, ETC.)",
        requisitos: "1. Carta de presentación:\na) Nombre completo del proyecto de inversión y código BPIN.\nb) Indicar si el proyecto se encuentra en Fase III o prefactibilidad.\nc) En caso que haya lugar a cofinanciación, especificar línea de inversión a la que corresponde el proyecto de inversión\n2. El Proyecto en Forato DVD, segun anexo de los requisitos especificos.\n3. Las Entidades Territoriales que hayan suscrito con Prosperidad Social convenios en vigencias anteriores para la ejecución de proyectos de infraestructura social o mejoramientos de habitabilidad, deben contar con la legalización del 100% de los recursos aportados por Prosperidad Social. \n4. No podrán presentar iniciativas las Entidades Territoriales que hayan suscrito con Prosperidad Social convenios en vigencias anteriores para la ejecución de proyectos de infraestructura social y mejoramientos de habitabilidad, cuyo plazo determinado en el Convenio para la liquidación bilateral haya culminado, sin que efectivamente se hubiese llevado a cabo el trámite.\n5. Plano de localización de (las) área (s) propuesta (s) para la implantación del Proyecto\n6. Certificado disponibilidad servicios públicos-Acueducto, expedido por la empresa de servicios públicos. Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n7. Certificado disponibilidad servicios públicos- Alcantarillado, expedido por la empresa de servicios públicos.   Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n8. Certificado disponibilidad servicios públicos- Energía, expedido por la empresa de servicios públicos.    Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n9. Certificado disponibilidad servicios públicos- Aseo, expedido por la empresa de servicios públicos.\n10. Certificado disponibilidad servicios públicos- Gas, , expedido por la empresa de servicios públicos.  Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n11. Certificado de uso de suelo. \n12. Certificado que el POT permite uso para  el tipo de proyecto que se va a desarrollar.\n13. Certificado zona de riesgos.\n14. Concepto de afectación y/o reserva vial.\n15. Certificado de la autoridad ambiental.\n16. Certificado de la Oficina de Planeación Municipal  sobre Sitio o sitios del municipio en los que está autorizado el depósito de escombros.\n17. Certificado de la Oficina de Planeación Municipal  sobre Canteras del municipio autorizadas para extracción de materiales. \n18. Permiso de intervención\n19. Certificado de Disponibilidad Presupuestal y plan de sostenibilidad de la obra.\n20. Estudios Fase III\n21. Estudio de suelos.\n22. Estudio topográfico (m2 del predio).\n23. Diseño vial, estructural, de elementos no estructurales y urbanisticos.\n24. Memoria Descriptiva del alcance del proyecto\n25. Diseño hidraulico y electrico.\n26. Diseño redes eléctricas (contemplando acometida principal, integrando al diseño eléctrico elementos que ayuden a la sostenibilidad del proyecto y el sistema de iluminación).\n27. Presupuesto detallado de referencia. (Este presupuesto será utilizado únicamente como referencia, pero no constituye el presupuesto contractual del proyecto)\n28. Cronograma de Actividades de la Obra.\n29. Memorias de Cantidades de Obra (tomado como producto de referencia).\n30. Consolidación de Especificaciones Técnicas conforme a lo solicitado en este proceso.\n31. Análisis de Precios Unitarios (Documentación utilizada como referencia y soporte del presupuesto)\n32. Plan de Manejo Ambiental, Plan de Contingencia y plan de manejo de tránsito.\n33. Gestión con Empresas de Servicios Públicos y obtención de permisos y licencias que permitan la construcción del proyecto.\n34. Carta de ofrecimiento del lote para el proyecto, suscrita por el alcalde municipal o el representante de la comunidad indígena o afrocolombiana.\n35. Certificación expedida por el Alcalde Municipal,  a través de la cual el municipio se compromete a gestionar y apropiar los recursos anuales requeridos para la operación y mantenimiento del proyecto.\n36. Certificación del Alcalde Municipal o representante de la comunidad en donde conste que el predio no ha sido propuesto ni hace parte de ningún proyecto diferente al del presente estudio.\n37. Escritura del predio.\n38. Certificado tradición y libertad.\n39. Certificado catastral y manzana catastral.\n40. Paz y Salvo de Impuesto predial.\n41. Paz y Salvo de impuesto valorización.\n42. Paz y Salvo de servicios públicos.\n43. Certificado de la Oficina de Planeación Municipal que el lote se encuentra libre de arriendos, invasiones, demandas, embargos y demás afectaciones que impidan la construcción del proyecto.\n44. Certificado de la Oficina de Planeación Municipal donde indique si el predio ha sido objeto o no de rellenos u otras acciones que puedan afectar la estabilidad del terreno.\n45. Plan de sostenibilidad de la obra"
    },{
        key: "4",
        proyecto: "REQUISITOS CONSTRUCCIÓN DE PLACA HUELLA",
        requisitos: "1. Carta de presentación:\na) Nombre completo del proyecto de inversión y código BPIN.\nb) Indicar si el proyecto se encuentra en Fase III o prefactibilidad.\nc) En caso que haya lugar a cofinanciación, especificar línea de inversión a la que corresponde el proyecto de inversión\n2. El Proyecto en Forato DVD, segun anexo de los requisitos especificos.\n3. Las Entidades Territoriales que hayan suscrito con Prosperidad Social convenios en vigencias anteriores para la ejecución de proyectos de infraestructura social o mejoramientos de habitabilidad, deben contar con la legalización del 100% de los recursos aportados por Prosperidad Social. \n4. No podrán presentar iniciativas las Entidades Territoriales que hayan suscrito con Prosperidad Social convenios en vigencias anteriores para la ejecución de proyectos de infraestructura social y mejoramientos de habitabilidad, cuyo plazo determinado en el Convenio para la liquidación bilateral haya culminado, sin que efectivamente se hubiese llevado a cabo el trámite.\n5. Plano de localización de (las) área (s) propuesta (s) para la implantación del Proyecto\n6. Certificado disponibilidad servicios públicos-Acueducto, expedido por la empresa de servicios públicos. Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n7. Certificado disponibilidad servicios públicos- Alcantarillado, expedido por la empresa de servicios públicos.   Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n8. Certificado disponibilidad servicios públicos- Energía, expedido por la empresa de servicios públicos.    Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n9. Certificado disponibilidad servicios públicos- Aseo, expedido por la empresa de servicios públicos.\n10. Certificado disponibilidad servicios públicos- Gas, , expedido por la empresa de servicios públicos.  Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n11. Certificado de uso de suelo. \n12. Certificado que el POT permite uso para  el tipo de proyecto que se va a desarrollar.\n13. Certificado zona de riesgos.\n14. Concepto de afectación y/o reserva vial.\n15. Certificado de la autoridad ambiental.\n16. Certificado de la Oficina de Planeación Municipal  sobre Sitio o sitios del municipio en los que está autorizado el depósito de escombros.\n17. Certificado de la Oficina de Planeación Municipal  sobre Canteras del municipio autorizadas para extracción de materiales. \n18. Permiso de intervención\n19. Certificado de Disponibilidad Presupuestal y plan de sostenibilidad de la obra.\n20. Estudios Fase III\n21. Estudio de suelos.\n22. Estudio topográfico (m2 del predio).\n23. Diseño vial, estructural, de elementos no estructurales y urbanisticos.\n24. Memoria Descriptiva del alcance del proyecto\n25. Diseño hidraulico y electrico.\n26. Diseño redes eléctricas (contemplando acometida principal, integrando al diseño eléctrico elementos que ayuden a la sostenibilidad del proyecto y el sistema de iluminación).\n27. Presupuesto detallado de referencia. (Este presupuesto será utilizado únicamente como referencia, pero no constituye el presupuesto contractual del proyecto)\n28. Cronograma de Actividades de la Obra.\n29. Memorias de Cantidades de Obra (tomado como producto de referencia).\n30. Consolidación de Especificaciones Técnicas conforme a lo solicitado en este proceso.\n31. Análisis de Precios Unitarios (Documentación utilizada como referencia y soporte del presupuesto)\n32. Plan de Manejo Ambiental, Plan de Contingencia y plan de manejo de tránsito.\n33. Gestión con Empresas de Servicios Públicos y obtención de permisos y licencias que permitan la construcción del proyecto.\n34. Carta de ofrecimiento del lote para el proyecto, suscrita por el alcalde municipal o el representante de la comunidad indígena o afrocolombiana.\n35. Certificación expedida por el Alcalde Municipal,  a través de la cual el municipio se compromete a gestionar y apropiar los recursos anuales requeridos para la operación y mantenimiento del proyecto.\n36. Certificación del Alcalde Municipal o representante de la comunidad en donde conste que el predio no ha sido propuesto ni hace parte de ningún proyecto diferente al del presente estudio.\n37. Escritura del predio.\n38. Certificado tradición y libertad.\n39. Certificado catastral y manzana catastral.\n40. Paz y Salvo de Impuesto predial.\n41. Paz y Salvo de impuesto valorización.\n42. Paz y Salvo de servicios públicos.\n43. Certificado de la Oficina de Planeación Municipal que el lote se encuentra libre de arriendos, invasiones, demandas, embargos y demás afectaciones que impidan la construcción del proyecto.\n44. Certificado de la Oficina de Planeación Municipal donde indique si el predio ha sido objeto o no de rellenos u otras acciones que puedan afectar la estabilidad del terreno.\n45. Plan de sostenibilidad de la obra"
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