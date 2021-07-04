import React from 'react';
import {Image, View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const Card = () =>{
    return(
        <View >
            <Image 
              style={styles.image}
              source={require('../images/braid_twist.jpg')}
            />
        <View style={{
            flexDirection:'row', 
            margin:2
        }}>
        <MaterialIcons name="account-circle" size={40} color="#00017a" />
         <View 
         style={{
             marginLeft:10
         }}
         >
             <Text>This is Braid Twist Style</Text>
             <Text>Dtito Beauty Salon</Text>
         </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        
       alignItems:'center',
       justifyContent:'center',
        width:"100%",
        height:200, 

      }
})

export default Card;