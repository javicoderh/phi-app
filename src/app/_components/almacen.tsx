import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Almacen: React.FC = () => {
    

    return (
        <div className="flex flex-col items-center justify-center rounded p-4 border-2 border-white shadow-[0px_0px_5px_8px_rgba(0,0,0,0.2)] ">
            <h2 className='text-white mb-6'>Almacen</h2>
            <div className="grid grid-cols-2 rounded gap-4 p-2 overflow-y-auto h-64 custom-scrollbar">
                <Image layout="responsive" className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="" />
                <Image layout="responsive" className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="" />
                <Image layout="responsive" className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="" />
                <Image layout="responsive" className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="" />
                <Image layout="responsive" className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="" />
                <Image layout="responsive" className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="" />
            </div>
            <Link href="/inventario/form" passHref>
            <button className='p-2 text-white mt-5 bg-gray-700 rounded border-2 border-white hadow-[0px_0px_5px_8px_rgba(0,0,0,0.2)]'>ingreso de productos</button>
            </Link>
        </div>
    );
};

export default Almacen;
