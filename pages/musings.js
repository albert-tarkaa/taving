import Header from '../components/Header';
import { GraphQLClient } from 'graphql-request';
import parse from 'html-react-parser';
import * as dayjs from 'dayjs';
var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat)


const Musings = ({ data }) =>
{
    console.log(data)
    return (
        <>
            <Header title='musings - Poetry and stuff' musings='musings' />

            <main className='main'>
                <div className='description'>
                    <h2>The uncertainties and conversations with fate</h2>
                    {data.map(musing => (
                        <>
                            <p key={musing._firstPublishedAt}>#</p>
                            <p style={{ whiteSpace: "pre-line" }}> {parse(`${musing.musings}`)}</p>
                            <span className='publised'>published: {dayjs(musing._firstPublishedAt).format('LLLL')} </span>
                        </>
                    ))}                    
                </div>
            </main>
            {/* <Footer /> */}
        </>
    );
};

export default Musings;

export async function getStaticProps()
{
    const client = new GraphQLClient(process.env.NEXT_DATOCMS_API_URL, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        },
    });

    const query = ` {
  allTheUncertaintiesAndConversationsWithFates {
    _firstPublishedAt
    musings
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

