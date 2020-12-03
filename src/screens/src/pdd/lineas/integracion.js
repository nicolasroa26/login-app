import React, {Component} from 'react';
import {Text,View, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default class Integracion extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity 
                      onPress={()=>this.props.navigation.navigate('Empresas')} 
                      style={styles.button}
                    >
                        <Text style={styles.letter}>
                        Empresas Públicas de Cundinamarca 
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={()=>this.props.navigation.navigate('IInfraestructura')} 
                      style={styles.button}
                    >
                        <Text 
                          style={styles.letter}>
                            Instituto de Infraestructura y Concesiones de Cundinamarca
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                      onPress={()=>this.props.navigation.navigate('IDepartamental')} 
                      style={styles.button}
                    >
                        <Text 
                        style={styles.letter}
                        >
                            Instituto Departamental de Cultura y Turismo
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('IAgricultura')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Agricultura y Desarrollo Rural
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('IAmbiente')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Ambiente
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('ICompetitividad')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Competitividad y desarrollo económico
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('IGobierno')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Gobierno
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('IHabitat')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Hábitat y vivienda
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('IIntegracion')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Integración Regional
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('IPlaneacion')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Planeación
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('ITransporte')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de transporte y movilidad
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