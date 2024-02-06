import { StyleSheet } from 'react-native';
import React from 'react';
import { MEALS } from '../dummy-data';
import MealsList from '../components/MealsList/MealsList';

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(item => {
    return item.categoryIds.indexOf(catId) >= 0;
  });

  return <MealsList displayedMeals={displayedMeals} />;
}

const styles = StyleSheet.create({});
