import { Text, ScrollView, StyleSheet, Platform, View } from 'react-native';
import React from 'react';
import Categories from '../Components/Categories';
import { SafeAreaView } from 'react-native-safe-area-context';
import Restaurants from '../Components/Restaurants';
import Colors from '@/constants/Colors';

const Page = () => {
  return (
    <SafeAreaView style={[styles.container, Platform.OS === "android" && {top:80}]}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <Categories />
        <Text style={styles.header}>Top picks in your neighbourhood</Text>
        <Restaurants />
        <Text style={styles.header}>Offers near you</Text>
        <Restaurants />
        {Platform.OS === "android" && <View style={{height: 50}}></View>}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 50,
    backgroundColor: Colors.lightGrey,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export default Page;
