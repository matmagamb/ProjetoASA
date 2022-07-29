import { PachisiLogo } from "./PachisiLogo"

export function Header() {
    return (
        <header className="w-full bg-white flex flex-1 items-center justify-center p-3">
            <div className="flex flex-1 justify-between px-12">


                <PachisiLogo />
                <div className="text-orange-500 flex items-center justify-between gap-3 font-bold text-md ">
                    <a href="#">Home</a>
                    <a href="#">em Breve</a>
                    <a href="#">em Breve</a>
                    <a href="#">em Breve</a>
                    <a href="#">em Breve</a> 
                </div>
            </div>
        </header>
    )
}