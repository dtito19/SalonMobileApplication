import React, {useState} from 'react';
import { View, StyleSheet,ScrollView, Text, Modal} from 'react-native';
// import { } from 'react-native-gesture-handler';
import {Button, TextInput} from 'react-native-paper';

const Service = () =>{
    const [sevicename, setserviceName] = useState('');
    const [serviceprice, setservicePrice] = useState('');
    const [uploading, setUploading] = useState(false);
    const [servicedescription, setserviceDescription] = useState('');
    const [image, setImage] = useState(null);
    const [servicespecialist, setserviceSpecialist] = useState('');
    const [modal, setModal] = useState(false);

    return(
        <View style={styles.root}>
            <ScrollView>
                 <Text style={styles.textStyle}>
                 Add Service
                 </Text>

            <TextInput
            label='Service Name'
            style={styles.inputStyle}
            value={sevicename}
            theme={theme}
            mode='outlined'
            onChangeText={text => setserviceName(text)}
            />     
            
            <TextInput
            label='Price'
            style={styles.inputStyle}
            value={serviceprice}
            theme={theme}
            mode='outlined'
            onChangeText={text => setservicePrice(text)}
            />     
            <TextInput
            label='Service Description'
            style={styles.inputStyle}
            value={servicedescription}
            theme={theme}
            mode='outlined'
            onChangeText={text => setserviceDescription(text)}
            /> 
         

              <TextInput
            label='Specialist'
            style={styles.inputStyle}
            value={servicespecialist}
            theme={theme}
            mode='outlined'
            onChangeText={text => setserviceSpecialist(text)}
            /> 

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


export default Service;