import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout';
import Header from '../components/Header';
import BlogPosts from '../components/BlogPosts';
import Footer from '../components/Footer';
import {sanityClient, urlFor} from '../sanity'
import {Post} from '../typings.d'


interface Props {
  posts: [Post]
}

function blogs({posts}: Props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timeoutId
    const fetchResults = async() => {
      setIsLoading(true)
      const res = await fetch(`/api/opensearch-results?q=${searchTerm}`)
      const data = await res.json()
      // Id to find from post arrary and return the post
      const id = data.response.map((item) => item._id)
      const filteredPosts = posts.filter((post) => id.includes(post._id))
      setSearchResults(filteredPosts)
      setIsLoading(false)
    } 
    if (searchTerm !== '') {
      timeoutId = setTimeout(fetchResults, 500) //Debounce for 500ms
    } else {
      setSearchResults(posts)
    }

    return () => {
      clearTimeout(timeoutId) //Clear timeout on unmount
    }
    
  }, [searchTerm])

  console.log(searchResults)

  return (
    <>
      <Layout title='Blogs'>
        <div className='pt-5 pl-5 pr-5'>
          <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
            Blogs
          </h3>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            Collection of my blogs, mostly on full stack development, Cloud Native Solutions, DevSecOps and Test Automation. These are also published on Medium, DevTo and HashNode. Use the search filter to search for specific blogs.
          </p>
            <div className="relative w-full">
            <input
              aria-label="Search articles"
              type="text"
              value={searchTerm}
              placeholder="Search articles"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-1  focus:border-green-500 focus:ring-green-500"
            />
            <svg
              className="absolute w-5 h-5 right-3 top-3 text-subtle"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
        {
        searchResults.map((post) => (
          <BlogPosts post={post} key={post._id} />
        ))}
        <div className='pl-5 pr-5'>
          <Footer />
        </div>
      </Layout>
    </>
  )
}

export default blogs

export const getServerSideProps = async () => {
  const query = `*[_type == 'post']{
    _id,
    title,
    _createdAt,
    categories[] -> {
      title,
      slug
    },
    author -> {
      name,
      image
    },
      description,
      mainImage,
      slug, 
  }`;

  const posts = await sanityClient.fetch(query);
  return {
    props: {
      posts,
    }
  }

};

