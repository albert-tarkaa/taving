import Header from '../components/Header';
import { client } from '../lib/dataClient';
import Link from 'next/link'
import Cards from '../components/Cards';

const Blog = ({ data }) =>
{

    return (
        <>
            <Header title='blog' articles='Blog' />

            <main className='main'>
                <div className='description'>
                    {data.map(article => (
                        <Link href={`/blog/${article.slug}`} passHref key={article._firstPublishedAt}>
                                <Cards {...article}/>
                            </Link>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Blog;

export async function getStaticProps()
{
    const query = ` {
  allArticles {
    _firstPublishedAt
    body
    id
    title
    slug
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
            data: data.allArticles,
        },
    };
}

