import React, {useState} from 'react';
import { View, StyleSheet,ScrollView, Text, Modal} from 'react-native';
// import { } from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';

const Employee = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [specialist, setSpecialist] = useState('');
    const [modal, setModal] = useState(false);




    return(
        <View style={styles.root}>
            <ScrollView>
                <Text style={styles.textStyle}>
                    Welcome Got Company 
                 </Text>
                 <Text style={styles.textStyle}>
                 Add Them Below
                 </Text>

            <TextInput
            label='Name'
            style={styles.inputStyle}
            value={name}
            theme={theme}
            mode='outlined'
            onChangeText={text => setName(text)}
            />     
            
            <TextInput
            label='Email'
            style={styles.inputStyle}
            value={email}
            theme={theme}
            mode='outlined'
            onChangeText={text => setEmail(text)}
            />     
            
            <TextInput
            label='Phone'
            style={styles.inputStyle}
            value={phone}
            theme={theme}
            keyboardType='phone-pad'
            mode='outlined'
            onChangeText={text => setPhone(text)}
            />

              <TextInput
            label='Specialist'
            style={styles.inputStyle}
            value={specialist}
            theme={theme}
            mode='outlined'
            onChangeText={text => setSpecialist(text)}
            /> 

             <Button
            icon="upload" 
            mode='contained' 
            style={styles.uploabutton}
            theme={theme}
            onPress={() =>setModal(true)}
            >
               Upload Image
            </Button> 
            <Button
            icon="content-save" 
            mode='contained' 
            style={styles.uploabutton}
            theme={theme}
            onPress={() =>setModal(true)}
            >
               Save
            </Button>

            <Modal 
            animationType='slide'
            transparent={true}
            visible={modal}
            onRequestClose={() =>{
                setModal(false)
            }}
            >
            <View style={styles.ModalView}>
                <View style={styles.ModalButtonView}>
                    <Button  
                    icon="camera" 
                    style={styles.inputStyle}
                    mode='contained' 
                    theme={theme}
                    onPress={() =>setModal(false)}>
                       camera
                    </Button>

                    <Button  
                    icon="image-area" 
                    mode='contained' 
                    style={styles.inputStyle}
                    theme={theme}
                    onPress={() =>setModal(false )}>
                       gallery
                    </Button>
                </View>
                   <Button
                   style={styles.inputStyle}
                   theme={theme}  
                   onPress={() =>setModal(false)}
                   >
                   cancel
                  </Button>
            </View>

            </Modal>

            </ScrollView>
            
            </View>

    )
}

const theme = {
    colors:{
        primary:'blue'
    }
}

const styles=StyleSheet.create({
    root: {
        flex:1,
        backgroundColor:'#edb4f0'
    },

    inputStyle:{
        margin:2,
        marginLeft:20,
        marginRight:15
    },
    textStyle:{
        marginTop:10,
        marginLeft:20,
        fontWeight:'bold',
        fontSize:18,
        color:'#00017a'     
    },
    ModalButtonView:{
        flexDirection:'row',
        justifyContent:"space-around",
        padding:10
    },
    ModalView:{
        position:"absolute",
        bottom:2,
        width:'100%',
        backgroundColor:'gray'
    },
    uploabutton:{
        marginTop:5,
        marginLeft:40,
        marginRight:40,
        borderRadius:200
    }
    
})


export default Employee;