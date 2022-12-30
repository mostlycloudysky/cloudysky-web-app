import React from 'react'
import Layout from '../components/Layout';
import Header from '../components/Header';
import SocialSignIn from '../components/SocialSignin';



function visitor() {
  return (
    <>
    <Layout>
      <Header></Header>
        <h1 className='pl-5 pt-2'>Visitor Page</h1>
        <SocialSignIn />
    </Layout>
    </>
  )
}

export default visitor
