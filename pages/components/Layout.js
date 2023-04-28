import Header from "./Header"
import Search from "./SearchBar"
export default function Layout({children}) {

  return (
    <div>
          <Header/>
          <Search/>
          {children}      
    </div>
  )
}
