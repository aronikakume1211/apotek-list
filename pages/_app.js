import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Head from 'next/head'
import NextNProgress from 'nextjs-progressbar'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {


  return (
    <Layout>
      <Head>
        {/* you can add metadata here, for all pages */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-    beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossOrigin="anonymous"
        />
      </Head>
      {/* <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      /> */}
      <NextNProgress options={{ easing: "ease", speed: 500 }} color="#fb8b01" />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
