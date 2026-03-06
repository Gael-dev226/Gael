"use client"

import { cardsData } from "../data/cardata";
import Link from "next/link";
export default function Articles() {



    const gridCards = cardsData.slice(0, 49)

    const gridLayout = [
        "col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-2", "col-span-1 row-span-1",
        "col-span-1 row-span-1", "col-span-3 row-span-1", "col-span-1 row-span-2", "col-span-2 row-span-1",
        "col-span-1 row-span-1", "col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-2", "col-span-1 row-span-1",
        "col-span-1 row-span-1", "col-span-3 row-span-1", "col-span-1 row-span-2", "col-span-2 row-span-1",
        "col-span-1 row-span-1", "col-span-2 row-span-2", "col-span-1 row-span-1", "col-span-1 row-span-2",
        "col-span-1 row-span-1", "col-span-1 row-span-1", "col-span-3 row-span-1", "col-span-1 row-span-2",
        "col-span-2 row-span-1", "col-span-1 row-span-1",
    ]

    return (
        <div >



            <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full grid grid-cols-4 auto-rows-[200px] gap-4">
                {gridCards.map((card, i) => (
                    <div key={card.id} className={`${gridLayout[i]} relative overflow-hidden rounded-xl cursor-pointer group`}>
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                            <div className="badge badge-error badge-xs uppercase tracking-widest font-bold mb-1">{card.category}</div>
                            <h3 className="text-white font-black text-sm leading-snug line-clamp-2">{card.title}</h3>
                            <p className="text-white/60 text-xs mt-1 font-mono">{card.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    )
}