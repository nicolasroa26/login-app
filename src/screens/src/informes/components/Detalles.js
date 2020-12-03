import React, {Component, useState } from 'react';
import {View, Text, StyleSheet, ScrollView, Linking, Picker} from 'react-native';
import Responsable from '../container/Listbox'
import Separator from './Separator'


export default class Detalles extends Component{
  constructor(props){
    super(props);
    this.state={
      Estado: "Pendiente"
    }
  }
	render(){
		return (
			<View style={styles.container}>
            <View>
                <Text style={styles.letterTitle}>
                  {this.props.navigation.getParam('informe', 'Null')}
                </Text>
            </View>
        <ScrollView style={styles.subcontainer}>
          <View>
            <View>
            <Text style={styles.letterSubtitle}>
              Estado:
            </Text>
            <View>
              <Picker
                selectedValue={this.props.navigation.getParam('estado')}
                style={{ height: 45, width: '100%'}}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({
                    Estado: itemValue
                  }) 
                  }>
                <Picker.Item label="Completado" value="Completado" />
                <Picker.Item label="Pendiente" value="Pendiente" />
                <Picker.Item label="Vencido" value="Vencido" />
              </Picker>
            </View>
            <View style={styles.sepeerator}/>
          </View>
          <View>
            <Text style={styles.letterSubtitle}>
              Entidad que presenta:
            </Text>
            <Text style={styles.textInfo}>
              {this.props.navigation.getParam('entidad', 'entidad')}
            </Text>
            <View style={styles.sepeerator}/>
          </View>
          <View>
            <Text style={styles.letterSubtitle}>
              Como debo rendir: 
            </Text>
            <Text style={styles.textInfo}>
              {this.props.navigation.getParam('como', 'Null')}
            </Text>
            <View style={styles.sepeerator}/>
          </View>
          <View>
            <Text style={styles.letterSubtitle}>
              Que norma lo exige: 
            </Text>
            <Text style={styles.textInfo}>
              {this.props.navigation.getParam('norma', 'Null')}
            </Text>
            <View style={styles.sepeerator}/>
          </View>
          <View>
            <Text style={styles.letterSubtitle}>
              Cual es el periodo rendido: 
            </Text>
            <Text style={styles.textInfo}>
              {this.props.navigation.getParam('periodo', 'Null')}
            </Text>
            <View style={styles.sepeerator}/>
          </View>
          <View>
            <Text style={styles.letterSubtitle}>
              En que fecha es la rendicion:
            </Text>
            <Text style={styles.textInfo}>
            {this.props.navigation.getParam('fecha', 'Null')}
            </Text>
            <View style={styles.sepeerator}/>
          </View>
          <View>
            <Text style={styles.letterSubtitle}>
              En que formato: 
            </Text>
            <Text style={styles.textInfo}>
              {this.props.navigation.getParam('formato', 'Null')}
            </Text>
            <View style={styles.sepeerator}/>
          </View>
          <View>
            <Text style={styles.letterSubtitle}>
              Dependencia Responsable: 
            </Text>
            <Responsable/>
            <View style={styles.sepeerator}/>
          </View>
          <View>
            <Text style={styles.letterSubtitle}>
              Vinculo: 
            </Text>
            <Text style={{color:'blue', fontSize: 18, marginHorizontal:8, marginBottom:30}} onPress={() => Linking.openURL(this.props.navigation.getParam('vinculo', 'Null'))}>
              {this.props.navigation.getParam('vinculo', 'Null')}
            </Text>
          </View>
        </View>
	    </ScrollView>
    </View>
    );
	}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#3280e4'
  },
  subcontainer:{
    marginLeft: 25,
    marginRight: 25,
    marginVertical: 25,
    width:300,
    borderRadius: 20,
    backgroundColor: "#ffffff"
  },
  letterTitle:{
    alignSelf: "center",
    marginTop: 20,
    fontSize: 20,
    color:'#18eac2',
    fontWeight: 'bold',
  },
  title:{
    textAlign:'justify',
    marginHorizontal: 10,
    marginTop: 20
  },
  letterSubtitle:{
    color:'#000000',
    margin: 8,
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  textInfo:{
    color:'#7c7f7f',
    margin: 8,
    fontSize: 18,
    textAlign: 'left',
  },
  sepeerator: {
    height: 1,
    width: '95%',
    backgroundColor: '#3280e4',
    alignSelf: 'center',
  },
});