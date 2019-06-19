/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Image, Text ,ImageBackground, View, ScrollView} from 'react-native';


export default class App extends Component {

 
  componentWillMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      var lat = parseFloat(position.coords.latitude);
      var lon = parseFloat(position.coords.longitude);

      var geolocatePosition = {
        latitude : lat,
        longitude: lon
      }

    })
  }


  render() {
    return (

        <ImageBackground source={require('./images/backgroundImage.jpg')} style={styles.backgroundImage}>
          <View style = {styles.toolBar}>
            <Image source={require('./images/favorites.png')} style={styles.favoritesImage}/>
          </View>
          <View style = {styles.currentWetherConteiner}>
            <Text style={[styles.text, styles.currentWetherText]}>Hrodno</Text>
            <Text style={[styles.text, styles.currentWetherText]}>15*C</Text>
            <Image source={require('./images/FreezingRain.png')}/>
            <ScrollView/>
          </View>
        </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  dailyWetherConteiner : {
    flex : 4
  },
  toolBar : {
    flex : 1,
    alignItems : 'flex-end'
  },
  currentWetherConteiner : {
    flex : 10,
    alignItems: "center"
  },
  text : {
    color : "white"
  },
  currentWetherText : {
    fontSize : 50
  },
  favoritesImage : {
    height: 40,
    width : 40,
    margin : 10
  },
  backgroundImage: {
    height: '100%',
    width: '100%'
  },
});
