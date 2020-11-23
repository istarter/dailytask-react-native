import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import CaretIcon from 'react-native-vector-icons/Entypo';
import {scale} from 'react-native-size-matters';

const commonListItems = ({image, title, email}) => {
  return (
    <View style={styles.listContainer}>
      <View style={styles.imgContainer}>
        <Image style={styles.imgStyle} source={{uri: image}} />
      </View>

      <View style={styles.content}>
        <View style={styles.contentDetails}>
          <Text style={styles.textStyle}>{title}</Text>
          <Text style={{color: 'gray'}}>{email}</Text>
        </View>
        <View style={styles.chevronIcon}>
          <CaretIcon name="chevron-thin-right" color="gray" size={20} />
        </View>
      </View>
    </View>
  );
};

export default commonListItems;

const styles = StyleSheet.create({
  listContainer: {
    height: scale(60),
    // borderWidth: 6,
    paddingVertical: 4,
    flexDirection: 'row',
    marginVertical: 7,
  },
  imgContainer: {
    flex: 0.25,
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: scale(60),
    height: scale(60),
    // borderWidth: 1,
    borderRadius: scale(60),
  },

  content: {
    flex: 0.75,
    // borderWidth: 2,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  contentDetails: {
    flex: 0.8,
    // borderWidth: 1,
    justifyContent: 'center',
    paddingLeft: 2,
  },
  textStyle: {
    fontSize: 20,
  },
  chevronIcon: {
    flex: 0.2,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
