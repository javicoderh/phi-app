import React from 'react';
import Link from 'next/link';

const Caja: React.FC = () => {
    

    return (
        <div className='flex flex flex-col md:flex-row gap-5 h-168 items-center justify-center '>
        <div className="flex flex-col h-168 items-center justify-center rounded p-4 border-2 border-white shadow-[0px_0px_5px_8px_rgba(0,0,0,0.2)] mr-4 backdrop-blur-md bg-blue/30 p-4">
            <h2 className='text-white mb-6'>Productos</h2>
            <div className="grid grid-cols-3 rounded gap-4 p-2 overflow-y-auto h-84 custom-scrollbar">
            <img className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="" />
                <img className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="" />
                <img className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="" />
                <img className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="" />
                <img className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="" /> 
                <img className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="" />
                <img className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="" />
                <img className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="" />
                <img className='border border-solid border-2 h-24 w-auto rounded' src="https://www.unileverfoodsolutions.cl/dam/global-ufs/mcos/sla/chile/calcmenu/recipes/CL-recipes/pack-shot-truth-visual/empanadas-de-carne/main-header.jpg" alt="" /> 
            </div>                
        </div>
        <div className='flex flex-col items-center justify-center rounded p-4 border-2 border-white shadow-[0px_0px_5px_8px_rgba(0,0,0,0.2)] backdrop-blur-md bg-blue/50 p-4'>
        <h2 className='text-white'>Pedido:</h2>
        <ul className='list-none pl-0'>
            <li className='text-white star-marker'>empanada pollo queso</li>
            <li className='text-white star-marker'>bebida</li>
        </ul>
        <hr className='h-0.5 w-full bg-white border-0">'></hr>
        <h3 className='text-white'>Total: </h3>
        <button className='p-2 text-white mt-5 bg-gray-700 rounded border-2 border-white hadow-[0px_0px_5px_8px_rgba(0,0,0,0.2)]'>Ingresar</button>
        </div>
        </div>
    );
};

export default Caja;