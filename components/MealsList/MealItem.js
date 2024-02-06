import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import MealDetails from '../MealDetails';
import { useNavigation } from '@react-navigation/native';

export default function MealItem({
  id,
  title,
  imgUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate('Meal', {
      mealId: id,
      mealTitle: title,
    });
  };
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => pressed && styles.buttonPressed}
        android_ripple={{ color: '#ccc' }}
        onPress={onPressHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imgUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <MealDetails
          affordability={affordability}
          complexity={complexity}
          duration={duration}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16,
    borderRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
