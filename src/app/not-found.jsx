import NavBar from '@/components/layout/NavBar';
import Header1 from '@/components/layout/typograhpy/Header1';
import Header2 from '@/components/layout/typograhpy/Header2';
import Image from 'next/image';
import Link from 'next/link';

export default function FourOhFour() {
  return (
    <>
      <NavBar showLogo={false} />
      <main className='relative h-screen font-source-code-pro'>
        <Image
          src='/imgs/t_viking.gif'
          id='fourohfour'
          alt="404 - You're lost!"
          layout='fill'
          unoptimized={true}
          objectFit='cover'
          priority={true}
          className=' bg-cover opacity-40'
        />
        <div className='absolute flex h-full w-full flex-col items-center justify-center text-slate-50'>
          <Header1 text='404' className='text-center' />
          <Header2 text="You're in the wrong place" className='uppercase' />

          <Link href='/'>
            <p className='px-4 py-2 underline hover:font-semibold hover:text-primary'>
              Take me back home!
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}
