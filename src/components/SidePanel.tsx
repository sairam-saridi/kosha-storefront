import { icons } from "../icons.tsx"
import { useState } from "react"

export default function SidePanel()
{
    const [activeCategory, setActiveCategory] = useState("All Products");
    const [maxPrice, setMaxPrice] = useState(500);

    const categories = [
        {name: "All Products",icon:icons.allproducts},
        {name: "Electronics",icon:icons.electronics},
        {name: "Accessories",icon:icons.accessories},
        {name: "clothing",icon:icons.clothing},
        {name: "Home",icon:icons.home},
        {name:"Sports",icon:icons.sports}
    ]

    return (
        <aside className="bg-gray-100 w-1/5 fixed min-h-screen mt-30 ml-5 rounded-3xl flex flex-col flex-start pl-10 gap-10 ">
            <div aria-label="app-name" className="flex items-center text-center flex-col">
                <h1 className="text-[50px] font-bold">Kosha</h1>
                <p className="text-[30px] font-thin italic">Find More - Feel More</p>
            </div>
            <div className="flex flex-col">
                <h2 className="text-[30px] font-medium">Categories</h2>

                {categories.map((category) => (
                    <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                   className={`flex items-center gap-2 text-[22px] mt-1 cursor-pointer p-2 rounded-md
                    ${activeCategory === category.name
                        ? "bg-blue-100 text-blue-600 [&_svg]:stroke-blue-600 [&_svg]:fill-blue-600"
                        : ""}`}
                    >
                    {category.icon} {category.name}
                    </button>
                ))}
            </div>
            <div className="w-full flex flex-col gap-3 ">
                <h2 className="text-[30px] font-medium">Filter by Price</h2>
                <input type="range" min="0" max="100000" step="500" value={maxPrice}
                    onChange={(e)=>setMaxPrice(Number(e.target.value))}
                    className="w-full cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-base font-semibold">
                    <span>₹0</span>
                    <span>₹{maxPrice.toLocaleString("en-IN")}</span>
                </div>
            </div>
            <div className="flex flex-col gap-3">

                <h2 className="text-[30px] font-medium">Brand</h2>

                {["TechPro", "Urban Lite", "Home & Co", "SportMax", "Other"].map((brand) => (
                    <label key={brand} className="flex items-center gap-3 cursor-pointer">
                        <input type="radio" name="brand" value={brand} />
                        {brand}
                    </label>
                ))}

            </div>
            <div>
                <h2>Rating</h2>

            </div>
        </aside>
    )
}