import React from 'react';
import {StyleSheet, Text, Image, View, ImageBackground} from 'react-native';
import {scale} from 'react-native-size-matters';
import CommonHeader from '../component/CommonHeader';
import {Fonts} from '../res/Constants';

const ToysScreenList = () => {
  return (
    <ImageBackground
      source={require('../assets/toys-bg.jpg')}
      style={styles.container}>
      <CommonHeader />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Near by toys and new</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.cardImage}>
            <Image
              style={styles.imageStyle}
              source={{
                uri:
                  'https://pbs.twimg.com/profile_images/1154293017160888321/_9Y-ozws_400x400.jpg',
              }}
            />
          </View>
          <View style={styles.cardTitle}>
            <Text>Ruby Rabbit</Text>
            <Text>Last seen at 10:00 am</Text>
          </View>
          <View style={styles.stars}></View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ToysScreenList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    borderWidth: 2,
    // paddingVertical: scale(),
  },
  textContainer: {
    flex: 0.1,
    paddingVertical: 10,
  },
  textStyle: {
    fontFamily: Fonts.samiBold,
    fontSize: 30,
    color: 'white',
  },
  cardContainer: {
    height: scale(80),
    borderWidth: 2,
    flexDirection: 'row',
  },
  cardImage: {
    flex: 0.2,
    borderWidth: 2,
    justifyContent: 'center',
  },
  imageStyle: {
    height: scale(50),
    width: scale(50),
    borderRadius: 50,
  },
  cardTitle: {
    borderWidth: 2,
    flex: 0.6,
    justifyContent: 'center',
  },
  stars: {
    borderWidth: 2,
  },
});
