/**
 * Created by Administrator on 2016/3/10 0010.
 */

'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import Slider from 'react-native-swiper';

export default class Swiper extends Component{
    render(){
        return(
        <Slider style={{backgroundColor: '#fe0000',flex : 1}} showsButtons={false} height={200} loop={true} showsPagination={true}>
            <View style={styles.slideView}>
                <Image style={styles.slide} source={require('./../image/slider1.jpg')}></Image>
            </View>
            <View style={styles.slideView}>
                <Image style={styles.slide} source={require('./../image/slider1.jpg')}></Image>
            </View>
            <View style={styles.slideView}>
                <Image style={styles.slide} source={require('./../image/slider1.jpg')}></Image>
            </View>
        </Slider>);
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height : 100
    },
    slideView : {
        flex: 1,
        backgroundColor: '#9DD6EB',
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide: {
        flex: 1,
        resizeMode: Image.resizeMode.stretch,
    }
});