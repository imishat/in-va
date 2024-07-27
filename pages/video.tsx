import React, { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import img2 from '../public/gallery/bg_img.png'

const Video = () => {
  const [mob, setMob] = useState(false)
  const playerRef = useRef(null)

  useEffect(() => {
    let media = window.matchMedia('(max-width: 664px)')
    setMob(media?.matches)
  }, [])

  const VIDEO_PATH =
    'https://github.com/Yadab-Sd/art-world/assets/23726737/c89824bd-4b0a-4beb-b448-81344c4e10f3'

  return (
    <div
      className="portfoliox bg-cover py-12 !pb-40 relative lg:h-96 flex flex-col items-center mb-40 lg:mb-80"
      style={{
        backgroundImage: `linear-gradient(45deg, var(--accent6), var(--accent5))`,
      }}
    >
      <h2 className="text-white text-xl lg:text-4xl font-bold text-center mb-4">
        Whole In A Minute
      </h2>
      <div className="flex justify-center translate-y-[60%] lg:translate-y-[40%] absolute top-0 vid px-4 lg:px-0">
        {/* @ts-ignore */}
        <ReactPlayer
          ref={playerRef}
          url={VIDEO_PATH}
          controls={true}
          className="lg:w-96 bg-white rounded-lg border-4 border-white"
          stopOnUnmount
          style={
            mob
              ? {
                  width: '100vw',
                  display: 'flex',
                  justifyContent: 'center',
                }
              : {}
          }
        />
      </div>
    </div>
  )
}

export default Video
