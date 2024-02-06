import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { CATEGORIES } from "../dummy-data";

export default function CategoriesScreen({ navigation }) {
  const pressHandler = (item) => {
    navigation.navigate("MealsOverview", {
      categoryId: item.item.id,
    });
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <CategoriesGridTile
            title={item.item.title}
            color={item.item.color}
            onPress={() => pressHandler(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
