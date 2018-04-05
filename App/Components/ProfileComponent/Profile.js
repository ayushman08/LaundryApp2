import React, { Component } from 'react';
import { connect } from 'react-redux';
import {View , Text, Image } from 'react-native';
import ProfileStyle from './ProfileStyle';
import ImagePath from '../../Constants/ImagesPath';
import IconFont from 'react-native-vector-icons/MaterialIcons';
import IconFont2 from 'react-native-vector-icons/FontAwesome';
import Colors from '../../Constants/Colors';
import {
    getUserDetails,
} from "../../../App/Action/ActionCreators";
import {

    showLoading,
    resetState,
} from "./ProfileAction";

class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            text: '',
            data: '',
            userDetails:[]
        }
    }
    
  componentWillMount(){
      //  this.props.showLoading();
        this.props.getUserDetails();
    }

    render(){
        const { profileContainer, coverImageContainer, userImageContainer, editIcon, fieldContainer , textContainer,profileInfoContainer} = ProfileStyle;
        return (
            <View style={profileContainer}>
                <View style={coverImageContainer}>
                <Image source={ImagePath.DASHBOARD_BANNER} />
                <Image source={ImagePath.USER_DEFAULT} style={userImageContainer}/>
                 <IconFont2 name="edit" size={35} color={Colors.GREEN} style={editIcon}/>
                </View>
                <View style={profileInfoContainer}>
                    <View style={fieldContainer}>
                     <IconFont2 name="map-o" size={20} color={Colors.DARK_BLUE} />
                     <Text style={textContainer}>Address</Text>
                    </View>
                    <View style={fieldContainer}>
                     <IconFont2 name="envelope" size={20} color={Colors.DARK_BLUE} />
                     <Text style={textContainer}>sunidhi.sahu@smartdatainc.net</Text>
                    </View> 
                    <View style={fieldContainer}>
                     <IconFont2 name="mobile" size={20} color={Colors.DARK_BLUE} />
                     <Text style={textContainer}>97890976787</Text>
                    </View> 
                    <View style={fieldContainer}>
                     <IconFont name="payment" size={20} color={Colors.DARK_BLUE} />
                     <Text style={textContainer}>sunidhi.sahu@smartdatainc.net</Text>
                    </View>      
                </View>    

            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log('mapStateToProps= ', JSON.stringify(state));
    return {
        profileReducer: state.profileReducer
    }
}


export default connect(
    mapStateToProps,
    {
         getUserDetails,
         showLoading
    }

)(Profile)