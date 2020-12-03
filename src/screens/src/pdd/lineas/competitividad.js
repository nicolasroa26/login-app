import React, {Component} from 'react';
import {Text,View, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default class Competitividad extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CCorporacion')} 
                      style={styles.button}>
                        <Text style={styles.letter}>
                        Corporación Social de Cundinamarca
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CEmpresas')} 
                      style={styles.button}>
                        <Text style={styles.letter}>
                        Empresas Públicas de Cundinamarca
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CInfra')} style={styles.button}>
                        <Text style={styles.letter}>
                        Instituto de Infraestructura y Concesiones de Cundinamarca
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CDepartamental')} style={styles.button}>
                        <Text style={styles.letter}>
                        Instituto Departamental de Cultura y Turismo
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CAgricultura')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Agricultura y Desarrollo Rural
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CCiencia')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Ciencia tecnología e innovación
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CCompeti')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Competitividad y desarrollo económico
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CCoopera')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de cooperación y enlace institucional
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CEduca')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Educación
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CSmujer')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de la mujer y equidad de genero
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CSminas')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de minas, energía y gas
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CStecno')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de tecnologías de la información
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('CStransporte')} style={styles.button}>
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