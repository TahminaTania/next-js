"use client"
import { useRouter } from 'next/router';
import { useState } from 'react';
import ResultPage from '../ResultPage';

export async function getServerSideProps({keyword}) {
  // Fetch data from external API
  const res = await fetch(`https://dummyjson.com/products`)
  const datas=await res.json()
  const data = datas.products

  return { props: { data } }
}
    

export default function SearchedPage ({data}) {
    const router = useRouter();
    const [searcedData,setData]=useState(data)
    const {keyword}  = router.query;

    console.log({keyword}, "query of keyword")
    console.log(searcedData, "results of searched file")
   
    const filterdBysearch = (searcedData) => {
      return searcedData.filter(item => item.title.toLowerCase().includes(keyword.toLowerCase() )|| item.category.toLowerCase().includes(keyword.toLowerCase())
      )}

     const datas= filterdBysearch(searcedData)

    // console.log(datas, "results of after filter")

  return (
    <div className="flex flex-col items-center justify-center p-20">
        Searched Data:

        <ResultPage datas={datas}/>

      
    </div>
  )
}

