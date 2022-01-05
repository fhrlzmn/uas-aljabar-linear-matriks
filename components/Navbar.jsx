import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';

const navMenu = [
  ['/contact', 'Contact'],
  ['/projects', 'Projects'],
  ['/about', 'About'],
];

export default function Navbar() {
  return (
    <Popover
      as={'nav'}
      className='flex sticky z-50 top-0 bg-white h-16 items-center md:space-x-4 max-w-screen-lg mx-auto px-6 font-semibold'
    >
      <div className='flex flex-1 items-center justify-between'>
        <div className='flex-1'>
          <Link href={'/'}>
            <a className='text-xl'>Kelompok 5</a>
          </Link>
        </div>
        <div className='md:flex hidden flex-1 items-center justify-around'>
          {navMenu.map(([url, title], index) => (
            <Link key={index} href={url}>
              <a key={index} className='text-gray-500 hover:text-black'>
                {title}
              </a>
            </Link>
          ))}
        </div>
        <div className='md:flex hidden items-center space-x-6 justify-end flex-1'>
          <Link href={'/'}>
            <a className='rounded-md box-border border-2 border-blue-500 bg-blue-500 px-4 py-1 text-white hover:text-blue-500 hover:bg-white'>
              Source Code
            </a>
          </Link>
          <Link href={'https://www.github.com/fhrlzmn'}>
            <a className=''>
              <svg
                className='fill-gray-500 hover:fill-black'
                height='22'
                width='22'
                viewBox='0 0 16 16'
              >
                <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'></path>
              </svg>
            </a>
          </Link>
        </div>
        {/* Button Mobile */}
        <div className='md:hidden'>
          <div>
            <Popover.Button static>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </Popover.Button>
          </div>
          <Transition
            enter='transition ease-out duration-100'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition ease-in duration-75'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Popover.Panel className='absolute z-50 right-0 w-full mt-4 bg-white rounded-md shadow-lg'>
              {/* <ul> */}
              {navMenu.map(([url, title], index) => (
                <Link key={index} href={url}>
                  <a
                    key={index}
                    className='group flex items-center w-full px-6 py-2 text-lg border-t-2'
                  >
                    {title}
                  </a>
                </Link>
              ))}
              {/* </ul> */}
            </Popover.Panel>
          </Transition>
        </div>
      </div>
    </Popover>
  );
}
