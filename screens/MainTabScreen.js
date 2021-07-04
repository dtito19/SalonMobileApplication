import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialIcons, Ionicons, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons'; 

import HomeScreen from './HomeScreen';
import RegisteredSalon from './RegisteredSalon';
import ChatBot from './ChatBot';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const AuthStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Salon"
        component={RegisteredSalon}
        options={{
          tabBarLabel: 'Salon',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="groups" color={color} size={26} />
          ),
        }}
      />
 
      <Tab.Screen
        name="Chat"
        component={ChatBot}
        options={{
          tabBarLabel: 'Chat',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Smart Salon',
        headerLeft: () => (
            <Ionicons.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Ionicons.Button>
        ),
    //    
        }} />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft: () => (
            <Ionicons.Button n
            ame="ios-menu" size={25} 
            backgroundColor="#1f65ff" o
            nPress={() => navigation.openDrawer()}></Ionicons.Button>
        )
        }} />
</DetailsStack.Navigator>
);
  