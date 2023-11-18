import React, { ReactNode } from 'react';
import '../styles/globals.css';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <header className="h-[10vh] w-full flex justify-center items-center">
                <h1>Phi</h1>
            </header>
            <main 
            style={{ backgroundImage: "url('https://c4.wallpaperflare.com/wallpaper/791/663/613/black-background-fibonacci-sequence-geometry-golden-ratio-wallpaper-preview.jpg" }}
            className="h-[80vh] bg-black flex justify-center items-center bg-cover bg-center">
                {children}
            </main>
            <footer className="h-[10vh] w-full flex justify-center items-center">
                conectando almas inspiradas en la naturaleza
            </footer>
        </>
    );
};

export default Layout;