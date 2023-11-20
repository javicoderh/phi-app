import React, { ReactNode } from 'react';
import '../styles/globals.css';
import Link from 'next/link';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <header className="h-[10vh] w-full flex justify-center items-center">
            <Link href="/" passHref>
                <h1>Phi</h1>
            </Link>
            </header>
            <main 
            style={{ backgroundImage: "url('https://i.pinimg.com/originals/24/18/61/241861b1159f3e3a3b38d5ae538b7811.jpg" }}
            className="h-[80vh] bg-black flex justify-start items-center bg-cover bg-center overflow-y-auto p-10">
                {children}
            </main>
            <footer className="h-[10vh] w-full flex justify-center items-center">
                conectando almas inspiradas en la naturaleza
            </footer>
        </>
    );
};

export default Layout;