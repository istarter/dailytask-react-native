import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
const CommonHeader = () => {
  return (
    <View style={styles.headerStyle}>
      <Image
        style={styles.imageStyle}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/1154293017160888321/_9Y-ozws_400x400.jpg',
        }}
      />
    </View>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  headerStyle: {
    height: scale(100),
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingTop: 20,
  },
  imageStyle: {
    height: scale(50),
    width: scale(50),
    borderRadius: 50,
  },
});
