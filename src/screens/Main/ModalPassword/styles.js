import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    containerModal: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        //backgroundColor:'#111',
    },
    container: {
        height:'30%',
        width:'80%',
        backgroundColor:'#f5f5f5',
        borderRadius:8,
        justifyContent:'space-between',

    },
    containerHeather:{
        flex:1,
        maxHeight:'35%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#333'
    },
    txtHeader:{
        fontSize:18,
        fontWeight:'bold',
        color:'#f8edd1',
        letterSpacing:2.8
    },
    containerContent:{
        flex:1,
        padding:10,
        justifyContent:'center',
        alignItems:'center'
    },
    inputPassword:{
        flex:1,
        //paddingHorizontal:10,
        letterSpacing:2.8,
        fontSize:20,
        textAlign:'center'
    },
    containerButtons:{
        flex:1,
        flexDirection:'row'
    },
    buttons:{
        flex:1,
        backgroundColor:'#ddd',
        justifyContent:'center',
        alignItems:'center',
        borderTopWidth:0.5,
    },

})