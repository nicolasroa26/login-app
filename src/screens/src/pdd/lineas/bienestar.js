import React, {Component} from 'react';
import {Text,View, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default class Bienestar extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('Agencia')}
                    style={styles.button}><Text style={styles.letter}>
                        Agencia de Cundinamarca para la paz y el post conflicto
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('Alta')}
                    style={styles.button}>
                        <Text
                        style={styles.letter}>
                            Alta consejería para la Felicidad y el Bienestar de Cundinamarca
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('Beneficencia')}
                    style={styles.button}>
                        <Text
                        style={styles.letter}>
                            Beneficencia de Cundinamarca
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Corporacion')} style={styles.button}>
                        <Text style={styles.letter}>
                        Corporación Social de Cundinamarca
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Infraestructura')} style={styles.button}>
                        <Text style={styles.letter}>
                        Instituto de Infraestructura y Concesiones de Cundinamarca
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Departamental')} style={styles.button}>
                        <Text style={styles.letter}>
                        Instituto Departamental de Cultura y Turismo
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('BDepartamental')} style={styles.button}>
                        <Text style={styles.letter}>
                        Instituto Departamental para la Recreación y el Deporte
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Desarrollo')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de desarrollo e inclusión social
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Seducación')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Educación
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sgobierno')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Gobierno
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Shabitad')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Hábitat y vivienda
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Smujer')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de la mujer y equidad de genero
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Ssalud')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de Salud
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Stransporte')} style={styles.button}>
                        <Text style={styles.letter}>
                        Secretaría de transporte y movilidad
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Uniadmin')} style={styles.button}>
                        <Text style={styles.letter}>
                        Unidad administrativa especial de pensiones
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