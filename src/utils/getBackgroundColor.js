import { POKEMON_TYPE_COLORS } from "./constants"

const getBackgroundColor = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()]

 export default getBackgroundColor;
