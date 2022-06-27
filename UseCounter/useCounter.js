import { useState } from "react"

export const useCounter = (inicial=10)=>{
const [counter,setCounter]=useState(inicial)

const mas =(value=1)=>{
    setCounter(counter+value)
}
const menos =(value=1)=>{
    if (counter ===1) {
        return 
    }
    setCounter(counter-value)
}
const reset =()=>{
    setCounter(inicial)
}

return{
    counter,
    mas,
    menos,
    reset,

}
}