import { GET_DATA_FAIL, GET_DATA_REQ, GET_DATA_SUC, Save_To_Cart } from "./actionType"
import axios from "axios"

const getProductReq =()=>{
    return{
        type:GET_DATA_REQ
    }
} 

const getProductSuc =(payload)=>{
    return{
        type:GET_DATA_SUC,
        payload:payload
    }
} 
const getProductfail =(err)=>{
    return{
        type:GET_DATA_FAIL,
        payload:err
    }
} 
export const productDetails=()=>(dispatch)=>{
    dispatch(getProductReq())
    return axios.get("https://ayush-mock-server-123456.herokuapp.com/projectdata").then((res)=>dispatch(getProductSuc(res.data)))
    .catch(err=>dispatch(getProductfail(err)))
} 
