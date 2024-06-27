import React from "react";
import { StyleSheet,Text,TextInput, ScrollView, KeyboardAvoidingView, Platform } from "react-native";

export default function FeedbackForm(){
    const [firstName, onChangeFirstName] = React.useState('');
    const [lastName, onChangeLastName] = React.useState('');
    const [message, onChangeMessage] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [phoneNumber, onChangePhoneNumber] = React.useState('');
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS==='android' ? 'padding' : 'height'}>
            <ScrollView style={styles.container} keyboardDismissMode="on-drag">

                <Text style={styles.headingSection}>How was your visit to Little Lemon?</Text>
                <Text style={styles.infoSection}> 
                    Little Lemon is a charming neighborhood bistro that serves simple food 
                    and classic cocktails in a lively but casual environment. We would love 
                    to hear your experience with us! 
                </Text> 
                
                <TextInput style={styles.input} placeholder={'First Name'} value={firstName} onChangeText={onChangeFirstName} keyboardType={"name-phone-pad"}/>
                <TextInput style={styles.input} placeholder={'Last Name'} value={lastName} onChangeText={onChangeLastName}/>
                <TextInput style={styles.input} placeholder={'Password'} value={password} onChangeText={onChangePassword} secureTextEntry={true}/>
                <TextInput style={styles.input} placeholder={'Phone Number'} value={phoneNumber} onChangeText={onChangePhoneNumber} keyboardType="phone-pad"/>
                
                <TextInput style={styles.messageInput} placeholder={'Please Leave Feedback'} value={message} 
                           onChangeText={onChangeMessage} multiline={true} maxLength={250}/>
                

            </ScrollView>
        </KeyboardAvoidingView>
    )
}    

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#495E57'
    },
    headingSection : {
        fontSize : 24,
        padding : 20,
        marginVertical : 8,
        color : '#EDEFEE',
        textAlign : 'center',
        backgroundColor : '#495E57',
     
    },
    infoSection: { 
        fontSize: 24, 
        padding: 20, 
        marginVertical: 8, 
        color: '#EDEFEE', 
        textAlign: 'center', 
        backgroundColor: '#495E57', 
    }, 
    messageInput: { 
        height: 100, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        backgroundColor: '#F4CE14', 
    }, 
    input: { 
        height: 40, 
        margin: 12, 
        borderWidth: 1, 
        padding: 10, 
        fontSize: 16, 
        borderColor: 'EDEFEE', 
        backgroundColor: '#F4CE14', 
    },
})