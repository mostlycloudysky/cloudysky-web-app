import React from 'react'
import { Snippets } from '../../typings'
import { sanityClient, urlFor} from '../../sanity'




interface Props {
    snippet: Snippets
}

function Snippet({snippet}: Props) {
  return (
    <div className=' mt-5'>
      {snippet._id}
    </div>
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