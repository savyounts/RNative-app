import React from 'react'
import {View, TextInput, Button, StyleSheet} from 'react-native'

const userInput = (props) => (
  <View style={styles.inputContainer}>
    <TextInput
      placeholder= "An Awesome place"
      value={props.value}
      onChangeText={props.inputHandler}
      style={styles.placeInput}/>

    <Button
      title="ADD"
      style={styles.placeButton}
      onPress={props.buttonHandler}/>
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
})

export default userInput
