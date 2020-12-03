import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

export default class Recursos extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <ScrollView>
                    <View style = {styles.buttonHorizontal}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Gob')}} style={styles.button}>
                            <Image source={require('../../assets/departamento.png')}
                                style = {{ width:45, marginHorizontal:20, height:45}}
                                />
                                <Text style={styles.letter}> Departamento </Text>
                            </TouchableOpacity>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Nation')}} style={styles.button}>
                            <Image source={require('../../assets/nacion.png')}
                                style = {{width:45, marginHorizontal:20, height:45}}
                                />
                                <Text style={styles.letter}> Nacion </Text>
                            </TouchableOpacity>
                    </View>
                    <View style= {styles.buttonHorizontal}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Emb')}} style={styles.button}>
                            <Image source={require('../../assets/embajada.png')}
                            style = {{width:45, marginHorizontal:20, height:45}}
                            />
                            <Text style={styles.letter}> Embajada </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonHorizontal}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('SGR')}} style={styles.button}>
                            <Image source={require('../../assets/srg.png')}
                            style = {{width:45, marginHorizontal:20, height:52}}
                            />
                            <Text style={styles.letter}> S.G.R</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.buttonHorizontal}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('CIntern')}} style={styles.button}>
                            <Image source={require('../../assets/Internacional.png')}
                            style = {{width:45, marginHorizontal:20, height:45}}
                            />
                            <Text style={styles.letter}> Cooperacion{"\n"} Internacional</Text>
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
    image:{
        width: 40,
        height:40,
        marginHorizontal:20
    },
    letter:{
        color: '#7c7f7f',
        alignItems: 'center',
        fontSize: 22,
        justifyContent: 'center',
        fontWeight: "bold"
    },
})
