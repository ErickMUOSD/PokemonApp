import React, {useEffect, useState} from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {addPokemonStorage, findPokemonStorage, removePokemonStorage} from "../api/favorite"


export default function Favorite(props) {
    const [selected, setSelected] = useState(null)
    const [isCLicked, setClicked] = useState(false)
    const {id} = props


    const changeStateIcon = async () => {
        if (selected != null) await removePokemonStorage(id)
        else await addPokemonStorage(id)
        setClicked(true)
        // setSelected(!selected)
    }

    useEffect(() => {
        (async () => {
            const response = await findPokemonStorage(id)
            setSelected(response)
        })();
    }, [id, isCLicked]);

    return (
        <Ionicons name="heart" color={selected != null ? "#f35369" : "#fff"} size={20} onPress={changeStateIcon}/>

    )
}