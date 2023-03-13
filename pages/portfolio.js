import Footer from '../components/Footer';
import Header from '../components/Header';

const Portfolio = () =>
{
    return (
        <>
            <Header title='Portfolio' Portfolio='Portfolio' />

            <div className='container'>
                <main className='main'>
                    <div className='description'>
                        {`“
Pain is a part of life. Sometimes it's a big part, and sometimes it isn't, but either way, it's a part of the big puzzle, the deep music, the great game. Pain does two things: It teaches you, tells you that you're alive. Then it passes away and leaves you changed. It leaves you wiser, sometimes. Sometimes it leaves you stronger. Either way, pain leaves its mark, and everything important that will ever happen to you in life is going to involve it in one degree or another.”`}
                    </div>
                    <cite>―Jim Butcher, The Dresden Files</cite>
                </main>
            </div>
            {/* <Footer/> */}
        </>
    );
};

export default Portfolio;
