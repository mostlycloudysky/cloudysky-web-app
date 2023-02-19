import React from 'react'
import Layout from '../components/Layout';
import Header from '../components/Header';
import VisitorLogs from '../components/VisitorLogs';
import NewsLetter from '../components/NewsLetter';



function visitor() {
  return (
    <>
    <Layout title='Visitors Log'>
      {/* <Header></Header> */}
        <div className='pt-5 pl-5 pr-5'>
          <VisitorLogs />
        </div>
    </Layout>
    </>
  )
}

export default visitor
