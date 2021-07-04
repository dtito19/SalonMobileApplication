import React,{useState, useEffect, useContext} from 'react';
import { Image, StyleSheet, Text, View,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import {TextInput,Button, ActivityIndicator} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';
import {AuthContext} from '../navigation/AuthProvider';
import firebase, {db, storage} from '../firebase/config';

const EditProfileScreen = ({navigation})=>{
    const {user, logout} = useContext(AuthContext);
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [userData, setUserData] = useState(null);
    const [modal,setModal] = useState(false)
    const [enableshift,setenableShift] = useState(false)

  

    const getUser = async() => {
      const currentUser = await db
      .collection('users')
      .doc(user.uid)
      .get()
      .then((documentSnapshot) => {
        if( documentSnapshot.exists ) {
          console.log('User Data', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      })
    }

    const handleUpdate = async() => {
      let imgUrl = await uploadImage();
  
      if( imgUrl == null && userData.userImg ) {
        imgUrl = userData.userImg;
      }
  
      db
      .collection('users')
      .doc(user.uid)
      .update({
        fname: userData.fname,
        lname: userData.lname,
        // about: userData.about,
        // phone: userData.phone,
        // country: userData.country,
        // city: userData.city,      
       userImg: imgUrl,
      })
      .then(() => {
        console.log('User Updated!');
        Alert.alert(
          'Profile Updated!',
          'Your profile has been updated successfully.'
        );
      })
    }


    
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };
  
    // const submitSalon = async () => {
    //   const imageUrl = await uploadImage();
    //   console.log('Image Url: ', imageUrl);
    //   console.log('Salon: ', salon);
  
    //   db
    //   .collection('salons')
    //   .add({
    //     userId: user.uid,
    //     salon: salon,
    //     location: location,
    //     phone:phone,
    //     salonImg: imageUrl,
    //     addTime: firebase.firestore.Timestamp.fromDate(new Date()),
    //   })
    //   .then(() => {
    //     console.log('Salon Added!');
    //     Alert.alert(
    //       'Salon published!',
    //       'Your salon has been published Successfully!',
    //     );
    //     setPost(null);
    //   })
    //   .catch((error) => {
    //     console.log('Something went wrong with added salon to firestore.', error);
    //   });
    // }
  
  
    const uploadImage = async () =>{
      if (image ==null){
        return null;
      }
      const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function(){
          resolve(xhr.response);
        };
        xhr.onerror = function(){
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', image, true);
        xhr.send(null);
      });
  
      const ref = storage.ref().child(new Date().toISOString())
      const snapshot = ref.put(blob)
  
  
  
  
      snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED,() =>{
        setUploading(true);
      }, 
      (error) => { 
        setUploading(false)
        console.log(error)
        blob.close()
        return
      },
      () =>{
        snapshot.snapshot.ref.getDownloadURL().then((url) =>{
          setUploading(false)
          console.log('download url: ', url);
          blob.close();
          return url;
        });
      }
      
      );
    }
  
    useEffect(() => {
      getUser();
    }, []);
  

    return(
     <KeyboardAvoidingView behavior="position" style={styles.root} enabled={enableshift}>
        <View >

        <LinearGradient
         colors={["#0033ff","#6bc1ff"]}
         style={{height:"20%"}}
         />
         <View style={{alignItems:"center"}}>
             <Image
            style={{width:80,height:80,borderRadius:140/2,marginTop:-90}}
            source={{
              uri: image
                ? image
                : userData
                ? userData.userImg ||
                  'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg'
                : 'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
            }}
            /> 
            <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            {userData ? userData.fname : ''} {userData ? userData.lname : ''}
          </Text>
         </View>
            <TextInput
                label='First Name'
                style={styles.inputStyle}
                value={userData ? userData.fname : ''}
                onFocus={()=>setenableShift(false)}
                theme={theme}
                mode="outlined"
                onChangeText={(txt) => setUserData({...userData, fname: txt})}
            />
            <TextInput
                label='Last Name'
                style={styles.inputStyle}
                value={userData ? userData.lname : ''}
                theme={theme}
                onFocus={()=>setenableShift(false)}
                mode="outlined"
                onChangeText={(txt) => setUserData({...userData, lname: txt})}
            />
            {/* <TextInput
                label='phone'
                style={styles.inputStyle}
                value={phone}
                theme={theme}
                onFocus={()=>setenableShift(false)}
                keyboardType="number-pad"
                mode="outlined"
                onChangeText={text =>setPhone(text)}
            /> */}
             
            
             <Button 
             style={styles.inputStyle}
             icon={image==""?"upload":"check"}
              mode="contained" 
              theme={theme}
              onPress={() => setModal(true)}>
                    Upload Image
             </Button>
             
             {!uploading?<Button 
             style={styles.inputStyle}
             icon="content-save"
              mode="contained" 
              theme={theme}
              onPress={() => handleUpdate()}>
                   save
             </Button>:<ActivityIndicator size='large' color='blue'/>}
             
     
             
             <Modal
             animationType="slide"
             transparent={true}
             visible={modal}
             onRequestClose={()=>{
                 setModal(false)
             }}
             >
              <View style={styles.modalView}>
                  <View style={styles.modalButtonView}>
                        <Button 
                        icon="image-area"
                         mode="contained"
                         theme={theme}
                          onPress={() => pickImage()}>
                                gallery
                        </Button>
                  </View>
                <Button 
                 theme={theme}
                onPress={() => setModal(false)}>
                        cancel
                </Button>
              </View>
             </Modal>
         
      </View>
      </KeyboardAvoidingView>
     
 
    )
}

const theme = {
    colors:{
        primary:"#006aff"
    }
}
const styles=StyleSheet.create({
    root:{
       flex:1,
       marginTop:30
    },
    inputStyle:{
        margin:5
    },
    modalView:{
        position:"absolute",
        bottom:2,
        width:"100%",
        backgroundColor:"white"

    },
    modalButtonView:{
        flexDirection:"row",
        justifyContent:"space-around",
        padding:10
    }
})

export default EditProfileScreen;