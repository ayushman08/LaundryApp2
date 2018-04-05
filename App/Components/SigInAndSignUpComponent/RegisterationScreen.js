import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    Alert,
    Platform,
    TextInput,
    ScrollView,
    AsyncStorage,
    ImageEditor,
} from 'react-native';


import { Actions } from 'react-native-router-flux';
import CommonStyles from '../../CommonStyle/CommonStyle';
import Colors from '../../Constants/Colors';
import Strings from '../../Constants/Strings';
import ImagePath from '../../Constants/ImagesPath';
import SignInScreen from './SignInComponent/SignInScreen';
import SignUpScreen from './CreateAccountComponent/SignUpScreen';
import SignInStyle from './SignInComponent/SignInScreenStyle';
import { View,Container, Header, Content, Tab, Tabs  } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import LocalizedStrings from 'react-native-localization';

 
// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');
 




var postData = {};

class RegisterationScreen extends Component {

    constructor() {
        super();
        this.state = {
            isKeepSignedIn: false,
            isPasswordVisible: true,
            errorMsg: '',
            errorOnTextField: '',
            signIn:true,
            currentColorSignIn:Colors.DARK_BLUE,
            currentColorSignUp:Colors.LIGHT_GRAY_TEXT_COLOR

        };
        this.helloWorld = this.helloWorld.bind(this);
    }

    helloWorld() {
        console.log("hii");
        this.setState({ signIn: true });
    }

    onChangeContainerToSignin() {
        this.setState({currentColorSignIn:Colors.DARK_BLUE})
        this.setState({currentColorSignUp:Colors.LIGHT_GRAY_TEXT_COLOR})
        this.setState({ signIn: true });
    
    }

    onChangeContainerToSignUp(){
        this.setState({currentColorSignIn:Colors.LIGHT_GRAY_TEXT_COLOR})
        this.setState({currentColorSignUp:Colors.DARK_BLUE})
        this.setState({ signIn: false });
    }

    componentWillMount(){
        Strings.setLanguage('en');
    }

    

    

    
    render() {
        const { container,headerImageContainer, imageStyle, tabContainer,textStyle,
            signInAndSignUpContainer} = styles
        return (
           <View style={container}>
               <View style={headerImageContainer}>
               <Image source={ImagePath.LOGO_SMALL} style={imageStyle}/>
                </View>
                <View style={tabContainer}>
                <TouchableOpacity onPress={() => this.onChangeContainerToSignin()}>
                    <Text style={[styles.textStyle, {color:this.state.currentColorSignIn}]}>{Strings.SIGNIN}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.onChangeContainerToSignUp()}>
                    <Text style={[styles.textStyle, {color:this.state.currentColorSignUp}]}>{Strings.SIGNUP}</Text>
                </TouchableOpacity>
                 </View>  
                 <View style={signInAndSignUpContainer}>
               
                    {
                        this.state.signIn == true
                            ?
                           <SignInScreen />
                            :
                            <SignUpScreen method={this.helloWorld}/>

                    }
                
                 </View> 
            </View>
        );      
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
      },
      headerImageContainer:{
        flex:0.5,
        width: null,
        alignItems: 'center',
        justifyContent: 'center'
      },
     
      tabContainer:{
         flex:0.1,
         width:null,
         height:10,
         padding:10,
         flexDirection: 'row',
         justifyContent: 'space-around',
        
      },
      textStyle:{
          fontSize: 18,
          fontStyle: 'normal',
          fontWeight:'800',
          color: Colors.DARK_BLUE
      },
      signInAndSignUpContainer:{
          flex:1,
          width:null,
          marginLeft:20,
          marginRight:20
        
      }
      
});


export default RegisterationScreen;
