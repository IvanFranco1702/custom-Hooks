//import React from 'react'
import { useState } from 'react'

export const useForm = (initialForm={}) => {
    const [form, setForm] = useState(initialForm)
    
     const cambioImput=({target})=>{
        const {name, value}=target
        setForm({
            ...form, 
            [name]:value
        })
     }
     
     const reset = ()=>{
       setForm(initialForm)
    }

    return{
        reset,
        ...form,
        form,
        cambioImput
    }
}
