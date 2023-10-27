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
import img2 from '@assets/images/m5.jpg'
import img from '@assets/images/m7.jpg'
import img3 from '@assets/images/shadow.png'

const des = `Have a sweet conversation - `

const contacts = [process.env.MOBILE || '-', process.env.EMAIL || '-']

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
    <PageWrapper title="About" description={des} items={contacts}>
      <div className="">
        {/* <PageTitle title="Contact" description={''} items={[]} isContact /> */}
        <h1 className="text-6xl font-black mt-6 mb-12">About Us</h1>
        <div className="relative flex flex-wrap lg:flex-nowrap justify-between">
          <div className="flex-grow flex flex-col justify-between min-h-full"></div>
          <motion.div
            initial="init"
            animate={anim.enter}
            variants={anim}
            className="pb-20"
          >
            {/* <AboutAnimation /> */}
            <div className="mb-6">
              <div className="lg:flex-row flex-col flex gap-4 lg:gap-8 mr-0">
                <img
                  src={img2.src}
                  alt=""
                  className="rounded-md p-0 outlinex outline-orange-200 lg:object-cover lg:w-96"
                  style={
                    {
                      // transform: 'rotateY(180deg)',
                      // borderRight: '1px solid #f6eeee',
                    }
                  }
                />
                <div className="">
                  <div className="mb-6">
                    <h1 className="text-xl font-bold mb-4">
                      Your Gateway to Affordable Excellence
                    </h1>
                    <p className="text-gray-500">
                      At iNVA, we're on a mission to redefine the smartphone
                      industry. Our vision is simple yet powerful: "Less Price,
                      Best Quality." We believe that everyone deserves access to
                      high-quality smartphones without breaking the bank. That's
                      why we've dedicated ourselves to creating affordable,
                      feature-rich mobile devices that don't compromise on
                      performance, style, or innovation.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h2 className="text-xl font-bold mb-4">Our Story</h2>
                    <p className="text-gray-500">
                      Our journey began with a passion for technology and a
                      commitment to make a difference. We've poured our hearts
                      and minds into designing and delivering smartphones that
                      exceed expectations. With years of experience in the
                      industry, we've combined cutting-edge technology with a
                      deep understanding of user needs to offer you a device
                      that's a perfect companion for your daily life.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="grid gap-6 lg:grid-cols-5 items-center">
                <div className="lg:col-span-3">
                  <div className="mb-0">
                    <h2 className="text-2xl font-bold mb-6">
                      Why Choose <span className="heading">iNVA</span>?
                    </h2>
                    <div className="text-gray-500">
                      <p className="mb-4">
                        <span className="font-semibold"> Affordability: </span>
                        We believe that cost should never be a barrier to owning
                        a high-quality smartphone. iNVA products are
                        competitively priced, making them accessible to a wide
                        range of consumers.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Quality Assurance:{' '}
                        </span>{' '}
                        Every iNVA smartphone undergoes rigorous quality control
                        to ensure flawless performance and durability. We take
                        pride in our products and stand behind them with
                        confidence.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">Innovation: </span> Our
                        team of experts is constantly researching and innovating
                        to bring you the latest features and technology. From
                        impressive camera capabilities to powerful processors,
                        we're committed to staying ahead of the curve.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Customer-Centric Approach:{' '}
                        </span>{' '}
                        We prioritize customer satisfaction. Your feedback and
                        needs drive our product development and improvements.
                        We're here to serve you and make your smartphone
                        experience outstanding.
                      </p>
                      <p className="mb-4">
                        <span className="font-semibold">
                          Environmental Responsibility:{' '}
                        </span>{' '}
                        We're also committed to reducing our environmental
                        footprint. We use eco-friendly materials and
                        manufacturing processes to create sustainable,
                        long-lasting devices.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 flex flex-col items-center mb-6 lg:mb-0">
                  <img
                    src={img.src}
                    alt=""
                    className="fixtop-0 lg:py-6"
                    style={
                      {
                        // transform: 'rotateY(180deg)',
                        // borderRight: '1px solid #f6eeee',
                      }
                    }
                  />
                  <span className="h-0 shadow-xl rounded-full w-32" style={{boxShadow: '10px 10px 20px 1px rgba(0, 0, 0, 1)'}}></span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Join the iNVA Family</h2>
              <p className="text-gray-500">
                When you choose an iNVA smartphone, you're not just buying a
                device; you're becoming a part of the iNVA family. We value the
                trust you place in us and are dedicated to providing top-notch
                customer service, ensuring that you're satisfied every step of
                the way.
              </p>
              <p className="text-gray-500 mb-4">
                Discover the power of affordable excellence with iNVA mobile.
                Explore our product lineup and experience the perfect blend of
                quality, innovation, and affordability.
              </p>
            </div>

            <p className="text-gray-500">
              Welcome to iNVA. Welcome to a new era in mobile technology.
            </p>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default ContactPage
