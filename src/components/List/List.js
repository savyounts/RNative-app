import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem'

const list = (props) => (
  <View style={styles.listContainer}>
    {placesOutput(props.places)}
  </View>
)

const placesOutput = (places) => (places.map((place, i) => <ListItem key={i} placeName={place}/>))


const styles = StyleSheet.create({
    listContainer: {
      width: "100%",
    }
})

export default list
