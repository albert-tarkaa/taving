import Header from '../components/Header';
import parse from 'html-react-parser';
import * as dayjs from 'dayjs';
var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);
import { client } from '../lib/dataClient';



const Blog = ({ data }) =>
{
  return (
    <>
      <Header title='blog' articles='Blog' />

      <main className='main'>
        <div className='description'>

          {data.map(article => (
            <div key={article._firstPublishedAt}>
              <span className='publised'>published: {dayjs(article._firstPublishedAt).format('LLLL')} </span>
              <p style={{ fontSize: "x-large" }}>{article.title}</p>
              <p style={{ whiteSpace: "pre-line" }}> {parse(`${article.body}`)}</p>
            </div>
          ))}
        </div>
      </main>
      {/* <Footer /> */}
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

