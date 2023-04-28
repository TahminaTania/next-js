import Link from "next/link"

function Header() {
  return (
    <header>
    <div className="bg-blue-600 flex justify-between items-center py-5 px-5">
        <div><Link href={'/'}>Logo</Link></div>
        <div><Link href={'/about'}>About</Link></div>
        <div><Link href={'/about/team'}>Our Team</Link></div>
    </div>
    </header>
  )
}

export default Header