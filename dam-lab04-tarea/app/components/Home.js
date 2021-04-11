import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, FlatList, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    contenedor: {
        width:430,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: 'gray',
        paddingBottom: 10,
        marginBottom: 20
    },
    texto: {
        width:250,
        marginLeft:10,
    },
    imagen: {
        height:100,
        width: 100,
        borderRadius: 50
    },
    contenedorImagen: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    contenedorFlecha: {
        width: 70,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagenFlecha: {
        height: 20,
        width: 20,
        borderRadius: 50,
        backgroundColor: 'gray'
    }
})

function Item(props){
    return(
        <View style={styles.contenedor}>
            <View style={styles.contenedorImagen}>
                <Image style={styles.imagen} source={{uri: props.image}}/>
            </View>

            <View style={styles.texto}>
                <Text style={{ flex: 1, fontSize:25 }}>{props.titulo}</Text>
                <Text numberOfLines={4} style={{ textAlign: 'left' }}>{props.resumen}</Text>
            </View>
            <View style={styles.contenedorFlecha}>
                <Button
                    title=">"
                    onPress={ () => props.navigation.navigate('Detalles', {
                        titulo: props.titulo,
                        imagen: props.image,
                        texto: props.resumen
                    })}
                />
            </View>
        </View>
    )
}

function Home({ navigation }) {
    const [lista, setLista] = useState([])

    useEffect(() => {
        fetch(
          "https://api.imgflip.com/get_memes"
        )
        .then(res => res.json())
        .then(
            result => {
                setLista(result.data.memes)
            },
        )}
    )
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                data={lista.length > 0 ? lista : []} renderItem={({item})=>{
                    return(
                    <Item image={item.url} titulo={item.name} resumen={item.id} navigation={navigation}/>)
                }}
                keyExtractor = {item => item.id}
            />
        </View>
    );
}

export default Home