import React from "react";
import { StyleSheet,Text,View, SectionList,Pressable } from "react-native";

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];

const Seperator = () => <View style = {styles.seperator}/>
const Header = () => <Text style={styles.headingText}>View Menu</Text>
const Footer = () => <Text style={styles.footerText}>All RIghts Reserved by Little Lemon, 2024</Text>



const Item = ({name,price}) => {
    return(
        <View style={styles.innerContainer}>
            <Text style={styles.itemsText}>{name}</Text>
            <Text style={styles.itemsText}>{price}</Text>
        </View>
    )
}

export default MenuItemsPressable = () => {
    const renderItem = ({item}) => <Item name = {item.name} price={item.price}/> 
    const renderSectionHeader = ({ section: { title } }) => (
    <View>
      <Text style={styles.sectionHeader}>{title}</Text>
    </View>
  );
    const [showMenu, setShowMenu] = React.useState(false);
    return (
        <View style={styles.container}>
            
            {showMenu && (
            <Text style={styles.infoSection}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. View our
                menu to explore our cuisine with daily specials!
            </Text>
            )}
            <Pressable style={styles.button} onPress={() =>(setShowMenu(!showMenu))}>
                <Text style={styles.buttonText}>{showMenu ? 'View Menu' : 'Home'}</Text>
            </Pressable>

           
            {!showMenu && (
            <SectionList 
                sections={menuItemsToDisplay}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                keyExtractor={(item,index)=> item+index}
                ItemSeparatorComponent={Seperator}
                ListHeaderComponent={Header}
                ListFooterComponent={Footer}
            />   
            )}


        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex:0.75,
        padding:20
    },
    innerContainer : {
        flex:1,
        padding:4,
        flexDirection:'row',
        justifyContent : 'space-between'
    },
    seperator : {
        borderBottomWidth : 1,
        borderColor : '#EDEFEE',
    },
    scrollStyle : {
        paddingLeft:10, 
        backgroundColor:'#EE9972'
    },
    button: {
        fontSize: 22,
        padding: 10,
        marginVertical: 8,
        margin: 40,
        backgroundColor: '#EDEFEE',
        borderColor: '#EDEFEE',
        borderWidth: 2,
        borderRadius: 12
      },
      buttonText: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 32,
      },
      infoSection: {
        fontSize: 24,
        padding: 20,
        marginVertical: 8,
        color: '#EDEFEE',
        textAlign: 'center',
        backgroundColor: '#495E57',
      },
    headingText : {
        fontSize:40,
        flexWrap:'wrap',
        color:'white',
        textAlign:'center',
    },
    footerText : {
        color:'black', 
        fontSize:20,
        textAlign:'center',
        fontStyle:'italic',
        backgroundColor:'white'
    },
    itemsText : {
        color:'#F4CE14',
        fontSize:16
    },
    sectionHeader: {
        backgroundColor: '#fbdabb',
        color: '#333333',
        fontSize: 34,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
})