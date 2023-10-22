import Container from '@common/Container'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import img from '@assets/images/hand.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBoxesStacked,
  faDollar,
  faSpaghettiMonsterFlying,
  faUsersLine,
} from '@fortawesome/free-solid-svg-icons'
import {
  faConfluence,
  faServicestack,
} from '@fortawesome/free-brands-svg-icons'

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

  let list = [
    {
      title: 'Best Price',
      description: 'No extra charge for lifetime servicing',
      icon: faConfluence,
    },
    {
      title: 'High Performance',
      description: '2.4GHz which runs faster any application coveniently',
      icon: faServicestack,
    },
    {
      title: 'Fast, free delivery',
      description: 'Or pick up available items at an Apple Store.',
      icon: faBoxesStacked,
    },
    {
      title: 'Pay monthly at 0% APR      ',
      description:
        'You can pay over time when you choose to check out with Apple Card Monthly Installments.',
      icon: faDollar,
    },
    {
      title: 'Get help buying      ',
      description: 'Have a question? Call a Specialist or chat online.',
      icon: faUsersLine,
    },
  ]

  return (
    <div>
      <div>
        <div className="about" ref={ref}>
          <div
            className="inner-about mb-6"
            // style={{
            //   background:
            //     'linear-gradient(-45deg, #fff6d9ff, #ffcddf52, #009dd6ba)',
            // }}
          >
            <div className="grid grid-cols-2 items-center justify-between ">
              <div className="relative flex items-center justify-center">
                <img src={img.src} />
                <h2 className="absolute text-7xl pb-6 font-black w-40 text-center">
                  What You Get
                  <span className="text-sm block text-secondary my-4">in</span>
                  <span className="text-2xl block">iNVA</span>
                </h2>
              </div>
              <div className="p-6 pl-0 grid gap-12">
                {list?.map((item, i) => (
                  <div className="flex items-center max-w-[30em]">
                    <div className="bg-white p-8 border-4 border-gray-400 text-white !bg-black/95 rounded-full h-24 w-24 flex items-center justify-center translate-x-[-50%]">
                      <FontAwesomeIcon icon={item?.icon} className="h-8 w-8" />
                    </div>
                    <motion.div
                      key={i}
                      initial={{ x: '100%', opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      className="p-4"
                    >
                      <h4 className="font-bold text-2xl mb-2">{item?.title}</h4>
                      <p className="text-secondary text-sm">
                        {item?.description}
                      </p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
