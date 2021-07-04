// #2 Integration of Firebase Cloud Firestore Database with React Native App
// https://aboutreact.com/react-native-firebase-cloud-firestore-db

import React, {useState} from 'react';
import { View, StyleSheet,ScrollView, Text, TextInput, TouchableOpacity, Keyboard, KeyboardAvoidingView,} from 'react-native';
import firebase, {db} from '../firebase/config';

const AddSalon = () => {
  // We will insert these Dummy Order in use collection
  const [salon, setSalon] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');

  const addSalon= () => {
    if (salon && location && phone && description) {
      /*
        The "add()" method adds the new document with a random unique ID.
        If you'd like to specify your own ID then use "set()" method
        firestore()
          .collection('Users')
          .doc('101')
          .set({
            name: userName,
            contact: userContact,
            address: userAddress,
          })
        .then(() => {
          console.log('User added!');
        });
      */
      db.collection('salons')
        .add({
          name: salon,
          location: location,
          phone: phone,
          description: description,

        })
        .then(() => {
          Alert.alert(
            'Success',
            'You are Registered Successfully',
            [
              {
                text: 'Ok',
                onPress: () => props.navigation.navigate('Dashboard'),
              },
            ],
            {cancelable: false},
          );
        })
        .catch((error) => {
          Alert.alert(
            'Exception',
            error,
            [
              {
                text: 'Ok',
                onPress: () => props.navigation.navigate('Dashboard'),
              },
            ],
            {cancelable: false},
          );
        });

      
    } else {
      alert('Please fill all the details');
    }
  };
    

  return (
    <View style={{flex:1,paddingHorizontal: 35, backgroundColor:"#ed87c4"}}>
    
         <ScrollView>
             <KeyboardAvoidingView>
                 <Text style={styles.textStyle}>
                 Add Salon
                 </Text>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Salon Name"  
                value={salon}             
                onChangeText={text => setSalon(text)}
                underlineColorAndroid="#f000"         
                placeholderTextColor="blue"
                keyboardType="default"
                returnKeyType="next"
              
                blurOnSubmit={false}
              />
            </View>    
            
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Salon Location" 
                value={location}                
                onChangeText={text => setLocation(text)}
                underlineColorAndroid="#f000"         
                placeholderTextColor="blue"
                keyboardType="default"
                returnKeyType="next"
              
                blurOnSubmit={false}
              />
            </View>   
            
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Salon Phone Number" 
                value={phone}                
                onChangeText={text => setPhone(text)}
                underlineColorAndroid="#f000"         
                placeholderTextColor="blue"
                keyboardType="phone-pad"
                returnKeyType="next"       
                blurOnSubmit={false}
              />
            </View>  
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                placeholder="Enter Description" 
                value={description}                
                onChangeText={text => setDescription(text)}
                underlineColorAndroid="#f000"         
                placeholderTextColor="blue"
                keyboardType="sentences"
                returnKeyType="next"       
                blurOnSubmit={false}
              />
            </View> 
            <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={addSalon}>
                <Text style={styles.buttonTextStyle}>Add Salon</Text>
              </TouchableOpacity>
          
              </KeyboardAvoidingView>
            </ScrollView>
    </View>
  );
};

export default AddSalon;

const styles = StyleSheet.create({
    textStyle:{
        margin:10,
        color:"#fff"
    },
    SectionStyle: {
      flexDirection: 'row',
      height: 30,
      marginTop: 5,
      marginLeft: 35,
      marginRight: 35,
      margin: 10,
    },
    buttonStyle: {
      backgroundColor: '#009387',
      borderWidth: 0,
      color: '#FFFFFF',
      borderColor: 'blue',
      height: 40,
      alignItems: 'center',
      borderRadius: 30,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 10,
      marginBottom: 10,
    },
    buttonTextStyle: {
      color: '#FFFFFF',
      paddingVertical: 10,
      fontSize: 16,
    },
    inputStyle: {
      flex: 1,
      color: '#009387',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 1,
      borderRadius: 30,
      borderColor: '#009387',
    },
  
  });