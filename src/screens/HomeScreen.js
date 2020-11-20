import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="List View"
        onPress={() => navigation.navigate('Listview')}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>HI</Text>
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
