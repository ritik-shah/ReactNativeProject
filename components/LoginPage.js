import React from "react";
import { StyleSheet,Text,View,TextInput, ScrollView, ImageBackground, KeyboardAvoidingView, Platform, Alert } from "react-native";


export default function LoginPage(){
    const [email,onChangeEmail] = React.useState('');
    const [password,onChangePassword] = React.useState('');
    return(
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS==='android' ? 'padding':'height'}>
            <ScrollView style={styles.container}>
                <Text style={styles.headerText}>Welcome to Little Lemon</Text>
                <Text style={styles.regularText}>Login to continue </Text>
                <TextInput style={styles.inputBox} value={email} onChangeText={onChangeEmail} 
                           placeholder="Email ID" keyboardType="email-address"/>
                <TextInput style={styles.inputBox} value={password} onChangeText={onChangePassword}
                           placeholder="Password" secureTextEntry={true} 
                           onFocus={() => Alert.alert("Please Enter Password")}
                           onBlur={() => Alert.alert("Blurred")}/>
            </ScrollView>
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
})