import Link from "next/link"
import { Children } from "react"
import ResultPage from "./ResultPage";


export async function getServerSideProps(){
  const response=await fetch ('https://jsonplaceholder.typicode.com/comments');
  await new Promise((resolve)=> setTimeout(resolve,1000))

  const datas= await response.json()


  return {
       props: { datas:datas } 
      };
}




function Home({datas}) {
  // console.log(datas,"data")
  return (
    <main className="h-full ">
       <h1>    This is Home</h1>
       
     <div className="flex flex-col items-center justify-center p-20">

    <ResultPage datas={datas}/>

   
     </div>
    

    </main>
  )
}
export default Home

