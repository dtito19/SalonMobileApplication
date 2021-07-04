import React, {useEffect, useState} from 'react';
import { FlatList, Image, View, Text, Button, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import SalonHeader from '../component/SalonHeader';
import firebase, {db, storage} from '../firebase/config';


const SalonScreen = ({navigation}) => {
  const [salons, setSalons] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const fetchSalons = async() =>{
      try{
          const list = [];
        await  db
          .collection('salons')
          .get()
          .then((querySnapshot) =>{
            // console.log('Total Salons: ', querySnapshot.size);
            querySnapshot.forEach(doc => {
              const {salon, location, salonImg, phone} = doc.data();
              list.push({
                id: doc.id,
                salonId,
                salon:salon, 
                salonImg: salonImg,
                phone: phone,
                location: location,
              });
            });
          })

          setSalons(list);

          if(loading){
            setLoading(false);
          }

          // console.log('Salons', list);
      }catch(e){
        console.log(e);
      }
      
    }

    fetchSalons();

  }, []);

  const renderList = ((item) =>{
    return(
      <Card style={styles.mycard}
    
    onPress={()=>navigation.navigate("HomeSalon",{salonId: item.salonId})}
    >
    <View style={styles.cardView}>
         <Image
        style={{width:60,height:60,borderRadius:30}}
        source={{uri: item.salonImg}}
        
        />
        <View style={{marginLeft:10}}>
            <Text style={styles.text}>{item.salon}</Text>   
             <Text style={styles.text}>{item.location}</Text>   
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
          <SalonHeader/>
        </View>
        <View>
            <FlatList
              data= {salons}
              renderItem={({item}) =>{
                return renderList(item)
              }}
              keyExtractor={item =>`${item.id}`}
            />
        </View>
     
     
      </View>
    );
};

export default SalonScreen;



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

// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   ScrollView,
//   FlatList,
//   SafeAreaView,
//   Alert,
// } from 'react-native';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
// import PostCard from '../components/PostCard';

// import firease, {db, storage} from '../firebase/config';


// import {Container} from '../styles/FeedStyles';

// const Salons = [
//   {
//     id: '1',
//     salon:'Test Salon 1',
//     location: "Temeke",
//     salonImg: require('../assets/salons/salon-img-3.jpg'),
//   },
//   {
//     id: '2',
//     salon:'Another Salon',
//     location: "Pugu",
//     salonImg:'none',
//   },
 
// ];

// const SalonScreen = ({navigation}) => {
//   const [salons, setSalons] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [deleted, setDeleted] = useState(false);

//   const fetchSalons = async () => {
//     try {
//       const list = [];
//       await db
//         .collection('salons')
//         .orderBy('addTime', 'desc')
//         .get()
//         .then((querySnapshot) => {
//           // console.log('Total Posts: ', querySnapshot.size);
          

//           querySnapshot.forEach((doc) => {
//             const {      
//               salon,
//               location,
//               salonImg,
//             } = doc.data();
//             list.push({
//               id: doc.id,
//               salon,
//               location,
//               salonImg:
//                 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',

 
//             });
//           });
//         });

//       setSalons(list);

//       if (loading) {
//         setLoading(false);
//       }

//       console.log('Salons: ', salons);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     fetchSalons();
//   }, []);

//   useEffect(() => {
//     fetchSalons();
//     setDeleted(false);
//   }, [deleted]);

//   const handleDelete = (salonId) => {
//     Alert.alert(
//       'Delete salon',
//       'Are you sure?',
//       [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed!'),
//           style: 'cancel',
//         },
//         {
//           text: 'Confirm',
//           onPress: () => deletePost(salonId),
//         },
//       ],
//       {cancelable: false},
//     );
//   };

//   const deletePost = (salonId) => {
//     console.log('Current Post Id: ', salonId);

//     db
//       .collection('salons')
//       .doc(salonId)
//       .get()
//       .then((documentSnapshot) => {
//         if (documentSnapshot.exists) {
//           const {salonImg} = documentSnapshot.data();

//           if (salonImg != null) {
//             const storageRef = storage.refFromURL(salonImg);
//             const imageRef = storage.ref(storageRef.fullPath);

//             imageRef
//               .delete()
//               .then(() => {
//                 console.log(`${salonImg} has been deleted successfully.`);
//                 deleteFirestoreData(salonId);
//               })
//               .catch((e) => {
//                 console.log('Error while deleting the image. ', e);
//               });
//             // If the salon image is not available
//           } else {
//             deleteFirestoreData(salonId);
//           }
//         }
//       });
//   };

//   const deleteFirestoreData = (salonId) => {
//       db
//       .collection('salons')
//       .doc(salonId)
//       .delete()
//       .then(() => {
//         Alert.alert(
//           'Post deleted!',
//           'Your salon has been deleted successfully!',
//         );
//         setDeleted(true);
//       })
//       .catch((e) => console.log('Error deleting posst.', e));
//   };

//   const ListHeader = () => {
//     return null;
//   };
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       {loading ? (
//         <ScrollView
//           style={{flex: 1}}
//           contentContainerStyle={{alignItems: 'center'}}>
//           <SkeletonPlaceholder>
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <View style={{width: 60, height: 60, borderRadius: 50}} />
//               <View style={{marginLeft: 20}}>
//                 <View style={{width: 120, height: 20, borderRadius: 4}} />
//                 <View
//                   style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
//                 />
//               </View>
//             </View>
//             <View style={{marginTop: 10, marginBottom: 30}}>
//               <View style={{width: 300, height: 20, borderRadius: 4}} />
//               <View
//                 style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
//               />
//               <View
//                 style={{marginTop: 6, width: 350, height: 200, borderRadius: 4}}
//               />
//             </View>
//           </SkeletonPlaceholder>
//           <SkeletonPlaceholder>
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <View style={{width: 60, height: 60, borderRadius: 50}} />
//               <View style={{marginLeft: 20}}>
//                 <View style={{width: 120, height: 20, borderRadius: 4}} />
//                 <View
//                   style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
//                 />
//               </View>
//             </View>
//             <View style={{marginTop: 10, marginBottom: 30}}>
//               <View style={{width: 300, height: 20, borderRadius: 4}} />
//               <View
//                 style={{marginTop: 6, width: 250, height: 20, borderRadius: 4}}
//               />
//               <View
//                 style={{marginTop: 6, width: 350, height: 200, borderRadius: 4}}
//               />
//             </View>
//           </SkeletonPlaceholder>
//         </ScrollView>
//       ) : (
//         <Container>
//           <FlatList
//             data={salons}
//             renderItem={({item}) => (
//               <PostCard
//                 item={item}
//                 onDelete={handleDelete}
//                 onPress={() =>
//                   navigation.navigate('HomeProfile')
//                 }
//               />
//             )}
//             keyExtractor={(item) => item.id}
//             ListHeaderComponent={ListHeader}
//             ListFooterComponent={ListHeader}
//             showsVerticalScrollIndicator={false}
//           />
//         </Container>
//       )}
//     </SafeAreaView>
//   );
// };

// export default SalonScreen;