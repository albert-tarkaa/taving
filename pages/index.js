import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header title='intro' home='home' />

      <div className='container'>
        <main className='main'>
          <blockquote className='description'>
           { `"I wish it need not have happened in my time," said Frodo. "So do I," said Gandalf, "and so do all who live
            to see such times. But that is not for them to decide. All we have to decide is what to do with the time
            that is given us.”`}
          </blockquote>
          <cite>― J.R.R. Tolkien, The Fellowship of the Ring</cite>
        </main>

        <footer className='footer'></footer>
      </div>
    </>
  );
}
