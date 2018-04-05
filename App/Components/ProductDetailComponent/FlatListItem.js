import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native'
import {
    getProductDetails,
} from "../../../App/Action/ActionCreators";
import HomeStyle from '../HomeScreen/HomeStyle';
import Colors from '../../Constants/Colors';
import HTML from 'react-native-render-html';

class FlatListItem extends Component {

    passIndex(itemindex){
    this.props.getItemIndex(itemindex)

    this.props.callGetVariants(itemindex);
    }

    render() {  
        console.log("Image uri>>>"+this.props.item.images[0].src);        
        return (

            <TouchableHighlight underlayColor={Colors.DARK_BLUE} onPress={()=>this.passIndex(this.props.index)}>
            <View style={[HomeStyle.itemContainer,{width:150,height:200}]}>
            <View style={HomeStyle.imageViewContainer}>
            <Image key={this.props.item.key} style={styles.image} source={{uri: this.props.item.images[0].src} }  />
            </View>
            <View>
            <Text style={HomeStyle.itemProductTitle}>{this.props.item.name}</Text>
            <Text style={{alignSelf:'center',padding:5,color:Colors.FONT_COLOR}}>Up To {this.props.item.price} SEK</Text>
            </View>
            </View>   
          
            {/* */}
          </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: Colors.THEME_COLOR,
        paddingHorizontal: 15,
        paddingTop: 10,
    }
    ,
    selectedcard:{
       borderColor: "blue",
       borderWidth: 10,
    },
    image: {
        width: 60,
        height: 70,
        alignSelf:'center'
        
       
    }
})

function mapStateToProps(state) {
    console.log('mapStateToProps= ', JSON.stringify(state));
    return {
        productDetailReducer: state.productDetailReducer,
        homeReducer: state.homeReducer
    }
}

export default connect(
    mapStateToProps,
    {
         getProductDetails
    }

)(FlatListItem)



