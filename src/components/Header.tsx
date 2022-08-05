import { Link } from "react-router-dom"
import { PachisiLogo } from "./PachisiLogo"

export function Header() {
    return (
        <header className="w-full bg-white flex flex-1 items-center justify-center p-3">
            <div className="flex flex-1 justify-between px-12">


                <PachisiLogo />
                <div className="text-orange-500 flex items-center text-lg justify-between gap-7 font-semibold text-md ">
                    <Link to="/">Home</Link>
                    <Link to="/breve">Planos</Link>
                    <Link to="/breve">Contato</Link>
                    <Link to="/breve">Sobre</Link>
                    <Link to="/breve">em Breve</Link> 
                </div>
            </div>
        </header>
    )
}