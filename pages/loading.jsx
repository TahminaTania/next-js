import React from 'react'

export default function Loading() {
  return (
    <div className='text-3xl text-red-500 h-screen flex justify-center'>
      <h1>Loading....</h1>
      <img src="spinner.svg"></img>
    </div>
  )
}
