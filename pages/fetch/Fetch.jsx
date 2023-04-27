import Link from "next/link";

export async function getServerSideProps(){
    const response=await fetch ('https://jsonplaceholder.typicode.com/comments');
    await new Promise((resolve)=> setTimeout(resolve,1000))

    const datas= await response.json()

 
    return {
         props: { datas:datas } 
        };
}

function Page({ datas }) {
    
    return(
        <div>

            { datas.map((data)=>(
                <div className="bg-gray-400 mx-20 my-3 h-[100px] ">
                     <Link href={`/fetch/`+data.id} key={data.id}>
                        <div className="m-4">
                            <div>{data.id} </div> 
                            <div className="font-bold pt-2"> {data.name}</div> 
                            <div>{data.email}</div> 
                        </div>
                     </Link>
                </div>
                 ))
            }
        </div>
    )
  }

export default Page