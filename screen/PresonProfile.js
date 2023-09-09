import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Componet/Header'
import { useState } from 'react'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import Icon from "react-native-vector-icons/MaterialIcons"

const Team = ({ navigation }) => {
  let [images, setimages] = useState([img2, img1, img3, img4])

  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <View style={{ backgroundColor: "white", marginHorizontal: 20 }}>
          <Header navigating={navigation} title="Create Team" />
          <View style={{ alignItems: "center", }}>
            <Image style={{ width: 100, height: 100, marginTop: 5, borderRadius: 70 }} source={img1} />
            <Text style={styles.head}>David Sam</Text>
            <Text style={styles.txt}>@davidsam.developer</Text>
          </View>
          <View style={{ flexDirection: "row", alignSelf: 'center' }}>
            <View style={{ alignItems: 'center',   alignSelf: 'center' }}>
              <Icon name="av-timer" style={{ marginLeft: 35 }} color="black" size={30} />
              <Text style={{ fontSize: 22, color: "black", fontWeight: 'bold', marginLeft: 33, }}>5</Text>
              <Text style={{ fontSize: 16, color: "gray", marginLeft: 30, }}>On-Going</Text>
            </View>

            <View style={{ alignItems: 'center', alignSelf: 'center' }}>
              <Icon name="check-box" style={{ marginLeft: 35 }} color="black" size={30} />
              <Text style={{ fontSize: 22, color: "black", fontWeight: 'bold', marginLeft: 33, }}>25</Text>
              <Text style={{ fontSize: 16, color: "gray", marginLeft: 30, }}>Total Complet</Text>
            </View>
          </View>
          <View style={{borderRadius:10,marginTop:20,borderColor:"gray",borderWidth:1,paddingVertical:16,justifyContent: 'center', alignItems: "center", flexDirection: 'row' }}>
            <Text style={styles.card}>My Project</Text>
            <Icon name="arrow-back-ios" style={{ marginLeft: 150 }} size={20} color="black" />
          </View>
          <View style={{borderRadius:10,marginTop:20,borderColor:"gray",borderWidth:1,paddingVertical:16,justifyContent: 'center', alignItems: "center", flexDirection: 'row' }}>
            <Text style={styles.card}>Join a team</Text>
            <Icon name="arrow-back-ios" style={{ marginLeft: 150 }} size={20} color="black" />
          </View> 
            <View style={{borderRadius:10,marginTop:20,borderColor:"gray",borderWidth:1,paddingVertical:16,justifyContent: 'center', alignItems: "center", flexDirection: 'row' }}>
            <Text style={styles.card}>My Setting</Text>
            <Icon name="arrow-back-ios" style={{ marginLeft: 150 }} size={20} color="black" />
          </View>
          <View style={{borderRadius:10,marginTop:20,borderColor:"gray",borderWidth:1,paddingVertical:16,justifyContent: 'center', alignItems: "center", flexDirection: 'row' }}>
            <Text style={styles.card}>My Task</Text>
            <Icon name="arrow-back-ios" style={{ marginLeft: 150 }} size={20} color="black" />
          </View>          
        </View>
      </View>
    </ScrollView>
  )
}
let styles = StyleSheet.create({
  card: {
    fontSize:20,
    color:"black"
  },
  txt: {
    marginTop: 2,
    marginBottom: 5,
    fontSize: 16,
    color: 'gray',
  },
  head: {
    marginTop: 15,
    color: 'black',
    fontSize: 20,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 30,
    marginLeft: 10
  }
})
export default Team