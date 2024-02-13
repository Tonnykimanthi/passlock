import { navList } from "@/data/navList"
import Link from "next/link"

const Header = () => {

  return (
    <header className="p-4 bg-white flex justify-between items-center">
        <div>Logo</div>
        <nav>
            <ul className="flex gap-x-4">
              {navList.map((item) => (
                <li>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
        </nav>
        <div>Login</div>
    </header>
  )
}

export default Header