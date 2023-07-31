import type { AppProps } from 'next/app';
// import {MoviesProvider} from '@/components/MoviesContext';
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    // <MoviesProvider>
      <Component {...pageProps} />
    // </MoviesProvider>
  )
}