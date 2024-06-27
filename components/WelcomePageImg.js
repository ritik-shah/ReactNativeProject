import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';

export default WelcomePageImg = () => {
  return (
    <ScrollView style={styles.container}>
   
      <Image style={styles.logo} source={require("../img/littleLemonLogo.png")} /> 
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Image style={styles.image} source={require("../img/Picture1.png")} resizeMethod='cover' accessible={true} accessibilityLabel='Picture 1'/>
      <Image style={styles.image} source={require("../img/Picture2.png")} resizeMethod='cover' accessible={true} accessibilityLabel='Picture 1'/>
      <Image style={styles.image} source={require("../img/Picture3.png")} resizeMethod='cover' accessible={true} accessibilityLabel='Picture 1'/>
      <Image style={styles.image} source={require("../img/Picture4.png")} resizeMethod='cover' accessible={true} accessibilityLabel='Picture 1'/>

    </ScrollView>
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
    width: 350,
    height: 250,
    borderRadius: 10,
    margin:5,
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

