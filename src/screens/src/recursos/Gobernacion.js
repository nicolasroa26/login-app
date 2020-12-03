import React, {Component} from 'react';
import {Text, View, Dimensions, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default class Gobernacion extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('ICCU')} style={styles.button}>
                        <Text style={styles.letter}>
                        I.C.C.U
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SecVivienda')} style={styles.button}>
                        <Text style={styles.letter}>
                        SEC. VIVIENDA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SecMinas')} style={styles.button}>
                        <Text style={styles.letter}>
                        SEC. MINAS, ENERGIA Y GAS
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Idecut')} style={styles.button}>
                        <Text style={styles.letter}>
                        IDECUT
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Deconomico')} style={styles.button}>
                        <Text style={styles.letter}>
                        SEC. COMPETITIVIDAD Y DESARROLLO ECONOMICO
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Unidadadmin')} style={styles.button}>
                        <Text style={styles.letter}>
                        UNIDAD ADMINISTRATIVA PARA LA GESTION DE RIESGO
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Indeportes')} style={styles.button}>
                        <Text style={styles.letter}>
                        INDEPORTES
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Gagricultura')} style={styles.button}>
                        <Text style={styles.letter}>
                        SEC. AGRICULTURA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('GSambiente')} style={styles.button}>
                        <Text style={styles.letter}>
                        SEC. AMBIENTE
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('GSgobierno')} style={styles.button}>
                        <Text style={styles.letter}>
                        SEC. GOBIERNO
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('GSsalud')} style={styles.button}>
                        <Text style={styles.letter}>
                        SEC. SALUD
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('SecEducacion')} style={styles.button}>
                        <Text style={styles.letter}>
                        SEC. EDUCACION
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
      backgroundColor: "#3280e4"
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