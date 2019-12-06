import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

// import { Container } from './styles';
import Main from './src/screens/Main'
import Welcome from './src/screens/Welcome'
import SplashScreen from './src/screens/SplashScreen'

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Splash:SplashScreen,
    Welcome:Welcome,
    Main:Main
  },{
    initialRouteName:'Main'
  })
)

export default function App() {
  return (
      <>
        <StatusBar backgroundColor='#111' barStyle='light-content' />
        <AppContainer />
      </>
  );
}

    // firebase.database().ref().child('barberInfo').once('value', snapshot => {
    //   console.log(snapshot)
