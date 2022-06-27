import  { useEffect, useReducer } from 'react'


import { todoReducer } from '../08-useReducer/todoReducer'
const initialState=[
    // {
    //      id: new Date().getTime(),
    //     description: 'comprar leche xd',
    //     done:false
    // },
    // {
    //     id: new Date().getTime()+ 10,
    //     description: 'comprar pan',
    //     done:false
    // }

]
const init =()=>{
    return JSON.parse(localStorage.getItem('todos'))|| []
}
export const useTodo = () => {
 
    const [todos, dispatch] = useReducer(todoReducer, initialState,init)

    useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos) || [])

    }, [todos])
    

    const handleNewTodo=(todo)=>{
       const action = {
        type:'ADD TODO', 
        payload: todo
       }
       dispatch(action)
    }

    const borrar =(id)=>{
        const action ={ 
            type:'removiendo todos',
            payload: id
        }
        dispatch(action)
    }
    const tareaHecha=(id)=>{
        console.log({id})
        const action={
            type:'cambiando los todos',
            payload:id 
        }
        dispatch(action)
    }
    const todoCount=  todos.length
       
    
    const todosPendientes= todos.filter(todo=>!todo.done).length
    
       
 
 
    return{
        handleNewTodo,borrar,tareaHecha,todos,todoCount,todosPendientes

    }
}

