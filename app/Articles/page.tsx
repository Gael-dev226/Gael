"use client"

import React, { useState } from 'react'
import FilterSidebar from '@/components/FilterSidebar'
import Articles from '@/components/articles'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cardsData } from '@/data/cardata'
import CardInfoo from '@/components/cardInfo-copy'
const page = () => {

    const [cards, setCards] = useState(cardsData)
    return (
        <div>
            <div className="mt-20 mb-10">
                <h1 className="text-center text-3xl font-bold">DECOUVREZ TOUS NOS ARTICLES DANS CETTE SECTION</h1>
            </div>

            <div className="flex h-screen">
                <FilterSidebar onFilter={setCards} />
                <div className="flex-1 overflow-y-auto p-8 m-4">
                    <CardInfoo />
                </div>
            </div>
        </div>


    )
}

export default page
