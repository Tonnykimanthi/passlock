import { navList } from "@/data/navList"
import Link from "next/link"
import LoginButton from "../common/LoginButton"

const Header = () => {

  return (
    <header className="px-4 py-3 bg-white flex justify-between items-center">
        <div className="text-primary text-2xl italic font-bold">Passlock</div>
        <nav>
            <ul className="flex gap-x-4 items-center">
              {navList.map((item) => (
                <li className="relative group">
                  <Link href={item.href}>{item.title}</Link>
                  <span className="w-0 h-1 bg-accent absolute -bottom-4 left-1/2 right-0 -translate-x-1/2 group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
        </nav>
        <LoginButton />
    </header>
  )
}

export default Header