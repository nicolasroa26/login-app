import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [
      {
        key: "1",
        proyecto: "CENTRO DE ACOPIO",
        requisitos: "1. Carta de presentación del proyecto firmada por el representante legal de la entidad que presenta el proyecto de inversión, la cual como como mínimo debe contener: nombre completo del proyecto, valor, fuentes de financiación, tiempo estimado de ejecución, población objetivo, empleos directos e indirectos generados y localización exacta de la obra. Para la actualización de proyectos se complementará con el certificado SPC, la justificación y demás requisitos \n2. Si la entidad que presenta el proyecto aporta recursos de cofinanciación, deberá adjuntar certificado suscrito por el representante legal de la misma, en el cual conste el compromiso de aportar los recursos correspondientes \n3. Proyecto formulado en la metodología general ajustada (MGA) adoptada para proyectos de inversión \n4. Certificado suscrito por el representante legal de laentidad que se presenta el proyecto, en el cual conste que las actividades que se pretenden financiar no están siendo financiadas con otras fuentes ni han sido financiadas con otras fuentes de recursos \n5. Certificación suscrita por el jefe de planeación o quien haga sus veces, donde conste que el proyecto se encuentra en concordancia con el plan de desarrollo de la entidad, indicando su estructura (eje estratégico, programa, subprograma, meta, etc) \n6. Certificación del jefe de planeación o quien haga sus veces, donde indique que el proyecto cumple con los lineamientos del POT; PBOT o EOT \n7. Certificación suscrita por el jefe de planeación o quien haga sus veces, donde conste que el proyecto no se encuentra localizado en zona que presente riesgo no mitigable \n8. Para todos los proyectos certificar que los predios donde se ejecutaran los proyectos cuentan con la infraestructura de servicios públicos disponibles e instalados como acueducto, alcantarillado pluvial y sanitario, gas natural, energía eléctrica, telefónica, etc., y se encuentran en buen estado. Además, que el proyecto no afectara las redes existentes, esta certificación debe venir firmada por el jefe de servicios públicos o quien haga sus veces en el municipio y el funcionario competente del operador de red respectivo \n9. Cuando no se intervengan estructuras existentes, se presentarán los chequeos técnicos pertinentes que garanticen la estabilidad y funcionalidad durante la vida útil proyectada, presentando la revisión de la capacidad hidráulica, estructural o funcional de las estructuras \n10. Certificación expedida por el funcionario competente donde se indique que el proyecto no esta siendo intervenido. En caso contrario se debe especificar que tipo de obras se llevan a cabo y con qué recursos se están ejecutando \n11. Certificación expedida por el representante legal de la entidad que presenta el proyecto, en la que conste los documentos, estudios, diseños y planos originales se encuentran debidamente firmados y reposan en la entidad correspondiente \n13. Certificado de libertad y tradición o filio de matrícula inmobiliaria con máximo tres meses de expedición a nombre del municipio, el Departamento o la Nación. y/o certificación expedida por el funcionario competente, en la que conste que se trata de espacio público debidamente legalizado en el POT / EOT \n14. Licencia de construcción acompañada de la certificación de planeación en la que conste que el lote es de uso de suelo institucional, disponibilidad de servicios públicos, que no se encuentra en zona de riesgo conforme con el POT/EOT. y/o permiso de intervención y ocupación de espacio público \n15. Certificación de planeación en la que conste que la matricula inmobiliaria presentada pertenece al predio donde se construirá el proyecto \n16. Certificación de planeación en la que conste que el predio donde se construirá no es objeto de otro proyecto distinto al presentado \n17. Certificación de planeación en la que se conste que el proyecto se encuentra incluido en el banco de proyectos municipal \n18. Certificación firmada por el alcalde en donde conste que el municipio se compromete a aportar los recursos financieros para realizar el mantenimiento y operación del proyecto \n19. Certificación de acuerdo a la ley, que el área donde está ubicado el proyecto no forma parte de una zona de reserva arqueológica o no cuenta con riesgo de hallazgos arqueológicos que impidan el adecuado desarrollo del mismo \n20. Plan de manejo ambiental, cuando el proyecto lo requiera. Expedición de licencias ambientales (decreto 1220 – 2005) (articulo 132 del decreto 2150 – 1995). Numeral 12 del articulo 25 de la Ley 80 de 1993, y posteriores. Y demás criterios ambientales que garanticen la adecuada ejecución del proyecto \n21. Diagnostico (REVISIÓN METODOLÓGICA) La información que soporta la MGA debe contener como mínimo: \n◉ Planteamiento del problema \n◉ Descripción de la situación existente \n◉ Análisis de participantes \n◉ Objetivos (generales y específicos) \n◉ Cronogramas de actividades (desde la suscripción del convenio hasta la liquidación del mismo) \n◉ Análisis técnico de la alternativa seleccionada\n22. Diagnóstico técnico (REVISIÓN TÉCNICA) \n◉ Localización exacta del proyecto. \n◉ Registro fotográfico a color con su respectiva descripción del sitio del proyecto. \n◉ Descripción de la necesidaddel proyecto \n23. Todos los proyectos deben tener como referencia la cartilla de precios del ICC, sin embargo, para los precios que no estén incluidos en la cartilla, se debe presentar para todos los ítems de obra el correspondiente análisis de precios unitarios con sus respectivos soportes. Toda esta documentación deberá estar firmada por el responsable que presenta el proyecto \n24. Memoria de calculo de todas las actividades propuestas en el presupuesto y sus especificaciones técnicas. Toda esta documentación deberá estar firmada por el responsable que presenta el proyecto \n25. Programación y/o cronograma de obra detallado por actividades; con el fin de establecer el plazo de ejecución, incluyendo los tiempos de contratación derivados \n26. Administración sugerida 25% \n27. Imprevistos sugeridos 3% \n28. Utilidad sugerida 5% \n29. Interventoría se sugiere el 10% del costo directo, sin embargo, se debe presentar el estudio de costo \n30. Estudio de suelos incluyendo registro fotográfico (firmado y avalado por el profesional responsable) \n31. Topografía incluyendo registro fotográfico (firmado y avalado por el profesional responsable) \n32. Diseños arquitectónicos completos, incluido urbanismo y espacio público (firmado y avalado por el profesional responsable) – deben contemplar las normas vigentes de accesibilidad asegurando espacios aptos para personas en condición de discapacidad o diversamente hábiles. (medidas de baños, puertas, rampas, giros de desplazamiento, eliminación de barreras, ubicación de graderías) adicional deben cumplir con todas las normas aplicables según el tipo de infraestructura educativa, deportiva, cultural, agropecuario, salud, etc \n33. Diseños estructurales, con el cumplimiento de las normas aplicables y en concordancia con los demás estudios presentados (estudio de suelos, topografía, arquitectura, firmado y avalado por el profesional responsable) \n34. Diseños eléctricos, iluminación, voz y datos (Aprobados por la empresa prestadora de servicios o certificación expedida por el señor alcalde en la cual se compromete realizar los trámites para viabilidad del servicio ante la empresa prestadora del servicio de energía CODENSA S.A – E.S.P; así como asumir los costos que se generen de las obras y certificaciones “RETIE y RETILAP” solicitadas por CODENSA para la energización del proyecto) \n35. Diseños hidrosanitarios y de gas con el cumplimiento de las normas aplicables (firmado y avalado por el profesional responsable, incluido suministro y conexiones con el sistema de alcantarillado desde la red existente ",
    },{
        key: "2",
        proyecto: "PLAZAS DE MERCADO",
        requisitos: "1. Carta de presentación del proyecto firmada por el representante legal de la entidad que presenta el proyecto de inversión, la cual como como mínimo debe contener: nombre completo del proyecto, valor, fuentes de financiación, tiempo estimado de ejecución, población objetivo, empleos directos e indirectos generados y localización exacta de la obra. Para la actualización de proyectos se complementará con el certificado SPC, la justificación y demás requisitos \n2. Si la entidad que presenta el proyecto aporta recursos de cofinanciación, deberá adjuntar certificado suscrito por el representante legal de la misma, en el cual conste el compromiso de aportar los recursos correspondientes \n3. Proyecto formulado en la metodología general ajustada (MGA) adoptada para proyectos de inversión \n4. Certificado suscrito por el representante legal de laentidad que se presenta el proyecto, en el cual conste que las actividades que se pretenden financiar no están siendo financiadas con otras fuentes ni han sido financiadas con otras fuentes de recursos \n5. Certificación suscrita por el jefe de planeación o quien haga sus veces, donde conste que el proyecto se encuentra en concordancia con el plan de desarrollo de la entidad, indicando su estructura (eje estratégico, programa, subprograma, meta, etc) \n6. Certificación del jefe de planeación o quien haga sus veces, donde indique que el proyecto cumple con los lineamientos del POT; PBOT o EOT \n7. Certificación suscrita por el jefe de planeación o quien haga sus veces, donde conste que el proyecto no se encuentra localizado en zona que presente riesgo no mitigable \n8. Para todos los proyectos certificar que los predios donde se ejecutaran los proyectos cuentan con la infraestructura de servicios públicos disponibles e instalados como acueducto, alcantarillado pluvial y sanitario, gas natural, energía eléctrica, telefónica, etc., y se encuentran en buen estado. Además, que el proyecto no afectara las redes existentes, esta certificación debe venir firmada por el jefe de servicios públicos o quien haga sus veces en el municipio y el funcionario competente del operador de red respectivo \n9. Cuando no se intervengan estructuras existentes, se presentarán los chequeos técnicos pertinentes que garanticen la estabilidad y funcionalidad durante la vida útil proyectada, presentando la revisión de la capacidad hidráulica, estructural o funcional de las estructuras \n10. Certificación expedida por el funcionario competente donde se indique que el proyecto no esta siendo intervenido. En caso contrario se debe especificar que tipo de obras se llevan a cabo y con qué recursos se están ejecutando \n11. Certificación expedida por el representante legal de la entidad que presenta el proyecto, en la que conste los documentos, estudios, diseños y planos originales se encuentran debidamente firmados y reposan en la entidad correspondiente \n13. Certificado de libertad y tradición o filio de matrícula inmobiliaria con máximo tres meses de expedición a nombre del municipio, el Departamento o la Nación. y/o certificación expedida por el funcionario competente, en la que conste que se trata de espacio público debidamente legalizado en el POT / EOT \n14. Licencia de construcción acompañada de la certificación de planeación en la que conste que el lote es de uso de suelo institucional, disponibilidad de servicios públicos, que no se encuentra en zona de riesgo conforme con el POT/EOT. y/o permiso de intervención y ocupación de espacio público \n15. Certificación de planeación en la que conste que la matricula inmobiliaria presentada pertenece al predio donde se construirá el proyecto \n16. Certificación de planeación en la que conste que el predio donde se construirá no es objeto de otro proyecto distinto al presentado \n17. Certificación de planeación en la que se conste que el proyecto se encuentra incluido en el banco de proyectos municipal \n18. Certificación firmada por el alcalde en donde conste que el municipio se compromete a aportar los recursos financieros para realizar el mantenimiento y operación del proyecto \n19. Certificación de acuerdo a la ley, que el área donde está ubicado el proyecto no forma parte de una zona de reserva arqueológica o no cuenta con riesgo de hallazgos arqueológicos que impidan el adecuado desarrollo del mismo \n20. Plan de manejo ambiental, cuando el proyecto lo requiera. Expedición de licencias ambientales (decreto 1220 – 2005) (articulo 132 del decreto 2150 – 1995). Numeral 12 del articulo 25 de la Ley 80 de 1993, y posteriores. Y demás criterios ambientales que garanticen la adecuada ejecución del proyecto \n21. Diagnostico (REVISIÓN METODOLÓGICA) La información que soporta la MGA debe contener como mínimo: \n◉ Planteamiento del problema \n◉ Descripción de la situación existente \n◉ Análisis de participantes \n◉ Objetivos (generales y específicos) \n◉ Cronogramas de actividades (desde la suscripción del convenio hasta la liquidación del mismo) \n◉ Análisis técnico de la alternativa seleccionada\n22. Diagnóstico técnico (REVISIÓN TÉCNICA) \n◉ Localización exacta del proyecto. \n◉ Registro fotográfico a color con su respectiva descripción del sitio del proyecto. \n◉ Descripción de la necesidaddel proyecto \n23. Todos los proyectos deben tener como referencia la cartilla de precios del ICC, sin embargo, para los precios que no estén incluidos en la cartilla, se debe presentar para todos los ítems de obra el correspondiente análisis de precios unitarios con sus respectivos soportes. Toda esta documentación deberá estar firmada por el responsable que presenta el proyecto \n24. Memoria de calculo de todas las actividades propuestas en el presupuesto y sus especificaciones técnicas. Toda esta documentación deberá estar firmada por el responsable que presenta el proyecto \n25. Programación y/o cronograma de obra detallado por actividades; con el fin de establecer el plazo de ejecución, incluyendo los tiempos de contratación derivados \n26. Administración sugerida 25% \n27. Imprevistos sugeridos 3% \n28. Utilidad sugerida 5% \n29. Interventoría se sugiere el 10% del costo directo, sin embargo, se debe presentar el estudio de costo \n30. Estudio de suelos incluyendo registro fotográfico (firmado y avalado por el profesional responsable) \n31. Topografía incluyendo registro fotográfico (firmado y avalado por el profesional responsable) \n32. Diseños arquitectónicos completos, incluido urbanismo y espacio público (firmado y avalado por el profesional responsable) – deben contemplar las normas vigentes de accesibilidad asegurando espacios aptos para personas en condición de discapacidad o diversamente hábiles. (medidas de baños, puertas, rampas, giros de desplazamiento, eliminación de barreras, ubicación de graderías) adicional deben cumplir con todas las normas aplicables según el tipo de infraestructura educativa, deportiva, cultural, agropecuario, salud, etc \n33. Diseños estructurales, con el cumplimiento de las normas aplicables y en concordancia con los demás estudios presentados (estudio de suelos, topografía, arquitectura, firmado y avalado por el profesional responsable) \n34. Diseños eléctricos, iluminación, voz y datos (Aprobados por la empresa prestadora de servicios o certificación expedida por el señor alcalde en la cual se compromete realizar los trámites para viabilidad del servicio ante la empresa prestadora del servicio de energía CODENSA S.A – E.S.P; así como asumir los costos que se generen de las obras y certificaciones “RETIE y RETILAP” solicitadas por CODENSA para la energización del proyecto) \n35. Diseños hidrosanitarios y de gas con el cumplimiento de las normas aplicables (firmado y avalado por el profesional responsable, incluido suministro y conexiones con el sistema de alcantarillado desde la red existente",
    },{
        key: "3",
        proyecto: "PLAZAS DE GANADO",
        requisitos: "1. Carta de presentación del proyecto firmada por el representante legal de la entidad que presenta el proyecto de inversión, la cual como como mínimo debe contener: nombre completo del proyecto, valor, fuentes de financiación, tiempo estimado de ejecución, población objetivo, empleos directos e indirectos generados y localización exacta de la obra. Para la actualización de proyectos se complementará con el certificado SPC, la justificación y demás requisitos \n2. Si la entidad que presenta el proyecto aporta recursos de cofinanciación, deberá adjuntar certificado suscrito por el representante legal de la misma, en el cual conste el compromiso de aportar los recursos correspondientes \n3. Proyecto formulado en la metodología general ajustada (MGA) adoptada para proyectos de inversión \n4. Certificado suscrito por el representante legal de laentidad que se presenta el proyecto, en el cual conste que las actividades que se pretenden financiar no están siendo financiadas con otras fuentes ni han sido financiadas con otras fuentes de recursos \n5. Certificación suscrita por el jefe de planeación o quien haga sus veces, donde conste que el proyecto se encuentra en concordancia con el plan de desarrollo de la entidad, indicando su estructura (eje estratégico, programa, subprograma, meta, etc) \n6. Certificación del jefe de planeación o quien haga sus veces, donde indique que el proyecto cumple con los lineamientos del POT; PBOT o EOT \n7. Certificación suscrita por el jefe de planeación o quien haga sus veces, donde conste que el proyecto no se encuentra localizado en zona que presente riesgo no mitigable \n8. Para todos los proyectos certificar que los predios donde se ejecutaran los proyectos cuentan con la infraestructura de servicios públicos disponibles e instalados como acueducto, alcantarillado pluvial y sanitario, gas natural, energía eléctrica, telefónica, etc., y se encuentran en buen estado. Además, que el proyecto no afectara las redes existentes, esta certificación debe venir firmada por el jefe de servicios públicos o quien haga sus veces en el municipio y el funcionario competente del operador de red respectivo \n9. Cuando no se intervengan estructuras existentes, se presentarán los chequeos técnicos pertinentes que garanticen la estabilidad y funcionalidad durante la vida útil proyectada, presentando la revisión de la capacidad hidráulica, estructural o funcional de las estructuras \n10. Certificación expedida por el funcionario competente donde se indique que el proyecto no esta siendo intervenido. En caso contrario se debe especificar que tipo de obras se llevan a cabo y con qué recursos se están ejecutando \n11. Certificación expedida por el representante legal de la entidad que presenta el proyecto, en la que conste los documentos, estudios, diseños y planos originales se encuentran debidamente firmados y reposan en la entidad correspondiente \n13. Certificado de libertad y tradición o filio de matrícula inmobiliaria con máximo tres meses de expedición a nombre del municipio, el Departamento o la Nación. y/o certificación expedida por el funcionario competente, en la que conste que se trata de espacio público debidamente legalizado en el POT / EOT \n14. Licencia de construcción acompañada de la certificación de planeación en la que conste que el lote es de uso de suelo institucional, disponibilidad de servicios públicos, que no se encuentra en zona de riesgo conforme con el POT/EOT. y/o permiso de intervención y ocupación de espacio público \n15. Certificación de planeación en la que conste que la matricula inmobiliaria presentada pertenece al predio donde se construirá el proyecto \n16. Certificación de planeación en la que conste que el predio donde se construirá no es objeto de otro proyecto distinto al presentado \n17. Certificación de planeación en la que se conste que el proyecto se encuentra incluido en el banco de proyectos municipal \n18. Certificación firmada por el alcalde en donde conste que el municipio se compromete a aportar los recursos financieros para realizar el mantenimiento y operación del proyecto \n19. Certificación de acuerdo a la ley, que el área donde está ubicado el proyecto no forma parte de una zona de reserva arqueológica o no cuenta con riesgo de hallazgos arqueológicos que impidan el adecuado desarrollo del mismo \n20. Plan de manejo ambiental, cuando el proyecto lo requiera. Expedición de licencias ambientales (decreto 1220 – 2005) (articulo 132 del decreto 2150 – 1995). Numeral 12 del articulo 25 de la Ley 80 de 1993, y posteriores. Y demás criterios ambientales que garanticen la adecuada ejecución del proyecto \n21. Diagnostico (REVISIÓN METODOLÓGICA) La información que soporta la MGA debe contener como mínimo: \n◉ Planteamiento del problema \n◉ Descripción de la situación existente \n◉ Análisis de participantes \n◉ Objetivos (generales y específicos) \n◉ Cronogramas de actividades (desde la suscripción del convenio hasta la liquidación del mismo) \n◉ Análisis técnico de la alternativa seleccionada\n22. Diagnóstico técnico (REVISIÓN TÉCNICA) \n◉ Localización exacta del proyecto. \n◉ Registro fotográfico a color con su respectiva descripción del sitio del proyecto. \n◉ Descripción de la necesidaddel proyecto \n23. Todos los proyectos deben tener como referencia la cartilla de precios del ICC, sin embargo, para los precios que no estén incluidos en la cartilla, se debe presentar para todos los ítems de obra el correspondiente análisis de precios unitarios con sus respectivos soportes. Toda esta documentación deberá estar firmada por el responsable que presenta el proyecto \n24. Memoria de calculo de todas las actividades propuestas en el presupuesto y sus especificaciones técnicas. Toda esta documentación deberá estar firmada por el responsable que presenta el proyecto \n25. Programación y/o cronograma de obra detallado por actividades; con el fin de establecer el plazo de ejecución, incluyendo los tiempos de contratación derivados \n26. Administración sugerida 25% \n27. Imprevistos sugeridos 3% \n28. Utilidad sugerida 5% \n29. Interventoría se sugiere el 10% del costo directo, sin embargo, se debe presentar el estudio de costo \n30. Estudio de suelos incluyendo registro fotográfico (firmado y avalado por el profesional responsable) \n31. Topografía incluyendo registro fotográfico (firmado y avalado por el profesional responsable) \n32. Diseños arquitectónicos completos, incluido urbanismo y espacio público (firmado y avalado por el profesional responsable) – deben contemplar las normas vigentes de accesibilidad asegurando espacios aptos para personas en condición de discapacidad o diversamente hábiles. (medidas de baños, puertas, rampas, giros de desplazamiento, eliminación de barreras, ubicación de graderías) adicional deben cumplir con todas las normas aplicables según el tipo de infraestructura educativa, deportiva, cultural, agropecuario, salud, etc \n33. Diseños estructurales, con el cumplimiento de las normas aplicables y en concordancia con los demás estudios presentados (estudio de suelos, topografía, arquitectura, firmado y avalado por el profesional responsable) \n34. Diseños eléctricos, iluminación, voz y datos (Aprobados por la empresa prestadora de servicios o certificación expedida por el señor alcalde en la cual se compromete realizar los trámites para viabilidad del servicio ante la empresa prestadora del servicio de energía CODENSA S.A – E.S.P; así como asumir los costos que se generen de las obras y certificaciones “RETIE y RETILAP” solicitadas por CODENSA para la energización del proyecto) \n35. Diseños hidrosanitarios y de gas con el cumplimiento de las normas aplicables (firmado y avalado por el profesional responsable, incluido suministro y conexiones con el sistema de alcantarillado desde la red existente",
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
            <View style = {{ flex: 1, paddingTop: Constants.statusBarHeight, backgroundColor: "#3280e4", }}>
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
    backgroundColor: '#6e68df',
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