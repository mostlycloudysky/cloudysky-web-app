import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import { sanityClient } from '../../sanity'
import { GetStaticProps } from 'next'
import { Post } from '../../typings'
import { urlFor} from '../../sanity'
import { EyeIcon } from '@heroicons/react/outline'
import PortableText from 'react-portable-text'
import Refractor from 'react-refractor'

interface Props {
  post: Post;
}

function Post({post}: Props) {
  
  
  return (
    <Layout>
        <Header />
        <div className=' pl-5 pr-5 pt-5'>
          <img 
            src={urlFor(post.mainImage).url()!}
            className='w-full h-40 object-cover mb-2'
          /> 
          <h4 className='w-full mb-2 text-2xl font-medium text-gray-900 md:text-2xl dark:text-gray-100'>{post.title}</h4>
          <p className="mt-3 mb-4 text-md font-normal text-skin-base ">
            {post.description}
          </p>
          <div className='border-b-[1px] border-green-600 border-muted mb-5'></div>
          

          <div className=' flex items-center justify-between mb-5'>
            <div className=' flex items-center'>
              <img src={urlFor(post.author.image).url()!} className='w-10 h-10 rounded-full' />
              <h4 className='pl-1 font-normal text-md text-gray-900 dark:text-gray-100 text-skin-base'>{post.author.name} - </h4>
              <h4 className=' font-normal text-md text-gray-900 dark:text-gray-100'> {new Date(post._createdAt).toLocaleDateString()}</h4>
            </div>
            <div className=' flex items-center space-x-2'>
              <h4 className=' font-normal text-md text-gray-900 dark:text-gray-100'>. 2 mins read</h4>  
              <div className='flex items-center space-x-1 mr-5 pr-5'>
                <EyeIcon className='h-5 w-5 text-gray-900 dark:text-gray-100' />
                  <h4 className=' font-normal text-md text-gray-900 dark:text-gray-100'>100</h4>  
              </div>
            </div>
          </div>
          <div>
            <PortableText
              className='mt-10'
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={post.body}
              serializers={{
                h1: (props: any) => (
                  <h1 className="text-2xl font-bold my-5" {...props} />
                ),
                h2: (props: any) => (
                  <h1 className="text-xl font-bold my-5" {...props} />
                ),
                li: ({ children }: any) => (
                  <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ href, children }: any) => (
                  <a href={href} className="text-blue-500 hover:underline my-5">
                    {children}
                  </a>
                )
              }}
            />
          </div>

 
        </div>
    </Layout>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
        _id,
        slug {
          current
        }
      }`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author-> {
          name,
          image
        },
        description,
        mainImage,
        slug,
        body
      }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60, // after 60 seconds, itll update the old cached version
  };
};
