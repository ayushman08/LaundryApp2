import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Text, Card, Header, Body, Button, Title, CardItem } from 'native-base';
import {
    View,
    StyleSheet,
    Image,
    FlatList,
    Dimensions,
    TouchableHighlight,
    TouchableWithoutFeedback
} from 'react-native'
import {Icon} from "native-base";
import IonIcons from 'react-native-vector-icons/Ionicons';
import HTML from 'react-native-render-html';
import Colors from '../../Constants/Colors'
import { Actions } from 'react-native-router-flux';
import {
    getProductDetails,
} from "../../../App/Action/ActionCreators";
import {

    showLoading,
    resetState,
} from "./ProductDetailAction";
import HomeStyle from '../HomeScreen/HomeStyle';
import FlatListItem from './FlatListItem';
var postData = {};





let {width, height} = Dimensions.get('window')




class ProductListItem extends Component {

    passIndex(itemindex){
    this.props.getItemIndex(itemindex)
}

    render() { 
         
        return (
            <TouchableHighlight underlayColor={Colors.DARK_BLUE} onPress={()=>this.passIndex(this.props.index)}>
            <View style={[HomeStyle.itemContainer,{width:120,height:200,margin:0}]}>
            <Text style={HomeStyle.itemProductTitle}>{this.props.item.attributes[0].option}</Text>
            <Image key={this.props.item.key} style={styles.image} source={{uri: this.props.item.image.src} }  />
            <View>
            <HTML html={this.props.item.description} tagStyles={{h:{textAlign: 'center', fontStyle: 'italic', color: 'grey' }}} imagesMaxWidth={Dimensions.get('window').width} />
            <Text style={{alignSelf:'center',color:Colors.FONT_COLOR,fontSize:12}}>{this.props.item.price}</Text>
            </View>
            </View>   
          
            {/* */}
          </TouchableHighlight>
        );
    }
}

class ProductDetail  extends Component{
 constructor(){
        super()
       this.state={
            selectedListIndex: 0,
            selectedServiceSize:"",
            productList:[],
            productDetail:[],
            productVariationData:[]
        }
        this.getProductVariations = this.getProductVariations.bind(this);
    }

    componentWillMount(){
        
         if (this.props.homeReducer.productCategoryList != '') {
            this.setState({ productList: this.props.homeReducer.productCategoryList });
         }else {
            alert("Cannot retrieve product list");
        }
      
        this.getProductVariations(1);

    }

    //
    getProductVariations(index){
        
     console.log("Product recieveed list>>."+JSON.stringify(this.props.homeReducer.productCategoryList));
        postData = {
            productId: this.props.homeReducer.productCategoryList[index].id,
        };
      //  this.props.showLoading();
        this.props.getProductDetails(postData);
    }

    //Component update
    componentWillUpdate(){
        this.onProductVariation();
    }

    onProductVariation(){
        if (this.props.productDetailReducer.productVariation != '') {
          //  this.setState({productVariationData:this.props.productDetailReducer.productVariation})
        }
    }


 handleSelectedServiceSize(serviceSize){
        if(serviceSize==="Small"){
            this.setState({selectedServiceSize:"Small"})
           //alert("small")
        }
       else  if(serviceSize==="Medium"){
        this.setState({selectedServiceSize:"Medium"})
           // alert("Medium")
        }
        else  if(serviceSize==="Large"){
            this.setState({selectedServiceSize:"Large"})
     // alert("Large")
        }
        
     else{this.setState({selectedServiceSize:""})}
    }
  
  render(){
 
     productDetail = this.props.homeReducer.productCategoryList[this.state.selectedListIndex];

     {console.log("Product new list>>"+this.state.productList)}
    return(
        <View style={{flex: 1}}>
        
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() =>Actions.pop()}>
                <Icon 
                style={{color:"white"}}
                    name="arrow-back"
                    
                    size={25}
                />
            </TouchableWithoutFeedback>
            <Text style={{color:"white",fontWeight:"800"}}>Services</Text>
            <TouchableWithoutFeedback onPress={() =>null}>
            <IonIcons 
            name="md-notifications-outline"
                                    color="white"
                                    size={28}
 />
            </TouchableWithoutFeedback>
   </View>
        {
            (this.state.selectedListIndex==0) ? (
            <View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center",paddingLeft:10,paddingRight:10}}>
            <Text style={{fontSize:20,marginLeft:20,marginRight:20,marginTop:20}}>{productDetail.name}</Text>
            <HTML html={productDetail.short_description} imagesMaxWidth={Dimensions.get('window').width} />
           </View>
            ) : (
                (this.state.selectedListIndex==1) ? (
                    <View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center",paddingLeft:20,paddingRight:20}}>
                    <Text style={{marginTop:20}}>{productDetail.name}</Text>
                    <HTML html={productDetail.short_description}  imagesMaxWidth={Dimensions.get('window').width} />
                    <FlatList 
                    horizontal
                    ItemSeparatorComponent={() => <View style={{width: 5}} />}
                    ref={"flatList"}
                    data={this.props.productDetailReducer.productVariation}
                    renderItem={({item, index})=>{
                    return (
                    <ProductListItem 
                    item={item} 
                    index={index} 
                    getItemIndex={(value)=>{
                        this.setState({selectedListIndex:value})
                    
                    }}>

                    </ProductListItem>);
                }}
                >

            </FlatList>
                    
                    
                    </View>
                ) : (
                    (this.state.selectedListIndex==2) ? (
                        <View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center"}}>
                        <Text style={{fontSize:20,margin:20}}>{productDetail.name}</Text>
                        <HTML html={productDetail.short_description} imagesMaxWidth={Dimensions.get('window').width} /></View>
                    ):(
                        <View style={{backgroundColor:"white",justifyContent:"center",alignItems:"center",padding:10}}>
                        <Text style={{fontSize:20,margin:20}}>{productDetail.name}</Text>
                        <HTML html={productDetail.short_description} imagesMaxWidth={Dimensions.get('window').width} />
                        <FlatList 
                        horizontal
                        ItemSeparatorComponent={() => <View style={{width: 5}} />}
                        ref={"flatList"}
                        data={this.props.productDetailReducer.productVariation}
                        renderItem={({item, index})=>{
                        return (
                        <ProductListItem 
                        item={item} 
                        index={index} 
                        getItemIndex={(value)=>{
                        this.setState({selectedListIndex:value})
                    
                        }}>

                        </ProductListItem>);
                }}
                >

            </FlatList>
                        
                        </View>
                    )
                   
                )
              
            )}

       
           
        <View>
            
        <FlatList 
         horizontal
         ItemSeparatorComponent={() => <View style={{width: 5}} />}
                ref={"flatList"}
                data={this.state.productList}
                renderItem={({item, index})=>{
                    return (
                    <FlatListItem 
                    item={item} 
                    index={index} 
                    callGetVariants = {this.getProductVariations}
                    getItemIndex={(value)=>{this.setState({selectedListIndex:value})}}>

                    </FlatListItem>);
                }}
                >

            </FlatList>
        </View>
    </View>
      
    );
  }
}

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

)(ProductDetail)

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
        
       
    },
    p:{
        textAlign: 'center', fontStyle: 'italic', color: 'grey'
    }
    
})