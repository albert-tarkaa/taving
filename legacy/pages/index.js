import { NavLink } from '../components/NavLink';
import { Meta } from '../components/Meta';
import styles from '../styles/Index.module.css';
import Footer from '../components/Footer';
import { SiTwitter, SiGithub, SiLinkedin } from "react-icons/si";
import { GrMail } from "react-icons/gr";

export default function Home({ title, about, blog, musings, projects })
{
  const home='home'
  return (
    <div className={styles.container}>
      <Meta />
      <h3 className={styles.title}>
        Albert Tarkaa <span className='title-muted'> - Software Engineer</span>
      </h3>
      <p className={styles.publised}>
        I have a passion for creating beautiful, accessibility-compliant, and functional web applications. I have about 4 years of experience in frontend development using ReactJS, NextJS, JavaScript, and TypeScript.</p>
      <nav className={styles.nav}>
        <ul >
          <NavLink href='/about' active={about} className={styles.a}>About</NavLink>
          {/* <NavLink href='/portfolio' active={portfolio} className={styles.a}>Portfolio</NavLink> */}
          <NavLink href='/projects' active={projects} className={styles.a}>Projects</NavLink>
          <NavLink href='/blog' active={blog} className={styles.a}>Blog</NavLink>
          <NavLink href='/musings' active={musings} className={styles.a}>Musings and scribblings</NavLink>
          
        </ul>
      </nav>
      <div className="media-links">
        <a href='https://github.com/albert-tarkaa' target='_blank' rel="noreferrer" className={styles.a}><SiGithub /></a>
        <a href='https://linkedin.com/in/albert-tarkaa' target='_blank' rel="noreferrer" className={styles.a}><SiLinkedin /></a>
        <a href="https://twitter.com/alberttarkaa" target='_blank' rel="noreferrer" className={styles.a}><SiTwitter /></a>
        <a href="mailto:tarkaa.albert@gmail.com" className={styles.a}> <GrMail /></a>
      </div>
      <div className={styles.footer}>
        <Footer home={home}/>
      </div>
    </div>
  );
}
