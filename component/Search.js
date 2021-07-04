import React, {useState} from 'react';
import {Button, Image, View, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { Ionicons, MaterialIcons} from '@expo/vector-icons'; 
import Constant from 'expo-constants';
import SearchCard from './SearchCard';

export default function SearchScreen(){
    const [value, setValue] = useState('');
    return(
        <View style={{
            flex:1,
        }}>
             <View style={{
            marginTop: Constant.statusBarHeight,
            flexDirection:'row',
            padding:5,
            justifyContent:'space-around',
            elevation:5
            
        }}>
            <Ionicons name="md-arrow-back-sharp" size={32} color="black" />
            <TextInput
            style={{
                width:'70%',
                backgroundColor:'white',
                borderRadius:5
            }}
            value={value}
            onChangeText={(text) => setValue(text)}
            />
            <MaterialIcons name="cancel" size={32} color="black" />
          </View>

            <SearchCard/>
            <SearchCard/>
       
        </View>
    );
  }
