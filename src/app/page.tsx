import Link from 'next/link';


const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 rounded-lg border-2 border-white p-4 justify-center items-center backdrop-blur-md bg-blue/50">            
            <h2 className='list-none pl-2 text-white border-2 border-white rounded-lg p-2 hover:scale-90 hover:shadow-md hover:shadow-fuchsia-200 transition duration-300'>
            <Link href="/caja">
                control de caja
            </Link>
            </h2>
            <h2 className='list-none pl-2 text-white border-2 border-white rounded-lg p-2 hover:scale-90 hover:shadow-md hover:shadow-fuchsia-200 transition duration-300' >
            <Link href="/inventario">
                inventario   
            </Link>
            </h2>            
        </div>
    );
};

export default HomePage;
