"use client"

import { useState } from "react"
import { cardsData } from "../data/cardata"

const allAuthors = [...new Set(cardsData.map((c) => c.author))]
const allCategories = [...new Set(cardsData.map((c) => c.category))]

export default function FilterSidebar({ onFilter }: { onFilter: (filtered: typeof cardsData) => void }) {
    const [search, setSearch] = useState("")
    const [author, setAuthor] = useState("")
    const [category, setCategory] = useState("")

    const apply = (s = search, a = author, cat = category) => {
        let result = cardsData
        if (s) result = result.filter((c) => c.title.toLowerCase().includes(s.toLowerCase()))
        if (a) result = result.filter((c) => c.author === a)
        if (cat) result = result.filter((c) => c.category === cat)
        onFilter(result)
    }

    const reset = () => {
        setSearch(""); setAuthor(""); setCategory("")
        onFilter(cardsData)
    }

    return (
        <aside className="w-60 p-4 flex flex-col gap-4 border-r border-base-300 min-h-screen">
            <h2 className="font-bold text-lg">Filtres</h2>

            <input
                className="input input-bordered input-sm w-full"
                placeholder="Rechercher un titre..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); apply(e.target.value, author, category) }}
            />

            <select
                className="select select-bordered select-sm w-full"
                value={author}
                onChange={(e) => { setAuthor(e.target.value); apply(search, e.target.value, category) }}
            >
                <option value="">Tous les auteurs</option>
                {allAuthors.map((a) => <option key={a}>{a}</option>)}
            </select>

            <select
                className="select select-bordered select-sm w-full"
                value={category}
                onChange={(e) => { setCategory(e.target.value); apply(search, author, e.target.value) }}
            >
                <option value="">Toutes les catégories</option>
                {allCategories.map((c) => <option key={c}>{c}</option>)}
            </select>

            <button className="btn btn-sm btn-outline" onClick={reset}>Réinitialiser</button>
        </aside>
    )
}