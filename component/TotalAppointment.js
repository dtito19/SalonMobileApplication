import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 


export default class TotalAppointment extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Text>Today Appointment</Text>
         <AntDesign name="calendar" size={60} color="green" />
          {/** top-right corner */}
          <View style={{ position: 'relative'}}>
            <Text
              style={{
                fontSize: 20,

              }}>
              0
            </Text>
          </View>

       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'50%',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#e0d8d7',
    marginTop:5,
    marginLeft:5,
    
  },
});
