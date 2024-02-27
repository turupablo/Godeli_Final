import { StyleSheet } from "react-native";

export const  styles = StyleSheet.create({
    globalMargin:{
        alignSelf:"center",
        marginTop:40,
        borderRadius:40,
        borderColor:"#129575",
    },
    form:{
        marginTop:30,
        alignItems:"center"
    },
    titleName:{
        color:'#949494',
        fontSize:18,
    },
    textName:{
        margin:10,
        color:'#949494',
        backgroundColor:'rgba(0,0, 0, 0.03)',
        borderRadius:10,
        padding:10,
        width:'90%',
        height:50,
        fontSize:15,
    },
    btnGreen:{
        backgroundColor:'#129575',
        borderRadius:15,
        width:'90%',
        paddingVertical: 10,
        alignSelf:"center",
        marginTop:100,
        marginBottom:10,
    },
    textBtnGreen:{
        color:'white',
        fontWeight: "bold",
        fontSize:20,
        alignSelf:"center",
        padding:5,

    },
    btnRed:{
        backgroundColor:'#951A12',
        borderRadius:15,
        marginTop: 0,
        width:'90%',
        paddingVertical: 10,
        alignSelf:"center"

    },
    textBtnRed:{
        color:'white',
        fontWeight: "bold",
        fontSize:20,
        alignSelf:"center",
        padding:5,
    }

});