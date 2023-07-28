import React from 'react';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { client } from '../../lib/dataClient';
import parse from 'html-react-parser';
import * as dayjs from 'dayjs';
var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const BlogItem = (item) =>
{
    const router = useRouter();
    const { article } = item.data;
    return (
        <>
            <Header title='blog' articles='Blog'/> 

            <main className='main'>
                <div className='description'>
                    <div key={article._firstPublishedAt}>
                        <span className='publised'>published: {dayjs(article._firstPublishedAt).format('LLLL')} </span>
                        <p style={{ fontSize: "x-large" }}>{article.title}</p>
                        <p style={{ whiteSpace: "pre-line" }}> {parse(`${article.body}`)}</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default BlogItem;

// This function returns the list of paths to pre-render
export async function getStaticPaths()
{
    const query = ` {
    allArticles {
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
    
    const paths = data.allArticles.map((dataItem) => ({
        params: { slug: dataItem.slug }, 
    }));

    return {
        paths,
        fallback: true, 
    };
}

export async function getStaticProps({ params })
{
    const { slug } = params;
    const query = `
    query GetArticle($slug: String!) {
      article(filter: { slug: { eq: $slug } }) {
        slug
        body
        title
        _firstPublishedAt
        id
      }
    }
  `;

    const data = await client.request(query, { slug });
    if (!data || !data.article)
    {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            data: data,
        },
    };
}