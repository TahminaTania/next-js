import Link from "next/link"
import { useSelector } from "react-redux";

function Header() {

  // Selecting cart from global state
  const cart = useSelector((state) => state.cart);

  // Getting the count of items
  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };
  return (
    <header>
    <div className="bg-blue-600 flex justify-between items-center py-5 px-5">
        <div><Link href={'/'}>Logo</Link></div>
        <div><Link href={'/about'}>About</Link></div>
        <div><Link href={'/about/team'}>AboutTeam</Link></div>
        <div><Link href={'/cart'}><p>Cart ({getItemsCount()})</p></Link></div>
    </div>
    </header>
  )
}

export default Header