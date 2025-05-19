import React from 'react'

function About() {
    return (
        <>
            <section className='about-section'>
                <div className='about-container'>
                    <div className='about'>
                        <div className='about-image'>
                            <img src="https://images.ctfassets.net/vy53kjqs34an/3Psaka2Ja20ebl34oSkWs5/2a7e698f9f5d84ff29351ad9eb39bde5/Logo_icon.svg?fm=webp&w=150&h=150" alt="" />
                        </div>
                        <div className='about-text'>
                            <h4>About Riyadh Season</h4>
                            <p>Riyadh Season is one of the world’s largest winter entertainment event. Variety of food from around the world, courtesy of exclusive restaurants — plus countless exciting surprises. The festivities capture the essence of Saudi, from its Najdi heritage to its present-day dynamism.</p>
                        </div>
                    </div>
                    <div className='video'>
                        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/g8-NjAOWhME" title="Riyadh Season 2023 New Identity" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About