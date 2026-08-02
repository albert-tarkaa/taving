import Header from '../components/Header';
import * as dayjs from 'dayjs';
var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat)
import { client } from '../lib/dataClient';
import Link from 'next/link';
import Cards from '../components/Cards';

const Musings = ({ data }) =>
{
    const getFirstLine = (text) => text.split('\n')[0];

    return (
        <>
            <Header title='musings and scribblings' musings='musings' />

            <main className='main'>
                <div className='description'>
                    {data.map(musing => (
                        <Link href={`/musings/${musing.id}`} passHref key={musing._firstPublishedAt}>
                        <Cards {...musing} title={getFirstLine(musing.musings)}/>
                        </Link>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Musings;

export async function getStaticProps()
{
    const query = ` {
  allTheUncertaintiesAndConversationsWithFates {
    _firstPublishedAt
    musings
    id
  }
}`;


    const data = await client.request(query);
    if (!data)
    {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            data: data.allTheUncertaintiesAndConversationsWithFates,
        },
    };
}

