import React, { Component } from 'react';
import { ScrollView, StyleSheet, Dimensions, TouchableOpacity , View, Text } from 'react-native';

export default class Entidades extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <ScrollView>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Contaduria')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
              Contaduria General de la Nacion
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Contraloria')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Contraloria General de la Republica
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Procuraduria')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Procuraduria General de la Nacion
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('ContraloriaD')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Contraloria Departamental
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('MCultura')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Ministerio de Cultura
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('MDeporte')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Ministerio del deporte (Coldeportes)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('MEducacion')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Ministerio de Educacion Nacional
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('MHacienda')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Ministerio de Hacienda y Crédito Público
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('MProteccion')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Ministerio de Proteccion Social
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('MInterior')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Ministerio del Interior
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Superintendencia')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Superintendencia de Servicios Publicos domiciliarios
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Supersalud')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            SUPERSALUD - Ministerio de la proteccion Social
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('DIAN')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            DIAN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('UVictimas')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Unidad para la Atencion y Reparacion Integral a las Victimas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('RTierras')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Unidad de Restitucion de Tierras
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('FPublica')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Funcion Publica
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Planeacion')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Departamento Nacional de Planeacion
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('EGobernacion')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Gobernacion del departamento
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Alcaldia')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Alcaldia municipal
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate('Defensoria')} style={styles.taskListContent}>
            <Text style= {styles.buttonText}>
            Defensoria del Pueblo
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3280e4',
    paddingTop: 15,
  },
  taskListContent: {
    height: 80,
    width: Dimensions.get('window').width - 20,
    alignSelf: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    backgroundColor: '#ffffff',
    marginTop: 5,
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
  },
  boton: {
    marginBottom: 30,
    width: 330,
    height: 100,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    padding: 10,
    color: '#7c7f7f',
    fontWeight: 'bold',
    justifyContent: 'space-around'
  }
});