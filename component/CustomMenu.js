//import react in our code.
import React from 'react';

//import all the components we are going to use.
import {View, Text, Image, TouchableOpacity} from 'react-native';

//import menu and menu item
import Menu, {MenuItem, MenuDivider} from 'react-native-material-menu';
import { Entypo } from '@expo/vector-icons'; 


const CustomMenu = (props) => {
  let _menu = null;

  return (
    <View style={props.menustyle}>
      <Menu
        ref={(ref) => (_menu = ref)}
        button={
          props.isIcon ? (
            <TouchableOpacity onPress={() => _menu.show()}>
              <Entypo name="dots-three-vertical" size={32} color="white" />
              {/* <Image
                source={require('../images/menu.png')}
                style={{width: 30, height: 30}}
              /> */}

            </TouchableOpacity>
          ) : (
            <Text
              onPress={() => _menu.show()}
               style={props.textStyle}>
              {props.menutext}
            </Text>
          )
          }>
      
        <MenuItem
           onPress={() => {
            props.navigation.navigate('employee');
            _menu.hide();
          }}>
         My Employee
        </MenuItem>

        <MenuItem
           onPress={() => {
            props.navigation.navigate('addSalon');
            _menu.hide();
          }}>
         My Salons
        </MenuItem>

        <MenuItem
           onPress={() => {
            props.navigation.navigate('service');
            _menu.hide();
          }}>
          Service
        </MenuItem>
        <MenuItem
           onPress={() => {
            props.navigation.navigate('appointment');
            _menu.hide();
          }}>
          My Appointment
        </MenuItem>
        <MenuDivider />
        <MenuItem
          onPress={() => {
            _menu.hide();
          }}>
          Log out
        </MenuItem>
      </Menu>
    </View>
  );
};

export default CustomMenu;