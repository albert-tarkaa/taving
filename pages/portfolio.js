import Header from '../components/Header';
import Cards from '../components/cards';

const Portfolio = () =>
{
    return (
        <>
            <Header title='portfolio' portfolio='portfolio' />

            <div className='container'>
                <main className='main'>
                  <Cards />
                </main>
            </div>
            
        </>
    );
};

export default Portfolio;
