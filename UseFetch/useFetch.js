import { useEffect, useState } from "react";


export const useFetch = (url) => {
    const [estado, setEstado]= useState({
        data:null,
        isLoading:true,
        hasError:null
    })
  const getFetch = async() =>{

    setEstado({
        ...setEstado,
        isLoading:true
    })
    const resp = await fetch(url);
    const data = await resp.json()


    setEstado({
        data:data,
        isLoading:false,
        hasError:null
    })
  }
    useEffect(()=>{
        getFetch()
    },[url])



    return (
    {
        data:estado.data,
        isLoading:estado.isLoading,
        hasError:estado.hasError

    }
  )
}
