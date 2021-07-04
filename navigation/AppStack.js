import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { BlurView } from 'expo-blur';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import { EvilIcons, FontAwesome, MaterialCommunityIcons, } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from '../screens/HomeScreen';
import SalonScreen from '../screens/SalonScreen';
import ServiceScreen from '../screens/ServiceScreen';
import AddPostScreen from '../screens/AddPostScreen';
import AddSalon from '../screens/AddSalon';
import AddService from '../screens/AddService';
import MyAppointment from '../screens/MyAppointment';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import DashboardScreen from '../screens/DashboardScreen';
import AddEmployee from '../screens/AddEmployee';
import SalonHomeScreen from '../screens/SalonHomeScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return 'Smart Salon';
    case 'salon':
      return 'Available Salon';
    case 'createAccount':
      return 'Register';
  }
}


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
                name="home-outline"  color="#F10080"  size={32} />
                         
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
          name="mpAppoints"
          component={MyAppointment}
          options={({}) => ({
            tabBarIcon: ({color, size}) => (
              <EvilIcons name="calendar" color="#F10080"  size={32} />
            ),
          })}
        />
   
      <Tab.Screen
          name="dashboard"
          component={DashboardScreen}
          options={{
            // tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <FontAwesome name="dashboard" color="#F10080"  size={32} />
            ),
          }}
        />
          

        <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              // tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <EvilIcons name="user" color="#F10080"  size={32}  />              ),
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

const ProfileStack = ({navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
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


const AppStack = ({navigation}) => (
  <Stack.Navigator initialRouteName={HomeScreen}>
    <Stack.Screen
      name="Smart Salon"
      component={HomeStackScreen}
      options={({route}) => ({
        headerShown: false,
        headerTitle: getHeaderTitle(route),
        headerTransparent: true,
        headerBackground: () => (
          <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />
        ),
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#009387',
          elevation: 5,
        },
        headerRight: () => (
          <View style={{marginRight: 10}}>
            <FontAwesome5.Button
              name="sign-in"
              size={22}
              backgroundColor="#fff"
              color="#2e64e5"
              onPress={() => navigation.navigate('login')}
            />
          </View>
        ),
      })}
    />

            <Stack.Screen
        name="profile"
        component={ProfileStack}
        options={{header: () => null}}
        />

      
  
        <Stack.Screen
        name="salon"
        component={SalonStack}
        options={{header: () => null}}
        />
         <Stack.Screen
      name="EditProfile"
      component={EditProfileScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    /> 
          {/* <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        headerTitle: 'Edit Profile',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />  */}

         <Stack.Screen
      name="AddPost"
      component={AddPostScreen}
      options={{
        headerTitle: 'Add Post',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    <Stack.Screen
        name="HomeSalon"
        component={SalonHomeScreen}
        options={{header: () => null}}
        />
  </Stack.Navigator>
);

export default AppStack;


