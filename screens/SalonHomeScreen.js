
import React from 'react';
import { ImageBackground, StyleSheet, Text, View ,Image,Linking,Platform,Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Title,Card,Button} from 'react-native-paper'
import { MaterialIcons,Entypo} from '@expo/vector-icons'

const SalonHomeScreen = ()=>{

   const {_id,name,picture,phone,salary,email,position} = '';
   const deleteEmploye = ()=>{
       fetch("http://10.0.2.2:3000/delete",{
           method:"post",
           headers:{
            'Content-Type': 'application/json'
           },
           body:JSON.stringify({
               id:_id
           })
       })
       .then(res=>res.json())
       .then(deletedEmp=>{
           Alert.alert(`${deletedEmp.name} deleted`)
           props.navigation.navigate("Home")
       })
       .catch(err=>{
        Alert.alert("someting went wrong")
       })
   }
   const openDial=()=>{
        if(Platform.OS === "android"){
           Linking.openURL(`tel:${phone}`)
        }else{
           Linking.openURL(`telprompt:${phone}`)
        }
   }
  return (
      <View style={styles.root}>       
        <LinearGradient
         colors={["#0033ff","#edabe4"]}
         style={{height:"20%"}}
         />
         <View style={{alignItems:"center"}}>
             <ImageBackground
            style={{width:'100%',height:140,borderRadius:0,marginTop:-70}}
            source={require("../images/a.jpg")}
            >
             <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.mytext}>Dtito Salon</Text>
             </View>
            </ImageBackground>
          
         </View>
          <View style={{flexDirection:"column",justifyContent:'space-between', padding:0, margin:0}}>
          <Button 
            style={styles.buttonStyle}
             mode="contained"
             theme={theme}
              onPress={() => {
                 props.navigation.navigate("Create",
                 {_id,name,picture,phone,salary,email,position}
                 ) 
              }}>
                About
            </Button>
           
            <Button 
            style={styles.buttonStyle}
             mode="contained"
             theme={theme}
              onPress={() => {
                 props.navigation.navigate("Create",
                 {_id,name,picture,phone,salary,email,position}
                 ) 
              }}>
                Services
            </Button>
            <Button 
            style={styles.buttonStyle}
             mode="contained"
             theme={theme}
              onPress={() => deleteEmploye()}>
                Employee
            </Button>
            <Button 
            style={styles.buttonStyle}
             mode="contained"
             theme={theme}
              onPress={() => deleteEmploye()}>
                Review
            </Button>
         </View>
         <View style={{alignItems:"center",margin:15}}>
             <Title>{name}</Title>
             <Text style={{fontSize:15}}>{position}</Text>
         </View>
         
        

      </View>
  )
}

const theme = {
    colors:{
        primary:"#edabe4"
    }
}


const styles = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor: "#edabe4"
    },
    mycard:{
        margin:3
    },
cardContent:{
    flexDirection:"row",
    padding:8
},
mytext:{
    marginTop:110,
    marginLeft:5,
    color:'#1da6e0',
    fontSize:40
},
buttonStyle: {
    margin:3,
    marginLeft:0,
    marginRight:0,
    marginTop:0
}
})
export default SalonHomeScreen;
