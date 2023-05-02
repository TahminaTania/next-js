import Link from "next/link"
import { Children } from "react"
import ResultPage from "./ResultPage";


export async function getServerSideProps(){
  const response=await fetch ('https:/dummyjson.com/products');
  await new Promise((resolve)=> setTimeout(resolve,1000))

  const data= await response.json()
  const datas= data.products


  return {
       props: { datas:datas } 
      };
}




function Home({datas}) {
  // console.log(datas,"data")
  return (
    <main className="p-3 text-2xl font-bold text-center">
       <h1>    This is Home</h1>
       
     <div className=" bg-white ">

         <ResultPage datas={datas}/>

   
     </div>
    

    </main>
  )
}
export default Home

