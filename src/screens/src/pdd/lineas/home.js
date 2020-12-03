import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'

export default class PDD extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <ScrollView>
                    <View style = {styles.buttonHorizontal}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Bienestar')}} style={styles.button}>
                            <Text style={styles.mas}> +</Text>
                            <Text style={styles.letter}> Bienestar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Competitividad')}} style={styles.button}>
                            <Text style={styles.mas}> +</Text>
                            <Text style={styles.letter}> Competitividad</Text>
                        </TouchableOpacity>
                    </View>
                    <View style= {styles.buttonHorizontal}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Sostenibilidad')}} style={styles.button}>
                            <Text style={styles.mas}> +</Text>
                            <Text style={styles.letter}> Sostenibilidad</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Integracion')}} style={styles.button}>
                            <Text style={styles.mas}> +</Text>
                            <Text style={styles.letter}> Integracion</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonembassy}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Gobernanza')}} style={styles.button}>
                            <Text style={styles.mas}> +</Text>
                            <Text style={styles.letter}> Gobernanza</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#3280e4",
        flex: 1
    },
    button: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        height:80,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginVertical: 40,
        width: Dimensions.get('window').width - 50,
        alignSelf: 'center',
        shadowColor: '#000',
        marginTop: 25,
        marginBottom:10,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 0.2,
        elevation: 5,
        flexDirection: 'row'
    },
    mas:{
        fontWeight: "bold",
        fontSize:35,
        textAlign: 'left',
        marginLeft:36,
        marginRight:8
    },
    letter:{
        color: '#7c7f7f',
        fontSize: 22,
        marginLeft:0
    },
})