import {StyleSheet, View, Text,Dimensions,Image} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
const window = Dimensions.get("window");
import Colors from '../../Constants/Colors';
import ImagesPath from '../../Constants/ImagesPath';
import Strings from '../../Constants/Strings';
import HowItWorksStyle from './HowItWorksstyle';

export default class HowItWorks extends Component {
    render() {
        const {itemImageIcon, itemImageTitle, itemImageSubTitle, imageIconNumber} = HowItWorksStyle
        return (
            <View style={{flex:1,backgroundColor:Colors.HOME_BG}}>
                <IndicatorViewPager

                 style={{height:window.height-100}}
                    indicator={this._renderDotIndicator()}
                >
                    <View style={{backgroundColor:Colors.WHITE,justifyContent:'center',alignItems:'center'}}>
                    <Image  source={{uri:'http://34.211.31.84:9023/wp-content/uploads/2018/03/How-it-works-Number-1-small.png'}} style={imageIconNumber} />
                    <Image source={{uri:'http://34.211.31.84:9023/wp-content/uploads/2018/02/icon1.png'}} style={itemImageIcon} />
                    <Text style={itemImageTitle}>{Strings.BOOK_A_TIME}</Text>
                    <Text style={itemImageSubTitle}>{Strings.BOOK_A_TIME_DESC}</Text>
                    </View>
                    <View style={{backgroundColor:Colors.WHITE,justifyContent:'center',alignItems:'center'}}>
                    <Image  source={{uri:'http://34.211.31.84:9023/wp-content/uploads/2018/03/How-it-works-Number-2-small.png'}} style={imageIconNumber} />
                    <Image source={{uri:'http://34.211.31.84:9023/wp-content/uploads/2018/02/icon2.png'}} style={itemImageIcon} />
                    <Text style={itemImageTitle}>{Strings.PACK_A_BAG}</Text>
                    <Text style={itemImageSubTitle}>{Strings.PACK_A_BAG_DESCRIPTION}</Text>
                    </View>
                    <View style={{backgroundColor:Colors.WHITE,justifyContent:'center',alignItems:'center'}}>
                    <Image  source={{uri:'http://34.211.31.84:9023/wp-content/uploads/2018/03/How-it-works-Number-3-small.png'}} style={imageIconNumber} />
                    <Image source={{uri:'http://34.211.31.84:9023/wp-content/uploads/2018/02/icon3.png'}} style={itemImageIcon} />
                    <Text style={itemImageTitle}>{Strings.RECIEVE_YOUR_LAUNDRY}</Text>
                    <Text style={itemImageSubTitle}>{Strings.RECIEVE_YOUR_LAUNDRY_DESCRIPTION}</Text>
                    </View>
                </IndicatorViewPager>
                
            </View>
        );
    }

    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
    }

    _renderDotIndicator() {
        return <PagerDotIndicator selectedDotStyle={{backgroundColor:Colors.THEME_COLOR}} pageCount={3} />;
    }
    
   
}