// import 'react-native-gesture-handler';

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

//  import React, { useEffect } from 'react';
 
//  import {
//    NavigationContainer,
//    DefaultTheme as NavigationDefaultTheme,
//    DarkTheme as NavigationDarkTheme
//  } from '@react-navigation/native';
//  import { createDrawerNavigator } from '@react-navigation/drawer';

//  import {
//    Provider as PaperProvider,
//    DefaultTheme as PaperDefaultTheme,
//    DarkTheme as PaperDarkTheme
//  } from 'react-native-paper';

// import { DrawerContent } from './screens/DrawerContent';
// import MainTabScreen from './screens/MainTabScreen';
// import SupportScreen from './screens/SupportScreen';
// import Dashboard from './screens/Dashboard';
// import Welcome from './screens/Welcome';
// import Employee from './screens/Employee';
// import Service from './screens/ServiceScreen';
// import Loading from './screens/Loading';
// import AddSalon from './screens/AddSalon';
// import CustomerHome from './screens/CustomerHome';
// import AuthStack from './navigation/AuthStack';
// import LoginScreen from './screens/LoginScreen';
// import SignupScreen from './screens/SignupScreen';

//  const Drawer = createDrawerNavigator();

//  const App = () => {

//    return (
//      <PaperProvider>

//      <NavigationContainer >

//          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
//            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
//            <Drawer.Screen name="authStack" component={AuthStack}/>
//            <Drawer.Screen name="addSalon" component={AddSalon} />
//            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
//            <Drawer.Screen name="salonDashboard" component={Dashboard} />
//            <Drawer.Screen name="customerDashboard" component={CustomerHome} />
//            <Drawer.Screen name='login' component={LoginScreen} />
//            <Drawer.Screen name='register' component={SignupScreen} />
//            <Drawer.Screen name='welcome' component={Welcome} />
//            <Drawer.Screen name='employee' component={Employee} />
//            <Drawer.Screen name='service' component={Service} />
//            <Drawer.Screen name='loading' component={Loading} />

//          </Drawer.Navigator>

//      </NavigationContainer>

//      </PaperProvider>
//    );
//  }

//  export default App;



import React from 'react';
import Providers from './navigation';
// // import AddSalon from './screens/AddSalon/AddSalon';

const App = () => {
return <Providers />;
  
}
export default App;

