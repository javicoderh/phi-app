import Link from 'next/link';
import Image from 'next/image';

const Almacen: React.FC = () => {
    

    return (
        <div className='flex flex flex-col md:flex-row gap-5 h-full items-start justify-start'>
            <div className="flex flex-col items-center justify-start h-full backdrop-blur-md bg-blue/50 rounded p-4 border-2 border-white shadow-[0px_0px_5px_8px_rgba(0,0,0,0.2)] ">
                <h2 className='text-white mb-6'>Almacen</h2>
                <div className="grid grid-cols-4 rounded gap-4 p-2 overflow-y-auto h-64 custom-scrollbar">
                    <Image width={20} height={10} className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="1" />
                    <Image width={20} height={10} className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="2" />
                    <Image width={20} height={10} className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="3" />
                    <Image width={20} height={10} className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="4" />
                    <Image width={20} height={10} className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="5" />
                    <Image width={20} height={10} className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="6" />
                    <Image width={20} height={10} className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="7" />
                    <Image width={20} height={10} className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="8" />          
                </div>
                <li className='list-none p-2 text-white mt-5 bg-gray-700 rounded border-2 border-white hadow-[0px_0px_5px_8px_rgba(0,0,0,0.2)]' >
                <Link href="/inventario/form">                        
                    ingreso de productos
                </Link>
                </li>
            </div>
            <div className='flex flex-col items-center justify-start h-full mb-5 rounded p-4 border-2 border-white shadow-[0px_0px_5px_8px_rgba(0,0,0,0.2)] backdrop-blur-md bg-blue/50 p-4'>
                <h2 className='text-white'>Stock bajo/critico</h2>
                <hr className='h-0.5 w-full bg-white border-0 mt-5'></hr>
            </div>
        </div>
    );
};

export default Almacen;
