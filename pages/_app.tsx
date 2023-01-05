import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

export function reportWebVitals(metric) {
  // metric.label === "web-vital" && console.log(metric);
}


function MyApp({ Component, pageProps }: AppProps) {
 
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
