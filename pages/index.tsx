import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React, { useContext, useEffect, useRef, useState } from 'react'
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion'
import { Button, IntroOverlay } from '@components/UI'
import { gsap } from 'gsap'
import { TweenMax } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin'
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { HashObstacles } from '@components/UI'
import Typed from 'react-typed'
import Header from '@common/Layout/Header'
import About from '@components/About'
import Skill from '@components/Skill'
import Portfolio from '@components/Portfolio'
import { colors, colors2, transition } from '@utils/index'
import PageHead from '@common/PageHead'
import SmoothScroll from '@common/SmoothScroll'
import VanillaTilt from 'vanilla-tilt'
import cn from 'classnames'
import CustomCursor from '@components/UI/CustomCursor'
import CustomCursorContext from '@components/UI/context/CustomCursorContext'
import { useRouter } from 'next/router'
import { media } from '@utils/style'
import img from '@assets/images/r/mob3-t.png'
import imgv from '@assets/images/mv.jpg'
import simg from '@assets/images/shadow.png'
import ReactPlayer from 'react-player'

interface PageProps {
  section: any
}

const Home: NextPage<PageProps> = ({ section }) => {
  const [animationComplete, setAnimationComplete] = useState(false)
  const [footerInView, setFooterInView] = useState(false)
  const [mob, setMob] = useState(false)
  const { scrollYProgress } = useViewportScroll()
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1])
  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [30, 0, -50])
  const { type, setType } = useContext(CustomCursorContext)
  const router = useRouter()
  const { noanim } = router.query
  const widthRef: any = useRef()

  const completeAnimation = () => {
    setAnimationComplete(true)
    document.body.style.overflowY = 'auto'
    const bH =
      document.getElementById('scId')?.getBoundingClientRect().height ||
      document.getElementById('scId')?.clientHeight
    if (bH) {
      document.body.style.height = `${bH}px`
    }
  }

  const sectionsRef: any = useRef(null)
  const executeScroll = () => sectionsRef.current?.scrollIntoView()
  const scrollToSection = () => {
    if (typeof window !== 'undefined') {
      if (section) {
        // Use the hash to find the first element with that id
        const element = document.getElementById(section)

        if (element) {
          // Smooth scroll to that elment
          element.scrollIntoView()
        }
      }
    }
  }

  useEffect(() => {
    let media = window.matchMedia('(max-width: 664px)')
    setMob(media?.matches)
  }, [])

  useEffect(() => {
    // Inner Page height for mobile devices
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    // GSAP animation
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
    let tl = gsap.timeline()
    let sections = gsap.utils.toArray('.section')
    let mediaQuery = window.matchMedia('(min-width: 967px)')
    widthRef.current = mediaQuery

    const homeAnimation = (animation: () => void) => {
      if (!section) {
        tl.to('.ball, .ball2, .ball3', {
          duration: 2.5,
          y: '50vh',
          ease: 'ease.in',
        })
          .to('.ball, .ball2, .ball3', {
            duration: 0.8,
            translateX: '100vw',
            scale: 50,
            scaleX: 200,
            ease: 'ease.out',
            x: '200vw',
            left: '50vw',
            onComplete: animation,
          })
          .from('.after-animation', {
            duration: 0.5,
            opacity: 0,
            ease: 'power3.out',
          })
          .from('.title', {
            duration: 0.2,
            y: 100,
            delay: 0.1,
            opacity: 0,
            ease: 'power3.out',
          })
          .from('.peep-image', {
            duration: 1,
            scale: 0,
            opacity: 0,
            ease: 'spring',
          })
          .from('.job-title', {
            duration: 0.5,
            y: 100,
            opacity: 0,
            ease: 'power3.out',
          })
          .from('.scroll-indicator', {
            duration: 0.5,
            y: 100,
            opacity: 0,
            ease: 'power3.out',
          })
      } else {
        completeAnimation()
        scrollToSection()
      }

      if (mediaQuery.matches) {
        sections.forEach((section: any) => {
          let tlSection = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top center',
              end: 'center center',
              scrub: 1,
            },
          })
          let sectionImage = section?.querySelector('img')
          let sectionInfo = section?.querySelector('.section-info')

          tlSection
            .from(sectionImage, {
              x: -300,
              opacity: 0,
            })
            .from(sectionInfo, {
              x: 300,
              opacity: 0,
            })
        })
      } else {
        sections.forEach((section: any) => {
          let tlSection = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: 'top center',
              end: 'center center',
              scrub: 1,
            },
          })
          let sectionImage = section?.querySelector('img')
          let sectionInfo = section?.querySelector('.section-info')

          tlSection
            .from(sectionImage, {
              y: 100,
              opacity: 0,
            })
            .from(sectionInfo, {
              y: 100,
              opacity: 0,
            })
        })
      }

      let tlFooter = gsap.timeline({
        scrollTrigger: {
          trigger: 'footer',
          start: 'top center',
          end: 'top top',
          scrub: 1,
        },
      })

      tlFooter
        .from('footer h2', {
          y: -100,
          opacity: 0,
          duration: 0.6,
        })
        .from('footer .footer-links', {
          y: 100,
          opacity: 0,
          duration: 0.6,
        })
    }

    if (noanim) {
      completeAnimation()
    } else {
      homeAnimation(completeAnimation)
    }
  }, [])

  useEffect(() => {
    VanillaTilt.init(document.querySelector('.home-obs') as any, {
      reverse: true,
      max: 5,
      speed: 1000,
      transition: true,
    })
    VanillaTilt.init(document.querySelector('.home-obs img') as any, {
      max: 5,
      speed: 2000,
      transition: true,
    })

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.scrollDist',
          scrub: 5,
        },
      })
      .to('.sky', { y: 100 }, 0)
      .to('.cloud', { y: -150 }, 0)

    document
      .querySelector('.scroll-indicator')
      ?.addEventListener('click', (e) => {
        gsap.to(window, {
          scrollTo: innerHeight,
          duration: 1,
          ease: 'power1.inOut',
        })
      })
    if (animationComplete) {
      setType('default')
    } else {
      setType('none')
    }
  }, [animationComplete])

  const VIDEO_PATH =
    'https://github.com/Yadab-Sd/art-world/assets/23726737/c89824bd-4b0a-4beb-b448-81344c4e10f3'
  const playerRef = useRef(null)

  return (
    <div>
      {/* <CustomCursor /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: 500, transition: { duration: 5 } }}
        className="container"
      >
        <PageHead />
        {/* <IntroOverlay /> */}
        {animationComplete === false && <IntroOverlay />}
        <div className="after-animation">
          <Header start={!animationComplete} />
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

          <div className="section-container" ref={sectionsRef}>
            <div className="section bg-gray-200/20x" id={section}>
              <About />
            </div>
            <div className="" id={section}>
              <Skill />
            </div>
            <div
              className="my-8 lg:my-20 py-6"
              id={section}
              style={{
                background: `url(${simg.src})`,
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <h2 className="text-4xl text-center font-bold text-center mb-12 text-gray-400">
                Smartphone Variants
              </h2>
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-2 lg:gap-6">
                  <div className="rounded-md bg-white border-2 p-4 lg:p-20">
                    <h2 className="text-accent6 text-lg lg:text-2xl font-bold text-center mb-4">
                      iNVA
                    </h2>
                    <div className="bg-gray-200 h-[1px] mb-4 w-full block" />
                    <h2 className="text-secondary text-center text-4lg font-semibold text-center mb-4">
                      Overview
                    </h2>
                    <ul className="text-secondary text-xs lg:text-sm leading-loose">
                      <li className="lg:mb-2">Type: MT6765V/XB(G36), 12nm</li>
                      <li className="lg:mb-2">No. of Cores: Quad-core</li>
                      <li className="lg:mb-2">Camera: 13MP/5MP</li>
                      <li className="lg:mb-2">Frequency: Upto 2.2GHz</li>
                      <li className="lg:mb-2">Memory: 6+128 (emmc+ddr4x)</li>
                    </ul>
                  </div>
                  <div className="rounded-md bg-white border-2 p-4 lg:p-20">
                    <h2 className="text-accent4 text-lg lg:text-2xl font-bold text-center mb-4">
                      iNVA-X
                    </h2>
                    <div className="bg-gray-200 h-[1px] mb-4 w-full block" />
                    <h2 className="text-secondary text-center text-4lg font-semibold text-center mb-4">
                      Overview
                    </h2>
                    <ul className="text-secondary text-xs lg:text-sm leading-loose">
                      <li className="lg:mb-2">Type: Dimensity6020, 7nm</li>
                      <li className="lg:mb-2">No. of Cores: Octa-core</li>
                      <li className="lg:mb-2">Camera: 50MP/8MP</li>
                      <li className="lg:mb-2">Frequency: Upto 2.2GHz</li>
                      <li className="lg:mb-2">Memory: 6+128 (emmc+ddr4x)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="portfoliox bg-cover py-12 !pb-40 relative lg:h-96 flex flex-col items-center mb-40 lg:mb-80"
              id={section}
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
            <div className="portfolio" id={section}>
              <Portfolio />
            </div>
          </div>

          <footer style={{ height: '100vh', minHeight: '600px' }}>
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              whileInView={footerInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="shutter-black w-screen bg-black"
              style={{
                height: '50vh',
                background:
                  'linear-gradient(70deg, black calc(100% - 200px), transparent)',
                width: 'calc(100vw + 200px)',
              }}
            ></motion.div>
            <div className="footer-content flex w-full flex-col items-center">
              <h2 className="relative mb-6 text-2xl font-bold text-white lg:text-4xl">
                <motion.h3
                  className="fake-big footer-big-fake z-10 w-screen text-white"
                  style={{
                    y: yPosAnim,
                    scale: scaleAnim,
                  }}
                >
                  Connect
                </motion.h3>
                Connect With Us
              </h2>
              <ul className="footer-links flex flex-wrap justify-center">
                <li>
                  <motion.a
                    href={process.env.LINKEDIN}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    title="Follow iNVA on LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-5" />
                    <span className="footer-hidden-text">Linkedin</span>
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href={process.env.YOUTUBE}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    title="Follow iNVA on LinkedIn"
                  >
                    <FontAwesomeIcon icon={faYoutube} className="w-5" />
                    <span className="footer-hidden-text">Youtube</span>
                  </motion.a>
                </li>
              </ul>
            </div>
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              whileInView={footerInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="shutter-black relative w-screen bg-black"
              style={{
                height: 'calc(50vh + 1px)',
                background:
                  'linear-gradient(70deg, black calc(100% - 200px), transparent)',
                width: 'calc(100vw + 200px)',
                marginTop: -1,
              }}
              onViewportEnter={() => setFooterInView(true)}
              onViewportLeave={() => setFooterInView(false)}
            ></motion.div>
          </footer>
          {/* <div
              className="w-full bg-black"
              style={{ height: scrollerHeight + 1, marginTop: -1 }}
            ></div> */}
          <img
            src={imgv.src}
            alt=""
            className="absolute bottom-20 lg:bottom-[-100px] right-0 w-4/5"
          />
        </div>
      </motion.div>
      <div className="fixed left-0 right-0 bottom-0">
        <p className="text-secondary lg:text-gray-600 text-left py-4 text-xs lg:text-sm pl-4">
          Copyright &copy; | {new Date().getFullYear()} | iNVA
        </p>
      </div>
    </div>
  )
}

export default Home

export async function getStaticProps(context: { query: any }) {
  const { query } = context

  const section = query?.section ?? false

  return {
    props: {
      section,
    }, // will be passed to the page component as props
  }
}
