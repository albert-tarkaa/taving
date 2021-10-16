import Header from '../components/Header';

const Blog = () => {
  return (
    <>
      <Header title='blog' blog='blog' />

      <div className='container'>
        <main className='main'>
          <blockquote className='description'>
            {`“I think human consciousness is a tragic misstep in human evolution. We became too self aware; nature
            created an aspect of nature separate from itself. We are creatures that should not exist by natural law. We
            are things that labor under the illusion of having a self, a secretion of sensory experience and feeling,
            programmed with total assurance that we are each somebody, when in fact everybody’s nobody. I think the
            honorable thing for our species to do is deny our programming, stop reproducing, walk hand in hand into
            extinction, one last midnight, brothers and sisters opting out of a raw deal.”`}
          </blockquote>
          <cite>― Rustin Cohle, True Detective</cite>
        </main>

        <footer className='footer'></footer>
      </div>
    </>
  );
};

export default Blog;
