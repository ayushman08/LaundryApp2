import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Image,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Alert,
    Platform,
    TextInput,
    ScrollView,
    AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CommonStyles from '../../../CommonStyle/CommonStyle';
import Colors from '../../../Constants/Colors';
import Strings from '../../../Constants/Strings';
import ImagePath from '../../../Constants/ImagesPath';
import SignUpStyle from './SignupScreenStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignInStyle from '../SignInComponent/SignInScreenStyle';
import Api from "../../../WooCommerce/Api";
import * as Progress from 'react-native-progress';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { validateEmail } from '../../../Constants/CommonFunctions';

import {
    userLogin,
    userRegistration,
} from "../../../Action/ActionCreators";

import {
    firstNameChanged,
    lastNameChanged,
    emailChanged,
    phoneNumberChanged,
    signUpPasswordChanged,
    confirmPasswordChanged,
    showLoading,
    resetState,
    userType,
    clearResponse
} from "./SignUpAction";
import FBSDK, { LoginManager } from 'react-native-fbsdk';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';

var signUpPostData = {};
var signInPostData = {};

class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            isAgree: false,
            userType: '',
            errorMsg: '',
            errorOnTextField: '',
            isPasswordVisible:true,
            password:''
        };
    }

    onFirstNameChange(text) {

        this.props.firstNameChanged(text);
        this.setState({ errorMsg: '' });
        this.setState({ errorOnTextField: '' });
    }

    onEmailChange(text) {

        this.props.emailChanged(text);
        this.setState({ errorMsg: '' });
        this.setState({ errorOnTextField: '' });
    }

    onPhoneNumberChange(text) {

        this.props.phoneNumberChanged(text);
        this.setState({ errorMsg: '' });
        this.setState({ errorOnTextField: '' });
       
       
    }

    onPasswordChange(text) {

        this.props.signUpPasswordChanged(text);
        if(text==''){
            this.setState({ errorMsg: '' });
            this.setState({ errorOnTextField: '' });
        }
      
    }


signUp(){
    if (this.props.signUpReducer.firstName== '') {

        this.setState({ errorMsg: Strings.ERROR_EMPTY_FIRST_NAME });
        this.setState({ errorOnTextField: 0 });
    } 
    else if (this.props.signUpReducer.email=='') {

        this.setState({ errorMsg: Strings.ERROR_INVALID_EMAIL });
        this.setState({ errorOnTextField: 2 });
    }

    else if (this.props.signUpReducer.phoneNumber.trim() == '') {

        this.setState({ errorMsg: Strings.ERROR_EMPTY_PHONE_NUMBER });
        this.setState({ errorOnTextField: 3 });
    }

    else if (this.props.signUpReducer.phoneNumber.length != 10) {

        this.setState({ errorMsg: Strings.ERROR_INVALID_PHONE_NUMBER });
        this.setState({ errorOnTextField: 3 });
    }
    else if (this.props.signUpReducer.password.trim() == '') {

        this.setState({ errorMsg: Strings.ERROR_EMPTY_PASSWORD });
        this.setState({ errorOnTextField: 4 });
    }


    else {

        signUpPostData = {

            email_address: this.props.signUpReducer.email,
            password: this.props.signUpReducer.password,
            username: this.props.signUpReducer.firstName,
            phone_number: this.props.signUpReducer.phoneNumber

        };
        console.log('singup post data== ',JSON.stringify(signUpPostData));
        this.props.showLoading();
        this.props.userRegistration(signUpPostData);
    }
}

componentDidUpdate(){
    this.onSignUpSuccess();
    this.onLoginSuccess();
}

onSignUpSuccess() {
    if (this.props.signUpReducer.signUpResponse != '') {

        if (this.props.signUpReducer.signUpResponse.success == true) {
            console.log(this.props.signInReducer.signUpResponse);
            
                AsyncStorage.setItem("LaundryCustomerInfo", JSON.stringify(this.props.signUpReducer.signUpResponse));
                Alert.alert(
                    Strings.APP_NAME,
                    Strings.REGISTERATION_COMPLETED,
                    [
                        { text: Strings.OK, onPress: this.onAlertConfirm.bind(this) },
                      
                    ],
                    { cancelable: true }
                )
                this.props.clearResponse();  
            
      
        }
       else {
        Alert.alert(
			Strings.APP_NAME,
			this.props.signUpReducer.signUpResponse.data.message,
			[
				{ text: Strings.OK, onPress: () => console.log("OK") },
            
			],
			{ cancelable: true }
		)
       
        this.props.resetState();
        }


    }
}

onLoginSuccess() {

    if (this.props.signInReducer.loginRes != '') {

        if (this.props.signInReducer.loginRes.success) {

            if (this.props.signInReducer.loginRes.data.token != '') {

                 console.log('userinfo : ' + JSON.stringify(this.props.signInReducer.loginRes));
                AsyncStorage.setItem("LaundryCustomerInfo", JSON.stringify(this.props.signInReducer.loginRes));
               Actions.dashboardScreen({type:'reset'});
              //  this.props.resetState();

            }

        }
        else {
            
                alert(this.props.signInReducer.loginRes.error);
             this.props.clearResponse();   
        }
    }
    
}

onAlertConfirm(){
 //   Actions.dashboardScreen({type:'reset'});

 postData = {
    username: this.props.signUpReducer.firstName,
    password: this.props.signUpReducer.password
};
this.props.showLoading();
this.props.userLogin(postData);
}



signInWithFacebook(){
    LoginManager.logInWithReadPermissions(['public_profile']).then(
        function(result) {
          if (result.isCancelled) {
            alert('Login cancelled');
          } else {
              Actions.dashboardScreen({type:'reset'});
            alert('Login success with permissions: '
              +result.grantedPermissions.toString());
          }
        },
        function(error) {
          alert('Login fail with error: ' + error);
        }
      );
}

signInWithGooglePlus(){
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
      this.setState({user: user});
      console.log(user);
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
.done();
}
  
   

    render() {
        // let { firstName } = this.state

        return (
            <ScrollView>
            <View style={{flex:1}}>
           
            <View>
            {
            this.state.errorMsg != ''? <Text style={CommonStyles.errorText}>{this.state.errorMsg}</Text> : null
            }
            
            <View style={styles.searchSection}>
                <Icon style={styles.searchIcon} name="user" size={20} color={Colors.THEME_COLOR}/>
                <TextInput
                    style={styles.input}
                    placeholder={Strings.NAME}
                    placeholderTextColor = "grey"
                    returnKeyType='next'
                    autoCapitalize='none'
                    underlineColorAndroid='transparent'
                    onChangeText={this.onFirstNameChange.bind(this)}
                    value={this.props.signUpReducer.firstName}
                    onSubmitEditing={(event)=>{this.refs.email.focus()}}
                   
                  />
            </View>
            <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="envelope" size={20} color={Colors.THEME_COLOR}/>
                <TextInput
                    ref='email'
                    style={styles.input}
                    placeholder={Strings.EMAIL}
                    placeholderTextColor = "grey"
                    returnKeyType='next'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    underlineColorAndroid='transparent'
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.signUpReducer.email}
                    onSubmitEditing={(event)=>{this.refs.phone.focus()}}
                    
                  />
            </View>
            <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="phone" size={20} color={Colors.THEME_COLOR} />
                <TextInput
                    ref='phone'
                    style={styles.input}
                    placeholderTextColor = "grey"
                    placeholder={Strings.PHONE_NUMBER}
                    returnKeyType='next'
                    keyboardType='numeric'
                    underlineColorAndroid='transparent'
                    onChangeText={this.onPhoneNumberChange.bind(this)}
                    value={this.props.signUpReducer.phoneNumber}
                    onSubmitEditing={(event)=>{this.refs.password.focus()}}
                   
                  />
            </View>
            <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="key" size={20} color={Colors.THEME_COLOR} />
                <TextInput
                    ref='password'
                    style={styles.input}
                    placeholderTextColor = "grey"
                    placeholder={Strings.PASSWORD}
                    underlineColorAndroid='transparent'
                    returnKeyType='done'
                    secureTextEntry={this.state.isPasswordVisible ? true : false}
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.signUpReducer.password}
                   
                    
                  />
            </View>
            </View>
   
            <View style={SignInStyle.buttonContainer}>
            <TouchableOpacity onPress={() => this.signUp()} style={SignInStyle.buttonStyle}>
                    <Text style={SignInStyle.textStyle}>{Strings.SIGNUP}</Text>
                </TouchableOpacity>
                <Text style={{marginTop:10,alignSelf:'center'}}>OR</Text>
                <TouchableOpacity onPress={() => this.signInWithFacebook()} style={SignInStyle.facebookbuttonStyle}>
                    <Icon size={20} color='white' name="facebook" style={SignInStyle.iconStyle}/>
                    <Text style={SignInStyle.textStyle}>{Strings.SIGNIN_WITH_FACEBOOK}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.signInWithGooglePlus()} style={SignInStyle.googlebuttonStyle}>
                    <Icon size={20} color='white' name="google" style={SignInStyle.iconStyle}/>
                    <Text style={SignInStyle.textStyle}>{Strings.SIGNIN_WITH_GOOGLE}</Text>
            </TouchableOpacity>
          
            </View>
            {   
                               
                               this.props.signUpReducer.isScreenLoading ?
                               <View style={CommonStyles.circles}>
                                   <Progress.CircleSnail color={[Colors.DARK_BLUE ,Colors.DARK_BLUE, Colors.GREEN]} />
                               </View>
                               : null
                            
             }  
            </View>  
             
                 </ScrollView>    
                      

                          
        );
    }
}

const styles = StyleSheet.create({
    
      searchSection:{
          flexDirection: 'row',
          alignItems:'center',
          margin: Platform.OS === "ios" ? 15 : 0,
      },
      input:{
          flex:1,
          marginLeft:20,
          fontSize:15
          
      }
});

function mapStateToProps(state) {
    console.log('mapStateToProps= ', JSON.stringify(state));
    return {
        signUpReducer: state.signUpReducer,
        signInReducer: state.signInReducer
    }
}


export default connect(
    mapStateToProps,
    {
        userLogin,
        userRegistration,
        firstNameChanged,
        lastNameChanged,
        emailChanged,
        phoneNumberChanged,
        signUpPasswordChanged,
        confirmPasswordChanged,
        showLoading,
        resetState,
        userType,
        clearResponse
    }

)(SignUpScreen)