import React from 'react'
import { Snippets } from '../../typings'
import { sanityClient, urlFor} from '../../sanity'
import Layout from '../../components/Layout'
import PortableText from 'react-portable-text'
import CodeBlock from '../../components/CodeBlock'
import Footer from '../../components/Footer'
import { LinkedinShareButton, 
         TwitterShareButton, 
         LinkedinIcon,
         RedditShareButton,
         RedditIcon, 
         TwitterIcon} from 'react-share'

interface Props {
    snippet: Snippets
}

function Snippet({snippet}: Props) {
  return (
    <Layout>
      <div className=' pl-5 pr-5 pt-5'>
          <div className=' mb-2'>
            <img 
             src={urlFor(snippet.mainImage).url()!}
             className='w-12 h-12 rounded-full'
            /> 
          </div>
          <div className='flex items-center justify-between'>

            <div className='ml-1'>
              <h4 className='w-full mb-1 text-xl font-medium text-gray-900 md:text-xl dark:text-gray-100'>{snippet.title}</h4>
              <div className=' flex items-center'>
                <p className=' text-sm  text-skin-base leading-5 pb-1'><span className=''>{new Date(snippet._createdAt).toLocaleDateString() }</span>, Published in Medium, DevTo and HashNode</p> 
              </div>
            </div>
            <div className='flex items-center space-x-2'>
              <LinkedinShareButton
                url={snippet.slug.current}
                title={snippet.title}
                summary={snippet.description}
                windowWidth={750}
                windowHeight={600}
                className='cursor-pointer hover:opacity-75'
                >
                <LinkedinIcon
                    size={38}
                    round />
              </LinkedinShareButton>

              <TwitterShareButton
                url={snippet.slug.current}
                title={snippet.title}
                className='cursor-pointer hover:opacity-75'

              >
              <TwitterIcon
                  size={38}
                  round />
              </TwitterShareButton>
              <RedditShareButton
                url={snippet.slug.current}
                title={snippet.title}
                windowWidth={660}
                windowHeight={460}
                className='cursor-pointer hover:opacity-75'

                >
              <RedditIcon
                  size={38}
                  round />
              </RedditShareButton>

            </div>
          </div>

          <p className="ml-1 mt-3 mb-3 text-md italic text-skin-base text-gray-800 dark:text-gray-100 ">
            {snippet.description}
          </p>
          {/* <div className='border-b-[1px] border-green-600 border-muted'></div> */}
          <div>
            <PortableText
              className='mt-5 mb-5'
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
              content={snippet.body}
              serializers={{
                h1: (props: any) => (
                  <h1 className="text-2xl font-bold my-5" {...props} />
                ),

                h2: (props: any) => (
                  <h1 className="text-xl font-bold my-5" {...props} />
                ),
                normal: (props: any) => (
                  <p className="my-2" {...props} />
                ),
                li: ({ children }: any) => (
                  <li className="ml-4 list-disc">{children}</li>
                ),
                link: ({ href, children }: any) => (
                  <a href={href} className=" text-blue-700 hover:underline my-5">
                    {children}
                  </a>
                ),
                codeBlock: (props: any) => {
                  return (
                    <div className=' mt-5 mb-5 text-sm'>
                      <CodeBlock code={props.code} language={props.language} />  
                    </div>
                  ) 
                },
              }}
            />
          </div>
          <div className='border-b-[1px] border-green-600 border-muted mt-2 mb-2'></div>
          <div className='pr-5 mb-5'>
            <Footer />
          </div>
      </div>
    </Layout>

  )
}

export default Snippet

export const getStaticPaths = async () => {
    
    const query = `*[_type == "snippets"]{
        _id,
        slug {
          current
        }
      }`;

    const snippets = await sanityClient.fetch(query);
    
    const paths = snippets.map((snippet: Snippets) => ({
        params: {
            slug: snippet.slug.current
        }
    }));

    return {
        paths,
        fallback: 'blocking'
    };
       
}

export const getStaticProps = async ({params}) => {

    const query = `*[_type == "snippets" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        description,
        mainImage,
        slug,
        body
      }`;

  const snippet = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!snippet) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      snippet,
    },
    revalidate: 60, // after 60 seconds, itll update the old cached version
  };
}