import Container from '@common/Container'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import img from '@assets/images/hand.jpg'

function Skill() {
  const { ref, inView } = useInView({
    threshold: 0.2, // 20% scrolled down
  })

  let easing = [0.6, -0.05, 0.01, 2]

  const scaleUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 5, ease: easing },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easing,
      },
    },
  }

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const animation = useAnimation()

  useEffect(() => {
    animation.start({ opacity: 0 })
  }, [])

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1 })
    }
  }, [inView])

  return (
    <div>
      <div>
        <div className="about" ref={ref}>
          <div className="inner-about mb-6">
            <div className="grid grid-cols-2 items-center justify-between ">
              <div>
                <img src={img.src} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
