import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ListViewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>List View Screen</Text>
    </View>
  );
};

export default ListViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
  },
});
