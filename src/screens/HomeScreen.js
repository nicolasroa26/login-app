import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Planeación para el Desarrollo</Header>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Iniciar sesión
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Registrate
    </Button>
  </Background>
);

export default memo(HomeScreen);
