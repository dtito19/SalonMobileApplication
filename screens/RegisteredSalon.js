import React from 'react';
import {Image, View, StyleSheet, Text, SafeAreaView } from 'react-native';
import Search from '../component/Search';


const RegisteredSalon = () =>{
    return(
       
      <View 
      style={{
        backgroundColor:'#edb4f0',
        flex:1,
        margin:0
    }}
      >
        <Search/>
      
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

export default  RegisteredSalon;