import React from 'react';
import {StyleSheet, View, TextInput, FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import CommonListItems from '../component/commonListItems';

export default function ListViewScreen({navigation}) {
  const userListData = [
    {
      id: '1',
      image:
        'https://pbs.twimg.com/profile_images/1154293017160888321/_9Y-ozws_400x400.jpg',
      title: 'jone',
      email: 'jone@gmail.com',
    },
    {
      id: '2',
      image:
        'https://pbs.twimg.com/profile_images/1154293017160888321/_9Y-ozws_400x400.jpg',
      title: 'Max',
      email: 'max@abc.com',
    },
    {
      id: '3',
      image:
        'https://pbs.twimg.com/profile_images/1154293017160888321/_9Y-ozws_400x400.jpg',
      title: 'Jack',
      email: 'jack@gmail.com',
    },
    {
      id: '4',
      image:
        'https://pbs.twimg.com/profile_images/1154293017160888321/_9Y-ozws_400x400.jpg',
      title: 'emma',
      email: 'emma@gmail.com',
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
      <FlatList
        data={userListData}
        renderItem={({item, index}) => (
          <CommonListItems
            image={item.image}
            title={item.title}
            email={item.email}
          />
        )}
        keyExtractor={(item) => item.id}
      />
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
});
