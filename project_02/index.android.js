/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

import Swiper from './javascript/Swiper.js';
import Tab from './javascript/Tab.js';


class project_02 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.menu}>
            <Image source={require('./image/menu.png')} />
          </View>
          <View style={styles.logo}>
            <Image source={require('./image/logo.png')} />
          </View>
          <View style={styles.telphone}>
            <Image source={require('./image/telphone.png')} />
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View style={styles.SwiperWrap}>
            <Swiper />
          </View>
          <Tab />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex : 1
  },
  header : {
    flexDirection: 'row',
    alignItems: 'center',
    height : 80,
    backgroundColor : '#3b3535',
    paddingLeft : 15,
    paddingRight : 15
  },
  menu : {
    width : 50,
    height : 50
  },
  logo : {
    flex : 1,
    alignItems: 'center',

  },
  telphone : {
    width : 50,
    height : 50
  },
  contentContainer : {

  },
  SwiperWrap : {
    flex : 1,
  }
});













AppRegistry.registerComponent('project_02', () => project_02);
