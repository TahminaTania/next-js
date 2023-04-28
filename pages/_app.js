import '@/styles/globals.css'
import Layout from './components/Layout'
import { useState } from "react";
import { Provider } from 'react-redux';
import store from './cart/Store'; 

export default function App({ Component, pageProps }) {

  return (

   <Provider store={store}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </Provider>
  
  )
}
