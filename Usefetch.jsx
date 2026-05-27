import { useCallback, useEffect, useState } from "react"
import React from 'react'

const Usefetch = (url) => {  //receives a url

    const[data,setData]=useState([])
    const[loading,setLoading]=useState(true) //stores Api data
    const[error,setError]=useState(null) //store error message

    const fetchData=useCallback(async()=>{  //create async function for Api calling
        try{
            setLoading(true)
            const response=await fetch(url) //show loading before Api call

            if(!response.ok) //check if api failed
            {
                throw new Error("Failed to fetch data") //create custom error
            }

            const result =await response.json() //convert Api response into Json
            setData(result)
        }
        catch(err)
        {
            setError(err.message)
        }
        finally
        {
            setLoading(false)
         }

    },[url])

    useEffect(()=>{
        fetchData()
    },[fetchData])
 
    return {data,loading,error}
}

export default Usefetch