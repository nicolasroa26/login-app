import React, { Component } from 'react';
import { View, Image, Picker, TouchableOpacity, AsyncStorage, ScrollView, Text, Dimensions, TextInput, StyleSheet, Alert, Platform } from 'react-native';
import moment from 'moment';
import * as Calendar from 'expo-calendar';
import * as Localization from 'expo-localization';
import Constants from 'expo-constants';
import { Context } from '../../../data/Context';
import { Task } from '../../../components/Task';

export default class Home extends Component {
  state = {
    datesWhitelist: [
      {
        start: moment(),
        end: moment().add(365, 'days'), // total 4 days enabled
      },
    ],
    todoList: [],
    markedDate: [],
    currentDate: `${moment().format('YYYY')}-${moment().format(
      'MM'
    )}-${moment().format('DD')}`,
    isModalVisible: false,
    selectedTask: null,
    isDateTimePickerVisible: false,
  };

  UNSAFE_componentWillMount() {
    this._handleDeletePreviousDayTask();
  }

  _handleDeletePreviousDayTask = async () => {
    const { currentDate } = this.state;
    try {
      const value = await AsyncStorage.getItem('TODOSERVICIOS');

      if (value !== null) {
        const todoList = JSON.parse(value);
        const todayDate = `${moment().format('YYYY')}-${moment().format(
          'MM'
        )}-${moment().format('DD')}`;
        const checkDate = moment(todayDate);
        await todoList.filter(item => {
          const currDate = moment(item.date);
          const checkedDate = checkDate.diff(currDate, 'days');
          if (checkedDate > 0) {
            item.todoList.forEach(async listValue => {
              try {
                await Calendar.deleteEventAsync(
                  listValue.alarm.createEventAsyncRes.toString()
                );
              } catch (error) {
                console.log(error);
              }
            });
            return false;
          }
          return true;
        });

        // await AsyncStorage.setItem('TODO', JSON.stringify(updatedList));
        this._updateCurrentTask(currentDate);
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  _handleModalVisible = () => {
    const { isModalVisible } = this.state;
    this.setState({
      isModalVisible: !isModalVisible,
    });
  };

  _updateCurrentTask = async currentDate => {
    try {
      const value = await AsyncStorage.getItem('TODOSERVICIOS');
      if (value !== null) {
        const todoList = JSON.parse(value);
        const markDot = todoList.map(item => item.markedDot);
        const todoLists = todoList.filter(item => {
          if (currentDate === item.date) {
            return true;
          }
          return false;
        });
        if (todoLists.length !== 0) {
          this.setState({
            markedDate: markDot,
            todoList: todoLists[0].todoList,
          });
        } else {
          this.setState({
            markedDate: markDot,
            todoList: [],
          });
        }
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = date => {
    const { selectedTask } = this.state;
    const prevSelectedTask = { ...selectedTask };
    const selectedDatePicked = prevSelectedTask.alarm.time;
    const hour = moment(date).hour();
    const minute = moment(date).minute();
    const newModifiedDay = moment(selectedDatePicked)
      .hour(hour)
      .minute(minute);

    prevSelectedTask.alarm.time = newModifiedDay;
    this.setState({
      selectedTask: prevSelectedTask,
    });

    this._hideDateTimePicker();
  };

  handleAlarmSet = () => {
    const { selectedTask } = this.state;
    const prevSelectedTask = { ...selectedTask };
    prevSelectedTask.alarm.isOn = !prevSelectedTask.alarm.isOn;
    this.setState({
      selectedTask: prevSelectedTask,
    });
  };

  _updateAlarm = async () => {
    const { selectedTask } = this.state;
    const calendarId = await this._createNewCalendar();
    const event = {
      type: selectedTask.type,
      title: selectedTask.title,
      notes: selectedTask.notes,
      modalidad: selectedTask.modalidad,
      valor: selectedTask.valor,
      tiempo: selectedTask.tiempo,
      fecha: selectedTask.fecha,
      nombre: selectedTask.nombre,
      linea: selectedTask.linea,
      sector: selectedTask.sector,
      programa: selectedTask.programa,
      meta: selectedTask.meta,
      bpin: selectedTask.bpin,
      proyecto: selectedTask.proyecto,
      fut: selectedTask.fut,
      fuentes: selectedTask.fuentes,
      startDate: moment(selectedTask.alarm.time)
        .add(0, 'm')
        .toDate(),
      endDate: moment(selectedTask.alarm.time)
        .add(5, 'm')
        .toDate(),
      timeZone: Localization.timezone,
    };

    if (selectedTask.alarm.createEventAsyncRes === '') {
      try {
        const createEventAsyncRes = await Calendar.createEventAsync(
          calendarId.toString(),
          event
        );
        const updateTask = { ...selectedTask };
        updateTask.alarm.createEventAsyncRes = createEventAsyncRes;
        this.setState({
          selectedTask: updateTask,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await Calendar.updateEventAsync(
          selectedTask.alarm.createEventAsyncRes.toString(),
          event
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  _deleteAlarm = async () => {
    const { selectedTask } = this.state;
    console.log(selectedTask.alarm);

    try {
      await Calendar.deleteEventAsync(selectedTask.alarm.createEventAsyncRes);

      const updateTask = { ...selectedTask };
      updateTask.alarm.createEventAsyncRes = '';
      this.setState({
        selectedTask: updateTask,
      });
    } catch (error) {
      console.log(error);
    }
  };

  _getEvent = async () => {
    const { selectedTask } = this.state;

    if (selectedTask.alarm.createEventAsyncRes) {
      try {
        await Calendar.getEventAsync(
          selectedTask.alarm.createEventAsyncRes.toString()
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  _findCalendars = async () => {
    const calendars = await Calendar.getCalendarsAsync();

    return calendars;
  };

  _createNewCalendar = async () => {
    const calendars = await this._findCalendars();
    const newCalendar = {
      title: '',
      entityType: Calendar.EntityTypes.EVENT,
      color: '#2196F3',
      sourceId:
        Platform.OS === 'ios'
          ? calendars.find(cal => cal.source && cal.source.name === 'Default')
              .source.id
          : undefined,
      source:
        Platform.OS === 'android'
          ? {
              name: calendars.find(
                cal => cal.accessLevel === Calendar.CalendarAccessLevel.OWNER
              ).source.name,
              isLocalAccount: true,
            }
          : undefined,
      name: '',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
      ownerAccount:
        Platform.OS === 'android'
          ? calendars.find(
              cal => cal.accessLevel === Calendar.CalendarAccessLevel.OWNER
            ).ownerAccount
          : undefined,
    };

    let calendarId = null;

    try {
      calendarId = await Calendar.createCalendarAsync(newCalendar);
    } catch (e) {
      Alert.alert(e.message);
    }

    return calendarId;
  };

  render() {
    const {
      state: {
        datesWhitelist,
        markedDate,
        todoList,
        isModalVisible,
        selectedTask,
        isDateTimePickerVisible,
        currentDate,
      },
      props: { navigation },
    } = this;

    return (
      <Context.Consumer>
        {value => (
          <>
            {selectedTask !== null && (
              <Task isModalVisible={isModalVisible}>
              <View style={styles.container}>
                <ScrollView style={{overflowY: "scroll", height: 750, width: "auto"}}>
                  <View style={styles.taskContainer}>
                    <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>Numero de Contrato</Text>
                    <TextInput style={styles.title}keyboardType={"numeric"} onChangeText={text => {const prevSelectedTask = { ...selectedTask }; prevSelectedTask.title = text; this.setState({ selectedTask: prevSelectedTask}); }} value={selectedTask.title} placeholder="Numero de Contrato"/>
                    <View style={styles.notesContent} />
                      <View>
                      <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>Tipo de Contrato</Text>
                      <Picker
                        selectedValue={selectedTask.type}
                        style={{ height: 45, width: '100%'}}
                        onValueChange={(itemValue, itemIndex) =>{
                          const prevSelectedTask = { ...selectedTask };
                          prevSelectedTask.type = itemValue;
                          this.setState({
                            selectedTask: prevSelectedTask,
                          });
                        }}
                      >
                        <Picker.Item label="Prestacion de Servicios" value="Prestacion de Servicios" />
                        <Picker.Item label="Obra" value="Obra" />
                        <Picker.Item label="Suministros" value="Suministros" />
                        <Picker.Item label="Consultoria" value="Consultoria" />
                        <Picker.Item label="Covenio" value="Covenio" />
                      </Picker>
                      </View>
                      <View style={styles.sepeerator} />
                      <View>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>Objeto del Contrato</Text>
                        <TextInput
                          style={{ height: 25, fontSize: 19, marginTop: 3 }}
                          keyboardType={"default"}
                          onChangeText={text => {
                            const prevSelectedTask = { ...selectedTask };
                            prevSelectedTask.notes = text;
                            this.setState({
                              selectedTask: prevSelectedTask,
                            });
                          }}
                          value={selectedTask.notes}
                          placeholder="Objeto del Contrato"
                        />
                      </View>
                      <View style={styles.sepeerator} />
                      <View>
                        <Text
                          style={{
                            color: '#9CAAC4',
                            fontSize: 16,
                            fontWeight: '600',
                          }}
                        >
                          Modalidad de Seleccion
                        </Text>
                        <TextInput
                          style={{
                            height: 25,
                            fontSize: 19,
                            marginTop: 3,
                          }}
                          keyboardType={"default"}
                          onChangeText={text => {
                            const prevSelectedTask = { ...selectedTask };
                            prevSelectedTask.modalidad = text;
                            this.setState({
                              selectedTask: prevSelectedTask,
                            });
                          }}
                          value={selectedTask.modalidad}
                          placeholder="Modalidad de Seleccion"
                        />
                      </View>
                      <View style={styles.sepeerator} />
                      <View>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>Valor del Contrato</Text>
                        <TextInput
                        keyboardType={"numeric"}
                          style={{
                            height: 25,
                            fontSize: 19,
                            marginTop: 3,
                          }}
                          onChangeText={text => {
                            const prevSelectedTask = { ...selectedTask };
                            prevSelectedTask.valor = text;
                            this.setState({
                              selectedTask: prevSelectedTask,
                            });
                          }}
                          value={selectedTask.valor}
                          placeholder="Valor del Contrato"
                        />
                      </View>
                    <View style={styles.sepeerator} />
                    <View>
                      <Text
                        style={{
                          color: '#9CAAC4',
                          fontSize: 16,
                          fontWeight: '600',
                        }}
                      >
                        Tiempo de Ejecucion
                      </Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text => {
                          const prevSelectedTask = { ...selectedTask };
                          prevSelectedTask.tiempo = text;
                          this.setState({
                            selectedTask: prevSelectedTask,
                          });
                        }}
                        value={selectedTask.tiempo}
                        placeholder="Tiempo de Ejecucion"
                      />
                    </View>
                    <View style={styles.sepeerator} />
                    <View>
                      <Text
                        style={{
                          color: '#9CAAC4',
                          fontSize: 16,
                          fontWeight: '600',
                        }}
                      >
                        Fecha Acta de Inicio
                      </Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text => {
                          const prevSelectedTask = { ...selectedTask };
                          prevSelectedTask.fecha = text;
                          this.setState({
                            selectedTask: prevSelectedTask,
                          });
                        }}
                        value={selectedTask.fecha}
                        placeholder="Fecha Acta de Inicio"
                      />
                    </View>
                    <View style={styles.sepeerator} />
                    <View>
                      <Text
                        style={{
                          color: '#9CAAC4',
                          fontSize: 16,
                          fontWeight: '600',
                        }}
                      >
                        Nombre del Contratista o Razon Social
                      </Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text => {
                          const prevSelectedTask = { ...selectedTask };
                          prevSelectedTask.nombre = text;
                          this.setState({
                            selectedTask: prevSelectedTask,
                          });
                        }}
                        value={selectedTask.nombre}
                        placeholder="Nombre del Contratista o Razon Social"
                      />
                    </View>
                    <View style={styles.sepeerator} />
                    <View>
                      <Text
                        style={{
                          color: '#9CAAC4',
                          fontSize: 16,
                          fontWeight: '600',
                        }}
                      >
                        Linea Estrategica del P.D.M
                      </Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text => {
                          const prevSelectedTask = { ...selectedTask };
                          prevSelectedTask.linea = text;
                          this.setState({
                            selectedTask: prevSelectedTask,
                          });
                        }}
                        value={selectedTask.linea}
                        placeholder="Linea Estrategica del P.D.M"
                      />
                    </View>
                    <View style={styles.sepeerator} />
                    <View>
                      <Text
                        style={{
                          color: '#9CAAC4',
                          fontSize: 16,
                          fontWeight: '600',
                        }}
                      >
                        Sector del P.D.M
                      </Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text => {
                          const prevSelectedTask = { ...selectedTask };
                          prevSelectedTask.sector = text;
                          this.setState({
                            selectedTask: prevSelectedTask,
                          });
                        }}
                        value={selectedTask.sector}
                        placeholder="Sector del P.D.M"
                      />
                    </View>
                    <View style={styles.sepeerator} />
                    <View>
                      <Text
                        style={{
                          color: '#9CAAC4',
                          fontSize: 16,
                          fontWeight: '600',
                        }}
                      >
                        Programa del Sector del P.D.M
                      </Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text => {
                          const prevSelectedTask = { ...selectedTask };
                          prevSelectedTask.programa = text;
                          this.setState({
                            selectedTask: prevSelectedTask,
                          });
                        }}
                        value={selectedTask.programa}
                        placeholder="Programa del Sector del P.D.M"
                      />
                    </View>
                    <View style={styles.sepeerator} />
                    <View>
                      <Text
                        style={{
                          color: '#9CAAC4',
                          fontSize: 16,
                          fontWeight: '600',
                        }}
                      >
                        Meta de Producto
                      </Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text => {
                          const prevSelectedTask = { ...selectedTask };
                          prevSelectedTask.meta = text;
                          this.setState({
                            selectedTask: prevSelectedTask,
                          });
                        }}
                        value={selectedTask.meta}
                        placeholder="Meta de Producto"
                      />
                    </View>
                    <View style={styles.sepeerator} />
                    <View>
                      <Text
                        style={{
                          color: '#9CAAC4',
                          fontSize: 16,
                          fontWeight: '600',
                        }}
                      >
                        Codigo BPIN
                      </Text>
                      <TextInput
                      keyboardType={"numeric"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text => {
                          const prevSelectedTask = { ...selectedTask };
                          prevSelectedTask.bpin = text;
                          this.setState({
                            selectedTask: prevSelectedTask,
                          });
                        }}
                        value={selectedTask.bpin}
                        placeholder="Codigo BPIN"
                      />
                    </View>
                    <View style={styles.sepeerator} />
                    <View>
                      <Text
                        style={{
                          color: '#9CAAC4',
                          fontSize: 16,
                          fontWeight: '600',
                        }}
                      >
                        Nombre del Proyecto
                      </Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text => {
                          const prevSelectedTask = { ...selectedTask };
                          prevSelectedTask.proyecto = text;
                          this.setState({
                            selectedTask: prevSelectedTask,
                          });
                        }}
                        value={selectedTask.proyecto}
                        placeholder="Nombre del Proyecto"
                      />
                    </View>
                    <View style={styles.sepeerator} />
                    <View>
                      <Text
                      keyboardType={"default"}
                        style={{
                          color: '#9CAAC4',
                          fontSize: 16,
                          fontWeight: '600',
                        }}
                      >
                        Sector del Fut
                      </Text>
                      <TextInput
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text => {
                          const prevSelectedTask = { ...selectedTask };
                          prevSelectedTask.fut = text;
                          this.setState({
                            selectedTask: prevSelectedTask,
                          });
                        }}
                        value={selectedTask.fut}
                        placeholder="Sector del Fut"
                      />
                    </View>
                    <View style={styles.sepeerator} />
                    <View>
                      <Text
                        style={{
                          color: '#9CAAC4',
                          fontSize: 16,
                          fontWeight: '600',
                        }}
                      >
                        Fuentes de Financiacion
                      </Text>
                      <TextInput
                      keyboardType={"default"}
                        style={{
                          height: 25,
                          fontSize: 19,
                          marginTop: 3,
                        }}
                        onChangeText={text => {
                          const prevSelectedTask = { ...selectedTask };
                          prevSelectedTask.fuentes = text;
                          this.setState({
                            selectedTask: prevSelectedTask,
                          });
                        }}
                        value={selectedTask.fuentes}
                        placeholder="Fuentes de Financiacion"
                      />
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 50
                      }}
                    >
                      <TouchableOpacity
                        onPress={async () => {
                          this._handleModalVisible();
                          if (selectedTask.alarm.isOn) {
                            await this._updateAlarm();
                          } else {
                            await this._deleteAlarm();
                          }
                          await value.updateSelectedTaskServicios({
                            date: currentDate,
                            todoServicios: selectedTask,
                          });
                          this._updateCurrentTask(currentDate);
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
                          Actualizar
                        </Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={async () => {
                          this._handleModalVisible();
                          this._deleteAlarm();
                          await value.deleteSelectedTaskServicios({
                            date: currentDate,
                            todoServicios: selectedTask,
                          });
                          this._updateCurrentTask(currentDate);
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
                          Eliminar Contrato
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  </ScrollView>
                </View>
              </Task>
            )}
            <View
              style={{
                flex: 1,
                paddingTop: Constants.statusBarHeight,
                backgroundColor: "#3280e4"
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CreateTaskServicio', {
                    updateCurrentTask: this._updateCurrentTask,
                    currentDate,
                    createNewCalendar: this._createNewCalendar,
                  })
                }
                style={styles.viewTask}
              >
                <Image
                  source={require('../../../assets/plus.png')}
                  style={{
                    height: 30,
                    width: 30,
                  }}
                />
              </TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  height: Dimensions.get('window').height - 170,
                }}
              >
                <ScrollView
                  contentContainerStyle={{
                    paddingBottom: 20,
                  }}
                >
                  {todoList.map(item => (
                    <TouchableOpacity
                      onPress={() => {
                        this.setState(
                          {
                            selectedTask: item,
                            isModalVisible: true,
                          },
                          () => {
                            this._getEvent();
                          }
                        );
                      }}
                      key={item.key}
                      style={styles.taskListContent}
                    >
                      <View
                        style={{
                          marginLeft: 13,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}
                        >
                          <View
                            style={{
                              height: 12,
                              width: 12,
                              borderRadius: 6,
                              backgroundColor: item.color,
                              marginRight: 8,
                            }}
                          />
                          <Text
                            style={{
                              color: '#554A4C',
                              fontSize: 20,
                              fontWeight: '700',
                            }}
                          >
                            {item.title}
                          </Text>
                        </View>
                        <View>
                          <View
                            style={{
                              flexDirection: 'row',
                              marginLeft: 20,
                            }}
                          >
                            <Text
                              style={{
                                color: '#BBBBBB',
                                fontSize: 14,
                                marginRight: 5,
                              }}
                            >{`${moment(item.alarm.time).format(
                              'YYYY'
                            )}/${moment(item.alarm.time).format('MM')}/${moment(
                              item.alarm.time
                            ).format('DD')}`}</Text>
                            <Text
                              style={{
                                color: '#BBBBBB',
                                fontSize: 14,
                              }}
                            >
                              {item.notes}
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View
                        style={{
                          height: 80,
                          width: 5,
                          backgroundColor: item.color,
                          borderRadius: 5,
                        }}
                      />
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </>
        )}
      </Context.Consumer>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#3280e4',
  },
  taskListContent: {
    height: 90,
    width: 327,
    alignSelf: 'center',
    borderRadius: 10,
    shadowColor: '#2E66E7',
    backgroundColor: '#ffffff',
    marginTop: 10,
    marginBottom: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewTask: {
    position: 'absolute',
    bottom: 40,
    right: 17,
    height: 60,
    width: 60,
    backgroundColor: '#18eac2',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#18eac2',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 30,
    shadowOpacity: 0.5,
    elevation: 5,
    zIndex: 999,
  },
  deleteButton: {
    backgroundColor: '#ff6347',
    width: 125,
    height: 48,
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 5,
    justifyContent: 'center',
  },
  updateButton: {
    backgroundColor: '#2E66E7',
    width: 125,
    height: 48,
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
    height: 25,
    borderColor: '#5DD976',
    borderLeftWidth: 1,
    paddingLeft: 8,
    fontSize: 19,
  },
  taskContainer: {
    width: 326,
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
    marginBottom:50
  },
});