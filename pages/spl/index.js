import Image from 'next/image';
import logoUniv from '../../public/unibba.png';

export default function Home() {
  return (
    <div className='grid grid-cols-1 gap-y-6 py-6 justify-items-center items-center '>
      {/* Row 1 */}
      <div className=''>
        <Image src={logoUniv} width={200} height={188} />
      </div>

      {/* Row 2 */}
      <div className='text-center'>
        <h2 className='font-bold text-5xl leading-normal'>Tugas Akhir</h2>
        <h3 className='font-medium text-5xl leading-normal'>
          Sistem Persamaan Linear
        </h3>
      </div>
    </div>
  );
}
