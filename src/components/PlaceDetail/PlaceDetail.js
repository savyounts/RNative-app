import React from 'react'
import { Modal, View, Text, Button, StyleSheet, Image} from 'react-native'

const placeDetail = props => {
  let modalContent = null

  if (props.selectedPlace){
    modaContent = (
      <View>
        <Image source={props.selectedPlace.image} style={styles.placeImage}/>
        <Text>{props.selectedPlace.name}</Text>
      </View>
    )
  }
  return (
    <Modal
      visible={props.selectedPlace !== null}
      animationType="slide">
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red"/>
          <Button title="Close" />
        </View>
     </View>
    </Modal>
  )

}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  placeImage: {
    width: "100%",
    height: 200
  }
})
export default placeDetail
