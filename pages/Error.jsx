"use client"

import { useEffect } from "react"

export default function Error({error, reset}) {
    useEffect(()=>{
        
    },[error])
  return (
    <div>
        <h1>Something is Broken, </h1>

        <button>Reset</button>
    </div>
  )
}
