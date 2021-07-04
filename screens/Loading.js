import React from 'react';
import { ActivityIndicator, StyleSheet,StatusBar, View } from 'react-native';
import firebase from '../firebase/config';

export default class Loading extends React.Component {
  componentDidMount() {
    // setting status bar color
    StatusBar.setBackgroundColor('#004ba0');

    firebase.auth().onAuthStateChanged(async user => {
      setTimeout(() => {
        if (user ==='customers') {
          this.props.navigation.navigate('Dashboard');
        } 
        else {
          this.props.navigation.navigate('Dashboard');
        }
      }, 1000);
    });



  }

  render() {
    return (
    <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator />
    <ActivityIndicator size="large" /> 
  </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
