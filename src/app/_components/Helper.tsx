import Image from 'next/image';


const Helper: React.FC = () => {
  return (
    <button className="fixed right-10 bottom-20 md:right-40 bg-transparent border-none cursor-pointer transform scale-2">
      <Image className='sangrar transform scale-2' src='https://www.svgheart.com/wp-content/uploads/2021/11/black-woman-yoga-meditating-free-svg-file-SvgHeart.Com.png' alt="Descripción de la imagen" width={50} height={50} />
    </button>
  );
}

export default Helper
