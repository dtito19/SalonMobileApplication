import React, {Component} from 'react';
import {StyleSheet, ScrollView, View  } from 'react-native';
import FontAwesome5  from '@expo/vector-icons';
import {Input} from 'react-native-elements';
import { Icon } from 'react-native-elements';


class Inputs extends Component{
    state = {isFocused: false};

    onFocusChange = () => {
        this.setState({isFocused: true})
    }

    render() {
        return(
            <View style={[styles.container, {borderColor: this.stateisFocused? '#0779ef': '#000'}]}>
                <Input
                    placeholder={this.props.name}
                    onFocus={this.onFocusChange}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputText}
                    secureTextEntry={this.props.pass}
                    leftIcon = {
                        <Icon
                            name={this.props.icon}
                            type={FontAwesome5}
                            size={22}
                            color={this.state.isFocused? '#0779e4': 'grey'}
                        />
                    }
                />
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
        container:{
            width:'80%',
            height:50,
            borderRadius:100,
            marginVertical:10,
            borderWidth:3
        },

        inputContainer:{
            borderBottomWidth:0
        },

        inputText:{
            color: '#0779e4',
            fontWeight:'bold',
            marginLeft: 5
        }
});

export default Inputs;