import React from 'react';
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import { client } from '../../lib/dataClient';

import parse from 'html-react-parser';
import * as dayjs from 'dayjs';
var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const MusingsItem = (item) =>
{
    const router = useRouter();
    const musing = item.data.allTheUncertaintiesAndConversationsWithFates[0];
    return (
        <>
            <Header title='musings' articles='musings' />

            <main className='main'>
                <div className='description'>
                    <div key={musing.id}>
                        <span className='publised'>published: {dayjs(musing._firstPublishedAt).format('LLLL')} </span>
                        <p style={{ whiteSpace: "pre-line" }}> {parse(`${musing.musings}`)}</p>
                    </div>
                </div>
            </main>
        </>
    );
};

export default MusingsItem;

export async function getStaticPaths()
{
    const query = ` {
    allTheUncertaintiesAndConversationsWithFates {
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
    const paths = data.allTheUncertaintiesAndConversationsWithFates.map((dataItem) => ({
        params: { slug: dataItem.id },
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
    query GetallTheUncertaintiesAndConversationsWithFates($slug: ItemId!) {
      allTheUncertaintiesAndConversationsWithFates(filter: { id: { eq: $slug } }) {
        id
    _firstPublishedAt
    musings
      }
    }
  `;

    const data = await client.request(query, { slug });
    if (!data || !data.allTheUncertaintiesAndConversationsWithFates)
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