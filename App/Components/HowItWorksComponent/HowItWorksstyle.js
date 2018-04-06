import {
    StyleSheet,
    Platform,
  } from 'react-native';
  import Colors from '../../Constants/Colors';
  export default StyleSheet.create({

    imageIconNumber:{
        height:70,
        width:70,
        alignSelf:'center',
        marginRight:100
    },
    
    itemImageIcon :{
        height:100,
        width:100,
        alignSelf:'center'
    },
    itemImageTitle:{
        fontSize:22,
        marginTop:20,
        color:Colors.FONT_COLOR_BANNER,
        fontWeight:'800'
    },
    itemImageSubTitle:{
        fontSize:15,
        margin:15,
        color:Colors.BLACK,
        alignSelf:'center',
        textAlign:'center'
    }
  });