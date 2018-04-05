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

import {
    getProductCategoryList,
    getProductCategory,
} from "../../../App/Action/ActionCreators";
import {

    showLoading,
    resetState,
} from "./HomeAction";

const {width, height} = Dimensions.get('window')
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeStyle from '../HomeScreen/HomeStyle'
import Api from "../../WooCommerce/Api";
import CommonStyles from '../../CommonStyle/CommonStyle';
import Colors from '../../Constants/Colors';
import Strings from '../../Constants/Strings';
import ImagePath from '../../Constants/ImagesPath';
import * as Progress from 'react-native-progress';
import Card from '../../../native-base-theme/components/Card';
import { Actions } from 'react-native-router-flux';


class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: '',
            data: '',
            productList:[]
        }
    }

    //
    componentWillMount(){
        this.props.showLoading();
        this.props.getProductCategory();
        this.props.getProductCategoryList();
        
    }

    componentDidUpdate(){
        this.onProductListSuccess();
    }

    
    //
    onProductListSuccess() {
        if (this.props.homeReducer.productCategoryNewList != '') {
            this.setState({ productList: this.props.homeReducer.productCategoryNewList });
         }else {
            alert("Cannot retrieve product list");
        }
        this.props.resetState();
    }

  
    
    deleteData(){
        this.setState({text: '', data: ''})
    }
    _renderItem(item){
       
        return (
            <TouchableHighlight underlayColor={Colors.DARK_BLUE} onPress={this.navigateTocategory.bind(this, item.id)}>
            <View style={HomeStyle.itemContainer}>
            <Image key={item.key} style={styles.image} source={{uri: item.images[0].src} }  />
            <View style={{left:5,position:'absolute',height:45,width:45,borderRadius:45/2,justifyContent:'center',alignItems:'center', backgroundColor:Colors.ORANGE}}/>
            <Text style={{position:'absolute',fontSize:12,left:12,color:'white'}}>2300</Text>
            <View>
            <Text style={HomeStyle.itemProductTitle}>{item.name}</Text>
            <Text style={{alignSelf:'center',padding:5,color:Colors.FONT_COLOR}}>Up To {item.price} SEK</Text>
            </View>
            </View>   
          
            {/* */}
          </TouchableHighlight>
        )
    }

    navigateTocategory(item){
        Actions.productDetail({ productId:item});
    }

    render(){
        return (
            <View style={styles.container}>
              <ImageBackground 
                style={styles.thumbnail}
                source={ImagePath.DASHBOARD_BANNER}
            >
            <Text style={styles.bannerTitleStyle}>{Strings.LAUNDRY_DONE}</Text>
            </ImageBackground>  
            <ScrollView>
                    <FlatList 
                        style={{marginHorizontal: 5}}
                        data={this.state.productCategoryNewList}
                        numColumns={2}
                        contentContainerStyle={styles.list}
                        columnWrapperStyle={{marginTop: 5}}
                        renderItem={({item}) => this._renderItem(item)}
                    />
          </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: Colors.HOME_BG
    },
    image: {
        width: 100,
        height: 100,
       
        
       
    },
    thumbnail: {
        width: "100%",
        height: 150
    },
    bannerTitleStyle:{
        color:'white',
        fontSize:20,
        alignSelf:'center',
        top:50
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
      }
})

function mapStateToProps(state) {
    console.log('mapStateToProps= ', JSON.stringify(state));
    return {
        homeReducer: state.homeReducer
    }
}


export default connect(
    mapStateToProps,
    {
         getProductCategory,
         getProductCategoryList,
         showLoading
    }

)(Home)