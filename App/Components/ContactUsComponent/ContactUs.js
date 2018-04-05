import React, {Component} from 'react'
import { connect } from 'react-redux';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
    Dimensions,
    FlatList,
    ScrollView,
    Image,
    Alert,
    ImageBackground
} from 'react-native'
import ImagePath from '../../Constants/ImagesPath';
import Strings from '../../Constants/Strings';
import ContactUsStyle from '../ContactUsComponent/ContactUsStyle';
import Colors from '../../Constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';


class ContactUs extends Component {
    render(){
        return(
            <View style={ContactUsStyle.mainContainer}>
            <View style={ContactUsStyle.imageContainer}>
                <Image source={ImagePath.LOGO_SMALL}  />
            </View>
            <View style={ContactUsStyle.headingContainer}>
                <Text style={{textAlign:'center',margin:40,color:Colors.DARK_BLUE,fontWeight:'800'}}>{Strings.CONTACT_US_HEADING}</Text>
            </View>
          <View style={{marginLeft:20}}>
            <View style={ContactUsStyle.searchSection}>
                <Icon name="user" size={20} color={Colors.THEME_COLOR}/>
                <TextInput
                    style={ContactUsStyle.input}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    returnKeyType='next'
                    placeholder={Strings.NAME}
                    onSubmitEditing={(event)=>{this.refs.phone.focus()}}
                   
                  />
                </View>
                <View style={ContactUsStyle.searchSection}>
                <Icon name="key" size={20} color={Colors.THEME_COLOR}/>
                <TextInput
                    ref='phone'
                    style={ContactUsStyle.input}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    returnKeyType='next'
                    placeholder={Strings.PHONE_NUMBER}
                    onSubmitEditing={(event)=>{this.refs.email.focus()}}
                   
                  />
                </View>
                <View style={ContactUsStyle.searchSection}>
                <Icon name="envelope" size={20} color={Colors.THEME_COLOR}/>
                <TextInput
                    ref='email'
                    style={ContactUsStyle.input}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    returnKeyType='next'
                    placeholder={Strings.EMAIL_ADDRESS}
                    onSubmitEditing={(event)=>{this.refs.message.focus()}}
                   
                  />
                </View>
                <View style={ContactUsStyle.searchSection}>
                <Icon name="envelope" size={20} color={Colors.THEME_COLOR}/>
                <TextInput
                    ref='message'
                    style={ContactUsStyle.input}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    returnKeyType='done'
                    placeholder={Strings.MESSAGE}
                    
                   
                  />
                </View>
          </View>
            <View>
                <TouchableHighlight style={ContactUsStyle.buttonStyle}>
                <Text style={{color:'white'}}>Send</Text>
                 </TouchableHighlight>   
             </View>          

            </View>
        );
    }
}

export default ContactUs