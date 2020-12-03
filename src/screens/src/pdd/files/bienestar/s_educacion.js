import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class Educación extends Component {
  state = {
    BV1blist: [{
      key: "1",
      metab: "Aumentar el pilar (Salud) del índice Departamental de Competitividad.",
      indicadorb: "Puntaje en el pilar 5 (Salud), del Índice departamental de Competitividad",
      resultadob: "5,80"
    }],
    BV2blist: [{
      key: "2",
      metab: "Aumentar el puntaje en el pilar 7 (Educación superior y capacitación), del índice Departamental de Competitividad.",
      indicadorb: "Puntaje en el pilar 7 (Educación superior y capacitación), del Índice departamental de Competitividad",
      resultadob: "4,50"
    }],
    BV3blist: [{
      key: "3",
      metab: "Aumentar la variable (calidad de los docentes de colegios oficiales) del índice de competitividad departamental.",
      indicadorb: "Variable de calidad de los docentes de colegios oficiales del Índice de competitividad departamental",
      resultadob: "85,00%"
    }],
    BV1plist: [{
      key: "4",
      metap: "Beneficiar al 100% de las IED de los municipios no certificados  en salubridad, seguridad y servicios públicos.",
      indicadorp:"IED beneficiadas en salubridad, seguridad y servicios públicos",
      resultadop:"100%"
    }],
    BV2plist: [{
      key: "5",
      metap: "Mantener la prestación del servicio de educación superior de la entidad educativa pública estatal de nivel territorial.",
      indicadorp:"Entidad educativa con servicio",
      resultadop:"1"
    }],
    BV3plist: [{
      key: "6",
      metap: "Actualizar a 6.000 directivos y docentes de las IED en conocimientos disciplinares, prácticas pedagógicas, competencias socio emocionales",
      indicadorp:"Directivos docentes y docentes actualizados ",
      resultadop:"6.000"
    },{
      key: "7",
      metap: "Implementar la “Escuela de Rectores” de la Secretaría de Educación.",
      indicadorp:"Escuela de rectores implementada ",
      resultadop:"1"
    },{
      key: "8",
      metap: "Beneficiar al 100% de los docentes, directivos docentes y administrativos de las IED de los municipios no certificados, con el  plan de bienestar y de incentivos.",
      indicadorp:"Docentes, directivos docentes y administrativos  beneficiados ",
      resultadop:"100%"
    }],
    TUVc1blist: [{
      key: "9",
      metab: "Disminuir las IED ubicadas en las categorías C y D en las pruebas SABER.",
      indicadorb:"Porcentaje de IED ubicadas en las categorías C y D en las pruebas SABER.",
      resultadob:"38,00%"
    }],
    TUVc2blist: [{
      key: "10",
      metab: "Incrementar la cobertura bruta en transición.",
      indicadorb:"Tasa de Cobertura Bruta",
      resultadob:"82,40%"
    }],
    TUVc3blist: [{
      key: "11",
      metab: "Mantener la cobertura bruta total del grado escolar transición a grado 11.",
      indicadorb:"Tasa de Cobertura Bruta",
      resultadob:"98,00%"
    }],
    TUVc1plist: [{
      key: "12",
      metap: "Renovar el 100%  de los PEI de las IED de los municipios no certificados de Cundinamarca",
      indicadorp:"Porcentaje de PEI renovado",
      resultadop:"100%"
    },{
      key: "13",
      metap: "Beneficiar el 100%  IED de los municipios no certificados con las estrategias para consolidar los proyectos pedagógicos en PEGR y PRAES",
      indicadorp:"IED beneficiadas",
      resultadop:"275"
    },{
      key: "14",
      metap: "Beneficiar a 40.000 estudiantes con estrategias de carácter pedagógico, deportivo y cultural",
      indicadorp:"Estudiantes benef8ciados",
      resultadop:"40.000"
    },{
      key: "15",
      metap: "Implementar el plan de educación rural",
      indicadorp:"Plan de educación rural implementado",
      resultadop:"1"
    },{
      key: "16",
      metap: "Atualizar en el 100% de IED de los municipios no certificados del departamento los manuales y comités de convivencia escolar",
      indicadorp:"Instituciones educativas con manual de convivencia actualizado y con seguimiento",
      resultadop:"100%"
    },{
      key: "17",
      metap: "Potencializar las 9 instituciones educativas normales superiores con acompañamiento financiero, academico, directivo y administrativo",
      indicadorp:"Escuelas Normales atendidas ",
      resultadop:"9"
    },{
      key: "18",
      metap: "Implementar en 161 Instituciones Educativas del departamento la estrategia “Escuela de Familia”. ",
      indicadorp:"Instituciones educativas con escuelas de familia implementadas ",
      resultadop:"161"
    },{
      key: "19",
      metap: "Formular un plan decenal de educación 2023-2032 (Cundinamarca progresa transformando vidas)",
      indicadorp:"Plan Decenal de Educación 2023-2032 Formulado",
      resultadop:"1"
    },{
      key: "20",
      metap: "Dotar con infraestructura tecnológica a 411 sedes priorizando las IED rurales de los municipios no certificados",
      indicadorp:"Sedes Dotadas",
      resultadop:"1.660  - 411 Nuevas"
    },{
      key: "21",
      metap: "Garantizar anualmente el servicio de internet a 1.400 sedes educativas  priorizando las sedes rurales",
      indicadorp:"Sedes beneficiadas con servicio de internet",
      resultadop:"1.400"
    },{
      key: "22",
      metap: "Dotar con emisoras a 120 instituciones educativas",
      indicadorp:"IED dotadas con emisoras escolares",
      resultadop:"100"
    },{
      key: "23",
      metap: "Mantener en las 230 IED la jornada única",
      indicadorp:"Instituciones Educativas con jornada única mantenida",
      resultadop:"230"
    },{
      key: "24",
      metap: "Entrenar al 100% de los estudiantes de los grados once de las IED, priorizados según los resultados de las pruebas SABER",
      indicadorp:"Estudiantes entrenados",
      resultadop:"50,00%"
    },{
      key: "25",
      metap: "Implementar estrategias de bilingüismo en el 100%  de las IED de los municipios no certificados del departamento",
      indicadorp:"Instituciones con la estrategia implementada",
      resultadop:"275"
    }],
    TUVc2plist: [{
      key: "26",
      metap: "Brindar atención integral en educación inicial a 5.000 niños de las IED de los municipios no certificados",
      indicadorp:"Niños  de educación inicial beneficiados con atención integral ",
      resultadop:"5.000"
    },{
      key: "27",
      metap: "Brindar atención integral en educación inicial a 4.000 menores de 5 años en zonas urbanas, rurales y rurales dispersas de los municipios no certificados",
      indicadorp:"Menores de 5 años con atención integral",
      resultadop:"4.000"
    }],
    TUVc3plist: [{
      key: "28",
      metap: "Brindar a 200.000 niños, niñas y adolescentes matriculados en las IED la alimentación escolar",
      indicadorp:"Número de niños, niñas y adolescentes beneficiados con alimentación escolar",
      resultadop:"200.000"
    },{
      key: "29",
      metap: "Beneficiar a 52.000 estudiantes con subsidio de transporte escolar o alojamiento",
      indicadorp:"Número de estudiantes beneficiados con transporte escolar o alojamiento",
      resultadop:"52.000"
    },{
      key: "30",
      metap: "Beneficiar a 1.097 sedes educativas con elementos para ambientes de aprendizaje, priorizando las sedes rurales",
      indicadorp:"Sedes educativas con elementos para ambientes de aprendizaje",
      resultadop:"1.097"
    },{
      key: "31",
      metap: "Contruir 14 colegio5s en el departamento",
      indicadorp:"Megacolegios construidos",
      resultadop:"17"
    },{
      key: "32",
      metap: "Intervenir 400 ambientes de instalaciones escolares, priorizando la infraestructura rural y las instituciones de jornada unica",
      indicadorp:"Instituciones intervenidas",
      resultadop:"43"
    },{
      key: "33",
      metap: "Mejorar 176 comedores escolares y cocinas para la ampliación de jornada única en zonas rurales",
      indicadorp:"Comedores y cocinas escolares mejorados",
      resultadop:"176"
    },{
      key: "34",
      metap: "Embellecer 900 sedes educativas de los municipios no certificados",
      indicadorp:"Sedes educativas embellecidas",
      resultadop:"800",
    },{
      key: "35",
      metap: "Actualizar el  Plan de Infraestructura Educativa Departamental",
      indicadorp:"Plan de infraestructura actualizado",
      resultadop:"1"
    },{
      key: "36",
      metap: "Garantizar en el 100% de las IED de los municipios no certificados la atención de la prestación del servicio educativo",
      indicadorp:"Porcentaje de IED con servicio educativo garantizado ",
      resultadop:"100%"
    }],
    TUVeblist: [{
      key: "37",
      metab: "Implementar la política pública de envejecimiento y vejez.",
      indicadorb:"Ejecución del plan de implementación de la política publica de envejecimiento y vejez",
      resultadob:"45,00%"
    }],
    TUVeplist: [{
      key: "38",
      metap: "Mantener la operación de las 200 IED con educación para adultos por ciclos en jornada nocturna y fines de semana",
      indicadorp:"IED en operación",
      resultadop:"200"
    },{
      key: "39",
      metap: "Garantizar anualmente el pago del 100% de la nómina de pensionados y sustitutos del magisterio",
      indicadorp:"nómina de pensionados y sustitutos del magisterio pagada",
      resultadop:"100%"
    }],
    TUVjblist: [{
      key: "40",
      metab: "Aumentar la tasa de transición a educación superior.",
      indicadorb:"Tasa de transición a educación superior",
      resultadob:"48,00%"
    }],
    TUVjplist: [{
      key: "41",
      metap: "Articular 200 instituciones educativas con el SENA para ofrecer una educación pertinente con el contexto.",
      indicadorp:"Número de IED articuladas",
      resultadop:"200"
    },{
      key: "42",
      metap: "Articular 40 instituciones educativas con instituciones de educación superior para el fortalecimiento a las competencias básicas y certificación de saberes.",
      indicadorp:"Número IED articuladas",
      resultadop:"40"
    },{
      key: "43",
      metap: "Otorgar 20.000  beneficios  de acceso y permanencia para la educación superior.",
      indicadorp:"Número de beneficios",
      resultadop:"20.000"
    },{
      key: "44",
      metap: "Brindar orientación vocacional a 4.000 estudiantes de las IED de los municipios no certificados y con más baja tasa de transición a educación superior.",
      indicadorp:"Número de estudiantes con orientación vocacional",
      resultadop:"4.000"
    }],
    CIblist: [{
      key: "45",
      metab: "Alcanzar el 100% de cobertura con programas sociales dirigidos a la población en situación de discapacidad.",
      indicadorb:"Cobertura con programas sociales dirigidos a la población en situación de discapacidad",
      resultadob:"100%"
    }],
    CIplist: [{
      key: "46",
      metap: "Implementar en  el 100% de las IED no certificados. Estrategias de  educación inclusiva que garantice el acceso y la permanencia de la población",
      indicadorp:"IED con estrategias de educación inclusiva implementada",
      resultadop:"100%"
    }],
    isModalVisible: false,
    selectedTask: null,
    productoTask: null
  };

  render() {
    const {
      state: {
        BV1blist,
        BV2blist,
        BV3blist,
        BV1plist,
        BV2plist,
        BV3plist,
        TUVc1blist,
        TUVc2blist,
        TUVc3blist,
        TUVc1plist,
        TUVc2plist,
        TUVc3plist,
        TUVeblist,
        TUVeplist,
        TUVjblist,
        TUVjplist,
        CIblist,
        CIplist,
        isModalVisible,
        productoTask,
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
                    Meta de Bienestar
                  </Text>
                  <Text style={styles.title}>
                    {selectedTask.metab}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                  </View>
                  <View style={styles.notesContent} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Indicador de Bienestar
                    </Text>
                    <Text style={styles.title}>
                      {selectedTask.indicadorb}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Resultado esperado a 2024
                    </Text>
                    <Text style={styles.title}>
                    {selectedTask.resultadob}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          selectedTask:null,
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
            {productoTask !== null && (
              <Task isModalVisible={isModalVisible}>
                <View style={styles.taskContainer}>
                  <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                    Meta de producto:
                  </Text>
                  <Text style={styles.title}>
                    {productoTask.metap}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                  </View>
                  <View style={styles.notesContent} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Indicador de producto
                    </Text>
                    <Text style={styles.title}>
                      {productoTask.indicadorp}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                      Resultado esperado a 2024
                    </Text>
                    <Text style={styles.title}>
                    {productoTask.resultadop}
                    </Text>
                  </View>
                  <View style={styles.sepeerator} />
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          productoTask:null,
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
              <ScrollView style = {styles.subcontainer}>
                <View style = {{ marginBottom:30 }}>
                  <Text style={{ color: '#9CAAC4', marginLeft:10 ,fontSize: 16, fontWeight: '600' }}>
                    Programa:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, }}>
                  Un buen vivir
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Entornos para la felicidad
				  </Text>
          <View style={styles.sepeerator1}/>
                  <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de bienestar:
                  </Text>
                  {BV1blist.map(item => (
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
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metab}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                    <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de producto:
                    </Text>
                    {BV1plist.map(item => (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          productoTask: item,
                          isModalVisible: true,
                        });
                    }}
                    key={item.key}
                    style={styles.taskListContent}
                    >
                      <View style={{ marginLeft: 13 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metap}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                </View>
                <View style = {{ backgroundColor: '#ffffff', marginBottom:30 }}>
                  <Text style={{ color: '#9CAAC4', marginLeft:10 ,fontSize: 16, fontWeight: '600' }}>
                    Programa:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, }}>
                  Un buen vivir
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Entornos para la felicidad
				  </Text>
          <View style={styles.sepeerator1}/>
                  <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de bienestar:
                  </Text>
                  {BV2blist.map(item => (
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
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metab}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                    <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de producto:
                    </Text>
                    {BV2plist.map(item => (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          productoTask: item,
                          isModalVisible: true,
                        });
                    }}
                    key={item.key}
                    style={styles.taskListContent}
                    >
                      <View style={{ marginLeft: 13 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metap}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                </View>
                <View style = {{ backgroundColor: '#ffffff', marginBottom:30 }}>
                  <Text style={{ color: '#9CAAC4', marginLeft:10 ,fontSize: 16, fontWeight: '600' }}>
                    Programa:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, }}>
                  Un buen vivir
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Entornos para la felicidad
				  </Text>
          <View style={styles.sepeerator1}/>
                  <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de bienestar:
                  </Text>
                  {BV3blist.map(item => (
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
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metab}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                    <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de producto:
                    </Text>
                    {BV3plist.map(item => (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          productoTask: item,
                          isModalVisible: true,
                        });
                    }}
                    key={item.key}
                    style={styles.taskListContent}
                    >
                      <View style={{ marginLeft: 13 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metap}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                </View>
                <View style = {{ backgroundColor: '#ffffff', marginBottom:30 }}>
                  <Text style={{ color: '#9CAAC4', marginLeft:10 ,fontSize: 16, fontWeight: '600' }}>
                    Programa:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, }}>
                  Toda una vida contigo
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Construyendo futuro
				  </Text>
          <View style={styles.sepeerator1}/>
                  <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de bienestar:
                  </Text>
                  {TUVc1blist.map(item => (
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
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metab}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                    <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de producto:
                    </Text>
                    {TUVc1plist.map(item => (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          productoTask: item,
                          isModalVisible: true,
                        });
                    }}
                    key={item.key}
                    style={styles.taskListContent}
                    >
                      <View style={{ marginLeft: 13 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metap}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                </View>
                <View style = {{ backgroundColor: '#ffffff', marginBottom:30 }}>
                  <Text style={{ color: '#9CAAC4', marginLeft:10 ,fontSize: 16, fontWeight: '600' }}>
                    Programa:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, }}>
                  Toda una vida contigo
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Construyendo futuro
				  </Text>
          <View style={styles.sepeerator1}/>
                  <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de bienestar:
                  </Text>
                  {TUVc2blist.map(item => (
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
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metab}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                    <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de producto:
                    </Text>
                    {TUVc2plist.map(item => (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          productoTask: item,
                          isModalVisible: true,
                        });
                    }}
                    key={item.key}
                    style={styles.taskListContent}
                    >
                      <View style={{ marginLeft: 13 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metap}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                </View>
                <View style = {{ backgroundColor: '#ffffff', marginBottom:30 }}>
                  <Text style={{ color: '#9CAAC4', marginLeft:10 ,fontSize: 16, fontWeight: '600' }}>
                    Programa:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, }}>
                  Toda una vida contigo
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Construyendo futuro
				  </Text>
          <View style={styles.sepeerator1}/>
                  <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de bienestar:
                  </Text>
                  {TUVc3blist.map(item => (
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
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metab}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                    <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de producto:
                    </Text>
                    {TUVc3plist.map(item => (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          productoTask: item,
                          isModalVisible: true,
                        });
                    }}
                    key={item.key}
                    style={styles.taskListContent}
                    >
                      <View style={{ marginLeft: 13 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metap}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                </View>
                <View style = {{ backgroundColor: '#ffffff', marginBottom:30 }}>
                  <Text style={{ color: '#9CAAC4', marginLeft:10 ,fontSize: 16, fontWeight: '600' }}>
                    Programa:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, }}>
                  Toda una vida contigo
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Experiencia y Sabiduría
				  </Text>
          <View style={styles.sepeerator1}/>
                  <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de bienestar:
                  </Text>
                  {TUVeblist.map(item => (
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
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metab}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                    <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de producto:
                    </Text>
                    {TUVeplist.map(item => (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          productoTask: item,
                          isModalVisible: true,
                        });
                    }}
                    key={item.key}
                    style={styles.taskListContent}
                    >
                      <View style={{ marginLeft: 13 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metap}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                </View>
                <View style = {{ backgroundColor: '#ffffff', marginBottom:30 }}>
                  <Text style={{ color: '#9CAAC4', marginLeft:10 ,fontSize: 16, fontWeight: '600' }}>
                    Programa:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, }}>
                  Toda una vida contigo
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Jóvenes, fuerza del progreso
				  </Text>
          <View style={styles.sepeerator1}/>
                  <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de bienestar:
                  </Text>
                  {TUVjblist.map(item => (
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
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metab}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                    <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de producto:
                    </Text>
                    {TUVjplist.map(item => (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          productoTask: item,
                          isModalVisible: true,
                        });
                    }}
                    key={item.key}
                    style={styles.taskListContent}
                    >
                      <View style={{ marginLeft: 13 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metap}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                </View>
                <View style = {{ backgroundColor: '#ffffff', marginBottom:30 }}>
                  <Text style={{ color: '#9CAAC4', marginLeft:10 ,fontSize: 16, fontWeight: '600' }}>
                    Programa:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, }}>
                  Cundinamarqueses inquebrantables
                  </Text>
                  <View style={styles.sepeerator1}/>
                  <Text style={{ color: '#9CAAC4', marginLeft:10, fontSize: 16, fontWeight: '600' }}>
                    Subprograma:
                  </Text>
                  <Text style={{ fontSize: 16, marginHorizontal: 8, marginBottom: 8}}>
                  Cundinamarca accesible
				  </Text>
          <View style={styles.sepeerator1}/>
                  <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de bienestar:
                  </Text>
                  {CIblist.map(item => (
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
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metab}
                          </Text>
                        </View>
                        <View>
                          <View style={{ flexDirection: 'row', marginLeft: 20 }} />
                        </View>
                      </View>
                    </TouchableOpacity>
                    ))}
                    <Text style = {{color: '#9CAAC4', marginLeft:10, fontSize:16, fontWeight: '600'}}>
                    Meta de producto:
                    </Text>
                    {CIplist.map(item => (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({
                          productoTask: item,
                          isModalVisible: true,
                        });
                    }}
                    key={item.key}
                    style={styles.taskListContent}
                    >
                      <View style={{ marginLeft: 13 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={{ color: '#554A4C', fontSize: 13, fontWeight: '700' }}>
                            {item.metap}
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
    width: Dimensions.get('window').width - 70,
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
    backgroundColor: '#18eac2',
    width: 100,
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
  subcontainer:{
    marginHorizontal: 25,
    marginVertical: 25,
    width:310,
    borderRadius: 20,
    backgroundColor: "#ffffff"
  },
  sepeerator1: {
    height: 1,
    marginTop:3,
    width: '95%',
    backgroundColor: '#3280e4',
    alignSelf: 'center',
  },
});