import {
    StyleSheet,
    Platform,
    Dimensions
  } from 'react-native';
  const window = Dimensions.get('window');
  export default StyleSheet.create({
  
  profileContainer : {
      flex: 1
  },

  coverImageContainer : {
    width:window.width,
    height:200,
  },
  userImageContainer : {
    borderWidth:3,
    borderRadius:90/2,
    height:90,
    width:90,
    top:'20%',
    position:'absolute',
    alignSelf:'center'
  },
  editIcon:{
      position:'absolute',
      alignSelf:'flex-end',
      top:'80%',
      padding:10,
      
  },
  fieldContainer:{
      flexDirection:'row',
      marginLeft:10,
      marginTop:10,
      padding: 20
  }, 
  textContainer:{
      marginLeft: 10
  },
  
  
  });