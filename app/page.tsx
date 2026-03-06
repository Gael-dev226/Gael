import Hero from '@/components/hero'
import React from 'react'
import CardInfo from '@/components/cardInfo'
const page = () => {
    return (
        <div>
            <Hero />

            <div className="p-10">

                <CardInfo />

            </div>
        </div>
    )
}

export default page
