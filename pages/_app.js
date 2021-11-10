import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"


// Next auth session wrapping entire app now
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
