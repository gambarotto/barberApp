import { StyleSheet } from 'react-native'

const PRIMARY_COLOR = '#cd5646'
const SECOND_COLOR = '#f8edd1'
const TXT_PRIMARY_COLOR = '#aaa'
const TXT_SECOND_COLOR = '#a3a3a3'

export const stylesItem = StyleSheet.create({
    container:{
        width:'20%',
        height:100,
        margin:0,
        padding:2,
        borderRadius:8
    },
    containerImage:{
        height:'100%',
        width:'100%',
    },
    image:{
        height:'100%',
        width:'100%'        
    }
})

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        backgroundColor:'#111'
    },
    containerImage:{
        height:'30%',
        width:'100%'
    },
    image:{
        height:'100%',
        width:'100%'
    },

    container2:{
        flex:1,
        justifyContent:'space-between',
        
    },
    containerInfo:{
        flex:1,
        paddingTop:15,
        alignItems:'center',
    },
    txtNomeLoja:{
        fontSize:20,
        fontWeight:'bold',
        color:SECOND_COLOR
    },
    txtAddressLoja:{
        fontSize:15,
        color:TXT_SECOND_COLOR,
        paddingTop:10
    },
    txtPhoneLoja: {
        fontSize:14,
        color:TXT_SECOND_COLOR,
        paddingTop:10
    },
    containerContent:{
        flex:1,
        height:'30%',
        flexDirection:'row',
        flexWrap:'wrap',
        borderRadius:4,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:10
    },
    containerContent2:{
        height:80,
        alignItems:'center',
        justifyContent:'space-between',
        padding:10,
        marginTop:10,
        flexDirection:'row',
    },
    containerFooter:{
        flex:1,
        maxHeight:80,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        paddingTop:0,
        flexDirection:'row',
    },
    containerBtn:{
        flex:1,
        height:80,
        height:'100%',
        justifyContent:'center',
        backgroundColor:PRIMARY_COLOR
    },
    btnText:{
        textAlign:'center',
        letterSpacing:2.8,
        fontSize:16,
        fontWeight:'bold',
        color:'#f8edd1'
    },
    containerBtnTicketsAtivated:{
        backgroundColor:'#F8edd1',
    },
    btnTextTicketsAtivated:{
        textAlign:'center',
        letterSpacing:2.8,
        fontSize:16,
        fontWeight:'bold',
        color:PRIMARY_COLOR
    }
}) 

