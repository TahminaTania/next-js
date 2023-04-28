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
    <div>
     CartPage--
     {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
         {cart.map((item) => {
          return(
            <div>
              {item.price}
              {item.quantity}
              <div>
              <div className="">
                <button onClick={() => dispatch(incrementQuantity(item.id))}>
                  +
                </button>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  x
                </button>
              </div>
              </div>
            </div>
          )

         }

         )}
         <h2>Grand Total: $ {getTotalPrice()}</h2>
        </>)
     }      
    </div>
  )
}
