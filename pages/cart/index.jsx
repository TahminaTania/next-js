import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity,decrementQuantity,removeFromCart } from '../Cart.Slice';

export default function CartPage() {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  }
  return (
    <section className=' bg-gray-200 h-full pb-10 mb-3 xl:mx-[20%] lg:mx-[15%] md:mx-[10%] xsm:mx-5 my-10'>
      <h1 className='text-2xl font-bold text-center py-5 border-2 border-indigo-600'>CartPage</h1>
      <div className='mt-10 px-2'>
     {cart.length === 0 ? (
        <div className='h-[300px] bg-slate-400 text-center'>
          <h1 className='pt-6'>Your Cart is Empty!</h1> 
        </div>
      ) : (
        <>
         {cart.map((item) => {
          return(
            <div className='bg-white my-5'>
              <div className='grid grid-cols-2'>
                <div className='flex flex-wrap'>
                  <img src={item.thumbnail} className='w-20 h-20 mx-3'/>
                  <h1 className='text-xl font-bold'>{item.title}</h1>
                </div>
                <div>
                     <div  className='flex items-center justify-around font-extrabold'>
                        <div><button onClick={() => dispatch(incrementQuantity(item.id))}> +</button></div>
                        <div>{item.quantity}</div>
                        <div><button onClick={() => dispatch(decrementQuantity(item.id))}>-</button></div>
                        <div className='text-red-500'><button onClick={() => dispatch(removeFromCart(item.id))}> x</button></div>
                      </div>
                      <div className='float-right mr-10 p-5'>Total: {item.quantity*item.price}</div>
                </div>
              </div>
            </div>
          )

         }

         )}
         <div className=''>
            <h2 className='float-right font-extrabold text-blue-800'>Grand Total: $ {getTotalPrice()}</h2>  
         </div>

        </>)
     }  
     </div>    
    </section>
  )
}
