import Container from '@common/Container'
import React, { useEffect } from 'react'
import s from './About.module.css'
import cn from 'classnames'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import { HashObstacles, SkillsAnimation } from '@components/UI'
import AboutAnimation from '@components/UI/AboutAnimation'
import gsap from 'gsap'
import * as THREE from 'three'

function About() {
  const { scrollYProgress } = useViewportScroll()
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.5])
  const yPosAnim = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -80])

  return (
    <div className={s.root}>
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
              About
            </h2>
            <p className="font-lighter md:text-default text-secondary">
              At iNVR, we're not just in the business of selling mobile phones;
              we're in the business of enhancing lifestyles. With a passion for
              cutting-edge technology and a commitment to delivering quality,
              we're your go-to destination for the latest and greatest in mobile
              devices.{' '}
              <p>
                Our knowledgeable experts are here to assist you in finding the
                ideal device, whether you're a tech enthusiast seeking the
                latest innovations or a professional needing reliable
                communication tools. Experience the future of mobile technology
                with iNVR, where every phone purchase is a step toward a
                smarter, more connected tomorrow. Discover the world at your
                fingertips with iNVR - where innovation meets your lifestyle."
              </p>
            </p>
          </div>
          <div className="lg:w-6/12 flex-grow lg:flex justify-center lg:justify-end">
            {/* <div className="w-96">
              <HashObstacles />
            </div> */}
            {/* <SkillsAnimation /> */}
            {/* <AboutAnimation /> */}
            {/* <AnimatedCircle /> */}
            {/* <Main /> */}
            {/* <ParentPage /> */}
            {/* <Dotts /> */}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
