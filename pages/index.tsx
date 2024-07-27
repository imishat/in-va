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
import imgv from '@assets/images/mv.jpg'
import ReactPlayer from 'react-player'
import Video from './video'
import Variant from './variant'
import Banner from '@common/Banner'
import FooterV2 from '@common/Layout/Footer/FooterV2'
import { Footer } from '@common/Layout'

interface PageProps {
  section: any
}

const Home: NextPage<PageProps> = ({ section }) => {
  const [animationComplete, setAnimationComplete] = useState(false)
  const [footerInView, setFooterInView] = useState(false)
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

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, x: 500, transition: { duration: 5 } }}
        className="container"
      >
        <PageHead />
        {animationComplete === false && <IntroOverlay />}
        <div className="after-animation">
          <Header start={!animationComplete} />
          <Banner />

          <div className="section-container" ref={sectionsRef}>
            <div className="section bg-gray-200/20x" id={section}>
              <About />
            </div>
            <div id={section}>
              <Skill />
            </div>
            <div id={section}>
              <Variant />
            </div>
            <div id={section}>
              <Video />
            </div>
            <div className="portfolio" id={section}>
              <Portfolio />
            </div>
          </div>

          <FooterV2 />
        </div>
      </motion.div>
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
