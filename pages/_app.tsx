import '../styles/globals.css'
import Nav from './nav'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Nav/>
      <Component {...pageProps}/>
    </div>
  );
}
export default MyApp
