import { NavLink } from '../components/NavLink';
import { Meta } from '../components/Meta';
import styles from '../styles/Index.module.css';

export default function Home({ title, home, about, blog, portfolio })
{
  return (
    <div className={styles.container}>
      <Meta />
      <h3 className={styles.title}>
        Albert Tarkaa <span className='title-muted'> - Web Developer</span>
      </h3>
      <nav className={styles.nav}>
        <ul >
          <NavLink href='/about' active={about}>About</NavLink>
          <NavLink href='/portfolio' active={portfolio}>Portfolio</NavLink>
          <NavLink href='/blog' active={blog}>Blog</NavLink>
        </ul>
      </nav>

      <footer className='footer'></footer>
    </div>
  );
}
