import React, {Component} from 'react';
import {Text, Dimensions, View, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default class Nacion extends Component{
    render(){
        return(          
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NMdeporte')} style={styles.button}>
                        <Text style={styles.letter}>
                            MIN. DEPORTE
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NMvivienda')} style={styles.button}>
                        <Text style={styles.letter}>
                            MIN. VIVIENDA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NMminas')} style={styles.button}>
                        <Text style={styles.letter}>
                            MIN. MINAS
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NMagricultura')} style={styles.button}>
                        <Text style={styles.letter}>
                            MIN. AGRICULTURA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NMambiente')} style={styles.button}>
                        <Text style={styles.letter}>
                            MIN. AMBIENTE
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NMciencia')} style={styles.button}>
                        <Text style={styles.letter}>
                            MIN. CIENCIA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NMcomercio')} style={styles.button}>
                        <Text style={styles.letter}>
                            MIN. COMERCIO, INDUSTRIA Y TURISMO
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NMcultura')} style={styles.button}>
                        <Text style={styles.letter}>
                            MIN. CULTURA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NMeducacion')} style={styles.button}>
                        <Text style={styles.letter}>
                            MIN. EDUCACION
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NMinterior')} style={styles.button}>
                        <Text style={styles.letter}>
                            MIN. INTERIOR
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NMsalud')} style={styles.button}>
                        <Text style={styles.letter}>
                            MIN. SALUD
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NMtics')} style={styles.button}>
                        <Text style={styles.letter}>
                            MIN. TICS
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#3280e4",
        flex:1
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
        justifyContent: 'space-between',
        alignItems: 'center',
      }
})