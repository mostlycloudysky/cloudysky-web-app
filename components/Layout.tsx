import React from 'react'
import Head from "next/head"
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['Poppins'], weight: ['400', '700'], display: 'swap' })
interface Props {
    title: string,
    keywords: string,
    description: string,
    children: React.ReactNode    
}

function Layout({title, keywords, description, children}: Props) {
    return (
      <div className={inter.className}>
          <Head>
              <title>{title}</title>
              <meta name="keyword" content={keywords} />
              <meta name="description" content={description} />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          {/* <Header /> */}
          <main className="max-w-2xl mx-auto">{children}</main>
      </div>
    )
  }
  
  export default Layout
  
  Layout.defaultProps = {
      title: 'Welcome to CloudySky',
      keywords: 'Portfolio, development, coding, programming',
      description: 'Unique Web experience with a portfolio!'
  }
