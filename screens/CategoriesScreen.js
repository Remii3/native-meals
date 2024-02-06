import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

export default function CategoriesScreen({ navigation }) {
  const pressHandler = item => {
    navigation.navigate('MealsOverview', {
      categoryId: item.item.id,
    });
  };
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={item => (
          <CategoryGridTile
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
