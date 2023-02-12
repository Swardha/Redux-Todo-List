const initialState = {
    data: []
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case  "ADD_TODO":
            const {id, data} = action.payload;
            return {
                ...state, 
                data: [
                    ...state.data,
                    {
                        id:id,
                        data:data

                }
            ]
            }

            case  "DELETE_TODO":
           const newList = state.data.filter((ele)=> ele.id!== action.id)
                return {
                    ...state, 
                    data: newList
                  
                
                }

                case "REMOVE_TODO":
                    return {
                        ...state,
                        data: []
                    }

            default:  return state;
    }
}



export default reducer;