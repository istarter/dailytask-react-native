import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {scale} from 'react-native-size-matters';
import CommonHeader from '../component/CommonHeader';
import {Fonts, ToysCardData} from '../res/Constants';

const FoxSettingScreen = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assets/toys-bg.jpg')}>
      <CommonHeader />
      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Fox's settings</Text>
        </View>
        <View style={styles.cardHeader}>
          <Text>Hello</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default FoxSettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    // opacity: 0.4,
    paddingHorizontal: 20,
  },
  cardContainer: {
    flex: 0.8,
    // borderWidth: 2,
    paddingHorizontal: 35,
    backgroundColor: 'white',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
  textContainer: {
    flex: 0.1,
    paddingVertical: 15,
    // borderWidth: 2,
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: Fonts.samiBold,
    fontSize: 37,
  },
  cardHeader: {
    borderWidth: 2,
    flexDirection: 'row',
    height: scale(60),
  },
});
