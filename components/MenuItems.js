import { StyleSheet, Text, View, ScrollView } from 'react-native';

const green = '#495es7';
const yellow = '#f4ce14';

const menuItemstoDisplay = [
    'Hummus \n Moutabal \n Falafel \nkofta  \
    \nHummus \n Moutabal \n Falafel \nkofta \
    \nHummus \n Moutabal \n Falafel \nkofta \
    \nHummus \n Moutabal \n Falafel \nkofta \
    \nHummus \n Moutabal \n Falafel \nkofta \
    \nHummus \n Moutabal \n Falafel \nkofta'
];

export default MenuItems = () => {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollStyle} horizontal={false} indicatorStyle={'yellow'}>
                <Text style={styles.headingText}>View Menu</Text>
                <Text style={styles.itemsText}>{menuItemstoDisplay[0]}</Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex:0.75,
        padding:20
    },
    scrollStyle : {
        paddingLeft:10, 
        backgroundColor:'#EE9972'
    },
    headingText : {
        fontSize:40,
        flexWrap:'wrap',
        color:'white'
    },
    itemsText : {
        color:'black',
        fontSize:16
    }
})