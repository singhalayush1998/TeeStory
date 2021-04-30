import { loadData, saveData } from "../Utils/LocalStorage";
import { GET_DATA_FAIL, GET_DATA_REQ, GET_DATA_SUC, Save_To_Cart } from "./actionType";

const init = {
    isLoading:false,
    isError:false,
    details:null,
}
export const detailReducer=(state=init,action)=>{
    switch (action.type) {
        case GET_DATA_REQ:
            return{
                ...state,
                isLoading:true
            }
        case GET_DATA_SUC:
            return{
                ...state,
                isLoading:false,
                details:action.payload
            }
        case GET_DATA_FAIL:
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        default:
            return state;
    }
}