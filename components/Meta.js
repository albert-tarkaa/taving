import Head from 'next/head';

export const Meta = () => (
  <>
    <Head>
      <title>Albert Tarkaa</title>
      <meta name='description' content='Albert Tarkaa - Portfolio' />
      <meta name='keywords' content='Albert Tarkaa, NextJS, Portfolio, Web development' />
      <meta name='author' content='Albert Tarkaa' />
      <meta property='og:type' content='website' />
      <meta name='google-site-verification' content='p5kfwl_U5MSgwzljChwGRFGQpvlZHgsyE7n1Lki_4XM' />
    </Head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-7PBGFKC26K"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-7PBGFKC26K');
    </script>
  </>

);