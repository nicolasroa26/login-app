import React, {Component} from 'react';
import {Text, View, Dimensions, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default class Gobernacion extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('GApredios')} style={styles.button}>
                        <Text style={styles.letter}>
                        Adquisión de predios
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('GAambiente')} style={styles.button}>
                        <Text style={styles.letter}>
                        Proyectos ambiente
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