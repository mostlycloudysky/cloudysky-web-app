import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <Layout title='Cloudysky home page'>
      <Header></Header>
      <div className="">
        <main className="">
         <h1>Main content</h1>
        </main>

        <footer className="">
          <h1>Footer</h1>
        </footer>
      </div>
    </Layout>

  )
}

export default Home
