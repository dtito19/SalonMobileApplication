import React from 'react';
import {Button, Image, View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import CustomMenu from './CustomMenu';

export default function DashboardHeader(){
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
         <CustomMenu
              //Menu Text
              menutext="Menu"
              //Menu View Style
              menustyle={{marginRight: 30, marginTop: 15 }}
              navigation={navigation}
              route={route}
              isIcon={true}
            />
             <Text style={styles.TextStyle} >Dashboard</Text>
         </View>
      </View>
      <View>

       <Image
        style={{
           justifyContent:'flex-end',
           width:40,
           height:40,
           marginTop:10,
           marginLeft:60,
           borderRadius:30
                }}
                 source={require('../images/user.png')} >
                 </Image>
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
