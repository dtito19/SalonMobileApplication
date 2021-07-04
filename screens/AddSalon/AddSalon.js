import React,{useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View,Modal,Alert,KeyboardAvoidingView} from 'react-native';
import {TextInput,Button, ActivityIndicator} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import {AuthContext} from '../../navigation/AuthProvider';
import firebase, {db, storage} from '../../firebase/config';

const AddSalon = ({navigation})=>{
  const {user, logout} = useContext(AuthContext);
    const [salon, setSalon] = useState(null);
    const [location, setLocation] = useState(null);
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [modal,setModal] = useState(false)
    const [enableshift,setenableShift] = useState(false)

  

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
  
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
  
    const submitSalon = async () => {
      const imageUrl = await uploadImage();
      console.log('Image Url: ', imageUrl);
      console.log('Salon: ', salon);
  
      db
      .collection('salons')
      .add({
        userId: user.uid,
        salon: salon,
        location: location,
        phone:phone,
        salonImg: imageUrl,
        addTime: firebase.firestore.Timestamp.fromDate(new Date()),
      })
      .then(() => {
        console.log('Salon Added!');
        Alert.alert(
          'Salon published!',
          'Your salon has been published Successfully!',
        );
        setPost(null);
      })
      .catch((error) => {
        console.log('Something went wrong with added salon to firestore.', error);
      });
    }
  
  
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
  
  

    return(
     <KeyboardAvoidingView behavior="position" style={styles.root} enabled={enableshift}>
        <View >
            <TextInput
                label='Salon Name'
                style={styles.inputStyle}
                value={salon}
                onFocus={()=>setenableShift(false)}
                theme={theme}
                mode="outlined"
                onChangeText={text => setSalon(text)}
            />
            <TextInput
                label='Location'
                style={styles.inputStyle}
                value={location}
                theme={theme}
                onFocus={()=>setenableShift(false)}
                mode="outlined"
                onChangeText={text => setLocation(text)}
            />
            <TextInput
                label='phone'
                style={styles.inputStyle}
                value={phone}
                theme={theme}
                onFocus={()=>setenableShift(false)}
                keyboardType="number-pad"
                mode="outlined"
                onChangeText={text =>setPhone(text)}
            />
             
            
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
              onPress={() => submitSalon()}>
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

export default AddSalon;