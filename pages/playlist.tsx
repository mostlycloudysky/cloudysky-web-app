import React from 'react'
import Layout from '../components/Layout';
import Header from '../components/Header';
import Toptracks from '../components/Toptracks';
import { useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PlayListHeader from '../components/PlayListHeader';
import Songs from '../components/Songs';
import Footer from '../components/Footer';


export default function playlist() {
  const [playListdata, setplayListdata] = useState(null)
  const [isLoading, setLoading] = useState(false)
  console.log(process.env.NODE_ENV)

  useEffect(() => {
    setLoading(true)
    fetch('/api/my-playlist')
      .then((res) => res.json())
      .then((data) => {
        setplayListdata(data)
        setLoading(false)
      })
  }, [])

  // if (isLoading) return <p>Loading...</p>
  if (!playListdata) return <p>No profile data</p>

  const {data} = playListdata
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


  const url = process.env.NODE_ENV === 'production' ? 'https://cloudysky.link/api/my-playlist' : 'http://localhost:3000/api/my-playlist'

  const response = await fetch(url)
  const playListData = await response.json()

  return {
    props: {
      playListData
    }
  }
}