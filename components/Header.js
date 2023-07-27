import React from 'react';
import Link from 'next/link';
import { Meta } from './Meta';
import { BiHomeSmile } from 'react-icons/bi'

const Header = ({ title, home, about, blog }) => {
  return (
    <div>
      <Meta />
      <h3 className='title'>
          <Link href='/' className='back-sign' passHref>
            <BiHomeSmile /> |
        </Link>
        <Link href={`/${title}`} passHref>
          <span className='title-muted-other-pages '> {title}</span></Link>
      </h3>
    </div>
  );
};

export default Header;
