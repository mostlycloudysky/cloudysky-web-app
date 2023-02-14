import React from 'react'
import Layout from '../components/Layout';
import Header from '../components/Header';
import Toptracks from '../components/Toptracks';
import Image from 'next/image'
import Link from 'next/link'
import PlayListHeader from '../components/PlayListHeader';
import Songs from '../components/Songs';
import Footer from '../components/Footer';


export default function playlist({playListData}) {
  const {data} = playListData
  return (
    <Layout title='CloudyS.K.Y - Playlist'>
      {/* <Header /> */}
      <div className='pt-5 pl-5 pr-5'>
        {/* Playlist Header component */}
        <PlayListHeader data={data} />
        <Songs songs={data} />
        <Footer />
      </div>
    </Layout>
  )
}


export const getServerSideProps = async() => {

  const response = await fetch(`http://localhost:3000/api/my-playlist`)
  const playListData = await response.json()

  return {
    props: {
      playListData
    }
  }
}