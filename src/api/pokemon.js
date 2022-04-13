import {API_HOST} from "../utils/constants"

export async function getPokemonsApi(endpointUrl) {
//  console.log(endpointUrl)
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`
        const response = await fetch(endpointUrl  || url);
       
        return await response.json();
    } catch (error) {
        throw error
    }
}
export  async function getPokemonDetailsByUrlApi(url) {
    try {
        const response = await fetch(url)
        return await response.json()
    }catch (e) {
        throw e
    }
}

export  async  function  getPokemonById(id){
    try {
        const url = `${API_HOST}/pokemon/${id}`
        const response = await fetch(url);

        return await response.json();
    } catch (error) {
        throw error
    }
}
