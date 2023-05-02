import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "../Cart.Slice";
import SingleData from "./SingleData";

export const getStaticPaths = async()=>{

  const response = await fetch ('https://dummyjson.com/products');
  await new Promise((resolve)=> setTimeout(resolve,1000))
  const data = await response.json();

  const datas = data.products;

  
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
  const response = await fetch ('https://dummyjson.com/products/'+id)
  const datas = await response.json()

  return{
    props: {datas:datas}
  }
}

const Details= ({datas}) => {

    const dispatch = useDispatch();
   
    return (
      <div className="grid  place-items-center bg-slate-300">
          <div className="">
            <h1 className="text-3xl text-center p-10">This page is About <span className="font-bold">{datas.title}</span></h1>
            <SingleData datas={datas}/>
            <div><span className="font-bold">Price: </span>{datas.price}/- <span className="text-red-500">({datas.discountPercentage}%-)</span></div>
            <div className="py-5">
               <div><span className="font-bold">Description: </span>{datas.description}</div>
               <div><span className="font-bold">Rating: </span>{datas.rating}</div>
               <div><span className="font-bold">Stock: </span>{datas.stock}</div>
               <div><span className="font-bold">Brand: </span>{datas.brand}</div>
               <div><span className="font-bold">Category: </span>{datas.category}</div>
            </div>
            <div className="flex justify-around py-10">
              <button className="bg-green-400 px-3 py-2" onClick={() => dispatch(addToCart(datas))}>add to cart </button>
              <button className="bg-yellow-400 px-3 py-2">add to Favourite</button>
              <button className="bg-blue-400 px-3 py-2"><Link href={'/'}>Back to Home</Link></button> 
            </div>
         </div>
      </div>
    )
  }
  
  export default Details
  