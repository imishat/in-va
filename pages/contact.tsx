import GraphicAnim from '@common/GraphicAnim/GraphicAnim'
import PageWrapper from '@common/PageWrapper'
import React, { ReactElement } from 'react'
import GraphicPage from '../components/common/GraphicPage/GraphicPage'
import ReactFluidScroll from 'react-fluid-scroll'
import PageTitle from '@common/PageTitle'
import { SkillsAnimation } from '@components/UI'
import AboutAnimation from '@components/UI/AboutAnimation'
import { Main } from 'next/document'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faMobile,
  faPhone,
  faPhoneAlt,
  faPhoneFlip,
  faPhoneSlash,
} from '@fortawesome/free-solid-svg-icons'
import { colors } from '@utils/index'
import img from '@assets/images/hand2.png'

const des = `Have a sweet conversation - `

const contacts = ['xxx xxx xxxx', 'help@inva.com']

const anim = {
  init: {
    opacity: 0,
    x: 100,
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 1,
    },
  },
}

const ContactPage = () => {
  return (
    <PageWrapper title="Contact" description={des} items={contacts}>
      <>
        {/* <PageTitle title="Contact" description={''} items={[]} isContact /> */}
        <h1 className="text-6xl font-black mt-6">Contact</h1>
        <div className="relative flex flex-wrap lg:flex-nowrap justify-between">
          <div className="mt-24 flex-grow flex flex-col justify-between min-h-full">
            <ul>
              <li className="mb-4 flex items-start text-sm text-accent-4">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="mr-4 mt-1"
                  style={{ color: colors[0] }}
                  width={14}
                />{' '}
                <a href={`tel: ${process.env.MOBILE}`}>{process.env.MOBILE}</a>
              </li>
              <li className="mb-4 flex items-start text-sm text-accent-4">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mr-4 mt-1"
                  style={{ color: colors[1] }}
                  width={14}
                />{' '}
                <a href={`mailto: ${process.env.EMAIL}`}>{process.env.EMAIL}</a>
              </li>
              <li className="mb-4 flex items-start text-sm text-accent-4">
                <FontAwesomeIcon
                  icon={faHome}
                  className="mr-4 mt-1"
                  style={{ color: colors[2] }}
                  width={14}
                />
                <span>
                  <address>{process.env.ADDRESS}</address>
                </span>
              </li>
            </ul>
          </div>
          <motion.div initial="init" animate={anim.enter} variants={anim}>
            {/* <AboutAnimation /> */}
            <img src={img.src} alt="" className="fixed right-0 w-1/2 top-0" style={{transform: 'rotateY(180deg)'}} />
          </motion.div>
          <span className="contact-layer" />
        </div>
      </>
    </PageWrapper>
  )
}

export default ContactPage
