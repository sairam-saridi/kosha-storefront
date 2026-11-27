
import { icons } from "../icons";

export default function Header() {
    return (
        <header className="bg-white fixed top-0 left-0 z-50 w-full h-25 flex items-center justify-between px-10 shadow-[0_4px_10px_rgba(0,0,0,0.15)]">

            <img
                src="/logo.png"
                alt="kosha logo"
                className="w-20 h-20 object-contain shrink-0 ml-14 drop-shadow-[3px_5px_5px_rgba(0,0,0,0.35)] hover:scale-130 transition-transform duration-300 cursor-pointer"
            />

            <nav className="flex items-center justify-center gap-5 whitespace-nowrap text-[24px] w-150 h-full"> 
                <a className="hover:bg-red-500 h-full flex items-center hover:text-white px-4" href="#home">Home</a>
                <a className="hover:bg-green-500 h-full flex items-center hover:text-white px-4" href="#shop">Shop</a>
                <a className="hover:bg-blue-500 h-full flex items-center hover:text-white px-4" href="#deals">Deals</a>
                <a className="hover:bg-yellow-500 h-full flex items-center hover:text-white px-4" href="#newArrivals">New Arrivals</a>
                <a className="hover:bg-violet-500 h-full flex items-center hover:text-white px-4" href="#contact">Contact</a>
            </nav>

            <form
                className="flex  justifiy-center items-center shrink p-4 w-[410px] h-12 rounded-full gap-2 bg-gray-100 hover:border hover:bordr-gray-100"
                onSubmit={(e) => e.preventDefault()}
            >
                <button type="submit" aria-label="Search products" className="[&>svg]:w-8 [&>svg]:h-8">
                    {icons.search}
                </button>

                <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full text-3xl border-none outline-none placeholder:text-2xl"
                />
            </form>

            <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-100 [&>svg]:w-8 [&>svg]:h-8 cursor-pointer hover:border hover:bordr-gray-100">
                {icons.person}
            </div>

            <div className="shrink-0 w-30 h-10 flex items-center justify-center text-3xl">
                <button className="flex items-center gap-2 [&>svg]:w-12 [&>svg]:h-12 cursor-pointer hover:drop-shadow-[2px_3px_3px_rgba(0,0,0,0.2)]">
                    {icons.cart}
                    Cart
                </button>
            </div>

        </header>
    );
}
