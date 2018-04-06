import {
    StyleSheet,
    Platform,
  } from 'react-native';
  import Colors from '../../Constants/Colors';
  export default StyleSheet.create({
  
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.WHITE,
    },

    imageContainer:{
        flex:0.2,
        alignItems:'center',
        marginTop:30
        
    },
    headingContainer:{
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center',
        marginTop:20
    },
    searchSection:{
        flexDirection: 'row',
        alignItems:'center',
        margin: Platform.OS  === "ios" ? 18 : 5,
    },
    input:{
        flex:1,
        width: null,
        marginLeft:20,
        fontSize:15
        
    },
    buttonStyle:{
        margin:20,
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:0.5,
        borderRadius:20,
        borderColor:Colors.DARK_BLUE,
        backgroundColor:Colors.DARK_BLUE,
      
      },
   
  });