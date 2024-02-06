import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((item) => {
    return item.categoryId.indexOf(catId) >= 0;
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={[displayedMeals]}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <MealItem
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
