import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignupScreen from '../screens/SignupScreen'
import LoginScreen from '../screens/LoginScreen';

import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../screens/HomeScreen';
import SalonScreen from '../screens/SalonScreen';
import ServiceScreen from '../screens/ServiceScreen';
import SalonHomeScreen from '../screens/SalonHomeScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



const HomeStackScreen = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  
  }, []);

  return (
        <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#2e64e5',
          inactiveBackgroundColor: '#009387'
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={({color, size}) => ({
        
            // tabBarVisible: route.state && route.state.index === 0,
            tabBarIcon: ({}) => (
              <MaterialCommunityIcons
                name="home-outline"
                color="#F10080"
                size={32}
              />
            ),
          })}
        />
        <Tab.Screen
          name="salon"
          component={SalonScreen}
          options={({}) => ({
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="group" 
              color="#F10080"
              size={32} />
            ),
          })}
        />

        
        <Tab.Screen
          name="createAccount"
          component={SignupScreen}
          options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="person-outline" 
              color="#F10080"
              size={32} />
            ),
          }}
        />
        </Tab.Navigator>
  );
};


const SalonStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="salon"
      component={SalonScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="service"
      component={ServiceScreen}
      options={{
        headerTitle: 'Services',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
  </Stack.Navigator>
);



const AuthStack = ({navigation}) => (
  <Stack.Navigator initialRouteName={HomeScreen}>
    <Stack.Screen
      name="Smart Salon"
      component={HomeStackScreen}
      options={() => ({
        headerShown: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#009387',
          elevation: 5,
        },
      })}
    />

            <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{header: () => null}}
        />
  
        <Stack.Screen
        name="salon"
        component={SalonStack}
        />
         <Stack.Screen
        name="createAccount"
        component={SignupScreen}
        options={{header: () => null}}
        />
        <Stack.Screen
        name="HomeSalon"
        component={SalonHomeScreen}
        options={{header: () => null}}
        />
  </Stack.Navigator>
);

export default AuthStack;


