import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
            proyecto: "REQUISITOS ESTABLECIMIENTOS EDUCATIVOS NUEVOS PARA LA JORNADA ÚNICA ESCOLAR",
            requisitos: "1. Licencia de funcionamiento o reconocimiento de carácter oficial del Establecimiento Educativo Estatal.\n2. Certificación del código del DANE del Establecimiento Educativo Estatal.\n3. Carta suscrita por el Representante Legal de la entidad territorial certificada en educación, o por el Secretario de Educación de ésta, expresamente facultado para realizar la postulación a la convocatoria, adjuntando el respectivo proyecto arquitectónico, donde obligatoriamente se desarrolle el ciclo desde el grado preescolar hasta 11º.\n4. Carta de la Secretaría de Educación de la entidad territorial certificada en educación en la que se certifique que cuenta con la planta docente y administrativa que prestará el servicio en la infraestructura por construir.\n5. Carta remisoria del proyecto suscrita por el Representante Legal de la entidad territorial certificada en educación, o por el Secretario de Educación de ésta, expresamente facultado para realizar la postulación en esta convocatoria, adjuntando los documentos descritos en la presente guía, (II. REQUISITOS DE LOS PROYECTOS PRESENTADOS).\n6. Certificado de Disponibilidad Presupuestal de los recursos de contrapartida para la ejecución del proyecto; o si la cofinanciación corresponde a obras complementarias a ejecutar dentro del establecimiento a beneficiar, la entidad territorial certificada en educación debe precisar y certificar dicha contratación suministrando los planos, presupuestos y/o documentos que brinden información clara sobre el proyecto a ejecutar con recursos de contrapartida\n7. Certificación suscrita por el representante de la entidad territorial certificada en educación en la que manifieste por escrito que el proyecto no se encuentra en proceso de licitación, contratado o en ejecución, ni que ha sido o se encuentra priorizado para ser financiado con fuentes de recursos diferentes a los provenientes de la Ley 21 de 1982 ante otras entidades estatales, privadas o de cooperación\n8. Certificado firmado por un ingeniero civil con matricula vigente donde conste que los estudios y diseños estructurales cumplen con la Norma Técnica Colombiana NSR 10,- Reglamento Colombiano de Normas Sismo Resistentes.\n9. Registro fotográfico para los proyectos de infraestructura en el que se aprecie el lote y los edificios existentes\n10. Licencia de construcción, si se cuenta con la misma)\n11. Acta de socialización del proyecto en la que conste que el rector del establecimiento educativo beneficiario conoce y acepta el proyecto con VoBo de la entidad territorial certificada en educación\n12. Estudio de suelos, cuando aplique.\n13. Plano de localización del proyecto dentro del lote indicando sus linderos, construcciones existentes, el norte y cuadro de áreas\n14. Levantamiento topográfico de terreno y elementos existentes: Planta (preferiblemente a escala 1:50), perfiles transversales y longitudinales, memorias y carteras topográficas.\n15. Diseño arquitectónico que tenga en cuenta la Norma Técnica Colombiana – NTC 4595 - Ingeniería civil y arquitectura, planeamiento y diseño de instalaciones y ambientes escolares.\n16. Planos de plantas arquitectónicas (preferiblemente a escala 1:50).\n17. Planos de fachadas (preferiblemente a escala 1:50).\n18. Planos de cortes transversales y longitudinales (preferiblemente a escala 1:50).\n19. Plano de planta de cubiertas (preferiblemente a escala 1:50)\n20. Detalles arquitectónicos (preferiblemente a escala 1:20).\n21. Render o perspectiva del proyecto exterior\n22. Especificaciones técnicas constructivas y particulares.\n23. Diseño estructural, incluyendo memorias\n24. Planos de cimentación.\n25. Planos de placa de contrapiso y pisos superiores\n26. Memorias de cálculo y especificaciones técnicas.\n27. Diseños hidráulicos y sanitarios\n28. Planos planta diseño hidráulico y memorias de cálculo\n29. Planos planta diseño sanitario y memorias de cálculo\n30. Diseño eléctrico, incluyendo diagramas.\n31. Planos de instalaciones eléctricas y memorias de cálculo\n32. Análisis de precios unitarios.",
        },{
            key: "2",
            proyecto: "REQUISITOS MEJORAMIENTO Y RECUPERACIÓN DE ESTABLECIMIENTOS EDUCATIVOS ",
            requisitos: "1. Licencia de funcionamiento o reconocimiento de carácter oficial del Establecimiento Educativo Estatal.\n2. Certificación del código del DANE del Establecimiento Educativo Estatal.\n3. Carta suscrita por el Representante Legal de la entidad territorial certificada en educación, o por el Secretario de Educación de ésta, expresamente facultado para realizar la postulación a la convocatoria, adjuntando el respectivo proyecto arquitectónico, donde obligatoriamente se desarrolle el ciclo desde el grado preescolar hasta 11º.\n4. Carta de la Secretaría de Educación de la entidad territorial certificada en educación en la que se certifique que cuenta con la planta docente y administrativa que prestará el servicio en la infraestructura por construir.\n5. Carta remisoria del proyecto suscrita por el Representante Legal de la entidad territorial certificada en educación, o por el Secretario de Educación de ésta, expresamente facultado para realizar la postulación en esta convocatoria, adjuntando los documentos descritos en la presente guía, (II. REQUISITOS DE LOS PROYECTOS PRESENTADOS).\n6. Certificado de Disponibilidad Presupuestal de los recursos de contrapartida para la ejecución del proyecto; o si la cofinanciación corresponde a obras complementarias a ejecutar dentro del establecimiento a beneficiar, la entidad territorial certificada en educación debe precisar y certificar dicha contratación suministrando los planos, presupuestos y/o documentos que brinden información clara sobre el proyecto a ejecutar con recursos de contrapartida\n7. Certificación suscrita por el representante de la entidad territorial certificada en educación en la que manifieste por escrito que el proyecto no se encuentra en proceso de licitación, contratado o en ejecución, ni que ha sido o se encuentra priorizado para ser financiado con fuentes de recursos diferentes a los provenientes de la Ley 21 de 1982 ante otras entidades estatales, privadas o de cooperación\n8. Certificado firmado por un ingeniero civil con matricula vigente donde conste que los estudios y diseños estructurales cumplen con la Norma Técnica Colombiana NSR 10,- Reglamento Colombiano de Normas Sismo Resistentes.\n9. Registro fotográfico para los proyectos de infraestructura en el que se aprecie el lote y los edificios existentes\n10. Licencia de construcción, si se cuenta con la misma)\n11. Acta de socialización del proyecto en la que conste que el rector del establecimiento educativo beneficiario conoce y acepta el proyecto con VoBo de la entidad territorial certificada en educación\n12. Estudio de suelos, cuando aplique.\n13. Plano de localización del proyecto dentro del lote indicando sus linderos, construcciones existentes, el norte y cuadro de áreas\n14. Levantamiento topográfico de terreno y elementos existentes: Planta (preferiblemente a escala 1:50), perfiles transversales y longitudinales, memorias y carteras topográficas.\n15. Diseño arquitectónico que tenga en cuenta la Norma Técnica Colombiana – NTC 4595 - Ingeniería civil y arquitectura, planeamiento y diseño de instalaciones y ambientes escolares.\n16. Planos de plantas arquitectónicas (preferiblemente a escala 1:50).\n17. Planos de fachadas (preferiblemente a escala 1:50).\n18. Planos de cortes transversales y longitudinales (preferiblemente a escala 1:50).\n19. Plano de planta de cubiertas (preferiblemente a escala 1:50)\n20. Detalles arquitectónicos (preferiblemente a escala 1:20).\n21. Render o perspectiva del proyecto exterior\n22. Especificaciones técnicas constructivas y particulares.\n23. Diseño estructural, incluyendo memorias\n24. Planos de cimentación.\n25. Planos de placa de contrapiso y pisos superiores\n26. Memorias de cálculo y especificaciones técnicas.\n27. Diseños hidráulicos y sanitarios\n28. Planos planta diseño hidráulico y memorias de cálculo\n29. Planos planta diseño sanitario y memorias de cálculo\n30. Diseño eléctrico, incluyendo diagramas.\n31. Planos de instalaciones eléctricas y memorias de cálculo\n32. Análisis de precios unitarios.",
        },{
            key: "3",
            proyecto: "REQUISITOS SANEMIENTO BÁSICO (APARATOS SANITARIOS, INSTALACIONES EN SEDES EDUCATIVAS)",
            requisitos: "1. Acto administrativo de reconocimiento oficial del Establecimiento Educativo\n2. Certificación del código del DANE del Establecimiento Educativo Estatal.\n3. Formulario diligenciado de postulación de la sede en la página web del MEN\n4. Certificado de libertad y tradición del predio con tiempo de expedición no mayor a un (1) mes antes de la fecha de radicación de la postulación, con copia de las escrituras públicas \n5. Si el predio donde se construirá el proyecto tiene destinación de uso público o está afecto a la prestación de un servicio público y se encuentra en posesión quieta, pacífica e ininterrumpida por más de cinco (5) años de un municipio, se podrá adjuntar la respectiva declaración de posesión de conformidad con el artículo 48 de la Ley 1551 de 2012. Adicionalmente, es indispensable para el cumplimiento de este requisito que la sana posesión esté legalizada ante registro público.\n6. Certificación suscrita por el representante del municipio en la que manifieste por escrito que el proyecto no se encuentra en proceso de licitación, contratado o en ejecución ni que ha sido o se encuentra priorizado para ser financiado con ninguna fuente de recursos diferentes ya sea derivados de Ley 21 de 1982 o de otras entidades estatales, privadas o de cooperación.\n7. Certificación de la entidad competente sobre uso del suelo, norma urbana aplicable y afectaciones, según POT o EOT\n8. Certificación del Alcalde Municipal donde conste que el predio no está invadido o en posesión de terceros\n9. Certificación de la ETC o la alcaldía que la sede postulada se encuentra en zona rural (Se verifica de acuerdo al reporte SIMAT) o acto administrativo de reconocimiento oficial donde se especifique que el estableciemiento se encuentra en zona rural.\n10. Certificación de la Entidad Territorial Certificada correspondiente donde manifieste su apoyo a los predios postulados por los Municipios en esta convocatoria",
        },{
            key: "4",
            proyecto: "REQUISITOS RECONSTRUCCIÓN DE ESTABLECIMIENTOS EDUCATIVOS PARA LA JORNADA ÚNICA ESCOLAR",
            requisitos: "1. Licencia de funcionamiento o reconocimiento de carácter oficial del Establecimiento Educativo Estatal.\n2. Certificación del código del DANE del Establecimiento Educativo Estatal.\n3. Carta suscrita por el Representante Legal de la entidad territorial certificada en educación, o por el Secretario de Educación de ésta, expresamente facultado para realizar la postulación a la convocatoria, adjuntando el respectivo proyecto arquitectónico, donde obligatoriamente se desarrolle el ciclo desde el grado preescolar hasta 11º.\n4. Carta de la Secretaría de Educación de la entidad territorial certificada en educación en la que se certifique que cuenta con la planta docente y administrativa que prestará el servicio en la infraestructura por construir.\n5. Carta remisoria del proyecto suscrita por el Representante Legal de la entidad territorial certificada en educación, o por el Secretario de Educación de ésta, expresamente facultado para realizar la postulación en esta convocatoria, adjuntando los documentos descritos en la presente guía, (II. REQUISITOS DE LOS PROYECTOS PRESENTADOS).\n6. Certificado de Disponibilidad Presupuestal de los recursos de contrapartida para la ejecución del proyecto; o si la cofinanciación corresponde a obras complementarias a ejecutar dentro del establecimiento a beneficiar, la entidad territorial certificada en educación debe precisar y certificar dicha contratación suministrando los planos, presupuestos y/o documentos que brinden información clara sobre el proyecto a ejecutar con recursos de contrapartida\n7. Certificación suscrita por el representante de la entidad territorial certificada en educación en la que manifieste por escrito que el proyecto no se encuentra en proceso de licitación, contratado o en ejecución, ni que ha sido o se encuentra priorizado para ser financiado con fuentes de recursos diferentes a los provenientes de la Ley 21 de 1982 ante otras entidades estatales, privadas o de cooperación\n8. Certificado firmado por un ingeniero civil con matricula vigente donde conste que los estudios y diseños estructurales cumplen con la Norma Técnica Colombiana NSR 10,- Reglamento Colombiano de Normas Sismo Resistentes.\n9. Registro fotográfico para los proyectos de infraestructura en el que se aprecie el lote y los edificios existentes\n10. Licencia de construcción, si se cuenta con la misma)\n11. Acta de socialización del proyecto en la que conste que el rector del establecimiento educativo beneficiario conoce y acepta el proyecto con VoBo de la entidad territorial certificada en educación\n12. Estudio de suelos, cuando aplique.\n13. Plano de localización del proyecto dentro del lote indicando sus linderos, construcciones existentes, el norte y cuadro de áreas\n14. Levantamiento topográfico de terreno y elementos existentes: Planta (preferiblemente a escala 1:50), perfiles transversales y longitudinales, memorias y carteras topográficas.\n15. Diseño arquitectónico que tenga en cuenta la Norma Técnica Colombiana – NTC 4595 - Ingeniería civil y arquitectura, planeamiento y diseño de instalaciones y ambientes escolares.\n16. Planos de plantas arquitectónicas (preferiblemente a escala 1:50).\n17. Planos de fachadas (preferiblemente a escala 1:50).\n18. Planos de cortes transversales y longitudinales (preferiblemente a escala 1:50).\n19. Plano de planta de cubiertas (preferiblemente a escala 1:50)\n20. Detalles arquitectónicos (preferiblemente a escala 1:20).\n21. Render o perspectiva del proyecto exterior\n22. Especificaciones técnicas constructivas y particulares.\n23. Diseño estructural, incluyendo memorias\n24. Planos de cimentación.\n25. Planos de placa de contrapiso y pisos superiores\n26. Memorias de cálculo y especificaciones técnicas.\n27. Diseños hidráulicos y sanitarios\n28. Planos planta diseño hidráulico y memorias de cálculo\n29. Planos planta diseño sanitario y memorias de cálculo\n30. Diseño eléctrico, incluyendo diagramas.\n31. Planos de instalaciones eléctricas y memorias de cálculo\n32. Análisis de precios unitarios.",
        },{
            key: "5",
            proyecto: "REQUISITOS MEJORAMIENTO, AMPLIACIÓN O RESTITUCIÓN DE AMBIENTES DE COMEDOR - COCINA",
            requisitos: "1. Acto administrativo de reconocimiento oficial del Establecimiento Educativo\n2. Certificación del código del DANE del Establecimiento Educativo Estatal.\n3. Formulario diligenciado de postulación de la sede en la página web del MEN\n4. Certificado de libertad y tradición del predio con tiempo de expedición no mayor a un (1) mes antes de la fecha de radicación de la postulación, con copia de las escrituras públicas \n5. Si el predio donde se construirá el proyecto tiene destinación de uso público o está afecto a la prestación de un servicio público y se encuentra en posesión quieta, pacífica e ininterrumpida por más de cinco (5) años de un municipio, se podrá adjuntar la respectiva declaración de posesión de conformidad con el artículo 48 de la Ley 1551 de 2012. Adicionalmente, es indispensable para el cumplimiento de este requisito que la sana posesión esté legalizada ante registro público.\n6. Certificación suscrita por el representante del municipio en la que manifieste por escrito que el proyecto no se encuentra en proceso de licitación, contratado o en ejecución ni que ha sido o se encuentra priorizado para ser financiado con ninguna fuente de recursos diferentes ya sea derivados de Ley 21 de 1982 o de otras entidades estatales, privadas o de cooperación.\n7. Certificación de la entidad competente sobre uso del suelo, norma urbana aplicable y afectaciones, según POT o EOT\n8. Certificación del Alcalde Municipal donde conste que el predio no está invadido o en posesión de terceros\n9. Certificación de la ETC o la alcaldía que la sede postulada se encuentra en zona rural (Se verifica de acuerdo al reporte SIMAT) o acto administrativo de reconocimiento oficial donde se especifique que el estableciemiento se encuentra en zona rural.\n10. Certificación de la Entidad Territorial Certificada correspondiente donde manifieste su apoyo a los predios postulados por los Municipios en esta convocatoria",
        },{
            key: "6",
            proyecto: "REQUISITOS AMPLIACIÓN Y ADECUACIÓN DE ESTABLECIMIENTOS EDUCATIVOS PARA JORNADA UNICA ESCOLAR",
            requisitos: "1. Licencia de funcionamiento o reconocimiento de carácter oficial del Establecimiento Educativo Estatal.\n2. Certificación del código del DANE del Establecimiento Educativo Estatal.\n3. Carta suscrita por el Representante Legal de la entidad territorial certificada en educación, o por el Secretario de Educación de ésta, expresamente facultado para realizar la postulación a la convocatoria, adjuntando el respectivo proyecto arquitectónico, donde obligatoriamente se desarrolle el ciclo desde el grado preescolar hasta 11º.\n4. Carta de la Secretaría de Educación de la entidad territorial certificada en educación en la que se certifique que cuenta con la planta docente y administrativa que prestará el servicio en la infraestructura por construir.\n5. Carta remisoria del proyecto suscrita por el Representante Legal de la entidad territorial certificada en educación, o por el Secretario de Educación de ésta, expresamente facultado para realizar la postulación en esta convocatoria, adjuntando los documentos descritos en la presente guía, (II. REQUISITOS DE LOS PROYECTOS PRESENTADOS).\n6. Certificado de Disponibilidad Presupuestal de los recursos de contrapartida para la ejecución del proyecto; o si la cofinanciación corresponde a obras complementarias a ejecutar dentro del establecimiento a beneficiar, la entidad territorial certificada en educación debe precisar y certificar dicha contratación suministrando los planos, presupuestos y/o documentos que brinden información clara sobre el proyecto a ejecutar con recursos de contrapartida\n7. Certificación suscrita por el representante de la entidad territorial certificada en educación en la que manifieste por escrito que el proyecto no se encuentra en proceso de licitación, contratado o en ejecución, ni que ha sido o se encuentra priorizado para ser financiado con fuentes de recursos diferentes a los provenientes de la Ley 21 de 1982 ante otras entidades estatales, privadas o de cooperación\n8. Certificado firmado por un ingeniero civil con matricula vigente donde conste que los estudios y diseños estructurales cumplen con la Norma Técnica Colombiana NSR 10,- Reglamento Colombiano de Normas Sismo Resistentes.\n9. Registro fotográfico para los proyectos de infraestructura en el que se aprecie el lote y los edificios existentes\n10. Licencia de construcción, si se cuenta con la misma)\n11. Acta de socialización del proyecto en la que conste que el rector del establecimiento educativo beneficiario conoce y acepta el proyecto con VoBo de la entidad territorial certificada en educación\n12. Estudio de suelos, cuando aplique.\n13. Plano de localización del proyecto dentro del lote indicando sus linderos, construcciones existentes, el norte y cuadro de áreas\n14. Levantamiento topográfico de terreno y elementos existentes: Planta (preferiblemente a escala 1:50), perfiles transversales y longitudinales, memorias y carteras topográficas.\n15. Diseño arquitectónico que tenga en cuenta la Norma Técnica Colombiana – NTC 4595 - Ingeniería civil y arquitectura, planeamiento y diseño de instalaciones y ambientes escolares.\n16. Planos de plantas arquitectónicas (preferiblemente a escala 1:50).\n17. Planos de fachadas (preferiblemente a escala 1:50).\n18. Planos de cortes transversales y longitudinales (preferiblemente a escala 1:50).\n19. Plano de planta de cubiertas (preferiblemente a escala 1:50)\n20. Detalles arquitectónicos (preferiblemente a escala 1:20).\n21. Render o perspectiva del proyecto exterior\n22. Especificaciones técnicas constructivas y particulares.\n23. Diseño estructural, incluyendo memorias\n24. Planos de cimentación.\n25. Planos de placa de contrapiso y pisos superiores\n26. Memorias de cálculo y especificaciones técnicas.\n27. Diseños hidráulicos y sanitarios\n28. Planos planta diseño hidráulico y memorias de cálculo\n29. Planos planta diseño sanitario y memorias de cálculo\n30. Diseño eléctrico, incluyendo diagramas.\n31. Planos de instalaciones eléctricas y memorias de cálculo\n32. Análisis de precios unitarios.",
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