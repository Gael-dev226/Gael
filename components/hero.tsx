import React from 'react'

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-12 w-full max-w-6xl">


                <img
                    src="image.png"
                    className="w-full lg:w-1/2 h-96 lg:h-[500px] object-cover"
                />


                <div className="lg:w-1/2">
                    <span className="text-primary text-xl font-bold uppercase tracking-widest">GoalZone</span>
                    <h1 className="text-5xl font-bold mt-2 mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                        Where Football Stories Come to Life !!!
                    </h1>
                    <p className="text-base-content/60 mb-6" style={{ fontFamily: "'Georgia', serif" }}>
                        From tactical analysis to unforgettable matches
                        and rising talents, our blog covers the most exciting
                        moments in football. Stay informed with articles that
                        explore the strategies,
                        players and competitions shaping the modern game.
                    </p>
                    <div className="flex gap-4" style={{ fontFamily: "'Georgia', serif" }}>
                        <a href="/Articles" className="btn btn-outline rounded-xl px-8" style={{ fontFamily: "'Georgia', serif" }}>
                            Voir plus d'articles...
                        </a>
                        <a href="/Add" className="btn btn-outline rounded-xl px-8">
                            Ajouter des articles
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero