import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Fonts} from '../res/Constants';
import StarRating from 'react-native-star-rating';
import {scale} from 'react-native-size-matters';

const ToysCard = ({cardData}) => {
  const {title, text} = cardData;
  const [starCount, setStarCount] = useState(2);
  const onStarRatingPress = (rating) => {
    setStarCount(rating);
  };
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImage}>
        <Image
          style={styles.imageStyle}
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/1154293017160888321/_9Y-ozws_400x400.jpg',
          }}
        />
      </View>
      <View style={styles.cardTitle}>
        <Text style={styles.textStyle}>{title}</Text>
        <Text>{text}</Text>
      </View>
      <View style={styles.stars}>
        <StarRating
          disabled={false}
          maxStars={3}
          rating={starCount}
          selectedStar={(rating) => onStarRatingPress(rating)}
          starSize={17}
        />
      </View>
    </View>
  );
};

export default ToysCard;

const styles = StyleSheet.create({
  cardContainer: {
    height: scale(80),
    // borderWidth: 2,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginVertical: 7,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
  cardImage: {
    flex: 0.2,
    // borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: scale(50),
    width: scale(50),
    borderRadius: 50,
  },
  cardTitle: {
    // borderWidth: 2,
    flex: 0.6,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  stars: {
    flex: 0.2,
    // borderWidth: 2,
    paddingTop: 15,
    paddingRight: 10,
  },
  textStyle: {
    fontFamily: Fonts.samiBold,
    fontSize: 30,
    color: 'black',
  },
});
