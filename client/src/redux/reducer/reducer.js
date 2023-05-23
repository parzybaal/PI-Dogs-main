import { 
    GET_DOGS,
    GET_DOG_BY_NAME,
    GET_DOG_BY_ID,
    GET_TEMPS,
    CREATE_DOG,
    FILTER_BY_ORIGIN,
    ORDER_DOGS,
    FILTER_BY_TEMPS,
    CLEAN_DOG_BY_ID,
 } from "../actions-types/actions-types";


const initialState = {
    dogs: [],
    dogById: [],
    temperaments: [],
    dogsfiltered: [],
    orderDogs: false,
}
;

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_DOGS:
            return {
                ...state,
                dogsfiltered: payload,
                dogs: payload
            }
        case GET_DOG_BY_ID:
            return {
                ...state,
                dogById: payload
            }
        case GET_DOG_BY_NAME:
            return {
                ...state,
                dogsfiltered: payload
            }
        case GET_TEMPS:
            return {
                ...state,
                temperaments: payload
            }
        case CREATE_DOG:
            return{
                ...state,
                dogs: [...state.dogs, payload],
                dogsfiltered: [...state.dogs, payload]
            }
        case FILTER_BY_ORIGIN:
            let response = state.dogs

            if (payload === "bd") {
                response = state.dogs.filter(dog => dog.createdApi)
            }
            else if (payload === "api") {
                response = state.dogs.filter(dog => dog.created === false)
            }
            else if (payload === "all"){
                response = state.dogs
            }
            return{
                ...state,
                dogsfiltered: response
            }
        case ORDER_DOGS:
            let order 
            if (payload === "ascendent") {
                order = state.dogsfiltered.sort((a, b) => (a.name > b.name) ? 1 : -1)
            }
            else if (payload === "descendent") {
                order = state.dogsfiltered.sort((a, b) => (a.name < b.name) ? 1 : -1)
            }
            else if (payload === "weight") {
                order = state.dogsfiltered.sort((a,b) => a.weight.trim().split("-")[0] > b.weight.trim().split("-")[0] ? 1 : -1)
            }
            else {
                order = state.dogsfiltered
            }
            return {
                ...state,
                dogsfiltered: order,
                orderDogs: !state.orderDogs,
            }
        case FILTER_BY_TEMPS:
            let filterTemp 
            filterTemp = state.dogs.filter(dog => dog.temperament?.includes(payload))
            return {
                ...state,
                dogsfiltered: filterTemp,
            }
        case CLEAN_DOG_BY_ID:
            return {
                ...state,
                dogById: []
            }
        default:
            return { ...state };
    }
}


export default rootReducer;