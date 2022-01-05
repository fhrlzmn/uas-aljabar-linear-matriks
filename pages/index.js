import Image from 'next/image';
import Link from 'next/link';
import logoUniv from '../public/unibba.png';

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
          Aljabar Linear & Matriks
        </h3>
        <p className='font-normal text-4xl leading-normal'>
          Membuat Program Matriks dan SPL
        </p>
      </div>

      {/* Row 3 */}
      <div className='text-center'>
        <Link href={'/anggota'}>
          <a className='text-xl rounded-md font-semibold bg-blue-500 px-4 py-2 text-white drop-shadow-md hover:drop-shadow-xl hover:opacity-90 transition-all duration-300'>
            Lihat Anggota Kelompok
          </a>
        </Link>
      </div>
    </div>
  );
}
