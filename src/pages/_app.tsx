import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'intpp-next-i18next'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;
export default appWithTranslation(App)
