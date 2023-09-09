import { View, Text, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../Componet/Header'
import {useState} from 'react'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import { Post } from '../config/ApiMethods'
const Task = ({navigation}) => {

  let [images, setimages] = useState([img2,img1,img3,img4])
  let [data, setdata] = useState([])

  const save = () => {
    Post("task", data).then((res) => {
      navigation.navigate("Taskar")
    }).catch((e) => {
      console.log(e)
    })
  }
  return (
    <ScrollView>
    <View style={{backgroundColor:"white",paddingBottom:20}}>
      <Header navigating={navigation} title="Add Task" />
      <Text style={styles.txt}>Task Name</Text>
      <View style={{ alignItems: "center", }}>
      <TextInput onChangeText={(e) => setdata({ ...data, T_name: e })}  placeholderTextColor='black' style={[styles.inp, { marginTop: 10 }]}  placeholder=" Task Name " />
      </View>
      <Text style={[styles.txt,{paddingVertical:10}]}>Team Members</Text>
      <View style={{ marginLeft:20, alignItems: "center",flexDirection:'row' }}>
      {images.map((x,i)=>(
      <Image key={i} style={styles.img} source={x} />        
      ))}
      </View>
    <View style={{backgroundColor:"white",}}>
      <Text style={styles.txt}>Date</Text>
      <View style={{ alignItems: "center", }}>
      <TextInput onChangeText={(e) => setdata({ ...data, date: e })}  placeholderTextColor='black' style={[styles.inp, { marginTop: 10 }]}  placeholder="Date" />
      </View>
      </View>
      <View style={{ marginLeft:20, alignItems: "center",flexDirection:'row' }}>
      <Text style={[styles.txt,{paddingVertical:10}]}>Start Time</Text>
      <Text style={[styles.txt,{paddingVertical:10, marginLeft:90}]}>End Time</Text>
      </View>
      <View style={{ marginLeft:20, alignItems: "center",flexDirection:'row' }}>
      <TextInput onChangeText={(e) => setdata({ ...data, S_time: e })} placeholderTextColor='black' placeholder=" Start Time " style={[styles.inpShot,{paddingVertical:10}]}/>
      <TextInput onChangeText={(e) => setdata({ ...data, E_time: e })} placeholderTextColor='black' placeholder=" End Time " style={[styles.inpShot,{paddingVertical:10, marginLeft:35}]}/>      
      </View>
      <Text style={[styles.txt,{marginTop:20 }]}>Board</Text>
      <View style={{ justifyContent:'center',alignItems: "center",flexDirection:'row' }}>
      <Text style={[styles.txtS,{marginHorizontal:20}]}>Urgent</Text>
      <Text style={[styles.txtS,{marginHorizontal:20}]}>Running</Text>
      <Text style={[styles.txtS,{marginHorizontal:20}]}>ongoing</Text>
    </View>
    <TouchableOpacity onPress={save} style={{ alignItems: "center" }}>
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
    marginTop:10,
    height: 45,
    width: 250,
    fontSize: 20,
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  txt: {
    marginTop: 10,
    marginBottom: 5,
    color: 'gray',
    fontSize: 20,
    marginLeft:20,  
  },
  txtS: {
    marginTop: 10,
    marginBottom: 10,
    color: 'gray',
    fontSize: 20,
    marginLeft:20,  
    borderColor:"black"
  },
  inp: {
    borderColor: "gray",
    width: 340,
    height:50,
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 8,
    color: "black",
  },
  inpShot: {
    borderColor: "gray",
    width: 150,
    height:50,
    borderWidth: 1,
    fontSize: 20,
    textAlign:"center",
    borderRadius: 8,
    color: "black"
  },
  img:{
    width:55,
    height:55,
    borderRadius:30,
    marginLeft:10,
    marginBottom:10
  }
})
export default Task