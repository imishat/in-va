import Container from '@common/Container'
import React, { useEffect } from 'react'
import s from './About.module.css'
import cn from 'classnames'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { Button, HashObstacles, SkillsAnimation } from '@components/UI'
import AboutAnimation from '@components/UI/AboutAnimation'
import gsap from 'gsap'
import * as THREE from 'three'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faCamera,
  faGlassMartini,
  faMobile,
  faMobileAndroid,
  faMobileAndroidAlt,
  faMultiply,
  faSmileBeam,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'

import img from '@assets/images/hand.png'
import Link from 'next/link'

function About() {
  const { scrollYProgress } = useViewportScroll()
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.5])
  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -80])

  return (
    <div className={cn(s.root, 'pb-8 mb-8')}>
      <Container>
        <div
          className={cn(
            'mb-6 mt-8 lg:mt-12 mb-20 lg:mb-32 flex flex-col items-start justify-between md:mb-0 md:mt-0 md:mb-0 md:flex-row md:items-center',
            s.content,
          )}
        >
          <div className="flex-grow lg:w-6/12">
            <h2 className="relative mb-6 text-6xl font-bold">
              <motion.h2
                className={cn('fake-big', s.fakeBig)}
                style={{ y: yPosAnim, scale: scaleAnim }}
              >
                About
              </motion.h2>
              About iNVA
            </h2>
            <p className="font-lighter text-sm text-secondary">
              Discover iNVA, your gateway to high-quality smartphones at
              unbeatable prices. We're not just about affordability; we're about
              delivering top-notch quality that lasts. With an iNVA smartphone,
              you get a powerful device that keeps up with your demands,
              offering the best performance and longevity.
              <p className="hidden lg:inline">
                But it doesn't stop there – our commitment to customer service
                ensures you have a hassle-free experience at every step of your
                smartphone journey. We've redefined the standard for excellence
                in the mobile industry, and we're here to provide you with the
                best, for less.
              </p>
              Welcome to iNVA, where quality, longevity, and service come
              together to exceed your expectations.
            </p>
            <Link href="/about">
              <a className="!bg-white mt-4 !text-black flex items-center">
                More{' '}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="!text-gray-400 w-4 ml-2"
                />{' '}
              </a>
            </Link>
          </div>
          <div className="lg:w-6/12 relative flex-grow lg:flexx justify-center lg:justify-end mt-8 lg:mt-0">
            {/* <div className="w-96">
              <HashObstacles />
            </div> */}
            {/* <SkillsAnimation /> */}
            {/* <AboutAnimation /> */}
            {/* <AnimatedCircle /> */}
            {/* <Main /> */}
            {/* <ParentPage /> */}
            {/* <Dotts /> */}
            <div className="flex justify-center">
              <div className="flex-col gap-4 flex items-start ml-6 lg:ml-12 z-30 relative">
                <div className="p-6 rounded-md shadow-lg bg-accent4 z-10 font-semibold whitespace-nowrap flex items-center px-8 text-white ml-6">
                  <FontAwesomeIcon icon={faCamera} className="w-6 mr-2" /> Pro
                  camera system
                </div>
                <div className="p-6 rounded-md shadow-lg bg-gray-400 z-10 font-semibold flex items-center px-8 text-white">
                  <FontAwesomeIcon
                    icon={faMobileAndroidAlt}
                    className="w-5 mr-2"
                  />{' '}
                  Aluminum glass
                </div>
                <div className="p-6 rounded-md shadow-lg bg-accent3 z-10 font-semibold flex items-center px-8 text-white ml-6 whitespace-nowrap">
                  <h4 className="text-2xl font-semibold mr-2">10x</h4> Optical
                  zoom range
                </div>
              </div>
              <div></div>
            </div>
            <img
              src={img.src}
              className="z-20 absolute scale(1.5) absolute right-[-30%] w-64 top-[-50px]"
              style={{ transform: 'scale(1.4) rotateY(180deg)' }}
            />

            <div
              style={{ background: 'rgba(5, 5, 0, .05)', opacity: 0.5 }}
              className="absolute w-[35vw] h-[35vw] top-0 right-[-50%] translate-y-[-20%] rounded-full"
            ></div>
            <div
              style={{ background: 'rgb(234 229 231)', opacity: 0.6 }}
              className="absolute w-[30vw] h-[30vw] top-0 translate-y-[-20%] right-[-50%] rounded-full"
            ></div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
