import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Componet/Header'
import {useState} from 'react'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
const Team = () => {
  let [images, setimages] = useState([img2,img1,img3,img4])

  return (
    <ScrollView>
    <View style={{backgroundColor:"white",marginHorizontal:20}}>
      <Header title="Create Team" />
      <View style={{ alignItems: "center", }}>
      <Image style={{width:100,height:100,marginTop:30,borderRadius:70}} source={img1} />
      <Text style={styles.head}>Upload Logo file</Text>
      <Text style={styles.txt}>You logo publish always</Text>
      </View>
      <Text style={[styles.txt,{paddingVertical:10}]}>Team Name</Text>
      <View style={{alignItems: "center",flexDirection:'row' }}>
      <TextInput placeholderTextColor='black' placeholder="Team Name" style={[styles.inp]}/>
      </View>
      <Text style={[styles.txt,{paddingVertical:10}]}>Team Members</Text>
      <View style={{ alignItems: "center",flexDirection:'row' }}>
      {images.map((x,i)=>(
      <Image key={i} style={styles.img} source={x} />        
      ))}
      </View>
      <Text style={[styles.txt,{marginTop:20 }]}>Type</Text>
      <View style={{ justifyContent:'center',alignItems: "center",flexDirection:'row' }}>
      <Text style={[styles.txtS,{marginHorizontal:20}]}>Private</Text>
      <Text style={[styles.txtS,{marginHorizontal:20}]}>Public</Text>
      <Text style={[styles.txtS,{marginHorizontal:20}]}>Secret</Text>
    </View>
    <TouchableOpacity style={{ alignItems: "center", marginVertical:5 }} onPress>
          <Text style={styles.btn} >Save</Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  )
}
let styles = StyleSheet.create({
    btn: {
      backgroundColor: "#9E8EFF",
      color: "white",
      fontWeight: "bold",
      fontStyle: "italic",
      height: 40,
      width: 250,
      fontSize: 20,
      borderRadius: 10,
      textAlign: 'center',
      textAlignVertical: 'center',
    },
    txt: {
      marginTop: 5,
      marginBottom: 5,
      fontSize: 16, 
      color: 'gray',
    },
    head: {
        marginTop: 15,
        color: 'black',        
        fontSize: 20, 
      },
    txtS: {
      marginTop: 10,
      marginBottom: 10,
      color: 'gray',
      fontSize: 16,
      marginLeft:20,  
      borderColor:"black"
    },
    inp: {
      width: 345,
      borderWidth: 1,
      fontSize: 18,
      borderRadius: 8,
      color: "black",
      textAlign:"center",
    },
    inpShot: {
      borderColor: "gray",
      width: 150,
      borderWidth: 1,
      fontSize: 20,
      textAlign:"center",
      borderRadius: 8,
      color: "black"
    },
    img:{
      width:50,
      height:50,
      borderRadius:30,
      marginLeft:10
    }
  })
export default Team