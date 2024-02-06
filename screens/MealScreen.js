import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { MEALS } from '../dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconBtn from '../components/IconBtn';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

export default function MealScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const { ids } = useSelector(state => state.favoriteMeals);

  const dispatch = useDispatch();
  const mealsFavorite = ids.includes(mealId);

  const displayedMeal = MEALS.find(item => {
    return item.id === mealId;
  });
  const headerBtnPressHandler = () => {
    if (mealsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
      return;
    }
    dispatch(addFavorite({ id: mealId }));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconBtn
            icon={mealsFavorite ? 'star' : 'star-outline'}
            color={'white'}
            onPress={headerBtnPressHandler}
          />
        );
      },
    });
  }, [navigation, headerBtnPressHandler]);

  return (
    <ScrollView style={styles.root}>
      <Image style={styles.image} source={{ uri: displayedMeal.imageUrl }} />
      <Text style={styles.title}>MealScreen</Text>
      <MealDetails
        affordability={displayedMeal.affordability}
        complexity={displayedMeal.complexity}
        duration={displayedMeal.duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={displayedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={displayedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontSize: 24,
    margin: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
