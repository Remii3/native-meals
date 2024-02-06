import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../dummy-data';
import { useSelector } from 'react-redux';

export default function FavoritesScreen() {
  const { ids } = useSelector(state => state.favoriteMeals);

  const displayedMeals = ids.map(id => {
    return MEALS.find(meal => meal.id === id);
  });
  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>
          No favorite meals found. Start adding some!
        </Text>
      </View>
    );
  }
  return <MealsList displayedMeals={displayedMeals} />;
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
