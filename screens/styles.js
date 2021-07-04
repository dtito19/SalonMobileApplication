import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#200624',
        marginTop:2,
        
    },
    title: {

    },
    logo: {
        flex: 1,
        height: 80,
        width: 140,
        alignSelf: "center",
        margin: 50
    },
    input: {
        height: 48,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: '#121126',
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        color: 'white'
    },
    button: {
        backgroundColor: '#009378',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        height: 48,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold"
    },
    footerView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    footerText: {
        fontSize: 16,
        color: 'white'
    },
    footerLink: {
        color: "#788eec",
        fontWeight: "bold",
        fontSize: 16
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        width: '100%',
      },
      login: {
        flex: 1,
        resizeMode: "cover",
        width: '100%',
      },
      loginInput: {
        height: 48,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: '#121126',
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        color: 'white'
      },
      card:{
        height: 48,
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: '#121126',
        marginTop: 10,
        marginBottom: 5,
        marginLeft: 30,
        marginRight: 30,
        paddingLeft: 16,
        color: 'white'
      },
      label:{
        // backgroundColor: '#121126',
        marginTop: 5,
        marginBottom: 0,
        marginLeft: 50,
        marginRight: 30,
        paddingLeft: 16,
        color: 'white'
      },
      labelInput:{
        color: "white",
        fontWeight: "bold",
        fontSize: 16
      }
})
