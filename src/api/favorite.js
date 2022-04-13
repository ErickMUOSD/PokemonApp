import AsyncStorage from "@react-native-async-storage/async-storage";
import {FAVORITE_STORAGE} from "../utils/constants";

export async function addPokemonStorage(id) {
    try {
        const favorites = []
        favorites.push(id)
        // await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites))
        await AsyncStorage.setItem(id.toString(), JSON.stringify(favorites))
    } catch (e) {
        throw e
    }
}

export async function getAllPokemonStorage() {
    try {
        return await AsyncStorage.getAllKeys()
    } catch (e) {
        throw e
    }
}

export async function findPokemonStorage(id) {
    try {
        if (id != null) return await AsyncStorage.getItem(id.toString())
        else return null
    } catch (e) {
        throw  e
    }
}

export async function removePokemonStorage(id) {
    try {
        return await AsyncStorage.removeItem(id.toString())

    } catch (e) {
        throw  e
    }
}


export async function getTotalElements() {
    try {
        const response = await getAllPokemonStorage()
        return response.length

    } catch (e) {
        throw  e
    }
}