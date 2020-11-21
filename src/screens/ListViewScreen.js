import React from 'react';
import {StyleSheet, Image, Text, View, FlatList, TextInput} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CaretIcon from 'react-native-vector-icons/Entypo';

export default function ListViewScreen({navigation}) {
  const listData = [
    {
      email: 'Amy Farha',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle: 'Vice President',
    },
    {
      name: 'Chris Jackson',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'Vice Chairman',
    },
    {
      name: 'Aimy',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'CTO',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyleSearch} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="Search"
        />
      </View>
      <View style={styles.listContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.imgStyle}
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/1154293017160888321/_9Y-ozws_400x400.jpg',
            }}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.textStyle}>Shami ana</Text>
          <Text>Shamiana@gmail.com</Text>
        </View>
        <View style={styles.iconStyle}>
          <CaretIcon name="chevron-thin-right" size={30} />
        </View>
        <View style={styles.spacingLine}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#d3d3d3',
    height: 50,
    borderRadius: 50,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyleSearch: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  listContainer: {
    height: 70,
    flexDirection: 'row',
  },
  imgContainer: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    width: 60,
    height: 60,
    borderRadius: 80,
  },
  content: {
    flex: 0.5,
    paddingTop: 13,
  },
  textStyle: {
    fontSize: 18,
  },
  iconStyle: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 7,
  },
  spacingLine: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
});
