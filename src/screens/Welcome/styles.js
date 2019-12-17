import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    container: {
        flex:1,
        padding:10,
        backgroundColor:'#111',
        //justifyContent:'center',
        //alignItems:'center'
    },
    containerTxtTop: {
        justifyContent:'center',
        alignItems:'center',
        height:'15%'
    },
    txtTop: {
        fontSize:18,
        fontWeight:'bold',
        letterSpacing:2.8,
        color:'#e9e9e9'
    },
    containerItem: {
        width: '100%',
        height: 70,
        backgroundColor: '#111',
        padding: 5,
        paddingLeft: 10,
        flexDirection: 'row',
        marginBottom: 1,
    },

    containerImage: {
        borderRadius: 24
    },

    picture: {
        height: 60,
        width: 60,
        resizeMode: "cover",
        borderRadius: 30,
        borderColor: '#aaa',
        borderWidth: 1,
    },
    containerInfos: {
        flex: 1,
        flexDirection: 'column',
        paddingLeft: 10,
        backgroundColor: '#111'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 2,
        color: '#aaa'
    },
    phone: {
        //paddingLeft:10,
        fontSize: 12,
        paddingLeft: 5,
        color: '#aaa'
    },
    address: {
        //paddingLeft:10,
        fontSize: 11,
        paddingLeft: 5,
        color: '#aaa'
    },
})