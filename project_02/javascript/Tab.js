/**
 * Created by Administrator on 2016/3/10 0010.
 */
'use strict';
import React, {
    Component,
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

export default class tab extends Component{

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.tab}>
                    <Image style={styles.tabImage} source={require('./../image/icon-product.png')}></Image>
                    <Text style={styles.tabText}>产品中心</Text>
                    <View style={styles.lineBorder}></View>
                </View>
                <View style={styles.tab}>
                    <Image style={styles.tabImage} source={require('./../image/icon-person.png')}></Image>
                    <Text style={styles.tabText}>个人中心</Text>
                    <View style={styles.lineBorder}></View>
                </View>
                <View style={styles.tab}>
                    <Image style={styles.tabImage} source={require('./../image/icon-active.png')}></Image>
                    <Text style={styles.tabText}>活动中心</Text>
                </View>
                <View style={[styles.active_icon,]} ></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        borderWidth : 1,
        borderColor : '#d2d2d2',
        height : 80
    },
    tab : {
        flex : 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position : 'relative'
    },
    tabImage : {
        width : 32,
        height : 32,
        resizeMode: Image.resizeMode.cover
    },
    tabText : {
        color : '#3b3535',
        marginLeft : 5
    },
    lineBorder : {
        position : 'absolute',
        height : 60,
        width : 1,
        top : 10,
        right : 0,
        backgroundColor : '#d2d2d2'
    },
    active_icon : {
        position : 'absolute',

        width : 100,
        height : 2,
        bottom : 0,
        left : 0,
        backgroundColor : '#ff5722'
    }
})


