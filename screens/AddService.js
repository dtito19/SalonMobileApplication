import React,{useState, useEffect, useContext} from 'react';
import { 
    StyleSheet, 
    View,
    Modal,
    Alert,
    KeyboardAvoidingView,
    Picker,
} from 'react-native';
import {TextInput,Button, ActivityIndicator} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import {AuthContext} from '../navigation/AuthProvider';
import firebase, {db, storage} from '../firebase/config';

const AddServiceScreen = ({navigation})=>{
    const {user, logout} = useContext(AuthContext);
    const [name, setName] = useState(null);
    const [price, setPrice] = useState(null);
    const [category, setCategory] = useState('');
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
  
    const submirService = async () => {
      const imageUrl = await uploadImage();
      console.log('Image Url: ', imageUrl);
      console.log('Service: ', service);
  
      db
      .collection('Services')
      .add({
        userId: user.uid,
        name: name,
        price: price,
        category:category,
        serviceImg: image,
        addTime: firebase.firestore.Timestamp.fromDate(new Date()),
      })
      .then(() => {
        console.log('Service Added!');
        Alert.alert(
          'Your Service Have been Added Successfully!',
        );
        setService(null);
      })
      .catch((error) => {
        console.log('Something went wrong with added service to firestore.', error);
      });
    }
  
  
    const uploadImage = async () =>{
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
                value={name}
                onFocus={()=>setenableShift(false)}
                theme={theme}
                mode="outlined"
                onChangeText={text => setName(text)}
            />
            <TextInput
                label='Location'
                style={styles.inputStyle}
                value={price}
                theme={theme}
                onFocus={()=>setenableShift(false)}
                mode="outlined"
                onChangeText={text => setPrice(text)}
            />
            <Picker
                selectedValue={category}
                onValueChange={text => setCategory(text)}
                style={{ width: 160, alignContent:'center'}}
                mode="dropdown">
                <Picker.Item label="Beauty Salon" value="Beauty Salon" />
                <Picker.Item label="Dreadlocks Salon" value="Dreadlocks Salon" />
                <Picker.Item label="Hair Cutting" value="Hair Cutting Salon" />
                <Picker.Item label="Manicure Salon" value="Manicure Salon" />
                <Picker.Item label="Makeup Salon" value="Makeup Salon" />
                <Picker.Item label="Message Salon" value="Message Salon" />
                <Picker.Item label="Pedicure Salon" value="Pedicure Salon" />
                <Picker.Item label="Unisex Salon" value="Unisex Salon" />
            </Picker>
             
            
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
              onPress={() => submirService()}>
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

export default AddServiceScreen;
