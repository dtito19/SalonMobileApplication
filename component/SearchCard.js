import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 


const SearchCard= () =>{
    return(
       
      <View 
      style={{
        flex:1
    }} 
      >
        <View style={{
            flexDirection:'row', 
            margin:5,
            marginBottom:0
        }}>
        <MaterialIcons name="account-circle" size={60} color="#00017a" />
         <View 
         style={{
             margin:10
         }}
         >
             <Text>Dtito Beauty Salon</Text>
             <Text>Fikiri Tito</Text>
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

export default  SearchCard;