import Link from 'next/link';

const Header = () => {
  return (
    <header className='absolute container mx-auto z-10'>
      <nav className='
      flex flex-row gap-[50px]
      pt-20 pb-5'>        
        <Link className='text-white' href="/">
        Home
        </Link>
      </nav>
    </header>
  );
};

export default Header;