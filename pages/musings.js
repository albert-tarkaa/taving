import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from '../styles/Musings.module.css';

const Musings = () =>
{
    return (
        <>
            <Header title='Musings - Poetry and stuff' musings='musings' />

            <div className='container'>
                <main className={styles.main}>
                    <h2>The uncertainties and conversations with fate</h2>
                    <p>#</p>
                    <p>
                        
                        I worry. I dread days that make me think about the many uncertainties that reach out, the real ones and the thousand and a few that crawl from my mind, imagined in more detail than the scenes from the Silmarillion.

                        I see so many wistful smiles, they mirror most moments, even on days when I do not choose to be lucid. The spires sticking out used to be my favorite place, it housed the calm of the shire, the lush grass and the cold mountain air that sweeps in, the grandeur of the halls of the Elfen folk, the inviting pews, solid and unyielding yet welcoming, maybe because it reminds me of wholeness, family, childhood, and its apparent lack of bother. It is a cocoon and maybe I can nest in here if the bishop will let me, but, I fear I will be lost in the past, in the memories of new clothes, movies, and delicacies and the car rides home after Sunday Masses.

                        These days, these days all I wish for is the strength to overcome the bleakness
                    </p>
                    <p>#</p>
                    <p>
                        I don&apos;t think I would like it in the ground
                        The earth gives but it also takes more
                        Always taking, stoic, and entitled
                        I would love to feel the wind as my ashes fly away
                        Enjoying the freedom I so desperately craved
                        It would be beautiful, one last time
</p>
                </main>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default Musings;
