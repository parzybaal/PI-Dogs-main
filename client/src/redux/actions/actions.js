import axios from "axios";
import { 
    GET_DOGS, 
    GET_DOG_BY_ID, 
    GET_DOG_BY_NAME,
    GET_TEMPS,
    CREATE_DOG,
    FILTER_BY_TEMPS,
    ORDER_DOGS,
    FILTER_BY_ORIGIN,
    CLEAN_DOG_BY_ID,
    DELETE_DOG
 } from "../actions-types/actions-types"
 
const URL = "https://agreeable-condition-production.up.railway.app/home"
const URL_TEMPS = "http://localhost:3001/temperaments"

export const getAllDogs = () => {
    return async function (dispatch){
        const response = await axios.get(`${URL}`);
        dispatch({type: GET_DOGS, payload: response.data})
    }
}

export const getDetailDog = (id) => {
    return async function (dispatch){
        const response = await axios.get(`${URL}/${id}`);
        dispatch({type:GET_DOG_BY_ID, payload: response.data})
    }
}

export const getDogByName = (name) => {
    return async function (dispatch){
        const response = await axios.get(`${URL}/search?name=${name}`);
        return dispatch ({
            type: GET_DOG_BY_NAME,
            payload: response.data
        })
    }
}

export const getTemperaments = () => {
    return async function (dispatch){
        const reponse = await axios.get(`${URL_TEMPS}`)
        return dispatch ({
            type: GET_TEMPS,
            payload: reponse.data
        })
    }
}

export const createDog = (props) => {
    return async function (dispatch){
        const response = await axios.post(`${URL}`, props);
        return dispatch ({
            type: CREATE_DOG,
            payload: response.data
        })
    }
}

export const deleteDog = (id) => {
    return async function (dispatch) {
       const response = await axios.delete(`${URL}/${id}`) 
       return dispatch ({
        type: DELETE_DOG,
        payload: response.data
       })
    }
}

export const filterByOrgin = (payload) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload
    }
}

export const orderDogs = (payload) => {
    return {
        type: ORDER_DOGS,
        payload
    }
}

export const filterByTemps = (payload) => {
    return {
        type: FILTER_BY_TEMPS,
        payload
    }
}

export const cleanDogById = () => {
    return {
        type: CLEAN_DOG_BY_ID,
        payload: null
    }
}