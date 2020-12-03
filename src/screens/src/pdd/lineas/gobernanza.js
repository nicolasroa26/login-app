import React, {Component} from 'react';
import {Text,View, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default class Gobernanza extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('GDepartamental')}
                      style={styles.button}>
                        <Text style={styles.letter}>
                        Instituto Departamental de Acción Comunal
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('GControl')}
                      style={styles.button}
                    >
                        <Text
                          style={styles.letter}>
                            Oficina de Control Interno
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('GDesarrollo')}
                      style={styles.button}
                    >
                        <Text
                        style={styles.letter}
                        >
                            Secretaría de desarrollo e inclusión social
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('GEducacion')}
                      style={styles.button}
                    >
                        <Text style={styles.letter}>
                        Secretaría de Educación
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('GGob')}
                      style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Gobierno
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('GHacienda')}
                      style={styles.button}
                    >
                        <Text style={styles.letter}>
                        Secretaría de Hacienda
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('GFuncion')}
                    style={styles.button}
                    >
                        <Text style={styles.letter}>
                        Secretaría de la Función Pública
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('GPlaneacion')}
                      style={styles.button}
                    >
                        <Text style={styles.letter}>
                        Secretaría de Planeación
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('GPrensa')}
                      style={styles.button}
                    >
                        <Text style={styles.letter}>
                        Secretaría de Prensa y comunicaciones
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('GSalud')}
                      style={styles.button}
                    >
                        <Text style={styles.letter}>
                        Secretaría de Salud
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={()=>this.props.navigation.navigate('GTecnologia')}
                      style={styles.button}
                    >
                        <Text style={styles.letter}>
                        Secretaría de tecnologías de la información
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={()=>this.props.navigation.navigate('GTransporte')} 
                      style={styles.button}
                    >
                        <Text style={styles.letter}>
                        Secretaría de transporte y movilidad
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={()=>this.props.navigation.navigate('GGeneral')} 
                      style={styles.button}
                    >
                        <Text style={styles.letter}>
                        Secretaría General
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={()=>this.props.navigation.navigate('GJuridica')} 
                      style={styles.button}
                    >
                        <Text style={styles.letter}>
                        Secretaría Jurídica
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#3280e4'
    },
    letter:{
      fontSize: 16,
      padding: 10,
      color: '#7c7f7f',
      fontWeight: 'bold',
      justifyContent: 'space-around'
    },
    button: {
        height: 80,
        width: Dimensions.get('window').width - 20,
        alignSelf: 'center',
        borderRadius: 8,
        shadowColor: '#000',
        backgroundColor: '#ffffff',
        marginTop: 10,
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
      }
    });