
import '@/styles/globals.css'

import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";

import {Analytics} from '@vercel/analytics/react'

config.autoAddCss = false; 

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics/>
    </>
  ) 

}
