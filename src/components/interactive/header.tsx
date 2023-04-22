import Link from 'next/link';

const Header = () => {
  return (
    <header className='container mx-auto'>
      <nav className='flex flex-row gap-[50px] 
      pt-5 pb-5'>        
        <Link href="/">
              Home
            </Link>
         
            <Link href="/about">
              About
            </Link>
        
            <Link href="/contact">
              Contact
            </Link>

      </nav>
    </header>
  );
};

export default Header;