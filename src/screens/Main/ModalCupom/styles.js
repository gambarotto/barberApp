import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    containerModal: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    container: {
        height:'30%',
        width:'80%',
        backgroundColor:'#f5f5f5',
        borderRadius:8,
        justifyContent:'space-between',
    },
    heather: {
        flex:1,
        maxHeight:'35%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#333'
    },
    txtHeather:{
        fontSize:18,
        fontWeight:'bold',
        color:'#f8edd1',
        letterSpacing:2.8
    },
    content: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    txtContent:{
        fontSize:18,
    },
    containerBtn:{
        flexDirection:'row'
    },
    btn:{
        flex:1,
        padding:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ddd',
        borderTopWidth:0.5
    },
    txtBtn:{
        fontWeight:'bold'
    }
})