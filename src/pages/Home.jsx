import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container" style={{ paddingTop: '100px', color: '#000000', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

            {/* HERO SECTION */}
            <main className="hero-gradient h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0,500 L1000,500 M500,0 L500,1000" stroke="black" strokeWidth="1" />
                        <circle cx="500" cy="500" r="200" fill="none" stroke="#007bff" strokeWidth="0.5" />
                    </svg>
                </div>

                <h2 className="text-[#007bff] font-black text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase mb-4 md:mb-6">Simulation Aérodynamique Future</h2>
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-6 md:mb-8 leading-tight tracking-tighter">
                    L'INGÉNIERIE<br /><span className="text-transparent" style={{ WebkitTextStroke: '2px black' }}>AUGMENTÉE</span>
                </h1>
                <p className="max-w-2xl text-black/60 text-base md:text-lg mb-8 md:mb-10 font-medium px-4">
                    Accélérez vos cycles de conception grâce à la puissance du solveur DPSM couplé à une intelligence causale prescriptive.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-6 sm:px-0">
                    <button className="bg-[#007bff] text-white px-8 py-4 md:px-10 font-black uppercase text-[10px] md:text-xs tracking-widest hover:shadow-[0_0_30px_#007bff] transition-all w-full sm:w-auto text-center">
                        Découvrir Easy-Fluid
                    </button>
                    <button className="border border-black/20 text-black px-8 py-4 md:px-10 font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-black hover:text-white transition-all w-full sm:w-auto text-center">
                        Nos Services
                    </button>
                </div>
            </main>

        </div>
    );
};

export default Home;
