export const addList = (data)=>{
    return{
        type:'ADD_TODO',
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }

    }
   
}

export const deleteList = (id)=>{
    return{
        type:'DELETE_TODO',
        id

    }
   
}

export const removeList = ()=>{
    return{
        type:'REMOVE_TODO'

    }
   
}

