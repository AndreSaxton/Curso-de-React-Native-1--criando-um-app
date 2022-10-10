import React from "react";
import { View, Image, StyleSheet, FlatList } from 'react-native';

import Texto from "../../../componentes/Texto";

export default function Item({ item: { nome, imagem }}) {
    return <View style={estilos.item}>
        <Image source={imagem} style={estilos.imagem} />
        <Texto style={estilos.nome}>{ nome }</Texto>
    </View>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fonSize: 20,
        lineHeight: 32,
    },
    item:{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    },
})