import { icons } from "../icons.tsx"
import { useState } from "react"

export default function SidePanel()
{
    const [activeCategory, setActiveCategory] = useState("All Products");
    const [maxPrice, setMaxPrice] = useState(500);
    const [minRating, setMinRating] = useState<number | null>(null);

    const categories = [
        {name: "All Products",icon:icons.allproducts},
        {name: "Electronics",icon:icons.electronics},
        {name: "Accessories",icon:icons.accessories},
        {name: "clothing",icon:icons.clothing},
        {name: "Home",icon:icons.home},
        {name:"Sports",icon:icons.sports}
    ]

    return (
        <aside className="bg-gray-100 w-1/6 fixed min-h-screen mt-27 ml-2 rounded-3xl flex flex-col flex-start pl-10 gap-2 border-4 border-double border-gray-400">
            <div aria-label="app-name" className="flex items-center text-center flex-col">
                <h1 className="text-[40px] font-bold [text-shadow:1px_2px_3px_rgba(0,0,0,0.2)]">Kosha</h1>
                <p className="text-[20px] font-normal italic">Find More - Feel More</p>
            </div>
            <div className="flex flex-col" aria-label="categories-container">
                <h2 className="text-[20px] font-medium">Categories</h2>

                {categories.map((category) => (
                    <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                   className={`flex items-center gap-1 text-[15px] [&_svg]:w-[15px] [&_svg]:h-[15px] cursor-pointer p-2 rounded-md
                    ${activeCategory === category.name
                        ? "bg-blue-100 text-blue-600 [&_svg]:stroke-blue-600 [&_svg]:fill-blue-600"
                        : ""}`}
                    >
                    {category.icon} {category.name}
                    </button>
                ))}
            </div>
            <div  aria-label="filter-by-price" className="w-full flex flex-col gap-2 ">
                <h2 className="text-[20px] font-medium">Filter by Price</h2>
                <input type="range" min="0" max="100000" step="500" value={maxPrice}
                    onChange={(e)=>setMaxPrice(Number(e.target.value))}
                    className="w-full cursor-pointer h-3 accent-blue-600"
                />
                <div className="flex justify-between text-base font-semibold">
                    <span>₹0</span>
                    <span>₹{maxPrice.toLocaleString("en-IN")}</span>
                </div>
            </div>
            <div aria-label="brand-container" className="flex flex-col gap-2">

                <h2 className="text-[20px] font-medium">Brand</h2>

                {["TechPro", "Urban Lite", "Home & Co", "SportMax", "Other"].map((brand) => (
                    <label key={brand} className="flex items-center text-[17px] cursor-pointer">
                        <input type="radio" name="brand" value={brand} />
                        {brand}
                    </label>
                ))}

            </div>
            <div aria-label="rating-container" className="flex flex-col gap-2">
                <h2 className="text-[20px] font-medium">Rating</h2>
                {[5,4,3,2,1].map((rating)=>(
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio"
                               name="rating"
                               value={rating}
                               checked={minRating == rating}
                               onChange={()=>setMinRating(rating)}
                               className="accent-amber-500"
                        />
                        <span className="flex items-center" aria-hidden="true">
                            {Array.from({length:5},(_,index)=>(
                                <span key={index} className={index<rating ? "text-amber-400"
                                : "text-gray-300"}>★</span>
                            ))}
                        </span>
                        <span className="text-sm text-gray-700">and up</span>
                    </label>
                ))}
            </div>
        </aside>
    )
}