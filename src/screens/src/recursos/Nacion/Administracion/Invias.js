import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
        proyecto: "REQUISITOS CONSTRUCCIÓN DE PLACA HUELLA",
        requisitos: "1. Carta de presentación:\na) Nombre completo del proyecto de inversión y código BPIN.\nb) Indicar si el proyecto se encuentra en Fase III o prefactibilidad.\nc) En caso que haya lugar a cofinanciación, especificar línea de inversión a la que corresponde el proyecto de inversión\n2. El Proyecto en Forato DVD, segun anexo de los requisitos especificos.\n3. Plano de localización de (las) área (s) propuesta (s) para la implantación del Proyecto\n4. Certificado disponibilidad servicios públicos-Acueducto, expedido por la empresa de servicios públicos. Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n5. Certificado disponibilidad servicios públicos- Alcantarillado, expedido por la empresa de servicios públicos.   Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n6. Certificado disponibilidad servicios públicos- Energía, expedido por la empresa de servicios públicos.    Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n7. Certificado disponibilidad servicios públicos- Aseo, expedido por la empresa de servicios públicos.\n8. Certificado disponibilidad servicios públicos- Gas, , expedido por la empresa de servicios públicos.  Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n9. Certificado de uso de suelo.\n10. Certificado que el POT permite uso para  el tipo de proyecto que se va a desarrollar.\n11. Certificado zona de riesgos.\n12. Concepto de afectación y/o reserva vial.\n13. Certificado de la autoridad ambiental.\n14. Certificado de la Oficina de Planeación Municipal  sobre Sitio o sitios del municipio en los que está autorizado el depósito de escombros.\n15. Certificado de la Oficina de Planeación Municipal  sobre Canteras del municipio autorizadas para extracción de materiales.\n16. Permiso de intervención\n17. Certificado de Disponibilidad Presupuestal y plan de sostenibilidad de la obra.\n18. Estudios Fase III\n19. Estudio de suelos.\n20. Estudio topográfico (m2 del predio). \n21. Diseño vial, estructural, de elementos no estructurales y urbanisticos.\n22. Memoria Descriptiva del alcance del proyecto\n23. Diseño hidraulico y electrico.\n25. Presupuesto detallado de referencia. (Este presupuesto será utilizado únicamente como referencia, pero no constituye el presupuesto contractual del proyecto)\n26. Cronograma de Actividades de la Obra.\n27. Memorias de Cantidades de Obra (tomado como producto de referencia).\n28. Consolidación de Especificaciones Técnicas conforme a lo solicitado en este proceso.\n29. Análisis de Precios Unitarios (Documentación utilizada como referencia y soporte del presupuesto)\n30. Plan de Manejo Ambiental, Plan de Contingencia y plan de manejo de tránsito.\n31. Gestión con Empresas de Servicios Públicos y obtención de permisos y licencias que permitan la construcción del proyecto.\n32. Carta de ofrecimiento del lote para el proyecto, suscrita por el alcalde municipal o el representante de la comunidad indígena o afrocolombiana.\n33. Certificación expedida por el Alcalde Municipal,  a través de la cual el municipio se compromete a gestionar y apropiar los recursos anuales requeridos para la operación y mantenimiento del proyecto.\n34. Certificación del Alcalde Municipal o representante de la comunidad en donde conste que el predio no ha sido propuesto ni hace parte de ningún proyecto diferente al del presente estudio.\n35. Certificado de la Oficina de Planeación Municipal que el lote se encuentra libre de arriendos, invasiones, demandas, embargos y demás afectaciones que impidan la construcción del proyecto.\n36. Certificado de la Oficina de Planeación Municipal donde indique si el predio ha sido objeto o no de rellenos u otras acciones que puedan afectar la estabilidad del terreno.\n37. 28. Plan de sostenibilidad de la obra",
      },{
        key: "2",
        proyecto: "REQUISITOS MEJORAMIENTO DE VÍAS CON OBRAS COMPLEMENTARIAS",
        requisitos: "1. Carta de presentación:\na) Nombre completo del proyecto de inversión y código BPIN.\nb) Indicar si el proyecto se encuentra en Fase III o prefactibilidad.\nc) En caso que haya lugar a cofinanciación, especificar línea de inversión a la que corresponde el proyecto de inversión\n2. El Proyecto en Forato DVD, segun anexo de los requisitos especificos.\n3. Plano de localización de (las) área (s) propuesta (s) para la implantación del Proyecto\n4. Certificado disponibilidad servicios públicos-Acueducto, expedido por la empresa de servicios públicos. Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n5. Certificado disponibilidad servicios públicos- Alcantarillado, expedido por la empresa de servicios públicos.   Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n6. Certificado disponibilidad servicios públicos- Energía, expedido por la empresa de servicios públicos.    Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n7. Certificado disponibilidad servicios públicos- Aseo, expedido por la empresa de servicios públicos.\n8. Certificado disponibilidad servicios públicos- Gas, , expedido por la empresa de servicios públicos.  Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n9. Certificado de uso de suelo.\n10. Certificado que el POT permite uso para  el tipo de proyecto que se va a desarrollar.\n11. Certificado zona de riesgos.\n12. Concepto de afectación y/o reserva vial.\n13. Certificado de la autoridad ambiental.\n14. Certificado de la Oficina de Planeación Municipal  sobre Sitio o sitios del municipio en los que está autorizado el depósito de escombros.\n15. Certificado de la Oficina de Planeación Municipal  sobre Canteras del municipio autorizadas para extracción de materiales.\n16. Permiso de intervención\n17. Certificado de Disponibilidad Presupuestal y plan de sostenibilidad de la obra.\n18. Estudios Fase III\n19. Estudio de suelos.\n20. Estudio topográfico (m2 del predio). \n21. Diseño vial, estructural, de elementos no estructurales y urbanisticos.\n22. Memoria Descriptiva del alcance del proyecto\n23. Diseño hidraulico y electrico.\n25. Presupuesto detallado de referencia. (Este presupuesto será utilizado únicamente como referencia, pero no constituye el presupuesto contractual del proyecto)\n26. Cronograma de Actividades de la Obra.\n27. Memorias de Cantidades de Obra (tomado como producto de referencia).\n28. Consolidación de Especificaciones Técnicas conforme a lo solicitado en este proceso.\n29. Análisis de Precios Unitarios (Documentación utilizada como referencia y soporte del presupuesto)\n30. Plan de Manejo Ambiental, Plan de Contingencia y plan de manejo de tránsito.\n31. Gestión con Empresas de Servicios Públicos y obtención de permisos y licencias que permitan la construcción del proyecto.\n32. Carta de ofrecimiento del lote para el proyecto, suscrita por el alcalde municipal o el representante de la comunidad indígena o afrocolombiana.\n33. Certificación expedida por el Alcalde Municipal,  a través de la cual el municipio se compromete a gestionar y apropiar los recursos anuales requeridos para la operación y mantenimiento del proyecto.\n34. Certificación del Alcalde Municipal o representante de la comunidad en donde conste que el predio no ha sido propuesto ni hace parte de ningún proyecto diferente al del presente estudio.\n35. Certificado de la Oficina de Planeación Municipal que el lote se encuentra libre de arriendos, invasiones, demandas, embargos y demás afectaciones que impidan la construcción del proyecto.\n36. Certificado de la Oficina de Planeación Municipal donde indique si el predio ha sido objeto o no de rellenos u otras acciones que puedan afectar la estabilidad del terreno.\n37. 28. Plan de sostenibilidad de la obra"
    },{
        key: "3",
        proyecto: "REQUISITOS PAVIMENTACIÓN DE VÍAS URBANAS Y RURALES",
        requisitos: "1. Carta de presentación:\na) Nombre completo del proyecto de inversión y código BPIN.\nb) Indicar si el proyecto se encuentra en Fase III o prefactibilidad.\nc) En caso que haya lugar a cofinanciación, especificar línea de inversión a la que corresponde el proyecto de inversión\n2. El Proyecto en Forato DVD, segun anexo de los requisitos especificos.\n3. Plano de localización de (las) área (s) propuesta (s) para la implantación del Proyecto\n4. Certificado disponibilidad servicios públicos-Acueducto, expedido por la empresa de servicios públicos. Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n5. Certificado disponibilidad servicios públicos- Alcantarillado, expedido por la empresa de servicios públicos.   Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n6. Certificado disponibilidad servicios públicos- Energía, expedido por la empresa de servicios públicos.    Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n7. Certificado disponibilidad servicios públicos- Aseo, expedido por la empresa de servicios públicos.\n8. Certificado disponibilidad servicios públicos- Gas, , expedido por la empresa de servicios públicos.  Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n9. Certificado de uso de suelo.\n10. Certificado que el POT permite uso para  el tipo de proyecto que se va a desarrollar.\n11. Certificado zona de riesgos.\n12. Concepto de afectación y/o reserva vial.\n13. Certificado de la autoridad ambiental.\n14. Certificado de la Oficina de Planeación Municipal  sobre Sitio o sitios del municipio en los que está autorizado el depósito de escombros.\n15. Certificado de la Oficina de Planeación Municipal  sobre Canteras del municipio autorizadas para extracción de materiales.\n16. Permiso de intervención\n17. Certificado de Disponibilidad Presupuestal y plan de sostenibilidad de la obra.\n18. Estudios Fase III\n19. Estudio de suelos.\n20. Estudio topográfico (m2 del predio). \n21. Diseño vial, estructural, de elementos no estructurales y urbanisticos.\n22. Memoria Descriptiva del alcance del proyecto\n23. Diseño hidraulico y electrico.\n25. Presupuesto detallado de referencia. (Este presupuesto será utilizado únicamente como referencia, pero no constituye el presupuesto contractual del proyecto)\n26. Cronograma de Actividades de la Obra.\n27. Memorias de Cantidades de Obra (tomado como producto de referencia).\n28. Consolidación de Especificaciones Técnicas conforme a lo solicitado en este proceso.\n29. Análisis de Precios Unitarios (Documentación utilizada como referencia y soporte del presupuesto)\n30. Plan de Manejo Ambiental, Plan de Contingencia y plan de manejo de tránsito.\n31. Gestión con Empresas de Servicios Públicos y obtención de permisos y licencias que permitan la construcción del proyecto.\n32. Carta de ofrecimiento del lote para el proyecto, suscrita por el alcalde municipal o el representante de la comunidad indígena o afrocolombiana.\n33. Certificación expedida por el Alcalde Municipal,  a través de la cual el municipio se compromete a gestionar y apropiar los recursos anuales requeridos para la operación y mantenimiento del proyecto.\n34. Certificación del Alcalde Municipal o representante de la comunidad en donde conste que el predio no ha sido propuesto ni hace parte de ningún proyecto diferente al del presente estudio.\n35. Certificado de la Oficina de Planeación Municipal que el lote se encuentra libre de arriendos, invasiones, demandas, embargos y demás afectaciones que impidan la construcción del proyecto.\n36. Certificado de la Oficina de Planeación Municipal donde indique si el predio ha sido objeto o no de rellenos u otras acciones que puedan afectar la estabilidad del terreno.\n37. 28. Plan de sostenibilidad de la obra"
    },{
        key: "4",
        proyecto: "REQUISITOS SEÑALIZACIÓN VÍAL",
        requisitos: "1. Carta de presentación:\na) Nombre completo del proyecto de inversión y código BPIN.\nb) Indicar si el proyecto se encuentra en Fase III o prefactibilidad.\nc) En caso que haya lugar a cofinanciación, especificar línea de inversión a la que corresponde el proyecto de inversión\n2. El Proyecto en Forato DVD, segun anexo de los requisitos especificos.\n3. Plano de localización de (las) área (s) propuesta (s) para la implantación del Proyecto\n4. Certificado disponibilidad servicios públicos-Acueducto, expedido por la empresa de servicios públicos. Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n5. Certificado disponibilidad servicios públicos- Alcantarillado, expedido por la empresa de servicios públicos.   Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n6. Certificado disponibilidad servicios públicos- Energía, expedido por la empresa de servicios públicos.    Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n7. Certificado disponibilidad servicios públicos- Aseo, expedido por la empresa de servicios públicos.\n8. Certificado disponibilidad servicios públicos- Gas, , expedido por la empresa de servicios públicos.  Además en la misma se indique no es necesario realizar intervenciones en los próximos 5 años.\n9. Certificado de uso de suelo.\n10. Certificado que el POT permite uso para  el tipo de proyecto que se va a desarrollar.\n11. Certificado zona de riesgos.\n12. Concepto de afectación y/o reserva vial.\n13. Certificado de la autoridad ambiental.\n14. Certificado de la Oficina de Planeación Municipal  sobre Sitio o sitios del municipio en los que está autorizado el depósito de escombros.\n15. Certificado de la Oficina de Planeación Municipal  sobre Canteras del municipio autorizadas para extracción de materiales.\n16. Permiso de intervención\n17. Certificado de Disponibilidad Presupuestal y plan de sostenibilidad de la obra.\n18. Estudios Fase III\n19. Estudio de suelos.\n20. Estudio topográfico (m2 del predio). \n21. Diseño vial, estructural, de elementos no estructurales y urbanisticos.\n22. Memoria Descriptiva del alcance del proyecto\n23. Diseño hidraulico y electrico.\n25. Presupuesto detallado de referencia. (Este presupuesto será utilizado únicamente como referencia, pero no constituye el presupuesto contractual del proyecto)\n26. Cronograma de Actividades de la Obra.\n27. Memorias de Cantidades de Obra (tomado como producto de referencia).\n28. Consolidación de Especificaciones Técnicas conforme a lo solicitado en este proceso.\n29. Análisis de Precios Unitarios (Documentación utilizada como referencia y soporte del presupuesto)\n30. Plan de Manejo Ambiental, Plan de Contingencia y plan de manejo de tránsito.\n31. Gestión con Empresas de Servicios Públicos y obtención de permisos y licencias que permitan la construcción del proyecto.\n32. Carta de ofrecimiento del lote para el proyecto, suscrita por el alcalde municipal o el representante de la comunidad indígena o afrocolombiana.\n33. Certificación expedida por el Alcalde Municipal,  a través de la cual el municipio se compromete a gestionar y apropiar los recursos anuales requeridos para la operación y mantenimiento del proyecto.\n34. Certificación del Alcalde Municipal o representante de la comunidad en donde conste que el predio no ha sido propuesto ni hace parte de ningún proyecto diferente al del presente estudio.\n35. Certificado de la Oficina de Planeación Municipal que el lote se encuentra libre de arriendos, invasiones, demandas, embargos y demás afectaciones que impidan la construcción del proyecto.\n36. Certificado de la Oficina de Planeación Municipal donde indique si el predio ha sido objeto o no de rellenos u otras acciones que puedan afectar la estabilidad del terreno.\n37. 28. Plan de sostenibilidad de la obra"
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