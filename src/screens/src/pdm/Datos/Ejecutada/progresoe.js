import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput, ScrollView} from 'react-native';

export default class Progresoe extends Component{
  state = {
    metaeje:"",
    educacion:"",
    salud:"",
    apsb:"",
    libred:"",
    deporte:"",
    cultura:"",
    librei:"",
    fondon:"",
    alimentacione:"",
    sobretasa:"",
    estampilla:"",
    estampillabien:"",
    sobretasaalum:"",
    fondosegu:"",
    fondoedu:"",
    contribuciondep:"",
    sobretasaambi:"",
    impuestos:"",
    totalpre:"",
    aps:"",
    medio:"",
    libre:"",
    asignaciones:"",
    fondoreg:"",
    fortalecimiento:"",
    otros:"",
    nacion:"",
    departamento:""
  }
    render(){
        return(
            <View style={{backgroundColor: "#3280e4", flex: 1}}>
                <ScrollView style={styles.subcontainer}>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Resultado esperado a 2020
                        </Text>
                        <Text style={styles.title}>
                        
                        </Text>
                        <Text style={{ color: '#9CAAC4', paddingTop:10,fontSize: 16, fontWeight: '600' }}>
                        Meta Ejecutada
                        </Text>
                        <TextInput
                        style={styles.title}
                        keyboardType={"numeric"}
                        placeholder="Ingrese su progreso"
                        onChangeText={text => this.setState({metaeje:text})}
                        />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Educacion
                        </Text>
                        <TextInput
                        keyboardType={"numeric"}
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        onChangeText={text => this.setState({educacion:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Salud
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({salud:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Agua potable y saneamiento basico 
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({apsb:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Libre Destinacion
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({libred:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Deporte
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({deporte:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Cultura
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({cultura:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Libre Inversion
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({librei:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Fondo nacional de pensiones
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({fondon:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Alimentacion Escolar
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({alimentacione:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Sobretasa bomberil
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({sobretasa:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Estampilla procultura
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({estampilla:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Estampilla para el bienestar del adulto mayor
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({estampillabien:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Sobretasa de alumbrado publico
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({sobretasaalum:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Fondo de seguridad y contribucion especial sobre contratos de obra publica
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({fondosegu:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Fondo educativo
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({fondoedu:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Contribucion especial para el deporte
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({contribuciondep:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Sobretasa ambiental
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({sobretasaambi:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Impuestos
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({impuestos:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        El 1% del total va para compra de predios
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({totalpre:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        A.P.S.B
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({aps:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Medio ambiente
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({medio:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Libre Inversion
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({libre:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Asignaciones directas
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({asignaciones:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Fondo de compesacion regional
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({fondoreg:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Fortalecimiento a la secretaria de planeacion
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({fortalecimiento:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Otros recursos
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({otros:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Nacion
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({nacion:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                    <View style={styles.taskContainer}>
                        <Text style={{ color: '#9CAAC4', fontSize: 16, fontWeight: '600' }}>
                        Departamento
                        </Text>
                        <TextInput
                        style={styles.title}
                        placeholder="Ingrese su progreso"
                        keyboardType={"numeric"}
                        onChangeText={text => this.setState({departamento:text})}
                    />
                    </View>
                    <View style={styles.sepeerator}/>
                </ScrollView>
            </View>
        )
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
      width: 100,
      height: 38,
      alignSelf: 'center',
      marginTop: 40,
      borderRadius: 5,
      justifyContent: 'center',
      marginRight: 20,
    },
    backButtonm: {
      backgroundColor: '#CACFD2',
      width: Dimensions.get('window').width - 80,
      height: 50,
      alignSelf: 'center',
      marginTop: 25,
      borderRadius: 5,
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 3.84,
      shadowOpacity: 0.25,
      elevation: 5,
    },
    sepeerator1: {
      height: 1,
      marginTop:3,
      width: '95%',
      backgroundColor: '#3280e4',
      alignSelf: 'center',
    },
    notesContent: {
      height: 0.5,
      width: '100%',
      backgroundColor: '#979797',
      alignSelf: 'center',
      marginVertical: 20,
    },
    title: {
      borderColor: '#7c7f7f',
      borderWidth: 1,
      borderLeftWidth: 1,
      paddingLeft: 8,
      fontSize: 16,
    },
    taskContainer: {
      width: Dimensions.get('window').width - 70,
      alignSelf: 'center',
      borderRadius: 10,
      shadowColor: '#000',
      backgroundColor: '#ffffff',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 3.84,
      shadowOpacity: 0.25,
      elevation: 5,
      padding: 10,
    },
    subcontainer:{
      marginHorizontal: 25,
      marginVertical: 25,
      width:310,
      borderRadius: 20,
      backgroundColor: "#ffffff"
    },
  });