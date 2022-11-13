import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="zh-Hant-TW">
      <Head>
        <link rel="icon" href="./favicon.svg" type="image/svg" sizes="16x16" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
export default Document;
