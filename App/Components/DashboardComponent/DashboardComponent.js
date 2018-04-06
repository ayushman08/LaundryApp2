import React, { Component } from "react";
import { connect } from 'react-redux';
import { StatusBar, View, Image, TouchableOpacity,TouchableHighlight,TouchableWithoutFeedback, ImageBackground, Dimensions,AsyncStorage,Alert,ScrollView,Text,StyleSheet } from "react-native";
import { Actions } from 'react-native-router-flux';
import {
    Button,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right,
    List,
    ListItem,
    StyleProvider
} from "native-base";
import Drawer from 'react-native-drawer';
const routes = ["Home", "Chat", "Profile"];
import DashboardStyle from './DashboardScreenStyle';
import ImagePath from '../../Constants/ImagesPath';
import CommonStyles from '../../CommonStyle/CommonStyle';
import Colors from '../../Constants/Colors';
import Strings from '../../Constants/Strings';
import Home from '../HomeScreen/Home';
import Profile from '../ProfileComponent/Profile'
import HowItWorks from '../HowItWorksComponent/HowItworks'
import HomeStyle from '../HomeScreen/HomeStyle';
import DashboardScreenStyle from "./DashboardScreenStyle";
import getTheme from '../../../native-base-theme/components';
import IconFont from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFont2 from 'react-native-vector-icons/FontAwesome';

import {
	userLogout
} from "../../Action/ActionCreators";

import {
	logout,
	showLoading,
	resetState,
} from "../LogoutComponent/LogoutAction";
import ContactUs from "../ContactUsComponent/ContactUs";

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
    main: { paddingLeft: 3 },
}

const windowStyle = Dimensions.get('window');


class DashboardComponent extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: 0,
            previousTab: 0,
            userInfo: {},
            selectedMenuItem: Strings.DASHBOARD,
            userPermission: [],
            roleName: '',
            statisticsData: {},
            title:'Services'

        };
    }

    componentWillMount(){

        AsyncStorage.getItem("LaundryCustomerInfo").then((value) => {
			if (value) {
				var userData = JSON.parse(value);
				this.setState({ userInfo: userData });
			}
		}).done();
    }

    componentDidUpdate(){
      this.onLogoutSuccess();
      
    }

    closeControlPanel = () => {
        this._drawer.close()
    };

    openControlPanel = () => {
        this._drawer.open()

    };

    navBar() {

        return (
            <View>
                <View style={{backgroundColor:Colors.THEME_COLOR,paddingTop:25,paddingBottom:15}}>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                <TouchableOpacity onPress={() => this.openControlPanel()} style={{flex:1}} >
                <IconFont name="menu" size={30} color='white' style={{marginLeft:10}} />
                </TouchableOpacity>
                <Text style={DashboardScreenStyle.headerTitle}>{this.state.title}</Text>
                <Text style={{ flex: 1, textAlign: 'center'}}></Text>
             </View>
      </View>
			</View>
   
        );
    }
    changeTodashboard() {
		this.setState({ selectedMenuItem: Strings.DASHBOARD , title:Strings.DASHBOARD});
		this.closeControlPanel();
    }
    
    changeTomyProfile() {
		this.setState({ selectedMenuItem: Strings.MY_PROFILE , title:Strings.MY_PROFILE});
		this.closeControlPanel();
    }
    
    changeToOrderList() {
		this.setState({ selectedMenuItem: Strings.ORDER_LISTING , title:Strings.ORDER_LISTING});
		this.closeControlPanel();
    }

    changeTohowItworks(){
        this.setState({selectedMenuItem:Strings.HOW_IT_WORKS,title:Strings.HOW_IT_WORKS});
        this.closeControlPanel();
    }

    changeToContactUsScreen(){
        this.setState({selectedMenuItem:Strings.CONTACT_US,title:Strings.CONTACT_US});
        this.closeControlPanel();
    }
    

    confirmUserLogout() {
		Alert.alert(
			Strings.APP_NAME,
			Strings.LOGOUT_CONFIRMATION_MSG,
			[
				{ text: Strings.YES, onPress: () => this.onLogout() },
				{ text: Strings.NO, onPress: () => console.log("Logout Denied") },
			],
			{ cancelable: false }
		)
    }
    
    onLogout() {

		//console.log('userdata:', this.state.userInfo);
		if (this.state.userInfo.data) {
			//console.log('userdata:', this.state.userInfo.data + ' ' + this.state.userInfo.data.user_id);
			logoutPostData = {
				token: this.state.userInfo.data.token
			};
			this.props.showLoading();
			this.props.userLogout(logoutPostData);

		}
    }
    
    onLogoutSuccess() {

		if (this.props.logoutReducer.logoutResponse != '') {

			if (this.props.logoutReducer.logoutResponse.success) {
                Actions.registerScreen({ type: "reset" });
				AsyncStorage.clear();
			}
			else {
				//alert(this.props.logoutReducer.logoutResponse.message);

			}
			this.props.resetState();
		}
	}


    drawerContentView() {
        return (
            <View style={styles.container}>
             <TouchableHighlight 
                    style={styles.closeButton}
                    onPress={() => this.closeControlPanel()}
                >
                    <IconFont2 
                        name="close"
                        color="white"
                        size={20}
                    />
                </TouchableHighlight>
              
                <ImageBackground 
                style={styles.thumbnail}
                source={ImagePath.DASHBOARD_BANNER}
            >
             <View style={styles.buttonPlay}>
                    <TouchableWithoutFeedback
                        onPress={() => this.changeTomyProfile()}
                    >
                        <View>
                        <Image source={ImagePath.LOGO_SMALL} />
                        </View>
                    </TouchableWithoutFeedback>
            
                </View>
                
                </ImageBackground>
              <ScrollView>
                <View style={DashboardStyle.drawerItemViewContainer}>
                    <TouchableOpacity onPress={() => null}>
                                        <View style={DashboardStyle.drawerMenuItemViewStyle}>
                                        <IconFont2 name="user" color={Colors.DARK_BLUE} size={20}/>
                                            <View style={DashboardStyle.drawerItemTextViewStyle}>
                                                <Text style={DashboardStyle.drawerItemText}>{Strings.MY_PROFILE}</Text>
                                            </View>
                                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>this.changeTodashboard()}>
                                        <View style={DashboardStyle.drawerMenuItemViewStyle}>
                                        <Image source={ImagePath.SERVICES_ICON} />
                                            <View style={DashboardStyle.drawerItemTextViewStyle}>
                                                <Text style={DashboardStyle.drawerItemText}>{Strings.DASHBOARD}</Text>
                                            </View>
                                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => null}>
                                        <View style={DashboardStyle.drawerMenuItemViewStyle}>
                                        <IconFont name="book-multiple" color={Colors.DARK_BLUE} size={20}/>
                                            <View style={DashboardStyle.drawerItemTextViewStyle}>
                                                <Text style={DashboardStyle.drawerItemText}>{Strings.ORDER_LISTING}</Text>
                                            </View>
                                        </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => this.changeTohowItworks()}>
                                        <View style={DashboardStyle.drawerMenuItemViewStyle}>
                                      
                                        <IconFont name="view-grid" color={Colors.DARK_BLUE}size={20}/>
                                            <View style={DashboardStyle.drawerItemTextViewStyle}>
                                                <Text style={DashboardStyle.drawerItemText}>{Strings.HOW_IT_WORKS}</Text>
                                            </View>
                                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.changeToContactUsScreen()}>
                                        <View style={DashboardStyle.drawerMenuItemViewStyle}>
                                      
                                        <IconFont2 name="envelope" color={Colors.DARK_BLUE}size={20}/>
                                            <View style={DashboardStyle.drawerItemTextViewStyle}>
                                                <Text style={DashboardStyle.drawerItemText}>{Strings.CONTACT_US}</Text>
                                            </View>
                                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => null}>
                                        <View style={DashboardStyle.drawerMenuItemViewStyle}>
                                      
                                        <IconFont name="information" color={Colors.DARK_BLUE}size={20}/>
                                            <View style={DashboardStyle.drawerItemTextViewStyle}>
                                                <Text style={DashboardStyle.drawerItemText}>{Strings.ABOUT_US}</Text>
                                            </View>
                                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>this.confirmUserLogout()}>
                                        <View style={DashboardStyle.drawerMenuItemViewStyle}>
                                       
                                        <IconFont name="logout" color={Colors.DARK_BLUE}size={20}/>
                                            <View style={DashboardStyle.drawerItemTextViewStyle}>
                                                <Text style={DashboardStyle.drawerItemText}>{Strings.LOGOUT}</Text>
                                            </View>
                                        </View>
                    </TouchableOpacity>
                    </View>
                </ScrollView>

            </View>
        );
      

    }

    _showSelectedScreen() {
        return(
        <View style={{flex:1}}>
        {this.navBar()}
        {this.staticView()}
        </View>
        );


        

    }

    staticView(){
        console.log("Dashboard",this.state.selectedMenuItem);
        if (this.state.selectedMenuItem==Strings.DASHBOARD) {
           console.log("Dashboard",this.state.selectedMenuItem);
            return(
                
                <Home />
         
             
        );

        }else if(this.state.selectedMenuItem==Strings.MY_PROFILE){
            return(
                <Profile />
        );
        

        }else if(this.state.selectedMenuItem==Strings.ORDER_LISTING){
            return(
                <View>
                  <Text>ORDER_LISTING</Text>
                </View>
        );
    }else if(this.state.selectedMenuItem==Strings.HOW_IT_WORKS){
            return(
              <HowItWorks />
        );
        }else if(this.state.selectedMenuItem==Strings.CONTACT_US){
            return(
                <ContactUs />
            );
        }
        
    }

    render() {


        return (

            <View style={{ flex: 1}}>
                <Drawer
                    ref={(ref) => this._drawer = ref}
                    type="overlay"
                    content={this.drawerContentView()}
                    tapToClose={true}
                    openDrawerOffset={0.0} // 20% gap on the right side of drawer
                    panCloseMask={0.2}
                    closedDrawerOffset={-3}
                    styles={drawerStyles}
                    acceptTap={true}
                    tweenHandler={(ratio) => ({
                        main: { opacity: (2 - ratio) / 2 }
                    })}
                >
                    {this._showSelectedScreen()}
                </Drawer>
            </View>
        );
    }
}

function mapStateToProps(state) {
	console.log('mapStateToProps= ', JSON.stringify(state));
	return {
		logoutReducer: state.logoutReducer,
	}
}

export default connect(
	mapStateToProps,
	{
		userLogout,
		showLoading,
		resetState,
	}

)(DashboardComponent)

const styles = StyleSheet.create({
   
    closeButton: {
      position: 'absolute',
      top: 15,
      right: 10,
      zIndex: 2
  },
  container: {
      flex: 1,
      backgroundColor: Colors.WHITE
  },
  thumbnail: {
      width: "100%",
      height: 200
  },
  buttonPlay: {
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center'
  },
  iconPlay: {
      opacity: 0.7,
      backgroundColor: 'transparent'
  },
  text: {
      color: '#b3b3b3',
      fontSize: 16
  },
  
})