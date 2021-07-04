import React from 'react';
import {Button, Image, View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import Constant from 'expo-constants';

//AVqbldyYP4CfNuXQ//

//* Link mongodb+srv://AdminUser:AVqbldyYP4CfNuXQ@cluster0.gxc0n.mongodb.net/test  *//


export default function Header(){
    const navigation = useNavigation();
    return(
     <View style={{
         marginTop: Constant.statusBarHeight,
        height: 50,
        backgroundColor: '#F10080',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        elevation:10
    }}>
      <View>

      <View style={{
             flexDirection:'row',
             margin:5,
             alignContent:'center',
             justifyContent:'center'
         }}>
             <Text style={{
                 alignContent:'center',
                 justifyContent:'center',
                 fontSize: 22,
                 fontWeight:"bold",
                 marginLeft:30,
                 marginTop:2,
                 color:'white'
             }}>Salon Bomba</Text>
         </View>
      </View>
      <View style={{
             flexDirection:'row',
             justifyContent:'space-around',
             width:110,
             marginTop:10
         }}>
             <FontAwesome name="search" size={24} color="#00017a" />
             <FontAwesome name="user-plus" size={25} color="#00017a"
             onPress={() =>navigation.navigate('signup')}
             />
             <FontAwesome name="sign-in" size={25} color="#00017a"
             onPress={() =>navigation.navigate('login')}
             />
         </View>
      </View>

    );
  }
