import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView, ImageBackground } from 'react-native';

export default WelcomeScreenBg = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require("../img/littleLemonLogoBg.png")} resizeMode='contain'>
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      </ImageBackground>   
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
     height: 80,
     width: 240,
     resizeMode: 'contain',
     alignSelf:'center',
     
  },
  image: {
    flex:1,
    justifyContent:'center',
    
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: '#fff',
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#333333',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

