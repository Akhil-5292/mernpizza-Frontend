import axios, { Axios } from "axios"

export const getAllPizzas=()=>dispatch=>{
    dispatch({type:'GET_PIZZAS_REQUEST'})
    try{
        const response = axios.get('/api/pizzas/getList')
        console.log(response);
        dispatch({type:'GET_PIZZAS_SUCCESS', payload : response.data})
    }catch(error){
        dispatch({type:'GET_PIZZAS_FAILED', payload : error})
    }
}