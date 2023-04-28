// import { useRouter } from "next/router"

import Link from "next/link";

export const getStaticPaths = async()=>{
  const response = await fetch ('https://jsonplaceholder.typicode.com/comments');
  await new Promise((resolve)=> setTimeout(resolve,1000))
  const datas = await response.json();

  
  const paths = datas.map((data) => {
    return {
      params:{id: data.id.toString()}
    }
  })
  return{
    paths,
    fallback:false
  }
}

export const getStaticProps = async(context)=>{
  const id=context.params.id
  const response = await fetch ('https://jsonplaceholder.typicode.com/comments/'+id)
  const datas = await response.json()

  return{
    props: {datas:datas}
  }
}

const Details= ({datas}) => {
    // const router=useRouter()
    // const id=router.query.id
  
    return (
      <div className="grid h-screen place-items-center bg-slate-300">
        <div className="">
           <button className="bg-blue-400 px-1 py-2"><Link href={'/'}>Back to Quotes</Link></button> 
           <h1>This page is About {datas.name}</h1>
           <div className="font-bold py-10">
             <p>{datas.email}</p>
           </div>
        </div>
      </div>
    )
  }
  
  export default Details
  