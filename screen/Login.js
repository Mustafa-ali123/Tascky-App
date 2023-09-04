// import Input from '../Componet/Input'
// import React, { useState } from 'react'
// import Buttons from '../Componet/Buttons'
// import auth from '@react-native-firebase/auth'
// import database from '@react-native-firebase/database'
// import {Icon} from "react-native-vector-icons/MaterialIcons"
// import { View, Text, StyleSheet, Button, TouchableOpacity, ScrollView } from 'react-native'

// export default function Login({navigation}) {
//   let [data, setdata] = useState([])

//   const login = () =>{
//     auth().signInWithEmailAndPassword(data.email, data.password)
//     .then(() => {
//       navigation.navigate("Product")
//       console.log('User account LogIn');
//     }) 
//     .catch(error => {
//       if (error.code === 'auth/email-already-in-use') {
//         console.log('That email address is already in use!');
//       }
//       if (error.code === 'auth/invalid-email') {
//         console.log('That email address is invalid!');
//       }
//       console.error(error);
//       // navigation.navigate("Product",{data})
//     });

//   }

//   return (
//     <View style={{ flex: 1, backgroundColor: "lightgray" }}>
//       <ScrollView>
//       <View style={styles.container}>
//         <Text style={styles.head}>Log In</Text>
//         <View>
//           <Text style={styles.text}>Email :</Text>
//           <Input pcolor="gray" place=" Enter the Email " change={(e) => setdata({ ...data, email: e })} />
//         </View>
//         <View>
//           <Text style={[styles.text, { marginTop: 20 }]}>Password :</Text>          
//           <Input pcolor="gray" place=" Enter the Password " change={(e) => setdata({ ...data, password: e })} />
//         </View>
//         <Buttons press={login} text="Log In" />
//       </View>
//       </ScrollView>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   grid: {
//     flex: 1,
//     width: "100%",
//     alignItems: 'center',
//     borderRadius: 20
//   },
//   container: {
//     marginTop:25,
//     margin: 20,
//     backgroundColor: "#f6fff8",
//     flex: 1,
//     alignItems: 'center',
//     elevation: 15,
//     borderRadius:20,
//     borderColor:'#003566',
//     borderWidth:2    
//   },
//   head: {
//     fontSize: 35,
//     fontWeight: 'bold',
//     fontStyle: "italic",
//     marginTop: "5%",
//     paddingTop: 40,
//     marginBottom: "6%",
//     color: "black"
//   },
//   text: {
//     fontSize: 30,
//     fontStyle: "italic",
//     marginBottom: 5,
//     color: "black"

//   }
// })

// import Input from '../Componet/Input'
// import React, { useState } from 'react'
// import Buttons from '../Componet/Buttons'
// import auth from '@react-native-firebase/auth'
// import database from '@react-native-firebase/database';
// import { TouchableOpacity, View, Text, StyleSheet, Button, ScrollView } from 'react-native'

// export default function Signup({ navigation }) {
//   let [data, setdata] = useState([])
//   let [backColor, setbackColor] = useState("gray")


//   const signup = () => {
//     auth()
//       .createUserWithEmailAndPassword(data.email, data.password)
//       .then(() => {
//         sendData()
//         navigation.navigate("Login")
//         console.log('User account created & signed in!');
//       })
//       .catch(error => {
//         if (error.code === 'auth/email-already-in-use') {
//           console.log('That email address is already in use!');
//         }
//         if (error.code === 'auth/invalid-email') {
//           console.log('That email address is invalid!');
//         }
//         console.error(error);
//       });
// }
// const sendData = () => {
//   let id = database().ref('todos/').push().key
//   database().ref(`todos/${id}`).set({
//     userName:data.userName,
//     email:data.email,
//     password:data.password,
//   });

// }
//   return (
//     <View style={{ flex: 1, backgroundColor: "lightgray" }}>
//       <ScrollView>
//         <View style={styles.container}>
//           <Text style={styles.head}>Sign Up</Text>
//           <View>
//             <Text style={styles.text}>Name :</Text>
//             <Input pcolor="gray" place=" Enter the Email " change={(e) => setdata({ ...data, userName: e })} />
//           </View>
//           <View>
//             <Text style={[styles.text, { marginTop: 20 }]}>Email :</Text>
//             <Input pcolor="gray" place=" Enter the Email " change={(e) => setdata({ ...data, email: e })} />
//           </View>
//           <View>
//             <Text style={[styles.text, { marginTop: 20 }]}>Password :</Text>
//             <Input pcolor="gray" place=" Enter the Password " change={(e) => setdata({ ...data, password: e })} />
//           </View>
//           <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//             <Text style={{ marginTop: 25, fontSize: 20, color: "#003566", fontWeight:"bold" }}>You have already account?</Text>
//           </TouchableOpacity>
//           <Buttons styl={{ marginTop: 15, width: 200, }} press={signup} text="Sign Up" />
//           {/* <Buttons styl={{ marginTop: 15, width: 200, }} press={sendData} text="Sign Up" /> */}
//         </View>
//       </ScrollView>
//     </View>
//   )
// }
// const styles = StyleSheet.create({
//   container: {
//     margin: 20,
//     backgroundColor: "#f6fff8",
//     flex: 1,
//     alignItems: 'center',
//     elevation: 15,
//     borderRadius:20,
//     borderColor:"#003566" ,
//     borderWidth:2


//   },
//   head: {
//     fontSize: 35,
//     fontWeight: 'bold',
//     fontStyle: "italic",
//     marginTop: "12%",
//     marginBottom: "8%",
//     color: "black"
//   },
//   text: {
//     fontSize: 30,
//     color: "black",
//     fontStyle: "italic",
//     marginBottom: 5,
//   }
// })


import React from 'react'
import {useState} from 'react'
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Header from '../Componet/Header'
import Icon from "react-native-vector-icons/MaterialIcons"
import apple from '../images/apple.png'
import google from '../images/google.jpg'
import { Post } from '../config/ApiMethods'

const LogIn = ({ navigation }) => {
  let [data,setdata] = useState([])
  const login = () => {
    Post("/person/signup", data).then((res) => {
      navigation.navigate("Tab")
    }).catch((e) => {
      console.log(e)
    })
  }
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white" }}>
        <Header mystyle={{marginTop:30,fontSize:30}} title="Sign In" />
        <View style={{ marginTop: 20, marginLeft: 20 }} >
          <Text style={{ marginBottom: 10, fontSize: 30, color: "black", fontWeight: "bold" }}>Wellcome Back  </Text>
          <Text> Ipsum is that it hasto using 'Content here</Text>
          <Text> Ipsum is that it hasto using 'hear</Text>
          <TextInput onChangeText={(e) => setdata({ ...data, email: e })} style={[styles.inp, { marginTop: 20 }]} placeholder=" Enter Email" />
          <TextInput onChangeText={(e) => setdata({ ...data, password: e })} style={[styles.inp, { marginTop: 20 }]} placeholder=" Enter Password " />
          <Text style={{ fontSize: 25, marginLeft: 130, marginVertical: 10, color: "black" }}>Forget Password?</Text>
          {/* <Text style={{fontSize: 25, color: "blue"}}>Forget Password?</Text>    */}
        </View>
        <TouchableOpacity style={{ alignItems: "center" }} onPress={login}>
          <Text style={styles.btn} >Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: "center" }} onPress={() => navigation.navigate("Signup")}>
          <Text style={{ fontSize: 22, color: "gray" }}>Signin with</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingBottom:30,backgroundColor:"white",justifyContent:'center', alignItems:'center'}}>
        <View style={{ marginTop:20,flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity >
            <Image style={styles.icon} source={apple}/>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.icon} source={google}/>            
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    icon: { 
    width:40, 
    height:40,
    marginHorizontal: 10,
    backgroundColor: "white",
  },
  btn: {
    backgroundColor: "#9E8EFF",
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
  inp: {
    borderColor: "gray",
    width: 340,
    borderWidth: 1,
    fontSize: 25,
    borderRadius: 8,
    fontStyle: "italic",
    color: "black"
  }
})
export default LogIn