import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Image } from 'react-native';

export default class App extends React.Component {
    state={
        user:"",
        password:""
    }
    render(){
        return (
            <View style={styles.container}>
                <Image style={{width: 170, height: 170, marginBottom: 30}}source={require('../assets/icon.png')} />
                <View style={styles.inputView} >
                    <TextInput  
                    style={{fontSize: 15}}
                    placeholder="Usuario" 
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({user:text})}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput  
                    style={{fontSize: 15}}
                    placeholder="Contraseña" 
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({password:text})}
                    secureTextEntry={true}/>
                </View>
                <TouchableOpacity>
                    <Text style={{fontSize: 13, color: "#003f5c"}}>Olvidaste tu Contraseña?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log(this.state.password)}
                style={styles.loginBtn}>
                    <Text style={{ fontSize: 18, textAlign: 'center', color: '#fff' }}>Iniciar Sesion</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log(this.state.password)}
                style={styles.loginBtn}>
                    <Text style={{ fontSize: 18, textAlign: 'center', color: '#fff' }}>Registro</Text>
                </TouchableOpacity>
            </View>
            );
        }
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:"80%",
    borderRadius:25,
    height:60,
    marginBottom:10,
    justifyContent:"center",
    padding:20,
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth:.5
  },
  loginBtn:{
    backgroundColor: '#2E66E7',
    width: 150,
    height: 38,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 5,
    justifyContent: 'center',
    marginRight: 10
  }
});