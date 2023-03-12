import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import useSWR from 'swr'
import Link from 'next/link'
import cn from 'classnames';
import { useRouter } from 'next/router';


interface Props {
  text: string
}

function NavItem({href, text}: Props) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <Link 
      href={href}
      className={cn(isActive ? 'font-normal text-base border px-3 rounded-full py-1 cursor-pointer pt-1 bg-green-600 text-white' : ' border px-3 rounded-full py-1 font-normal text-base cursor-pointer pt-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white')} >
      <span className="">{text}</span>
    </Link>
  )
}

// Framer Motion music playing
function MusicPlaying() {
    return (
    <AnimatePresence>
      <div className="flex items-end justify-end h-3 gap-[2px]">
        {[0, 1, 2].map((e) => (
          <motion.span
            key={e}
            className="bg-green-600"
            initial={{
              height: 5,
              width: 5,
            }}
            animate={{
              width: 5,
              height: [5, 13, 5],
            }}
            transition={{
              type: "spring",
              repeat: Infinity,
              delay: e * 0.2,
            }}
          />
        ))}
      </div>
    </AnimatePresence>
  );
}

const fetcher = (url) => fetch(url).then((res) => res.json());


function SpotifyPlaying({text}: Props) {

  const { data, error } = useSWR(
    "https://api.github.com/repos/vercel/swr",
    fetcher
  );
  
  // if (error) return "An error has occurred.";
  // if (!data) return "Loading...";

   return (
    <>
      { data ? (
        <>
          <MusicPlaying />
          <NavItem href='/playlist' text='Playlist' />

          {/* <Link href='/playlist' className='border px-3 rounded-full py-1 font-normal text-base cursor-pointer pt-1 border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>Playlist</Link> */}
        </>

      ) : (<div>Not playing</div>)}
    </>
   )
}

export default SpotifyPlaying
