import React, {Component} from 'react';
import {Text,View, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default class Sostenibilidad extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity 
                      onPress={()=>this.props.navigation.navigate('SEmpresas')} 
                      style={styles.button}
                    >
                        <Text style={styles.letter}>
                        Empresas Públicas de Cundinamarca
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={()=>this.props.navigation.navigate('SAgricultura')} 
                      style={styles.button}
                    >
                        <Text 
                          style={styles.letter}>
                            Secretaría de Agricultura y Desarrollo Rural
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={()=>this.props.navigation.navigate('SAmbiente')} 
                      style={styles.button}
                    >
                        <Text 
                        style={styles.letter}
                        >
                            Secretaría de Ambiente
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SCompetitividad')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Competitividad y desarrollo económico
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SPublica')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de la Función Pública
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SMinas')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de minas, energía y gas
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SSalud')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Salud
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('STecnologias')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de tecnologías de la información
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SAdministrativa')} style={styles.button}>
                        <Text style={styles.letter}>
                        Unidad administrativa para la gestión del riesgo de desastres
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