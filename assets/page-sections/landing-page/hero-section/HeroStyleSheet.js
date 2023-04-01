import { StyleSheet,Dimensions,StatusBar } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

  const statusBarHeight = StatusBar.currentHeight || 0;
  const notchHeight = 44;

export const styles = StyleSheet.create({
    mainContainer:{
       flex:1,
    },
    backgroundImage:{
        flex:1,
        width:windowWidth,
        height:windowHeight,
    },
    container:{
        padding:20
    },
    headerText:{
        fontSize:54,
        fontFamily:'Outfit-Bold'
    },
    headerTextGradient:{
        fontSize:54,
        fontFamily:'Outfit-Bold',
        color:'red'
    },
    normalText:{
        fontSize:18,
        fontFamily:'Outfit-Light',
        marginVertical:10,
    },
    relativeContainer:{
        position:'relative',
        padding:20
    },
    absoluteContainer:{
        position:'absolute'
    },
    dotsImage:{
        width:400,
        height:400,
        resizeMode:'cover'
    }
})