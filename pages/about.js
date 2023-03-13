import Footer from '../components/Footer';
import Header from '../components/Header';

const About = () => {
  return (
    <>
      <Header title='About' about='about' />

      <div className='container'>
        <main className='main'>
          <blockquote className='description'>
            {`"I am not going to tell you my name, not yet at any rate.' A queer half-knowing, half-humorous look came with
        a green flicker into his eyes. 'For one thing it would take a long while: my name is growing all the time,
        and I've lived a very long, long time; so my name is like a story. Real names tell you the story of things
        they belong to in my language, in the Old Entish as you might say. It is a lovely language, but it takes a
        very long time saying anything in it, because we do not say anything in it, unless it is worth taking a long
        time to say, and to listen to.”`}
          </blockquote>
          <cite>― J.R.R. Tolkien, The Two Towers</cite>
        </main>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default About;
