import type { AppProps } from 'next/app'
import { AppLayout } from '@/components/shared/AppLayout'
import '../styles/style.css'

type Props = {} & AppProps

function MyApp({ Component, pageProps }: Props) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}

export async function getInitialProps({ Component, ctx }) {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}
export default MyApp
