import Icon from "react-native-vector-icons/MaterialIcons"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({navigating,title,mystyle}) => {
    return (
        <View style={[styles.headercont,mystyle]}>
            <TouchableOpacity style={styles.icon} onPress={()=>navigating.navigate(-1)}>
                <Icon name="arrow-back-ios" size={20} color="gray" />
            </TouchableOpacity>
            <Text style={styles.header}>{title}</Text>
        </View>
    )
}

let styles = StyleSheet.create({
    icon:{
        position:"absolute",
        left:20,      
    },
    header: {
        fontSize: 20,
        color:"black"
    },
    headercont: {
        color: "black",
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 10
    }
})
export default Header