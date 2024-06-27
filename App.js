import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LittleLemonHeader from "./components/LittleLemonHeader";
import LittleLemonFooter from "./components/LittleLemonFooter";
import WelcomeScreen from "./components/WelcomeScreen";
import MenuItems from "./components/MenuItems";
import WelcomeScrollbar from "./components/WelcomeScrollbar";
import MenuItemsFlatlist from "./components/MenuItemsFlatlist";
import MenuItemsSectionList from "./components/MenuItemsSectionList";
import FeedbackForm from "./components/FeedbackForm";
import LoginPage from "./components/LoginPage";
import MenuItemsPressable from "./components/MenuItemsPressable";
import LoginPagePressable from "./components/LoginPagePressable";
import WelcomePageImg from "./components/WelcomePageImg";
import WelcomeScreenBg from "./components/WelcomeScreenBg";
import ImageText from "./components/ImageText";
import ColorSchemeHook from "./components/ColorSchemeHook";
import WindowDimensionHook from "./components/WindowDimensionHook";
export default function App() {
  return (
    <>
      <View style={styles.header}>
        <LittleLemonHeader />
      </View>
      <View style={styles.container}>
        {/* <WelcomeScreen/> */}
        {/* <WelcomeScrollbar/> */}
        {/* <MenuItemsFlatlist/> */}
        {/* <MenuItemsSectionList/> */}
        {/* <FeedbackForm/> */}
        {/* <LoginPagePressable/> */}
        {/* <MenuItemsPressable/> */}
        {/* <WelcomePageImg/> */}
        {/* <WelcomeScreenBg/> */}
        {/* <ImageText/> */}
        {/* <ColorSchemeHook /> */}
        <WindowDimensionHook/>
        <View style={styles.footer}>
          <LittleLemonFooter />
        </View>
      </View>

      {/* <View style={styles.container}>
      <Text style={{fontSize:20,color:'#ffffff'}}>Hello, Welcome to Little Lemon App</Text>
      <StatusBar style="inverted" />
    </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.91,
    backgroundColor: "#322333",
  },
  header: {
    flex: 0.09,
    backgroundColor: "#EDEDED",
  },
  footer: {
    flex: 0.05,
  },
});
