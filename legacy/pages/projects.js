import Header from '../components/Header';
import Link from 'next/link';
import styles from '../styles/Projects.module.css';
import data from '../MOCK_DATA.json'

const Projects = () =>
    {
    return (
        <>
            <Header title='projects' project='projects' />

            <main className='main'>
                <div className='description'>
                    <div className={styles.userCards}>
                        {data.map(musing => (
                            <Link href={`/musings/${musing.id}`} passHref key={musing.id} className={styles.card}>
                                <div className={styles.cardDetails}>
                                    <div className={styles.cardInfo}>
                                        <p className={styles.cardName}>{musing.Name}</p>
                                        <p className={styles.cardCity}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, esse voluptatem omnis officia iusto doloribus. Natus dolor iste, similique tenetur repellat, modi laboriosam quibusdam animi quas atque esse ipsum nisi!</p>
                                        {musing.tags.map(tag => (
                                            <>
                                                <span className={styles.tags}>{tag}</span>
                                            </>
                                        ))}
                                        <p className={styles.cardCity}>
                                            <Link href={musing.link} passHref>{musing.link}</Link>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
    };

export default Projects;
