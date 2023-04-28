"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { BsSearch } from 'react-icons/bs';
export default function Search() {
    const [search,setSearch]=useState("");
    const router=useRouter()
    function handleSubmit(e){
     e.preventDefault()
      if(!search) return;
       router.push({ pathname: '/search/${search}', query: { keyword: `${search}` }})
    //   router.push(`/search/query=${search}`)

   
    }
  return (
<div class="mb-3 xl:mx-[20%] lg:mx-[15%] md:mx-[10%] xsm:mx-5 my-10">
<form onSubmit={handleSubmit}>
  <div class="relative mb-4 flex w-full flex-wrap items-stretch">

    <input
      type="search"
      class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-500 bg-transparent bg-clip-padding px-3 py-[.50rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
      placeholder="Search keyword"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
       />

    {/* <!--Search icon--> */}
    <span class=" flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200">
        <button disabled={!search} type='submit'>
          <BsSearch size={20}/>
       </button>
    </span>

  </div>
  </form>
</div>
  )
}
