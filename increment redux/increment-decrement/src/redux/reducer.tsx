const initialValue = 0
export const changeValue = (state=initialValue,action:any)=>{
    switch(action.type){
        case "INCREMENT" :
            return state + 1;
        case "DECREMENT" : 
            return state - 1;
        default:
            return state;
    }
}
