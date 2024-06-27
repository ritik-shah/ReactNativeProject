import { StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen(){
    return(
        <View style={{}}>
            <Text style={styles.welcomeText}>
                Welcome to Little Lemon</Text>
            <Text style={styles.descText}>
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails 
            in a lively but casual environment. We would love to hear more about your experience with us!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    welcomeText : {
        fontSize:30,
        color:'white',
        textAlign:'center',
        paddingTop:50
    },
    descText : {
        fontSize:18,
        color:'white',
        textAlign:'center',
        padding:20,
        marginVertical:8
    }
})