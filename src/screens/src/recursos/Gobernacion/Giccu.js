import React, {Component} from 'react';
import {Text, View, Dimensions, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

export default class Gobernacion extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Ippuentes')} style={styles.button}>
                        <Text style={styles.letter}>
                        Proyectos para puentes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Imrvial')} style={styles.button}>
                        <Text style={styles.letter}>
                        Mantenimiento de la red vial
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Ipespacio')} style={styles.button}>
                        <Text style={styles.letter}>
                        Proyectos en espacio publico
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Ipvtercia')} style={styles.button}>
                        <Text style={styles.letter}>
                        Proyectos en vias terciarias
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Ipvurban')} style={styles.button}>
                        <Text style={styles.letter}>
                        Proyectos en vias urbanas
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