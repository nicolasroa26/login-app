import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Picker, Dimensions, ScrollView, TextInput, Keyboard, Switch, StyleSheet, Alert } from 'react-native';
import moment from 'moment';
import * as Calendar from 'expo-calendar';
import * as Localization from 'expo-localization';
import Constants from 'expo-constants';
import uuid from 'uuid';
import { Context } from '../../../data/Context';

const { width: vw } = Dimensions.get('window');
// moment().format('YYYY/MM/DD')

const styles = StyleSheet.create({
  createTaskButton: {
    width: 252,
    height: 48,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 5,
    justifyContent: 'center',
  },
  seperator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#979797',
    alignSelf: 'center',
    marginVertical: 20,
  },
  notes: {
    color: '#9CAAC4',
    fontSize: 16,
    fontWeight: '600',
  },
  notesContent: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#979797',
    alignSelf: 'center',
    marginVertical: 20,
  },
  title: {
    height: 25,
    borderColor: '#5DD976',
    borderLeftWidth: 1,
    paddingLeft: 8,
    fontSize: 19,
  },
  taskContainer: {
    width: 327,
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: '#2E66E7', 
    backgroundColor: '#ffffff',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 20,
    shadowOpacity: 0.2,
    elevation: 5,
    padding: 22,
  },
  newTask: {
    alignSelf: 'center',
    fontSize: 20,
    width: 120,
    height: 25,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#3280e4',
  },
});

export default class CreateTask extends Component {
  state = {
    selectedDay: {
      [`${moment().format('YYYY')}-${moment().format('MM')}-${moment().format(
        'DD'
      )}`]: {
        selected: true,
        selectedColor: '#2E66E7',
      },
    },
    currentDay: moment().format(),
    typeContrat: '',
    taskText: '',
    notesText: '',
    modalidadText: '',
    valorText:'',
    tiempoText:'',
    fechaText:'',
    nombreText:'',
    lineaText:'',
    sectorText:'',
    programaText:'',
    metaText:'',
    bpinText:'',
    proyectoText:'',
    futText:'',
    fuentesText:'',
    keyboardHeight: 0,
    visibleHeight: Dimensions.get('window').height,
    isAlarmSet: false,
    alarmTime: moment().format(),
    isDateTimePickerVisible: false,
    timeType: '',
    creatTodo: {},
    createEventAsyncRes: '',
  };

  UNSAFE_componentWillMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      this._keyboardDidHide
    );
  }

  UNSAFE_componentWillUnmount() {
    Keyboard.removeListener('keyboardDidShow', this._keyboardDidShow);
    Keyboard.removeListener('keyboardDidHide', this._keyboardDidHide);
  }

  _keyboardDidShow = e => {
    this.setState({
      keyboardHeight: e.endCoordinates.height,
      visibleHeight:
        Dimensions.get('window').height - e.endCoordinates.height - 30,
    });
  };

  _keyboardDidHide = () => {
    this.setState({
      visibleHeight: Dimensions.get('window').height,
    });
  };

  handleAlarmSet = () => {
    const { isAlarmSet } = this.state;
    this.setState({
      isAlarmSet: !isAlarmSet,
    });
  };

  synchronizeCalendar = async value => {
    const { navigation } = this.props;
    const { createNewCalendar } = navigation.state.params;
    const calendarId = await createNewCalendar();
    try {
      const createEventAsyncRes = await this._addEventsToCalendar(calendarId);
      this.setState(
        {
          createEventAsyncRes,
        },
        () => {
          this._handleCreateEventData(value);
        }
      );
    } catch (e) {
      Alert.alert(e.message);
    }
  };

  _addEventsToCalendar = async calendarId => {
    const {typeContrat, taskText, notesText, alarmTime, modalidadText, valorText, tiempoText, fechaText, nombreText, lineaText, sectorText, programaText, metaText, bpinText, proyectoText, futText, fuentesText } = this.state;
    const event = {
      type: typeContrat,
      title: taskText,
      notes: notesText,
      modalidad: modalidadText,
      valor: valorText,
      tiempo: tiempoText,
      fecha: fechaText,
      nombre: nombreText,
      linea: lineaText,
      sector: sectorText,
      programa: programaText,
      meta: metaText,
      bpin: bpinText,
      proyecto: proyectoText,
      fut: futText,
      fuentes: fuentesText,
      startDate: moment(alarmTime)
        .add(0, 'm')
        .toDate(),
      endDate: moment(alarmTime)
        .add(5, 'm')
        .toDate(),
      timeZone: Localization.timezone,
    };

    try {
      const createEventAsyncRes = await Calendar.createEventAsync(
        calendarId.toString(),
        event
      );

      return createEventAsyncRes;
    } catch (error) {
      console.log(error);
    }
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleCreateEventData = async value => {
    const {
      state: {
        currentDay,
        typeContrat,
        taskText,
        notesText,
        modalidadText,
        valorText,
        tiempoText,
        fechaText,
        nombreText,
        lineaText,
        sectorText,
        programaText,
        metaText,
        bpinText,
        proyectoText,
        futText,
        fuentesText,
        isAlarmSet,
        alarmTime,
        createEventAsyncRes,
      },
      props: { navigation },
    } = this;
    const { updateCurrentTask, currentDate } = navigation.state.params;
    const creatTodo = {
      key: uuid(),
      date: `${moment(currentDay).format('YYYY')}-${moment(currentDay).format(
        'MM'
      )}-${moment(currentDay).format('DD')}`,
      todoList: [
        {
          key: uuid(),
          type: typeContrat,
          title: taskText,
          notes: notesText,
          modalidad: modalidadText,
          valor: valorText,
          tiempo: tiempoText,
          fecha: fechaText,
          nombre: nombreText,
          linea: lineaText,
          sector: sectorText,
          programa: programaText,
          meta: metaText,
          bpin: bpinText,
          proyecto: proyectoText,
          fut: futText,
          fuentes: fuentesText,
          alarm: {
            time: alarmTime,
            isOn: isAlarmSet,
            createEventAsyncRes,
          },
          color: `rgb(${Math.floor(
            Math.random() * Math.floor(256)
          )},${Math.floor(Math.random() * Math.floor(256))},${Math.floor(
            Math.random() * Math.floor(256)
          )})`,
        },
      ],
      markedDot: {
        date: currentDay,
        dots: [
          {
            key: uuid(),
            color: '#2E66E7',
            selectedDotColor: '#2E66E7',
          },
        ],
      },
    };

    await value.updateTodoServicios(creatTodo);
    await updateCurrentTask(currentDate);
    navigation.navigate('CServicios');
  };

  _handleDatePicked = date => {
    const { currentDay } = this.state;
    const selectedDatePicked = currentDay;
    const hour = moment(date).hour();
    const minute = moment(date).minute();
    const newModifiedDay = moment(selectedDatePicked)
      .hour(hour)
      .minute(minute);

    this.setState({
      alarmTime: newModifiedDay,
    });

    this._hideDateTimePicker();
  };

  render() {
    const {
      state: {
        selectedDay,
        currentDay,
        typeContrat,
        taskText,
        modalidadText,
        visibleHeight,
        notesText,
        valorText,
        tiempoText,
        fechaText,
        nombreText,
        lineaText,
        sectorText,
        programaText,
        metaText,
        bpinText,
        proyectoText,
        futText,
        fuentesText,
        isAlarmSet,
        alarmTime,
        isDateTimePickerVisible,
      },
      props: { navigation },
    } = this;

    return (
      <Context.Consumer>
        {value => (
          <>
            <View style={styles.container}>
              <View
                style={{
                  height: visibleHeight,
                }}
              >
                <ScrollView
                  contentContainerStyle={{
                    paddingBottom: 250,
                  }}
                >
                  <View style={styles.taskContainer}>
                    <Text style={styles.notes}>Numero de Contrato</Text>
                    <TextInput
                      style={styles.title}
                      keyboardType={"numeric"}
                      onChangeText={text => this.setState({ taskText: text })}
                      value={taskText}
                      placeholder="Numero de Contrato"
                    />
                    <View style={styles.notesContent} />
                    <View>
                    <Text style={styles.notes}>Tipo de Contrato</Text>
                    <Picker
                      selectedValue={typeContrat}
                      style={{ height: 45, width: '100%'}}
                      onValueChange={(itemValue, itemIndex) =>
                        this.setState({typeContrat: itemValue})}
                    >
                      <Picker.Item label="Prestacion de Servicios" value="Prestacion de Servicios" />
                      <Picker.Item label="Obra" value="Obra" />
                      <Picker.Item label="Suministros" value="Suministros" />
                      <Picker.Item label="Consultoria" value="Consultoria" />
                      <Picker.Item label="Covenio" value="Covenio" />
                    </Picker>
                    </View>
                    <View style={styles.seperator} />
                    <View>
                      <Text style={styles.notes}>Objeto del Contrato</Text>
                      <TextInput
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        keyboardType={"default"}
                        onChangeText={text =>
                          this.setState({ notesText: text })
                        }
                        value={notesText}
                        placeholder="Objeto del Contrato"
                      />
                    </View>
                    <View style={styles.seperator} />
                    <View>
                      <Text style={styles.notes}>Modalidad de Seleccion</Text>
                      <TextInput
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        keyboardType={"default"}
                        onChangeText={text =>
                          this.setState({ modalidadText: text })
                        }
                        value={modalidadText}
                        placeholder="Modalidad de Seleccion"
                      />
                    </View>
                    <View style={styles.seperator} />
                    <View>
                      <Text style={styles.notes}>Valor del Contrato</Text>
                      <TextInput
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        keyboardType={"numeric"}
                        onChangeText={text =>
                          this.setState({ valorText: text })
                        }
                        value={valorText}
                        placeholder="Valor del Contrato"
                      />
                    </View>
                    <View style={styles.seperator} />
                    <View>
                      <Text style={styles.notes}>Tiempo de Ejecucion</Text>
                      <TextInput
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        keyboardType={"default"}
                        onChangeText={text =>
                          this.setState({ tiempoText: text })
                        }
                        value={tiempoText}
                        placeholder="Tiempo de Ejecucion"
                      />
                    </View>
                    <View style={styles.seperator} />
                    <View>
                      <Text style={styles.notes}>Fecha Acta de Inicio</Text>
                      <TextInput
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        keyboardType={"default"}
                        onChangeText={text =>
                          this.setState({ fechaText: text })
                        }
                        value={fechaText}
                        placeholder="Fecha Acta de Inicio"
                      />
                    </View>
                    <View style={styles.seperator} />
                    <View>
                      <Text style={styles.notes}>Nombre del Contratista o Razon Social</Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text =>
                          this.setState({ nombreText: text })
                        }
                        value={nombreText}
                        placeholder="Nombre del Contratista o Razon Social"
                      />
                    </View>
                    <View style={styles.seperator} />
                    <View>
                      <Text style={styles.notes}>Linea Estrategica del P.D.M</Text>
                      <TextInput
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        keyboardType={"default"}
                        onChangeText={text =>
                          this.setState({ lineaText: text })
                        }
                        value={lineaText}
                        placeholder="Linea Estrategica del P.D.M"
                      />
                    </View>
                    <View style={styles.seperator} />
                    <View>
                      <Text style={styles.notes}>Sector del P.D.M</Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text =>
                          this.setState({ sectorText: text })
                        }
                        value={sectorText}
                        placeholder="Sector del P.D.M"
                      />
                    </View>
                    <View style={styles.seperator} />
                    <View>
                      <Text style={styles.notes}>Programa del Sector del P.D.M</Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text =>
                          this.setState({ programaText: text })
                        }
                        value={programaText}
                        placeholder="Programa del Sector del P.D.M"
                      />
                    </View>
                    <View style={styles.seperator} />
                    <View>
                      <Text style={styles.notes}>Meta de Producto</Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text =>
                          this.setState({ metaText: text })
                        }
                        value={metaText}
                        placeholder="Meta de Producto"
                      />
                    </View>
                    <View style={styles.seperator} />
                    <View>
                      <Text style={styles.notes}>Codigo BPIN</Text>
                      <TextInput
                      keyboardType={"numeric"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text =>
                          this.setState({ bpinText: text })
                        }
                        value={bpinText}
                        placeholder="Codigo BPIN"
                      />
                    </View>
                    <View style={styles.seperator} />
                    <View>
                      <Text style={styles.notes}>Nombre del Proyecto</Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text =>
                          this.setState({ proyectoText: text })
                        }
                        value={proyectoText}
                        placeholder="Nombre del Proyecto"
                      />
                    </View>
                    <View style={styles.seperator} />
                    <View>
                      <Text style={styles.notes}>Sector del Fut</Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text =>
                          this.setState({ futText: text })
                        }
                        value={futText}
                        placeholder="Sector del Fut"
                      />
                    </View>
                    <View style={styles.seperator} />
                    <View>
                      <Text style={styles.notes}>Fuentes de Financiacion</Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text =>
                          this.setState({ fuentesText: text })
                        }
                        value={fuentesText}
                        placeholder="Fuentes de Financiacion"
                      />
                    </View>
                  </View>
                  <TouchableOpacity
                    disabled={taskText === ''}
                    style={[
                      styles.createTaskButton,
                      {
                        backgroundColor: 
                          taskText === ''
                            ? '#18eac2'
                            : '#18eac2',
                      },
                    ]}
                    onPress={async () => {
                      if (isAlarmSet) {
                        await this.synchronizeCalendar(value);
                      }
                      if (!isAlarmSet) {
                        this._handleCreateEventData(value);
                      }
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        textAlign: 'center',
                        color: '#fff',
                      }}
                    >
                      Añadir Contrato
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          </>
        )}
      </Context.Consumer>
    );
  }
}
