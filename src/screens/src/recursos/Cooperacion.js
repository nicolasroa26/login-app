import React, {Component} from 'react';
import {Text, View, Dimensions, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default class Cooperacion extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('C_fundacion')} style={styles.button}>
                        <Text style={styles.letter}>
                        Fundacion Interamericana
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('C_Emprendedor')} style={styles.button}>
                        <Text style={styles.letter}>
                        Fondo Emprendedor
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('C_ford')} style={styles.button}>
                        <Text style={styles.letter}>
                        Fundacion Ford
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('C_acdc')} style={styles.button}>
                        <Text style={styles.letter}>
                        Org ACDC VOCA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('C_drural')} style={styles.button}>
                        <Text style={styles.letter}>
                        Agencia Desarrollo Rural
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('C_iberescena')} style={styles.button}>
                        <Text style={styles.letter}>
                        Iberescena
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('C_mercociudades')} style={styles.button}>
                        <Text style={styles.letter}>
                        Mercociudades
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('C_innpulsa')} style={styles.button}>
                        <Text style={styles.letter}>
                        Innpulsa
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('C_bmundial')} style={styles.button}>
                        <Text style={styles.letter}>
                        Banco Mundial
                        </Text>
                    </TouchableOpacity>
                     <TouchableOpacity onPress={()=>this.props.navigation.navigate('C_binteramericano')} style={styles.button}>
                        <Text style={styles.letter}>
                        Banco Interamericano
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('C_dgeneral')} style={styles.button}>
                        <Text style={styles.letter}>
                        Direccion General de Ayuda Humanitaria Echo
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('C_nunidas')} style={styles.button}>
                        <Text style={styles.letter}>
                        Oraganizacion de las Naciones Unidas Para la Agricultura y la Alimentacion
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