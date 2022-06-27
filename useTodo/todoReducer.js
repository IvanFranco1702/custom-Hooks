export const todoReducer=(initialState, action={})=>{

   switch (action.type) {
    case 'ADD TODO':
        return [...initialState, action.payload]; 
        case 'removiendo todos':
        return initialState.filter(todo=> todo.id !== action.payload)
        case 'cambiando los todos':
        return initialState.map(todo=>{
            if (todo.id === action.payload){
                return {
                    ...todo, 
                    done: !todo.done
                }
            }
            return todo
        })
   
    default:
        return initialState
   }
} 