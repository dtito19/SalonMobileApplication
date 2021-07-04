
import React, {useContext, useState } from 'react'
import { ActivityIndicator, ImageBackground,Picker, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import {AuthContext} from '../navigation/AuthProvider';

export default function SignupScreen({navigation}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [submit, setSubmit] = useState(false);

    const {register} = useContext(AuthContext);


    return (
        <View style={styles.container}>
            <ImageBackground source={require('../images/back.jpg')} style={styles.image}>
            <KeyboardAwareScrollView
                style={{ flex: 1, width: '100%' }}
                keyboardShouldPersistTaps="always">
                {/* <TextInput
                    style={styles.input}
                    placeholder='First Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setFirstName(text)}
                    value={firstName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder='Last Name'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setLastName(text)}
                    value={lastName}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                /> */}
                <TextInput
                    style={styles.input}
                    placeholder='E-mail'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                {/* <View style={styles.label}>
                    <Text style={styles.labelInput}>Register as:</Text>
                </View>
                <View style={styles.card}>
                    
                 <Picker
                    selectedValue={roles}
                    onValueChange={text => setRoles(text)}
                    style={{color: "white"}}
                    mode="dropdown">
                 <Picker.Item label="Customer" value="Customer" />
                 <Picker.Item label="Salonist" value="Salonist" />
                 </Picker>
                </View> */}
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Password'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholderTextColor="#aaaaaa"
                    secureTextEntry
                    placeholder='Confirm Password'
                    onChangeText={(text) => setConfirmPassword(text)}
                    value={confirmPassword}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                
                {!submit?<TouchableOpacity
                    style={styles.button}
                    onPress={() => register(email, password)}>
                    <Text style={styles.buttonTitle}>Create account</Text>
                </TouchableOpacity>:<ActivityIndicator size='large' color='blue'/>}
                <View style={styles.footerView}>
                    <Text style={styles.footerText}>
                        Already got an account? 
                    <Text onPress={() => navigation.navigate('login')} style={styles.footerLink}>
                        Log in</Text></Text>
                </View>
            </KeyboardAwareScrollView>
            </ImageBackground>
        </View>
    )
};

