import GraphicAnim from '@common/GraphicAnim/GraphicAnim'
import PageWrapper from '@common/PageWrapper'
import React, { ReactElement, useState } from 'react'
import GraphicPage from '../components/common/GraphicPage/GraphicPage'
import ReactFluidScroll from 'react-fluid-scroll'
import PageTitle from '@common/PageTitle'
import { Button, SkillsAnimation } from '@components/UI'
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
import img from '@assets/images/hand-colored.png'
import axios from 'axios'

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
  const [message, setMessage] = useState('')

  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log(e)
    const { fullName, email, message } = e.target

    sendEmail(fullName?.value, email?.value, message?.value)
  }

  const sendEmail = (fullName: string, email: string, message: string) => {
    console.log(fullName, email, message)
    const apiKey = 'F86FAC774DD96B98B4EA8FBAD9DDDB71E892'
    // 3AF8A7D025B774080B4D5C149EB18997DA7E80B1EB0093DA64A1B1FCF62A2D7FEFC393FEE6326DCAAD962A4137D4401C
    //   const emailData = {
    //     From: email,
    //     To: 'yadab.sd2013@gmail.com',
    //     Subject: 'iNVA - Qyery :' + (fullName || ''),
    //     TextBody: message || '',
    //     HtmlBody: '<p>Response Early</p>',
    //   }

    //   // Send the email using the Postmark API
    //   axios({
    //     method: 'POST',
    //     url:
    //       'https://cors-anywhere.herokuapp.com/' + 'smtp.elasticemail.com:2525',
    //     headers: {
    //       'X-Postmark-Server-Token': apiKey,
    //       'Content-Type': 'application/json',
    //     },
    //     data: emailData,
    //   })
    //     .then((response) => {
    //       console.log('Email sent successfully')
    //     })
    //     .catch((error) => {
    //       console.error('Email sending failed', error)
    //     })

    const axios = require('axios') // Make sure to install the axios library

    // Define your Elastic Email API key
    // const elasticEmailApiKey = 'YOUR_ELASTIC_EMAIL_API_KEY'

    // Define your email data
    const emailData = {
      apiKey: apiKey,
      subject: 'Hello, Elastic Email!',
      from: email,
      to: 'info@invausa.com',
      bodyHtml: '<p>This is the HTML content of the email.</p>',
      bodyText: 'This is the text content of the email.',
    }

    // Send the email using the Elastic Email API
    axios({
      method: 'post',
      url: 'https://api.elasticemail.com/v2/email/send',
      data: emailData,
    })
      .then((response: any) => {
        console.log('Email sent successfully')
      })
      .catch((error: any) => {
        console.error('Email sending failed', error)
      })
  }

  return (
    <PageWrapper title="Contact" description={des} items={contacts}>
      <>
        {/* <PageTitle title="Contact" description={''} items={[]} isContact /> */}
        <h1 className="text-6xl font-black mt-6">Contact</h1>
        <div className="relative flex flex-wrap lg:flex-nowrap justify-between">
          <div className="mt-16 flex-grow flex gap-4 lg:gap-8 flex-col justify-between min-h-full">
            <div className="lg:w-1/2 mb-6">
              <form
                className="flex flex-col gap-4 lg:px-12 lg:pl-0"
                onSubmit={onSubmit}
              >
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="border border-gray-200 text-sm bg-white rounded-md p-3 px-4"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-200 text-sm bg-white rounded-md p-3 px-4"
                />
                <textarea
                  name="message"
                  placeholder="Write your query here..."
                  className="border border-gray-200 text-sm bg-white rounded-md p-3 px-4"
                  rows={5}
                ></textarea>
                <Button className="!text-accent !w-40 !bg-transparent borderx border-accentx">
                  Send
                </Button>
              </form>
            </div>
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
            <img
              src={img.src}
              alt=""
              className="fixed right-0 hidden lg:block lg:w-1/2 top-0"
              style={{
                transform: 'rotateY(180deg)',
                borderRight: '1px solid #f6eeee',
              }}
            />
          </motion.div>
          <span className="contact-layer" />
        </div>
      </>
    </PageWrapper>
  )
}

export default ContactPage
