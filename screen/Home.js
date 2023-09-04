// import { View, Text, Button, StyleSheet } from 'react-native'
// // import { TouchableOpacity } from 'react-native'
// // import { ScrollView } from 'react-native'
// // import Icon from "react-native-vector-icons/MaterialIcons"

// function Home({ navigation }) {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', FontSize: 20 }}>
//       <Text style={{ fontSize: 30 }}>Home</Text>
//       <Button onPress={() => navigation.navigate("Product")} title='move to Product' />
//       <Button onPress={() => navigation.navigate("Signup")} title='move to SignUp' />
//       <Button onPress={() => navigation.navigate("Login")} title='move to login' />
//       <Button onPress={() => navigation.navigate("Map")} title='move to login' />
//       <Button onPress={() => navigation.navigate("Profile")} title='move to login' />
//       <Button onPress={()=>navigation.navigate('admin')} title="move to Admin"/>
//     </View>
//   )
// }

// //  let styles= StyleSheet.create({

// //   })
// export default Home

// import { View, Text, Image } from 'react-native'
// import React from 'react'
// // import img1 from '../images/img1'

// export default function Home() {
//   return (
//     <View>
//     </View>
//   )
// }

import React, { Component } from 'react'
import { AppRegistry, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import img1 from '../images/img1.jpeg'
import img2 from '../images/img2.jpeg'
import img3 from '../images/img3.jpeg'
import img4 from '../images/img4.jpeg'
import Swiper from 'react-native-swiper'
import Icon from "react-native-vector-icons/MaterialIcons"


export default function SwiperComponent({navigation}) {

  let swiperRef;

  const navigateToSlide3 = () => {
    if (swiperRef) {
      swiperRef.scrollBy(1); // Navigate to slide 3 (0-based index)
    }
  };
  return (
    <Swiper style={styles.wrapper} ref={ref => (swiperRef = ref)} showsButtons={false}>
      <View style={styles.slide1}>
        <Image style={{ height: 300 }} source={img1} />

        <View style={styles.footcont}>
          <Text style={{ fontSize: 50, color: "#9E9EFF", fontWeight: "bold" }}>Taskey</Text>
          <Text style={{ fontSize: 30, paddingHorizontal: 25, color: "black", fontWeight: "bold", fontWeight: "bold" }}>Building Better </Text>
          <Text style={{ fontSize: 30, paddingHorizontal: 25, color: "black", fontWeight: "bold", fontWeight: "bold" }}>Workplace</Text>
          <Text> Ipsum is that it hasto using 'Content here</Text>
          <Text> Ipsum is that'Content here</Text>
          <TouchableOpacity onPress={navigateToSlide3}>
            <Text style={styles.btn} >Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.slide3}>
      <Image style={{ height: 350 }} source={img3} />
        <View style={{width:300}}>
          <Text style={{ fontSize: 25,marginTop:20, color: "#9E9EFF" }}> Task Manegement</Text>
          <Text style={{ fontSize: 35, color: "black", fontWeight: "bold" }}>Let,s create a </Text>
          <Text style={{ fontSize: 35, color: "#9E9EFF", fontWeight: "bold", fontWeight: "bold" }}>space for you  </Text>
          <Text style={{ fontSize: 35, color: "black", fontWeight: "bold", fontWeight: "bold" }}>workflows</Text>         
          <TouchableOpacity onPress={navigateToSlide3}>          
            <Text style={styles.btn2}><Icon name="arrow-forward" size={40} color="black" /></Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.slide2}>
        <Image style={{ height: 350 }} source={img2} />
        <View style={{width:300,}}>
          <Text style={{ fontSize: 25,marginTop:20, color: "#9E9EFF" }}> Task Manegement</Text>
          <Text style={{ fontSize: 35, color: "black", fontWeight: "bold" }}>Work more</Text>
          <Text style={{ fontSize: 35, color: "#9E9EFF", fontWeight: "bold", fontWeight: "bold" }}>Structureed and  </Text>
          <Text style={{ fontSize: 35, color: "black", fontWeight: "bold", fontWeight: "bold" }}>Organized</Text>         
          <TouchableOpacity onPress={navigateToSlide3}>          
            <Text style={styles.btn2}><Icon name="arrow-forward" size={40} color="black" /></Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.slide4}>
      <Image style={{ height: 350 }} source={img4} />
        <View style={{width:300}}>
          <Text style={{ fontSize: 20,marginTop:20, color: "#9E9EFF" }}> Task Manegement</Text>
          <Text style={{ fontSize: 35, color: "black", fontWeight: "bold" }}>Manage ypur </Text>
          <Text style={{ fontSize: 35, color: "#9E9EFF", fontWeight: "bold", fontWeight: "bold" }}>Tasks quickly for  </Text>
          <Text style={{ fontSize: 35, color: "black", fontWeight: "bold", fontWeight: "bold" }}>Result</Text>         
          <TouchableOpacity onPress={()=>navigation.navigate("Tab")}>          
          <Text style={styles.btn2}><Icon name="arrow-forward" size={40} color="black" /></Text>            
          </TouchableOpacity>
        </View>
      </View>
    </Swiper>
  )

}

const styles = StyleSheet.create({
  footcont: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: "center"
  },
  btn: {
    backgroundColor: "#9E9EFF",
    color: "white",
    fontWeight: "bold",
    fontStyle: "italic",
    height: 50,
    width: 250,
    fontSize: 25,
    borderRadius: 15,
    borderColor: "white",
    marginVertical: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 2,
  },
  btn2: {
    backgroundColor: "white",
    height: 50,
    width: 80,
    marginLeft:250,
    fontSize: 5,
    marginVertical: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",

  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})