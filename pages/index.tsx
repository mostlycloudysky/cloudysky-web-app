import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <Layout title='Cloudysky home page'>
      <Header></Header>
        <h1 className='pl-5 pt-2'>Home Page</h1>

    </Layout>

  )
}

export default Home
