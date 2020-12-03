import React, {Component} from 'react';
import {Text,View, Dimensions, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default class Social extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Agri')} style={styles.button}>
                        <Text style={styles.letter}>
                        AGRICULTURA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sambi')} style={styles.button}>
                        <Text style={styles.letter}>
                        AMBIENTE
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Ctei')} style={styles.button}>
                        <Text style={styles.letter}>
                        CTEI
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Comer')} style={styles.button}>
                        <Text style={styles.letter}>
                        COMERCIO, INDUSTRIA Y T.
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Cult')} style={styles.button}>
                        <Text style={styles.letter}>
                        CULTURA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Defensa')} style={styles.button}>
                        <Text style={styles.letter}>
                        DEFENSA Y POLITICA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Sdepor')} style={styles.button}>
                        <Text style={styles.letter}>
                        DEPORTE Y RECREACION
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Educ')} style={styles.button}>
                        <Text style={styles.letter}>
                        EDUCACION
                        </Text>
                    </TouchableOpacity><TouchableOpacity onPress={()=>this.props.navigation.navigate('Fiscalia')} style={styles.button}>
                        <Text style={styles.letter}>
                        FISCALIA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Incl')} style={styles.button}>
                        <Text style={styles.letter}>
                        INCLUSION SOCIAL
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Just')} style={styles.button}>
                        <Text style={styles.letter}>
                        JUSTICIA Y DEL DERECHO
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('MinE')} style={styles.button}>
                        <Text style={styles.letter}>
                        MINAS Y ENERGIA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Salud_pro')} style={styles.button}>
                        <Text style={styles.letter}>
                        SALUD Y PROTECCION SOCIAL
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Stecno')} style={styles.button}>
                        <Text style={styles.letter}>
                        TECNOLOGIA
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Strans')} style={styles.button}>
                        <Text style={styles.letter}>
                        TRANSPORTE
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('TransporteO')} style={styles.button}>
                        <Text style={styles.letter}>
                        TRANSPORTE OCAD PAZ
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Svivienda')} style={styles.button}>
                        <Text style={styles.letter}>
                        VIVIENDA, CIUDAD Y TERRITORIO
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
        fontSize: 16,
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