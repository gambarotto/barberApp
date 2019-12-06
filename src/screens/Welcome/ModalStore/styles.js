import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    containerModal:{
        
        height:'80%',
        padding:10,
        backgroundColor:'#333',
        justifyContent:'space-between',
        //elevation:1
    },
    containerImage:{
        height:'40%'
    },
    containerInfo:{

    },
    txtInfo:{
        flexDirection: 'row', 
        marginTop: 10
    },
    infoStore:{
        paddingLeft:15,
        fontSize:18,
        color:'#e9e9e9'
    },
    socialIcons:{
        paddingRight:10
    },
    containerBtn:{
        flexDirection:'row',
        height:70,
        width:'100%',
        alignItems:'center',
        backgroundColor:'#111'
    },
    containerBtnVoltar:{
        flex:3,
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:0.5,
        borderRightColor:'#000'
    },
    containerBtnOk:{
        flex:9,
        justifyContent:'center',
        alignItems:'center'
    },
    txtBtn:{
        fontSize:18,
        fontWeight:'bold',
        color:'#e9e9e9'
    }
})