import React, { Component } from 'react';
import { View, Dimensions, TouchableOpacity, TextInput, ScrollView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class CStecno extends Component {
    state = {
        educacion:[
            {
                key: "1",
                nombre:"CAPACIDAD INSTITUCIONAL PARA GARANTIZAR EL DERECHO A LA PARTICIPACIÓN CIUDADANA",
                EDUCACION:null,
                ALIMENTACION:null,
                INVERSION:null,
                DESTINACION:null,
                PROPIOS:null,
                NACION:null,
                DEPARTAMENTO:null,
                LEY:null,
                TRANSPORTE:null
            },
            {
                key: "2",
                nombre:"FORTALECIMIENTO DE LA CAPACIDAD INSTITUCIONAL PARA LA PROMOCION DE LA PARTICIPACIÓN CIUDADANA",
                EDUCACION:null,
                ALIMENTACION:null,
                INVERSION:null,
                DESTINACION:null,
                PROPIOS:null,
                NACION:null,
                DEPARTAMENTO:null,
                LEY:null,
                TRANSPORTE:null
            }
        ],
        isModalVisible: false,
        selectedTask: null,
        productoTask: null
    };

    render() {
        const {
            state: {
                educacion,
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
                      <ScrollView style={{overflowY: "scroll", height: 650, width: "auto"}}>
                        <View style={styles.taskContainer}>
                            <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                            S.G.P LIBRE INVERSION
                            </Text>
                            <TextInput keyboardType={"numeric"} placeholderTextColor="#000000" maxLength={10} style={styles.cuadrostext}/>
                            <View style={{ flexDirection: 'row' }}/>
                            <View>
                                <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                                S.G.P LIBRE DESTINACION
                                </Text>
                                <TextInput keyboardType={"numeric"} placeholderTextColor="#000000" maxLength={10} style={styles.cuadrostext}/>
                            </View>
                            <View>
                                <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                                PROPIOS LIBRE DESTINACION
                                </Text>
                                <TextInput keyboardType={"numeric"} placeholderTextColor="#000000" maxLength={10} style={styles.cuadrostext}/>
                            </View>
                            <View>
                                <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                                COFINANCIACION NACION
                                </Text>
                                <TextInput keyboardType={"numeric"} placeholderTextColor="#000000" maxLength={10} style={styles.cuadrostext}/>
                            </View>
                            <View>
                                <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                                COFINANCIACION DEPARTAMENTO
                                </Text>
                                <TextInput keyboardType={"numeric"} placeholderTextColor="#000000" maxLength={10} style={styles.cuadrostext}/>
                            </View>
                            <View>
                                <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                                LEY 99
                                </Text>
                                <TextInput keyboardType={"numeric"} placeholderTextColor="#000000" maxLength={10} style={styles.cuadrostext}/>
                            </View>
                            <View>
                                <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                                TRANSPORTE DE HIDROCARBUROS
                                </Text>
                                <TextInput keyboardType={"numeric"} placeholderTextColor="#000000" maxLength={10} style={styles.cuadrostext}/>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}/>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({
                                    isModalVisible: !isModalVisible,
                                    });
                                }}
                                style={styles.updateButton}
                                >
                                    <Text
                                        style={{
                                        fontSize: 18,
                                        textAlign: 'center',
                                        color: '#fff',
                                        }}
                                    >
                                        GUARDAR
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={() => {
                                    this.setState({
                                    isModalVisible: !isModalVisible,
                                    });
                                }}
                                style={styles.deleteButton}
                                >
                                    <Text
                                        style={{
                                        fontSize: 18,
                                        textAlign: 'center',
                                        color: '#fff',
                                        }}
                                    >
                                        CERRAR
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View></ScrollView>
                    </Task>
            )}
            <View style = {{ flex: 1, paddingTop: Constants.statusBarHeight, backgroundColor: "#3280e4" }}>
              <ScrollView>
                <View style = {{ marginBottom:30 }}>
                  {educacion.map(item => (
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
                          <Text style={{ color: '#7c7f7f', fontSize: 13, fontWeight: '700' }}>
                            {item.nombre}
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
  cuadrostext:{
    height: 40,
    borderColor: "#6e68df",
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth:.5
  },
  backButton: {
    backgroundColor: '#2E66E7',
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
  deleteButton: {
    backgroundColor: '#f47373',
    width: 120,
    height: 40,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 5,
    justifyContent: 'center',
  },
  updateButton: {
    backgroundColor: '#2E66E7',
    width: 120,
    height: 40,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 5,
    justifyContent: 'center',
    marginRight: 20,
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