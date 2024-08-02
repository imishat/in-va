import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import img from '../../public/assets/images/r/mob3-t.png'

const Banner = () => {
  const widthRef: any = useRef()
  useEffect(() => {
    let mediaQuery = window.matchMedia('(min-width: 967px)')
    widthRef.current = mediaQuery
  }, [])
  return (
    <main className="main-home">
      <div className="cta">
        <div className="title w-6/12 font-bold">
          <h2 className="playfulx text-5xl tracking-wide md:text-5xl lg:text-8xl">
            <span className="flex lg:inline">
              <span className="heading">Grab</span> Your
            </span>{' '}
            Smartphone Today
          </h2>
        </div>
        <div
          className="peep-imagex brushx panel__imgx home-obsx sky flex w-min items-center justify-center"
          style={{
            transition: 'all 1s ease',
            transform: 'translateZ(20px) scale(1.2)',
            transformStyle: 'preserve-3d',
          }}
          // data-tilt
          // data-tilt-full-page-listening
          // data-tilt-reset="false"
          // data-tilt-reverse="true"
        >
          <div
            // data-tilt
            // data-tilt-full-page-listening
            // data-tilt-reset="false"
            className="flex items-center justify-center relative z-10 mb-6 lg:mb-0"
            style={{ width: widthRef.current?.matches ? 500 : '80vw' }}
          >
            <img
              src={img.src}
              alt="iNVA"
              style={{
                width: widthRef.current?.matches ? 600 : '75vw',
                margin: '0 auto',
                filter: 'opacity(1)',
                position: 'relative',
                zIndex: 1,
              }}
              className="cloud !mt-0 lg:!mt-0 p-4 lg:p-4 my-shadow"
            />
          </div>
          {/* <HashObstacles /> */}
        </div>
      </div>

      <div className="job-title mt-8">
        {/* <i className="text-xs font-light text-secondary">{'<script>'}</i> */}
        <p className="ml-4 flex text-accent">
          <h4 className="mr-2 font-mono text-lg lg:text-xl text-secondary">
            Less price with best quality!
          </h4>
          {/* @ts-ignore */}
          {/* <Typed
                  strings={['Programming', 'Designing', 'Coding']}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                  className="font-mono text-2xl text-secondary"
                />{' '} */}
        </p>
        {/* <i className="text-xs font-light text-secondary">{'</script>'}</i> */}
      </div>

      <button className="scroll-indicator text-xs md:text-sm">
        <span>Go Down</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="playful-scroll w-4 font-semibold"
        />
      </button>
    </main>
  )
}
export default Banner
