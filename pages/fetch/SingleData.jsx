
export default function SingleData({datas}) {
  return (
    <div className="flex flex-wrap p-10 bg-teal-100">
        {
            datas.images.map((i)=>{
                return(
                    <div className=" m-5"> 
                        <img src={i} className="w-[500px] h-[500px] object-fill"/>
                    </div>
                )
            })
        }
    </div>
  )
}


