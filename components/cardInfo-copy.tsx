"use client"
import { useState } from "react"
import { cardsData } from "../data/cardata";
import Link from "next/link";
export default function CardInfoo() {
    const [selectedId, setSelectedId] = useState<number | null>(null)
    const selectedCard = cardsData.find((c) => c.id === selectedId)
    const heroCards = cardsData.slice(0, 5)
    const gridCards = cardsData.slice(0, 50)

    const gridLayout = [
        "col-span-2 row-span-2",
        "col-span-1 row-span-1",
        "col-span-1 row-span-2",
        "col-span-1 row-span-1",
        "col-span-1 row-span-1",
        "col-span-3 row-span-1",
        "col-span-1 row-span-2",
        "col-span-2 row-span-1",
        "col-span-1 row-span-1",
    ]
    if (selectedCard) {
        return (
            <div className="max-w-3xl mx-auto px-6 py-10">
                <button onClick={() => setSelectedId(null)} className="btn btn-ghost btn-sm mb-6">← Retour</button>
                <img src={selectedCard.image} className="w-full h-72 object-cover rounded-2xl mb-6" />
                <div className="badge badge-error mb-3">{selectedCard.category}</div>
                <h1 className="text-3xl font-black mb-2">{selectedCard.title}</h1>


                <div className="flex gap-4 text-sm text-base-content/50 font-mono mb-6">
                    <span>{selectedCard.author}</span>
                    <span>·</span>
                    <span>{selectedCard.date}</span>
                    <span>·</span>
                    <span>{selectedCard.readTime} de lecture</span>
                </div>


                {selectedCard.content.split('\n\n').map((para, i) => (
                    <p key={i} className="mb-4 leading-relaxed">{para}</p>
                ))}


                <div className="flex gap-2 mt-8">
                    {selectedCard.tags.map(tag => (
                        <span key={tag} className="badge badge-outline">{tag}</span>
                    ))}
                </div>
            </div>
        )
    }
    return (
        <div >

            <div>

                <div className="flex-1">





                    <div className="divider"></div>
                </div>

                <div className="card bg-base-100 shadow-sm hover:shadow-lg transition-shadow duration-300 h-full grid grid-cols-4 auto-rows-[200px] gap-4">
                    {gridCards.map((card, i) => (
                        <div key={card.id} className={`${gridLayout[i]} relative overflow-hidden rounded-xl cursor-pointer group`} onClick={() => setSelectedId(card.id)}>
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


        </div >
    )
}