import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
    useTheme,
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {MaterialCommunityIcons, Ionicons, FontAwesome} from '@expo/vector-icons';


export function DrawerContent(props) {

    const paperTheme = useTheme();


    return(
        <View style={{flex:1}}>
            <View>
              
            </View>
                <View style={styles.drawerContent}>
                  
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons
                                name="home-outline" 
                                color="#00017a"
                                size={25}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon= {({})=>(
                                <FontAwesome 
                                name="sign-in" 
                                size={25} 
                                color="#00017a"
                                
                                 />
                                )}
                            label="Login"
                            onPress={() => {props.navigation.navigate('login')}}
                        />
                        <DrawerItem 
                            icon= {({})=>(
                            <FontAwesome 
                            name="user-plus" 
                            size={25} 
                            color="#00017a"
                            
                             />
                            )}
                            label="Create Account"
                            onPress={() => {props.navigation.navigate('register')}}
                        />
                      
                        <DrawerItem 
                            icon={({color, size}) => (
                                <MaterialCommunityIcons 
                                name="account-check-outline" 
                                color="#00017a"
                                size={25}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      backgroundColor:'#ed87c4'
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    logo: {
        resizeMode: "contain",
        width: "80%",
        marginLeft:0,
        height: 80,
        borderRadius:800
      },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#ed87c4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });
