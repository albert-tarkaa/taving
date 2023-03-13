import Footer from '../components/Footer';
import Header from '../components/Header';
import Link from 'next/link'

const About = () =>
{
  return (
    <>
      <Header title='About' about='about' />

      <div className='container'>
        <main className='main'>
          <div className='description'>
            <p>Hi there! I&apos;m Albert, a software engineer with a passion for creating beautiful, accessibility-compliant, and functional web applications. I have over 5 years of experience in frontend development using ReactJS, NextJS, JavaScript, and TypeScript. I&apos;m currently leading a team of super-talented developers at <Link href='www.tenece.com'>Tenece Professional Services</Link>, where we deliver innovative solutions for clients across various industries.</p>

            <p>
              I love learning new technologies and sharing my knowledge with others. On my personal website, you can find my portfolio of projects, blog posts on various topics related to web development, and poetry collection that expresses my creative side.</p>

            <p>
              When I&apos;m not coding or reading, I enjoy traveling, movies, and gaming. I also volunteer at Genesys Tech Hub with the Codename: Learnable and CodeVille programs. I&apos;m always open to new opportunities and challenges that can help me grow as a developer and a person.
            </p>
            <p>
              Feel free to connect with me if you want to chat about anything related to web development, AI, Big History, Fantasy novels, Christianity, Voluteering, Poetry and basically anything. I&apos;d love to hear from you!
</p>
             <p> I am curious about how all things work.</p>
          </div>
        </main>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default About;
