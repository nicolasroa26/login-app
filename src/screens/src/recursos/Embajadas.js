import React, {Component} from 'react';
import {Text,View, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default class Social extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EmAlemania')} style={styles.button}>
                        <Text style={styles.letter}>
                        EMBAJADA DE ALEMANIA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EmAustralia')} style={styles.button}>
                        <Text style={styles.letter}>
                        EMBAJADA DE AUSTRALIA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EmBelgica')} style={styles.button}>
                        <Text style={styles.letter}>
                        EMBAJADA DE BELGICA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EmCanada')} style={styles.button}>
                        <Text style={styles.letter}>
                        EMBAJADA DE CANADA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EmCorea')} style={styles.button}>
                        <Text style={styles.letter}>
                        EMBAJADA DE COREA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EmEspaña')} style={styles.button}>
                        <Text style={styles.letter}>
                        EMBAJADA DE ESPAÑA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EmFrancia')} style={styles.button}>
                        <Text style={styles.letter}>
                        EMBAJADA DE FRANCIA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EmJapon')} style={styles.button}>
                        <Text style={styles.letter}>
                        EMBAJADA DE JAPON
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EmNoruega')} style={styles.button}>
                        <Text style={styles.letter}>
                        EMBAJADA DE NORUEGA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EmNZelanda')} style={styles.button}>
                        <Text style={styles.letter}>
                        EMBAJADA DE NUEVA ZELANDA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EmRUnido')} style={styles.button}>
                        <Text style={styles.letter}>
                        EMBAJADA DE REINO UNIDO
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EmSuecia')} style={styles.button}>
                        <Text style={styles.letter}>
                        EMBAJADA DE SUECIA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EmSuiza')} style={styles.button}>
                        <Text style={styles.letter}>
                        EMBAJADA DE SUIZA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('EmUsa')} style={styles.button}>
                        <Text style={styles.letter}>
                        EMBAJADA DE USA
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