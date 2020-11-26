import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  Image,
  View,
  ImageBackground,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import CommonHeader from '../component/CommonHeader';
import {Fonts, ToysCardData} from '../res/Constants';
import ToysCard from '../component/ToysCard';

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
        <View style={{flex: 0.9}}>
          <FlatList
            data={ToysCardData}
            renderItem={({item, index}) => <ToysCard cardData={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
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
    // borderWidth: 2,
    // paddingVertical: scale(),
  },
  textContainer: {
    flex: 0.1,
    paddingVertical: 10,
    // borderWidth: 2,
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: Fonts.samiBold,
    fontSize: 30,
    color: 'white',
  },
});
