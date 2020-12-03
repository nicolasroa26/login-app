import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../../data/Context';
import { Task } from '../../../../components/Task';

export default class ICCU extends Component {
  state = {
    todoList: [{
        key: "1",
            proyecto: "REQUISITOS REDUCCIÓN DEL IMPACTO AMBIENTAL NEGATIVO",
            requisitos: "1. Estar legalmente constituida. Una copia actualizada del certificado de Cámara de Comercio que dé razón de la existencia de la organización de base comunitaria, o documento equivalente . En el caso que el postulante no cuente con un certificado de existencia y representación legal expedido por una Cámara de Comercio, deberá allegar el certificado de existencia y representación legal emitido por la Entidad competente o el documento jurídico con el cual se crea la persona jurídica, con fecha no mayor a un (1) mes calendario previo a la fecha de postulación a la presente convocatoria.\n2. Diligenciar el formulario de postulación de experiencias en la página web acienciacierta.minciencias.gov.co. \n3. Adjuntar en el Anexo 1 el formulario de postulación, en el que se evidencie que los miembros de la comunidad están de acuerdo en participar en este programa y en la que se nombre a sus representantes / interlocutores. (Anexo 1. Acta de aprobación de los miembros de la organización de base comunitaria para la participación en el A Ciencia Cierta, Desarrollo Local para transformar realidades) y designación de representantes / interlocutores, debidamente diligenciado y firmado por los miembros de la organización de base comunitaria)\n4. Se aceptarán únicamente las experiencias que se presenten a través del formulario en línea con toda la información solicitada en estas bases de concurso.",
        },{
            key: "2",
            proyecto: "REQUISITOS VINCULOS PARA EL DESARROLLO SOSTENIBLE",
            requisitos: "1. Estar legalmente constituida. Una copia actualizada del certificado de Cámara de Comercio que dé razón de la existencia de la organización de base comunitaria, o documento equivalente . En el caso que el postulante no cuente con un certificado de existencia y representación legal expedido por una Cámara de Comercio, deberá allegar el certificado de existencia y representación legal emitido por la Entidad competente o el documento jurídico con el cual se crea la persona jurídica, con fecha no mayor a un (1) mes calendario previo a la fecha de postulación a la presente convocatoria.\n2. Diligenciar el formulario de postulación de experiencias en la página web acienciacierta.minciencias.gov.co. \n3. Adjuntar en el Anexo 1 el formulario de postulación, en el que se evidencie que los miembros de la comunidad están de acuerdo en participar en este programa y en la que se nombre a sus representantes / interlocutores. (Anexo 1. Acta de aprobación de los miembros de la organización de base comunitaria para la participación en el A Ciencia Cierta, Desarrollo Local para transformar realidades) y designación de representantes / interlocutores, debidamente diligenciado y firmado por los miembros de la organización de base comunitaria)\n4. Se aceptarán únicamente las experiencias que se presenten a través del formulario en línea con toda la información solicitada en estas bases de concurso.",
        },{
            key: "3",
            proyecto: "REQUISITOS GESTIÓN INTEGRAL DE RIESGOS Y DESASTRES	",
            requisitos: "1. Estar legalmente constituida. Una copia actualizada del certificado de Cámara de Comercio que dé razón de la existencia de la organización de base comunitaria, o documento equivalente . En el caso que el postulante no cuente con un certificado de existencia y representación legal expedido por una Cámara de Comercio, deberá allegar el certificado de existencia y representación legal emitido por la Entidad competente o el documento jurídico con el cual se crea la persona jurídica, con fecha no mayor a un (1) mes calendario previo a la fecha de postulación a la presente convocatoria.\n2. Diligenciar el formulario de postulación de experiencias en la página web acienciacierta.minciencias.gov.co. \n3. Adjuntar en el Anexo 1 el formulario de postulación, en el que se evidencie que los miembros de la comunidad están de acuerdo en participar en este programa y en la que se nombre a sus representantes / interlocutores. (Anexo 1. Acta de aprobación de los miembros de la organización de base comunitaria para la participación en el A Ciencia Cierta, Desarrollo Local para transformar realidades) y designación de representantes / interlocutores, debidamente diligenciado y firmado por los miembros de la organización de base comunitaria)\n4. Se aceptarán únicamente las experiencias que se presenten a través del formulario en línea con toda la información solicitada en estas bases de concurso.",
        },{
            key: "4",
            proyecto: "REQUISITOS REDUCCIÓN DE PÉRDIDA Y DESPERDICIO DE ALIMENTOS",
            requisitos: "1. Estar legalmente constituida. Una copia actualizada del certificado de Cámara de Comercio que dé razón de la existencia de la organización de base comunitaria, o documento equivalente . En el caso que el postulante no cuente con un certificado de existencia y representación legal expedido por una Cámara de Comercio, deberá allegar el certificado de existencia y representación legal emitido por la Entidad competente o el documento jurídico con el cual se crea la persona jurídica, con fecha no mayor a un (1) mes calendario previo a la fecha de postulación a la presente convocatoria.\n2. Diligenciar el formulario de postulación de experiencias en la página web acienciacierta.minciencias.gov.co. \n3. Adjuntar en el Anexo 1 el formulario de postulación, en el que se evidencie que los miembros de la comunidad están de acuerdo en participar en este programa y en la que se nombre a sus representantes / interlocutores. (Anexo 1. Acta de aprobación de los miembros de la organización de base comunitaria para la participación en el A Ciencia Cierta, Desarrollo Local para transformar realidades) y designación de representantes / interlocutores, debidamente diligenciado y firmado por los miembros de la organización de base comunitaria)\n4. Se aceptarán únicamente las experiencias que se presenten a través del formulario en línea con toda la información solicitada en estas bases de concurso.",
        },{
            key: "5",
            proyecto: "REQUISITOS CULTURA Y TURISMO SOSTENIBLE",
            requisitos: "1. Estar legalmente constituida. Una copia actualizada del certificado de Cámara de Comercio que dé razón de la existencia de la organización de base comunitaria, o documento equivalente . En el caso que el postulante no cuente con un certificado de existencia y representación legal expedido por una Cámara de Comercio, deberá allegar el certificado de existencia y representación legal emitido por la Entidad competente o el documento jurídico con el cual se crea la persona jurídica, con fecha no mayor a un (1) mes calendario previo a la fecha de postulación a la presente convocatoria.\n2. Diligenciar el formulario de postulación de experiencias en la página web acienciacierta.minciencias.gov.co. \n3. Adjuntar en el Anexo 1 el formulario de postulación, en el que se evidencie que los miembros de la comunidad están de acuerdo en participar en este programa y en la que se nombre a sus representantes / interlocutores. (Anexo 1. Acta de aprobación de los miembros de la organización de base comunitaria para la participación en el A Ciencia Cierta, Desarrollo Local para transformar realidades) y designación de representantes / interlocutores, debidamente diligenciado y firmado por los miembros de la organización de base comunitaria)\n4. Se aceptarán únicamente las experiencias que se presenten a través del formulario en línea con toda la información solicitada en estas bases de concurso.",
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