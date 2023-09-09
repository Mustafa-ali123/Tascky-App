// import React, { useState } from 'react'
// import  Buttons from '../Componet/Buttons'
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import Icon from "react-native-vector-icons/MaterialIcons"
// import { Colors } from 'react-native/Libraries/NewAppScreen';

// export default function Camera({ navigation }) {

//   let [img, setimg] = useState("https://www.ihna.edu.au/blog/wp-content/uploads/2022/10/user-dummy.png")
//   // let [spin, setspin] = useState(true)

//   const openCamera = async () => {
//     const result = await launchCamera({
//       mediaType: 'photo'
//     })
//     setimg(`${result.assets[0].uri}`)
//   }
//   const openGallery = async() => {
//     const result = await launchImageLibrary({
//       mediaType:'photo'
//     });    
//     setimg(`${result.assets[0].uri}`)
//   }

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
//       <Text style={{ color:'black', fontSize: 30, marginBottom: 20 }} >Profile Image</Text>
//       <View style={{ flexDirection: "row", alignItems: "center" }}>

//         <TouchableOpacity onPress={openCamera} style={styles.icon}>
//           <Icon name="camera" size={50} color="#003566" />
//         </TouchableOpacity>

//         <TouchableOpacity onPress={openGallery} style={styles.icon}>
//           <Icon name="image" size={50} color="#003566" />
//         </TouchableOpacity>
//       </View>
//       <Image style={styles.image} source={{ uri: img }} />

//      <Buttons styl={styles.but} text="Save Profile" />

//     </View>
//   )
// }


// let styles = StyleSheet.create({
//   icon: {
//     borderColor: "lightgray",
//     borderWidth: 2,
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginHorizontal: 10,
//     backgroundColor: "white",
//     elevation: 20,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginTop:30,
//     borderRadius:98,
//     borderColor:"darkgray",
//     borderWidth:5,
//   },
//   but:{
//     backgroundColor:"white",
//     color:"#003566",
//     // borderRadius:4,
//     borderColor:"#003566",
//     borderWidth:1,  
//     elevation:15, 
//     marginVertical:10
//   }
// })

import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import Icon from "react-native-vector-icons/MaterialIcons"
import Swiper from 'react-native-swiper'
import { Get } from '../config/ApiMethods'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'

export default function Taskbar({ navigation }) {

  let [data, setdata] = useState([])
  let [show, setshow] = useState(false)

  useEffect(() => {
    Get('task').then((res) => {
      setdata(res.data)
      setshow(true)
    }).catch(e => console.log(e))
  }, [])
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <View style={{ backgroundColor: "white", marginHorizontal: 20 }}>
          <View style={[styles.headercont, { justifyContent: 'center', alignItems: "center", flexDirection: 'row' }]}>
            <TouchableOpacity style={styles.icon} >
              <Icon name="apps" size={20} color="gray" />
            </TouchableOpacity>
            <Text style={styles.header}>Friday, 26</Text>
            <TouchableOpacity style={styles.iconleft}>
              <Icon name="notifications" size={20} color="gray" />
            </TouchableOpacity>
          </View>
          <Text style={{ marginTop: 20, fontSize: 25, color: "black" }}>Let's make a </Text>
          <Text style={{ fontSize: 25, color: "black" }}>habits together </Text>
          <Swiper style={styles.wrapper} ref={ref => (swiperRef = ref)} showsButtons={false}>
            {show ? data.map((x, i) => (
             <View key={i}style={styles.slide1}>
             <Text style={styles.slid_head}>{x.T_name}</Text>
             <Text style={{ fontSize: 18, color: "lightgray", marginLeft: 30 }}>UI Design Kit </Text>
             <View style={{flexDirection:'row'}}>
               <Image style={styles.img} source={img1}/>
               <Image style={styles.img} source={img2}/>
               <Image style={styles.img} source={img3}/>
               <Image style={styles.img} source={img4}/>
               <Image style={styles.img} source={img3}/>
             </View>          
           </View>
            )) :
              <Text>No task for working</Text>
            }
        
              {/* <View style={{flexDirection:'row'}}>
                <Text style={{ fontSize: 22, color: "black", marginLeft: 30, marginTop: 15 }}>Start Date :</Text>
                <Text style={{ fontSize: 22, color: "lightgray", marginLeft: 30, marginTop: 15 }}>10-20-20:</Text>
              </View>*/}
              {/* 
              <View style={{flexDirection:"row"}}>
                <Text style={{ fontSize: 22, color: "black", marginLeft: 38, }}>End Date :</Text>
                <Text style={{ fontSize: 22, color: "lightgray", marginLeft: 30, }}>12-21-20</Text>
              </View> */}

          </Swiper>
          <Text style={[styles.header, { fontWeight: "bold", fontSize: 22, color: "black" }]}>In Progress</Text>
          <View style={styles.card}>
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Productivity Mobile App</Text>
            <Text style={{ fontSize: 22, marginLeft: 10, fontWeight: "bold", color: "black" }}>Create Details Booking </Text>
            <Text style={{ fontSize: 16, marginLeft: 10 }}> 2 mint ago</Text>
          </View>
          <View style={styles.card}>
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Banking Mobile App</Text>
            <Text style={{ fontSize: 22, marginLeft: 10, fontWeight: "bold", color: "black" }}>Revision Home Page </Text>
            <Text style={{ fontSize: 16, marginLeft: 10 }}> 2 mint ago</Text>
          </View>
          <View style={styles.card}>
            <Text style={{ fontSize: 16, marginLeft: 10 }}>Online Course</Text>
            <Text style={{ fontSize: 22, marginLeft: 10, fontWeight: "bold", color: "black" }}>Working on landing page </Text>
            <Text style={{ fontSize: 16, marginLeft: 10 }}> 9 mint ago</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

let styles = StyleSheet.create({
  img:{
    width:45,
    height:45,
    borderRadius:30,
    marginTop:20,
    marginLeft:10
  },
  slid_head: {
    color: "white",
    fontSize: 24,
    marginLeft: 30,
    marginTop: 30
  },
  card: {
    height: 100,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "gray",
    justifyContent: 'center',
  },
  slide1: {
    marginTop: 20,
    height: 180,
    backgroundColor: "#9E9EFF",
    borderRadius: 20,
  },
  wrapper: {
    height: 230,
  },
  icon: {
    position: "absolute",
    right: 300,
  },
  iconleft: {
    position: "absolute",
    left: 300,
  },
  header: {
    fontSize: 18,
    color: "black"
  },
  headercont: {
    color: "black",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#edf2f4",
    borderRadius: 20,
  }
})