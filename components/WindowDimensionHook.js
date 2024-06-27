import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default WindowDimensionHook = () => {
  const {height, width, fontScale} = useWindowDimensions();

  return (
    <View style={styles.container}>
      
      <Text style={styles.regular}>Intern</Text>
      <Text style={styles.regular}>Mentor</Text>
      <Text style={styles.regular}>Admin</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 300,
  },
  container: {
    flex: 1,
    flexDirection:'row',
    alignContent:'space-evenly',
    textAlign:'justify'
    
  },
  regular: {
    color:'white',
    fontSize: 18,
    
  },
});
