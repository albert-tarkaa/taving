import { NavLink } from '../components/NavLink';
import { Meta } from '../components/Meta';
import styles from '../styles/Index.module.css';
import Footer from '../components/Footer';

export default function Home({ title, about, blog, portfolio,musings })
{
  const home='home'
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
          <NavLink href='/musings' active={musings}>Musings - Poetry and stuff</NavLink>
        </ul>
      </nav>
      <div className={styles.footer}>
        <Footer home={home}/>
      </div>
    </div>
  );
}
