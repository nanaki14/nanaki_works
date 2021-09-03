import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { AppLayout } from '@/components/shared/AppLayout'
import withReduxStore from '@/components/utils/WithReduxStore'
import { createStore } from '@/store'
import '../styles/style.css'

type Props = {
  reduxStore: ReturnType<typeof createStore>
} & AppProps

function MyApp({ Component, pageProps, reduxStore }: Props) {
  return (
    <Provider store={reduxStore}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  )
}

export async function getInitialProps({ Component, ctx }) {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}
export default withReduxStore(MyApp)
