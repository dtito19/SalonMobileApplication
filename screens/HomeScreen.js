import React, {useEffect} from 'react';
import { FlatList, Image, View, Text, Button, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import HomeHeader from '../component/HomeHeader';
import firebase, {db, storage} from '../firebase/config';


const HomeScreen = () => {

  // useEffect(() =>{
  //   const fetchSalons = async() =>{
  //     try{
  //         const list = [];

  //         db
  //         .collection('salons')
  //         .get()
  //         .then((querySnapshot) =>{
  //           // console.log('Total Salons: ', querySnapshot.size);
  //           querySnapshot.forEach(doc => {
  //             const {userId, salon, location, salonImg, phone} = doc.data();
  //             list.push({
  //               id: doc.id,
  //               userId,
  //               salon:salon, 
  //               salonImg: salonImg,
  //               phone: phone,
  //               location: location,
  //             });
  //           });
  //         })
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


  const { colors } = useTheme();

  const theme = useTheme();
  
    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.white ? "light-content" : "dark-content" }/>
        <View> 
          <HomeHeader/>
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
};

export default HomeScreen;



const styles = StyleSheet.create({
  container:{
    flex: 1, 
    backgroundColor:'#edb4f0',
    marginTop:0,
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
