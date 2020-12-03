import React, {Component} from 'react';
import {Text,View, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('PEducacion')}
                    style={styles.button}>
                        <Text style={styles.letter}>
                        A.1 EDUCACION
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('PSalud')}
                    style={styles.button}>
                        <Text
                        style={styles.letter}>
                        A.2 SALUD
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate('PAPSB')}
                    style={styles.button}>
                        <Text
                        style={styles.letter}>
                            A.3 A.P.S.B
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PDeporte')} style={styles.button}>
                        <Text style={styles.letter}>
                        A.4 DEPORTE Y RECREACIÓN
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PCultura')} style={styles.button}>
                        <Text style={styles.letter}>
                        A.5 CULTURA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PEnergia')} style={styles.button}>
                        <Text style={styles.letter}>
                        A.6 SERVICIOS PÚBLICOS DIFERENTES A.A.A
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PVivienda')} style={styles.button}>
                        <Text style={styles.letter}>
                        A.7 VIVIENDA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PAgropecuario')} style={styles.button}>
                        <Text style={styles.letter}>
                        A.8 AGROPECUARIO
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PTransporte')} style={styles.button}>
                        <Text style={styles.letter}>
                        A.9 TRANSPORTE
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PAmbiente')} style={styles.button}>
                        <Text style={styles.letter}>
                        A.10 AMBIENTAL
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PCentros')} style={styles.button}>
                        <Text style={styles.letter}>
                        A.11 CENTROS DE RECLUSION
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PRiesgos')} style={styles.button}>
                        <Text style={styles.letter}>
                        A.12 PREVENCIÓN Y ATENCIÓN DE DESASTRES
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PPromocion')} style={styles.button}>
                        <Text style={styles.letter}>
                        A.13 PROMOCIÓN DEL DESARROLLO
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PVulnerable')} style={styles.button}>
                        <Text style={styles.letter}>
                        A.14 ATENCIÓN A GRUPOS VULNERABLES
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PEquipamiento')} style={styles.button}>
                        <Text style={styles.letter}>
                        A.15 EQUIPAMIENTO
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PDesarrollo')} style={styles.button}>
                        <Text style={styles.letter}>
                        A.16 DESARROLLO COMUNITARIO
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PFortalecimiento')} style={styles.button}>
                        <Text style={styles.letter}>
                        A.17 FORTALECIMIENTO INSTITUCIONAL
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('PJusticia')} style={styles.button}>
                        <Text style={styles.letter}>
                        A.18 JUSTICIA Y SEGURIDAD
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
        backgroundColor:'#3280e4',
    },
    letter:{
        color:'#7c7f7f',
        fontSize: 20,
        textAlign: 'center',
        padding:20,
        fontWeight: 'bold'
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
        alignItems: 'center',
        fontSize: 18,
        padding: 10,
        color: '#000000',
        fontWeight: 'bold',
        justifyContent: 'space-around'
      }
    });