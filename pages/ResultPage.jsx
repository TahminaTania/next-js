import Link from "next/link"
import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}

export default function ResultPage({datas}) {
  return (
    <section className="">
      <h1 className="p-3 text-2xl font-bold text-center">ResultPage:</h1>
      <div className="xsm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto py-4">
         { (datas.length!==0)? (datas.map((data)=>(
                <div className="">
                     <Link href={`/fetch/`+data.id} key={data.id}>
                        <div className="cursor-pointer xsm:p-3 xsm:hover:shadow-slate-400 xsm:shadow-md rounded-lg xsm:border xsm:border-slate-400 xsm:m-2 transition-shadow duration-200 group">
                            <div className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200">  
                               <img src={data.thumbnail} className="w-[500px] h-[400px] object-fill"></img>
                            </div>
                            <div className="p-2">
                              <div className="font-bold pt-2"> {data.title}</div>
                              <div className="line-clamp-1 text-md">{data.description} </div>  
                              <div className="truncate text-lg font-bold py-2">{data.category}</div> 
                              <div className="truncate text-lg font-bold py-2">{data.price}</div> 
                            </div>
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
    </section>
  )
}
