import React from "react";
import { StyleSheet,Text,View,TextInput, ScrollView, ImageBackground, KeyboardAvoidingView, Platform, Alert, Pressable } from "react-native";


export default function LoginPagePressable(){
    const [email,onChangeEmail] = React.useState('');
    const [password,onChangePassword] = React.useState('');
    const [loggedIn, setLoginState] = React.useState(false);
    return(
       
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS==='android' ? 'padding':'height'}>
             {loggedIn && (
            <Text style={styles.buttonText}>You are Logged in. Welcome...</Text>
        )}    
           
            {!loggedIn && (
           <>
            <ScrollView style={styles.container}>
                <Text style={styles.headerText}>Welcome to Little Lemon</Text>
                <Text style={styles.regularText}>Login to continue </Text>
                <TextInput style={styles.inputBox} value={email} onChangeText={onChangeEmail} 
                           placeholder="Email ID" keyboardType="email-address"/>
                <TextInput style={styles.inputBox} value={password} onChangeText={onChangePassword}
                           placeholder="Password" secureTextEntry={true} />
            
            <Pressable style={styles.button} onPress={() =>setLoginState(!loggedIn)} >
                <Text style={styles.buttonText}>Login</Text>
            </Pressable>
            </ScrollView>
            </>
        )}
      
      </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#453E57'
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    regularText: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
    },
    inputBox: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderColor: '#EDEFEE',
        backgroundColor: '#EDEFEE',
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 120,
        backgroundColor: '#114FEE',
        borderColor: '#EDEFEE',
        borderWidth: 2,
        borderRadius: 8
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
      },
})