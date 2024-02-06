import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import MealItem from './MealItem';

export default function MealsList({ displayedMeals }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={item => item.id}
        renderItem={item => (
          <MealItem
            id={item.item.id}
            title={item.item.title}
            imgUrl={item.item.imageUrl}
            affordability={item.item.affordability}
            complexity={item.item.complexity}
            duration={item.item.duration}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
