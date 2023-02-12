import React from 'react'
import Head from "next/head"
// import { Inter } from '@next/font/google'
import Footer from './Footer'
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Header from './Header';
// const inter = Inter({ subsets: ['Noto Sans'], weight: ['400', '700'], display: 'swap' })
interface Props {
    title: string,
    keywords: string,
    description: string,
    children: React.ReactNode    
}

function Layout({title, keywords, description, children}: Props) {
    const router = useRouter();
    return (
      <motion.div className='max-w-2xl mx-auto' >
          <Head>
              <title>{title}</title>
              <meta name="keyword" content={keywords} />
              <meta name="description" content={description} />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
                <AnimatePresence initial={true} mode='wait'>
                    <motion.div
                    key={router.asPath}
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    layout
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    >
                    <motion.main className="max-w-2xl mx-auto">{children}</motion.main>
                    {/* <Footer /> */}
                    </motion.div>
                </AnimatePresence>
          {/* <main >{children}</main> */}
          {/* Place holder for footer */}
          {/* <div className="max-w-2xl mx-auto pl-5 pr-5">test</div>  */}
      </motion.div>
    )
  }
  
  export default Layout
  
  Layout.defaultProps = {
      title: 'Welcome to CloudySky',
      keywords: 'Portfolio, development, coding, programming',
      description: 'Unique Web experience with a portfolio!'
  }
