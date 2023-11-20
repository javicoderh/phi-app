import Link from 'next/link';
import Helper from './_components/Helper';

const HomePage: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 rounded-lg border-2 border-white-500 p-4 justify-center items-center backdrop-blur-md bg-blue/50 transform scale-105">
            <Link href="/caja" passHref>
                <button className="text-white border-2 border-white-500 rounded-lg p-2 hover:scale-90 hover:shadow-md hover:shadow-fuchsia-200 transition duration-300">
                    control de caja
                </button>
            </Link>
            <Link href="/inventario" passHref>
                <button className="text-white border-2 border-white-500 rounded-lg p-2 hover:scale-90 hover:shadow-md hover:shadow-fuchsia-200 transition duration-300">
                    inventario
                </button>
            </Link>
        </div>
    );
};

export default HomePage;
