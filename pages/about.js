import Header from '../components/Header';

const About = () =>
{
  return (
    <>
      <Header title='about' about='about' />

      <div className='container'>
        <main className='main'>
          <div className='description'>
            <p>
              Greetings!<br />
            </p>
            <p>
              I&apos;m Albert, a dedicated software engineer who takes pride in crafting elegant, accessible, and highly functional web applications. With over 5 years of experience in frontend development, utilizing ReactJS, NextJS, JavaScript, and TypeScript, I lead a team of exceptional developers at <a href='https://www.tenece.com'>Tenece Professional Services</a>. Together, we create innovative solutions for diverse industries.</p>

            <p>
              My passion for continuous learning drives me to explore new technologies and share my knowledge through my personal website. Here, you can explore my impressive portfolio of projects, insightful blog posts on web development and technology in general, and a collection of expressive poetry showcasing my creative side.
            </p>

            <p>
              Beyond coding and reading, I find joy in traveling, watching movies, and gaming. I actively volunteer at Genesys Tech Hub with programs like Codename: Learnable and CodeVille, where I contribute to nurturing future talents.
            </p>
            <p>
              Always open to exciting challenges, I&apos;m eager to embrace opportunities that fuel my growth as a developer and an individual. If you&apos;re interested in discussing web development, AI, Big History, Fantasy novels, Christianity and volunteering for tech, children or education, I&apos;d be delighted to connect with you!
</p>
            <p> My curiosity drives me to understand how all things work, while my belief holds that all things end.</p>
            <p>To learn more about my qualifications, here&apos;s <a href="Albert Tarkaa - resume.pdf" target='_blank' rel="noreferrer"> my resume</a></p>
          </div>
        </main>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default About;
