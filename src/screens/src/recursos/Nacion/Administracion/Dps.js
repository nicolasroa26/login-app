import React, {Component} from 'react';
import {Text, Dimensions, View, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default class Nacion extends Component{
    render(){
        return(          
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NADproduc')} style={styles.button}>
                        <Text style={styles.letter}>
                            PROYECTOS INFRAESTRUCTURA PRODUCTIVA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('NADvial')} style={styles.button}>
                        <Text style={styles.letter}>
                            PROYECTOS DE INFRAESTRUCTURA VIAL
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