import React from 'react';
import {Button, Image, View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';


export default function ProfileHeader(){
    const navigation = useNavigation();
    const route = useRoute();
    return(
     <View style={{
         marginTop: 0,
        height: 60,
        backgroundColor: '#009387',
        flexDirection: 'row',
        justifyContent:'space-evenly',
        elevation:10
    }}>
      <View>

      <View style={{
                flexDirection:"row",
                 justifyContent:'flex-start',
                 color:'white'
             }}>
        
             <Text style={styles.TextStyle} >Profile</Text>
         </View>
      </View>
     
      </View>

    );
  }

  const styles = StyleSheet.create({
    container: {

    },
    TextStyle:{
        alignContent:'center',
        justifyContent:'center',
        fontSize: 25,
        fontWeight:"bold",
        marginLeft:30,
        marginTop:10,
        color:'white'
    
    }
  });
