import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { RobinhoodProvider } from '../context/RobinhoodContext'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      // This should be in a .env file
      serverUrl='https://id8hum2eotdq.usemoralis.com:2053/server'
      appId='HPAo5Yrz90svS58FfpIyUKVlUH6Tn60c1yFr5zut'
    >
      <RobinhoodProvider>
        <Component {...pageProps} />
      </RobinhoodProvider>
    </MoralisProvider>
  )
}

export default MyApp
