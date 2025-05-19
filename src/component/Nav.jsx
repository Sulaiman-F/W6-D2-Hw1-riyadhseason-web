import React from 'react'

function Nav() {
    return (
        <>
            <header className='header'>
                <nav className="navbar">
                    <i onClick={() => {
                        document.getElementById('burger-menu').style.display = 'block';
                    }} class="fa-solid fa-bars fa-xl"></i>
                    <img src="https://images.ctfassets.net/vy53kjqs34an/3b6vBa9H4jGNZQvpCDV9sm/ca9a29433c61e153eaa123f7fb59ec15/website_RiyadhSeason_w.png?fm=webp&w=85&h=110" alt="" />
                    <div className='nav-links'>
                        <button className='arabic-button'>العربية</button>
                        <button className='booklet-button'>View Booklet</button>
                    </div>
                </nav>
                <div style={{ display: 'none' }} id='burger-menu' className='burger-menu'>
                    <div className='burger-icon'>
                        <i onClick={() => {
                            document.getElementById('burger-menu').style.display = 'none';
                        }} class="fa-solid fa-x"></i>
                    </div>
                    <button>View Booklet</button>
                    <div className='burger-menu-links'>
                        <ul>
                            <li><img src="https://images.ctfassets.net/vy53kjqs34an/4UwVIgWmMI4JAQXP3yXPWR/3cd131fc453a2fc2f31ae8fa6c5578af/blvd_world_colors.png?fm=webp&fit=pad&w=100&h=100" alt="" /></li>
                            <li><img src="https://images.ctfassets.net/vy53kjqs34an/2MByp5Kz7m5sGymIOf4z5Q/121bde386be36e313ef30423f2a057d6/BlvdCity_VerticalLogo_OnDark_RGB.png?fm=webp&fit=pad&w=100&h=100" alt="logo" /></li>
                            <li><img src="https://images.ctfassets.net/vy53kjqs34an/6eDxJWXdHS88l75iyavOxy/44228eeeda81be38cad907de431d2730/Group_17.png?fm=webp&fit=pad&w=100&h=100" alt="logo" /></li>
                            <li><img src="https://images.ctfassets.net/vy53kjqs34an/2cwkQqOfarbvwKrRArrm0q/95b7ce8c48bca3c6e62fab086a2c8431/image__6_.png?fm=webp&fit=pad&w=100&h=100" alt="logo" /></li>
                            <li><img src="https://images.ctfassets.net/vy53kjqs34an/6jIPu3d2OOWtgYqQUTbz4z/9cf7c33522ade9cd1df7ba27006416dc/new_muraba.png?fm=webp&w=1041&h=781" alt="logo" /></li>
                            <li><img src="https://images.ctfassets.net/vy53kjqs34an/3ip6OxVwP8YhIKmTo2HF5B/1bcd099801ab242f6bd24b962f95e114/BLVD_Runway_logo__2.16.10_PM.png?fm=webp&fit=pad&w=100&h=100" alt="logo" /></li>
                            <li><img src="https://images.ctfassets.net/vy53kjqs34an/5OziW71cfEHu2ZHlpZE9r4/3cc7ce289cb04c9593c7fecfa29c026f/dior.png?fm=webp&fit=pad&w=100&h=100" alt="logo" /></li>
                            <li><img src="https://images.ctfassets.net/vy53kjqs34an/2x3IWScrpgS5qmSHdHO1ZZ/157d3b0ac07f573cb54838320cd3900a/logo_-_souq_alawaleen.png?fm=webp&fit=pad&w=100&h=100" alt="logo" /></li>
                            <li><img src="https://images.ctfassets.net/vy53kjqs34an/5qWHe4Mz7dV7UMIm7FYBqO/542524ea5d3657532cc09ca05837a974/ZOO_LOGO_COLOR_1.png?fm=webp&fit=pad&w=100&h=100" alt="logo" /></li>
                            <li><img src="https://images.ctfassets.net/vy53kjqs34an/6z0n8tKquAhrZ1x7fGIjch/09670cb1d007288951b014e9c60b390d/via_ryiadh_logo.png?fm=webp&fit=pad&w=100&h=100" alt="logo" /></li>
                            <li><img src="https://images.ctfassets.net/vy53kjqs34an/CFFciZlqL3ZsM5ARaumIe/7460d0838b8db6972d35cd160c99cb9a/Logo-01.png?fm=webp&fit=pad&w=100&h=100" alt="logo" /></li>
                            <li><img src="https://images.ctfassets.net/vy53kjqs34an/1rWTEO7FjOBMPvGdMdcHIv/6a131f379557983b8194e089286b534f/the_groves_3d_Gold.png?fm=webp&fit=pad&w=100&h=100" alt="logo" /></li>
                            <li><img src="https://images.ctfassets.net/vy53kjqs34an/5r8tSDwbIB3S1ahKWFvFib/761ec6260acec1e690a0e2da7e7b05dc/logo.png?fm=webp&fit=pad&w=100&h=100" alt="logo" /></li>
                            <li><img src="https://images.ctfassets.net/vy53kjqs34an/29JmIZyaUXDTJZBNyRql1I/866b0fd369cfc49dfdf12e7dc01c78b5/Al_Hesn_Studios_Logo_new.png?fm=webp&fit=pad&w=100&h=100" alt="logo" /></li>
                        </ul>
                    </div>
                    <div className='burger-menu-social'>
                        <button><i class="fa-brands fa-facebook-f fa-xl"></i></button>
                        <button><i class="fa-brands fa-instagram fa-xl"></i></button>
                        <button><i class="fa-brands fa-twitter fa-xl"></i></button>
                    </div>
                </div>
                <div className='header-content'>
                    <div className='header-title'>
                        <h1>Welcome to Riyadh Season 2024</h1>
                    </div>
                    <div className='header-links'>
                        <button className='arabic-button'>Explore</button>
                        <button className='booklet-button'>Book tickets</button>
                    </div>
                </div>
                <video
                    className="header-bg-video"
                    playsInline
                    disablePictureInPicture
                    autoPlay
                    loop
                    muted
                >
                    <source src="https://videos.ctfassets.net/vy53kjqs34an/6Bq1C6PdoQXs4MSQWZS2tp/9eab192d3c853c6d0a156255a57143e6/Revision_3.mp4" type="video/mp4" />
                </video>
            </header>
        </>
    )
}

export default Nav