import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../dummy-data';

export default function CategoriesScreen() {
  return (
    <View>
      <FlatList
        data={CATEGORIES}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={item => (
          <CategoriesGridTile title={item.item.title} color={item.item.color} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
