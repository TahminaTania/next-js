import { Suspense } from "react"
import Header from "./components/Header"
import Search from "./components/SearchBar"
import LoadingPage from "./loading"
export default function Layout({children}) {

  return (
    <div>
          <Header/>
          <Search/>
          <Suspense fallback={<LoadingPage/>}>
           {children}   
          </Suspense>   
    </div>
  )
}
