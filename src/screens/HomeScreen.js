import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Screen </Text>
      <Button
        title="List View"
        onPress={() => navigation.navigate('ListView')}
      />
      <Button title="Toys Screen" onPress={() => navigation.navigate('Toys')} />
      <Button title="Fox Setting" onPress={() => navigation.navigate('Fox')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
  },
});
