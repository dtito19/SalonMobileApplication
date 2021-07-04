import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import Header from '../component/Header'

const AboutScreen=() =>{
    return(
      <View style={{
        backgroundColor:'#F10080'
    }}>
        <Header/>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'skyblue'
    },
});

export default AboutScreen;