import {
    StyleSheet,
    Platform,
    Dimensions
  } from 'react-native';
  import Colors from '../../Constants/Colors';
  const window = Dimensions.get('window');
  export default StyleSheet.create({

    bannerContainer:{
      
    },
  

    headerViewStyle: {
      marginTop: 30,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingLeft: 25,
      paddingRight: 25
    },
    imageViewContainer:{
      borderWidth:2,
      borderRadius:90/2,
      padding:5,
      margin:10,
      height:90,
      width:90,
      borderColor:Colors.THEME_COLOR,
      justifyContent:'center',
      alignItems:'center'
  },
  itemContainer:{
      backgroundColor:'white',
      elevation:2,
      margin:5,
      justifyContent:'center',
      alignItems:'center',
      height:200,
      width:window.width/2-15
  },
  itemProductTitle:{
    color:Colors.FONT_COLOR_BANNER,
    fontWeight:"800",
    fontSize:18,
    alignSelf:'center',
    marginTop:20

  },

  productVariantContainer:{
    width:window.width/3-15,

  },
  productVarianttitle:{
    color:'black',
    fontSize:12,
    fontWeight:'800'
    
  }
   
  });