import { Tab } from '@headlessui/react';

export default function Home() {
  return (
    <div className='grid grid-cols-1 gap-y-6 py-6 justify-items-center items-center '>
      {/* Row 1 */}
      <div className='text-center'>
        <h2 className='font-bold text-5xl leading-normal'>Matriks</h2>
      </div>
      <Tab.Group>
        <Tab.List
          as={'div'}
          className='grid md:grid-cols-4 gap-2 bg-slate-300 p-2 w-full rounded-md'
        >
          <Tab className='bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            {({ selected }) => (
              <button
                className={`${
                  selected ? 'bg-blue-500 text-white' : 'bg-white text-black'
                } w-full rounded-md p-2`}
              >
                Operasi Matematika
              </button>
            )}
          </Tab>
          <Tab className='bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            {({ selected }) => (
              <button
                className={`${
                  selected ? 'bg-blue-500 text-white' : 'bg-white text-black'
                } w-full rounded-md p-2`}
              >
                Transpose
              </button>
            )}
          </Tab>
          <Tab className='bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            {({ selected }) => (
              <button
                className={`${
                  selected ? 'bg-blue-500 text-white' : 'bg-white text-black'
                } w-full rounded-md p-2`}
              >
                Determinan
              </button>
            )}
          </Tab>
          <Tab className='bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            {({ selected }) => (
              <button
                className={`${
                  selected ? 'bg-blue-500 text-white' : 'bg-white text-black'
                } w-full rounded-md p-2`}
              >
                Invers
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 4</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
