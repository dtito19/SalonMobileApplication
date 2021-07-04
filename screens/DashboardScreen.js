import DashboardHeader from '../component/DashboardHeader';
import EmployeeCard from '../component/EmployeeCard';
import SalonCard from '../component/SalonCard';

import firebase, {db} from '../firebase/config';



import React, { useEffect, useContext, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from 'react-native';
import TodayAppointment from '../component/TodayAppointment';
import TotalAppointment from '../component/TotalAppointment';
import {AuthContext} from '../navigation/AuthProvider';
import { Card } from 'react-native-paper';


const Dashboard = () => {
          // const {user, logout} = useContext(AuthContext);
          // const [salons, setSalons] = useState(null);
          // const [loading, setLoading] = useState(true);

          // useEffect(() =>{
  //   const fetchSalons = async() =>{

  //     try{
  //         const list =[];

  //         db
  //         .collection('salons')
  //         .get()
  //         .then((querySnapshot) =>{
  //           // console.log('Total Salons: ', querySnapshot.size);
  //           querySnapshot.forEach(doc => {
  //             const {salon,salonImg,location,phone } = doc.data();
  //             list.push({
  //               id: doc.id, 
  //               salon,
  //               salonImg,
  //               location,
  //               phone
  //             });

  //           })
            
  //         })
  //         setSalons(list);

  //         if(loading){
  //           setLoading(false);
  //         }
  //         console.log('Salon', list);
  //     }catch(e){
  //       console.log(e);
  //     }
      
  //   }

  //   fetchSalons();

  // }, []);
          const data = [
            {id:1, salon:'DtitoSalon',location:'Pugu',phone:'0712104228'},
            {id:2, salon:'ReysamSalon',location:'Temeke',phone:'09976543'},
            {id:3, salon:'ChachSalon',location:'Kitunda',phone:'0712104228'},

          ]
          const renderList = ((item) =>{
            return(
              <Card style={styles.mycard}
            
            onPress={()=>navigation.navigate("Profile",{item})}
            >
            <View style={styles.cardView}>
                 <Image
                style={{width:60,height:60,borderRadius:30}}
                source={require('../images/back.jpg')}
                
                />
                <View style={{marginLeft:10}}>
                    <Text style={styles.text}>{item.salon}</Text>   
                     <Text style={styles.text}>{item.location}</Text>   
                     <Text style={styles.text}>{item.phone}</Text>     
                </View>
           
            </View>
            
           </Card>
            )
          })

  
 
    return (
      <View style={styles.container}>
        <View> 
          <DashboardHeader/>
        </View>
        <View>
            <FlatList
              data= {data}
              renderItem={({item}) =>{
                return renderList(item)
              }}
              keyExtractor={item =>`${item.id}`}
            />
        </View>

      </View>
    );
  }

  export default Dashboard;

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
  },
  mycard:{
    margin:5,
   
},
cardView:{
     flexDirection:"row",
     padding:6
},
text:{
    fontSize:18,
},
fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});


