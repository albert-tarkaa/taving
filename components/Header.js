import React from 'react';
import Link from 'next/link';
import { Meta } from './Meta';

const Header = ({ title, home, about, blog }) => {
  return (
    <div>
      <Meta />
      
      <h3 className='title'>
        <Link href='/'>Albert Tarkaa</Link> <span className='title-muted'> - {title}</span>
      </h3>
    </div>
  );
};

export default Header;
