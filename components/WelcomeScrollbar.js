import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function WelcomeScrollbar(){
    return(
     
        <ScrollView indicatorStyle={"white"} style={styles.container}>
                <Text style={styles.textstyle}>Little Lemon is a charming neighborhood bistro that serves 
                    simple food and classic cocktails in a lively but casual 
                    environment. We would love to hear more about your experience 
                    with us!</Text>
            </ScrollView>
     

    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    },

    textstyle : {
        fontSize:40,
        padding:40,
        color:'white'
    }
})