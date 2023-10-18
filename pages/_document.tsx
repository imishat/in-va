import Document, { Head, Html, Main, NextScript } from "next/document";
// @ts-ignore
import GothamBold from "assets/fonts/gotham-bold.woff2";
// @ts-ignore
import GothamBook from "assets/fonts/gotham-book.woff2";
// @ts-ignore
import GothamMedium from "assets/fonts/gotham-medium.woff2";

export function squish(styles: string) {
  return styles.replace(/\s\s+/g, " ");
}
export const fontStyles = squish(`
  @font-face {
    font-family: "Gotham";
    font-weight: 400;
    src: url(${GothamBook}) format("woff2");
    font-display: block;
  }

  @font-face {
    font-family: "Gotham";
    font-weight: 500;
    src: url(${GothamMedium}) format("woff2");
    font-display: block;
  }

  @font-face {
    font-family: 'Gotham';
    font-weight: 700;
    src: url(${GothamBold}) format('woff2');
    font-display: block;
  }
`);

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#cd103b" />
          <link rel="manifest" href="/manifest.json" />
          {/* <link
            rel="preload"
            href="/fonts/UniNeue/UniNeue-Regular.woff2"
            as="font"
            crossOrigin=""
          /> */}
          {/* <link
            rel="preload"
            href="//db.onlinewebfonts.com/t/c3f5dae3a88e0c25c932d7108cc9f05b.eot"
            as="font"
            crossOrigin=""
          /> */}
          <link type="text/plain" rel="author" href="/humans.txt" />
          <link rel="prefetch" href={GothamBook} as="font" />
          <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/favicon/apple-touch-icon-192x192.png"
          />
        </Head>
        <body className="loading">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
