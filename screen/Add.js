import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Add = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
      <TouchableOpacity onPress={() => navigation.navigate('Task')}>
        <Text style={styles.txt} >Create Task</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Project')}>
        <Text style={styles.txt}>Create Project</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Team')}>
        <Text style={styles.txt} >Create Team</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.txt}>Create Event</Text>
      </TouchableOpacity>
    </View>
  )
}
let styles = StyleSheet.create({
  txt: {
    color: 'black',
    fontSize: 30,
    marginBottom: 20
  }
})

export default Add