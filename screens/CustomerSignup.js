

// Import React and Component
import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  ActivityIndicator,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Loader from '../component/Loader'
import firebase, {db} from '../database/firebase';

export default class Signup extends Component {

	constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            phoneNum: '',
            email: '',
            password: '',
            
            
        }

        this.onSignUp = this.onSignUp.bind(this)
    }
   
    onSignUp=()=> {
		if(this.state.firstName === ''){
      Alert.alert('Enter First Name')
    } else if(this.state.lastName === '' ){
      Alert.alert('Enter Last Name')
    }
    else if(this.state.phoneNum === '' ){
      Alert.alert('Enter Phone Number')
    }
    else if(this.state.email === ''){
      Alert.alert('Enter Email')
    }
    else if(this.state.password === '' ){
      Alert.alert('Enter Password')
    }
      
      
      else {
			this.setState({
			  isLoading: true,
			})
        const {firstName, lastName, phoneNum, email, password} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                db.collection("customers")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        firstName,
                        lastName,
                        phoneNum,
                        email
                    })
                console.log(result)
                
				this.props.navigation.navigate('login')
            })
            .catch((error) => {
              Alert.alert("Email is Already in use");
              this.props.navigation.navigate('register')
                console.log(error)
            })
    }
	}
  render() {
    if(this.state.isLoading){
      return(
        <View >
          <Loader/>
        </View>
      )
    }

    return (
      
      <View style={{flex: 1, backgroundColor: '#ed87c4'}}>
        {/* <Loader loading={loading} /> */}
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={require('../images/aboutreact.png')}
              style={{
                width: '50%',
                height: 100,
                resizeMode: 'contain',
                margin: 30,
              }}
            />
          </View>
          <KeyboardAvoidingView enabled>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(firstName) => this.setState({firstName})}
                underlineColorAndroid="#f000"
                placeholder="First Name"
                placeholderTextColor="blue"
                autoCapitalize="sentences"
                returnKeyType="next"
              
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(lastName) => this.setState({lastName})}
                underlineColorAndroid="#f000"
                placeholder="Last Name"
                placeholderTextColor="blue"
                keyboardType="email-address"
                returnKeyType="next"
           
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(phoneNum) => this.setState({phoneNum})}
                underlineColorAndroid="#f000"
                placeholder="Enter Phone Number"
                placeholderTextColor="blue"
                keyboardType="phone-pad"
                returnKeyType="next"
              
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(email) => this.setState({email})}
                underlineColorAndroid="#f000"
                placeholder="Enter Email"
                placeholderTextColor="blue"
                autoCapitalize="none"
                // ref={addressInputRef}
                keyboardType="email-address"
                returnKeyType="next"
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
              />
            </View>
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(password) => this.setState({password})}
                underlineColorAndroid="#f000"
                placeholder="Enter Password"
                placeholderTextColor="blue"
                // ref={passwordInputRef}
                returnKeyType="next"
                secureTextEntry={true}
                
                blurOnSubmit={false}
              />
            </View>
            
            <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => this.onSignUp()}>
              <Text style={styles.buttonTextStyle}>REGISTER</Text>
            </TouchableOpacity>

            <Text
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('login')}>
          Already Registered? Click here to login
        </Text>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  };
}

const styles = StyleSheet.create({
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
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  loginText: {
    color: '#fff',
    marginTop: 5,
    textAlign: 'center'
  },
});