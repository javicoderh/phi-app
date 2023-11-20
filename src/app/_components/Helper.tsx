import Image from 'next/image';
import tuImagen from '../path/a/tu/imagen.jpg'; // Asegúrate de cambiar la ruta a tu imagen

function Helper() {
  return (
    <button className="fixed right-10 bottom-20 bg-transparent border-none cursor-pointer transform scale-2">
      <Image className='sangrar transform scale-2' src='https://www.svgheart.com/wp-content/uploads/2021/11/black-woman-yoga-meditating-free-svg-file-SvgHeart.Com.png' layout='fixed' alt="Descripción de la imagen" width={50} height={50} />
    </button>
  );
}

export default Helper
