import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function SignIn({navigation}) {
  return (
    <View style={styles.container}>
      <Text>SignIn Screen </Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
