import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

// Framer Motion music playing
function MusicPlaying() {
    return (
    <AnimatePresence>
      <div className="">
        {[0, 1, 2].map((e) => (
          <motion.span
            key={e}
            className="bg-[#1ED760]"
            initial={{
              height: 5,
              width: 5,
            }}
            animate={{
              width: 5,
              height: [5, 12, 5],
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


function SpotifyPlaying({text}) {

  const isPlaying = true

   return (
    <>
      { isPlaying ? (
        <>
          <MusicPlaying />
          <h1>{text}</h1>
        </>

      ) : (<h1>Is not playing</h1>)}
    </>
   )
}

export default SpotifyPlaying
