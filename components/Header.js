import React from 'react';
import Link from 'next/link';
import { Meta } from './Meta';

const Header = ({ title, home, about, blog }) => {
  return (
    <div>
      <Meta />
      
      <h3 className='title'>
        <p className='title-muted'><Link href='/'>../ </Link>{title}</p>
      </h3>
    </div>
  );
};

export default Header;
