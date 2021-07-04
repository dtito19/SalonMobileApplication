// components/dashboard.js


// import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import DashboardHeader from '../component/DashboardHeader';
import EmployeeCard from '../component/EmployeeCard';
import SalonCard from '../component/SalonCard';

import firebase, {db} from '../firebase/config';



import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import TodayAppointment from '../component/TodayAppointment';
import TotalAppointment from '../component/TotalAppointment';

export default class CustomerHome extends Component  {
  constructor() {
    super();
    this.state = {
      uid: ''
    }
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Home')
    })
    .catch(error => this.setState({ errorMessage: error.message }))
  }


  render() {
    this.state = {
      name: firebase.auth().currentUser.name,
      email: firebase.auth().currentUser.email,
      uid: firebase.auth().currentUser.uid
    }
    return (
      <View style={styles.container}>
        <View>
          <DashboardHeader/>
        </View>
        <View>
          <ScrollView >
              <View style={{flexDirection:'row'}}>
              <TodayAppointment/>
              <TotalAppointment/>
              </View>
              <View style={{flexDirection:'row'}}>
              <SalonCard/>
              <EmployeeCard/>
              </View>
              <View style={{flexDirection:'row'}}>
              <SalonCard/>
              <EmployeeCard/>
              </View>
          </ScrollView>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#edb4f0",
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:15,
    color:"#778899",
    fontWeight:'500',
  },
  body:{
    backgroundColor: "#30302e",
    height:500,
    alignItems:'flex-start',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingRight:110
  },
  iconContent:{
    marginLeft:100
     },
  icon:{
    width:30,
    height:30,
    marginTop:10,
    marginLeft:50
  },
  info:{
    fontSize:18,
    marginRight:120,
    marginLeft:20,
    marginTop:20,
    color: "#FFFFFF",
  },
  button:{
    margin:10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    marginLeft:100
  }
});
