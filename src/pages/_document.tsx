import Document, { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

class MyDocument extends Document<Props> {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="break-all font-notoSans">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
