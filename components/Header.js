import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Header = ({ title, home, about, blog }) => {
  return (
    <div>
      <Head>
        <title>Albert Tarkaa</title>
        <meta name='description' content='Check out my portfolio built with NextJS' />
        <meta name='keywords' content='Albert Tarkaa NextJS ReactJS Portfolio' />
        <meta name='author' content='Albert Tarkaa' />
        <meta property='og:type' content='website' />
        <meta name='google-site-verification' content='p5kfwl_U5MSgwzljChwGRFGQpvlZHgsyE7n1Lki_4XM' />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a className={home ? `active` : null}>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className={about ? `active` : null}>About</a>
            </Link>
          </li>
          <li>
            <Link href='/blog'>
              <a className={blog ? `active` : null}>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
      <h3 className='title'>
        Albert Tarkaa <span className='title-muted'> - {title}</span>
      </h3>
    </div>
  );
};

export default Header;
