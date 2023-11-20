import Link from 'next/link';

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 rounded-lg border-2 border-white p-4 justify-center items-center backdrop-blur-md bg-blue/50">            
            <Link className='text-white border-2 border-white rounded-lg p-2 hover:scale-90 hover:shadow-md hover:shadow-fuchsia-200 transition duration-300' href="/caja">
                    control de caja
            </Link>
            <Link className='text-white border-2 border-white rounded-lg p-2 hover:scale-90 hover:shadow-md hover:shadow-fuchsia-200 transition duration-300' href="/inventario">
                    inventario   
            </Link>
        </div>
    );
};

export default HomePage;
