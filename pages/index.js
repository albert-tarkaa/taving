import { NavLink } from '../components/NavLink';
import { Meta } from '../components/Meta';
import styles from '../styles/Index.module.css';
import Footer from '../components/Footer';
import { SiTwitter, SiGithub,SiLinkedin } from "react-icons/si";
import { GrMail } from "react-icons/gr";

export default function Home({ title, about, blog, portfolio,musings })
{
  const home='home'
  return (
    <div className={styles.container}>
      <Meta />
      <h3 className={styles.title}>
        Albert Tarkaa <span className='title-muted'> - Web Developer</span>
      </h3>
      <p className={styles.publised}>Hi there! I&apos;m Albert, a software engineer currently leading a team of super-talented developers at <a href='https://www.tenece.com'>Tenece Professional Services</a>, where we deliver innovative solutions for clients across various industries.</p>
      <nav className={styles.nav}>
        <ul >
          <NavLink href='/about' active={about}>About</NavLink>
          <NavLink href='/portfolio' active={portfolio}>Portfolio</NavLink>
          <NavLink href='/blog' active={blog}>Blog</NavLink>
          <NavLink href='/musings' active={musings}>Musings - Poetry and stuff</NavLink>
        </ul>
      </nav>
      <div className="media-links">
        <a href='https://github.com/albert-tarkaa' target='_blank' rel="noreferrer"><SiGithub /></a>
        <a href='https://linkedin.com/in/albert-tarkaa' target='_blank' rel="noreferrer"><SiLinkedin /></a>
        <a href="https://twitter.com/alberttarkaa" target='_blank' rel="noreferrer"><SiTwitter /></a>
        <a href="mailto:tarkaa.albert@gmail.com"> <GrMail /></a>
      </div>
      <div className={styles.footer}>
        <Footer home={home}/>
      </div>
    </div>
  );
}
