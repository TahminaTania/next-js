import Link from "next/link"
export default function ResultPage({datas}) {
  return (
    <div>ResultPage:
         { (datas.length!==0)? (datas.map((data)=>(
                <div className="bg-gray-400 mx-20 my-3 h-[100px] ">
                     <Link href={`/fetch/`+data.id} key={data.id}>
                        <div className="m-4">
                            <div>{data.id} </div> 
                            <div className="font-bold pt-2"> {data.name}</div> 
                            <div>{data.email}</div> 
                        </div>
                     </Link>
                </div>
                 )))
                 :
                 (
                  <div> No Data Found</div>
                 )
    
            }
    </div>
  )
}
