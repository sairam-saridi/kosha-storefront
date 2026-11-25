
import { icons } from "../icons";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 z-50 w-full h-25 flex items-center justify-between px-10">

            <img
                src="/logo.png"
                alt="kosha logo"
                className="w-20 h-20 object-contain shrink-0"
            />

            <nav className="flex items-center justify-center gap-5 whitespace-nowrap text-[24px] w-150 h-12"> 
                <a href="#home">Home</a>
                <a href="#shop">Shop</a>
                <a href="#deals">Deals</a>
                <a href="#newArrivals">New Arrivals</a>
                <a href="#contact">Contact</a>
            </nav>

            <form
                className="flex  justifiy-center items-center shrink p-4 w-[410px] h-12 rounded-full gap-2 bg-gray-100"
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

            <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-green-100 [&>svg]:w-8 [&>svg]:h-8">
                {icons.person}
            </div>

            <div className="shrink-0 w-30 h-10 flex justifiy-center items-center [&>svg]:w-12 [&>svg]:h-12 text-3xl">
                {icons.cart}
                Cart
            </div>

        </header>
    );
}
