import type { ReactNode } from 'react';
import '../styles/globals.css';
import Link from 'next/link';
import Helper from './_components/Helper';

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <header className="h-[10vh] w-full flex justify-center items-center bg-black text-white">
                <h2>
                <Link href="/">
                    Phi           
                </Link>
                </h2>
            </header>
            <main 
            style={{ backgroundImage: "url('https://i.pinimg.com/originals/24/18/61/241861b1159f3e3a3b38d5ae538b7811.jpg" }}
            className="h-[80vh] bg-black flex justify-start items-start pt-5 pr-5 bg-cover bg-center overflow-y-auto pl-5 pb-5">
                {children}
            </main>
            <footer className="h-[10vh] w-full flex justify-center items-center bg-black text-white borderTop">
                conectando almas inspiradas en la naturaleza
            </footer>
        </>
    );
};

export default Layout;