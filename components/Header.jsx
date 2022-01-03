import Link from 'next/link';

export default function Header() {
  return (
    <div className='font-medium bg-black text-white'>
      <ul className='flex max-w-screen-lg justify-between mx-auto space-x-3 py-3 px-6'>
        <li>
          <Link href={'https://nextjs.org'}>
            <a>NextJS</a>
          </Link>
        </li>

        <li className='self-center'>
          <Link href={'/'}>
            <a className='text-md'>Source Code</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
