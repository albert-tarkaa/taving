import Header from '../components/Header';

const Portfolio = () =>
{
    return (
        <>
            <Header title='Portfolio' Portfolio='Portfolio' />

            <div className='container'>
                <main className='main'>
                    <div className='description'>
                        <p> “We still hadn't learned, though, that growing up is all about getting hurt. And then getting over it. You hurt. You recover. You move on. Odds are pretty good you're just going to get hurt again. But each time, you learn something.</p> 
                        <p>Each time, you come out of it a little stronger, and at some point you realize that there are more flavors of pain than coffee. There's the little empty pain of leaving something behind - gradutaing, taking the next step forward, walking out of something familiar and safe into the unknown. There's the big, whirling pain of life upending all of your plans and expecations. There's the sharp little pains of failure, and the more obscure aches of successes that didn't give you what you thought they would. There are the vicious, stabbing pains of hopes being torn up. The sweet little pains of finding others, giving them your love, and taking joy in their life they grow and learn. There's the steady pain of empathy that you shrug off so you can stand beside a wounded friend and help them bear their burdens.</p>
                        <p>And if you're very, very lucky, there are a very few blazing hot little pains you feel when you realized that you are standing in a moment of utter perfection, an instant of triumph, or happiness, or mirth which at the same time cannot possibly last - and yet will remain with you for life.</p>
                        <p>Everyone is down on pain, because they forget something important about it: Pain is for the living. Only the dead don't feel it.</p>

                        <p>Pain is a part of life. Sometimes it's a big part, and sometimes it isn't, but either way, it's a part of the big puzzle, the deep music, the great game. Pain does two things: It teaches you, tells you that you're alive. Then it passes away and leaves you changed. It leaves you wiser, sometimes. Sometimes it leaves you stronger. Either way, pain leaves its mark, and everything important that will ever happen to you in life is going to involve it in one degree or another.</p>

                    </div>
                    <cite>―Jim Butcher, The Dresden Files</cite>
                </main>

                <footer className='footer'></footer>
            </div>
        </>
    );
};

export default Portfolio;
