import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function SignUp({navigation}) {
  return (
    <View style={styles.container}>
      <Text>SignUp Screen </Text>
      <Button title="SignUp" onPress={() => navigation.navigate('SignIn')} />
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
