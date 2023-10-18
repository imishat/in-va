import Container from '@common/Container'
import { Header } from '@common/Layout'
import PageTitle from '@common/PageTitle'
import PageWrapper from '@common/PageWrapper'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors, colors2 } from '@utils/index'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { transition } from '../utils/index'

export const projects = [
  {
    name: 'Jachai',
    img:
      'https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/video-visuel-large.jpg',
    description: 'An ecommerce web application with 80000+ users.',
    link: 'https://jachai.com',
    techs: ['NextJs', 'Ant Design', 'TailwindCss'],
  },
  {
    name: 'Property Management',
    img: '/projects/buying-house.png',
    description: 'A realstate platform for property buy and sell',
    link: 'https://waa-final-frontend-1keh.vercel.app/',
    techs: ['ReactJS', 'Spring Boot', 'TailwindCss', 'MySQL'],
  },
  {
    name: 'Qcoom',
    img:
      'https://qcoom.com/_next/image?url=https%3A%2F%2Fproduction-qcoom-user.s3-ap-southeast-1.amazonaws.com%2Fstatic_image%2F2022-10-06T20%3A03%3A35.093_WC-03.jpeg&w=3840&q=75',
    description: 'An ecommerce web application with 100000+ users.',
    link: 'https://qcoom.com',
    techs: ['NextJs', 'ReactJS', 'JavaScript', 'TailwindCss', 'WebSocket'],
  },
  {
    name: 'Augmedix',
    img: '/projects/augmedix.png',
    description:
      'Leading provider of ambient medical documentation products in the USA',
    link: 'https://augmedix.com/',
    techs: ['Angular', 'Kendu UI', 'Bootstrap', 'RxJS'],
  },
  {
    name: 'Qurais',
    img: '/projects/qurais.png',
    description: 'A mortgage service web application in Dubai',
    link: 'https://staging.qurais.com/',
    techs: ['NextJS', 'TailwindCSS', 'Flux'],
  },
  {
    name: 'Qurais Broker',
    img: '/projects/qurais-broker.png',
    description: 'A mortgage portal to manage their work in Qurais',
    link: 'https://staging-broker.qurais.com/',
    techs: ['NextJS', 'TailwindCSS', 'Flux'],
  },
  {
    name: 'Wurley',
    img: '/projects/wurley.png',
    description: 'A conveyancing, mortgage broker platform in Dubai',
    link: 'https://wurley.com.au/',
    techs: ['NextJS', 'Ant Design', 'TailwindCSS', 'Flux'],
  },
  {
    name: 'My Ukil',
    img: '/projects/myukil3.png',
    description:
      'A platform to make interaction between Advocates, Lawyers and their Defendants to solve cases and advice',
    link: 'https://myukil.com.bd/',
    techs: ['NextJS', 'Ant Design', 'TailwindCSS', 'Flux'],
  },

  {
    name: 'Dhamaka Shopping',
    img: '/projects/dhamakashopping.png',
    description:
      'An multi-vendor ecommerce web application with 2,00,000+ users.',
    link: 'https://dhamakashopping.com',
    techs: ['NextJs', 'WebRTC', 'Graphql'],
  },
  {
    name: 'Invariant Telecom',
    img: '/projects/inv.png',
    description: 'A portfolio site for renowned company',
    link: 'https://invarianttele.com',
    techs: ['Jekyll', 'JQuery', 'Bootstrap'],
  },
  {
    name: 'Jachai Rider',
    img:
      'https://www.wokine.com/wp-content/themes/wokine/assets/pages/home/visuel_project-retina.jpg',
    description: 'A ride-sharing application landing',
    link: 'https://jachai-rider.com',
    techs: ['NextJs', 'Material UI'],
  },
  {
    name: 'OZKode',
    img: '/projects/ozkode.png',
    description: 'A portfolio web application for software company',
    link: 'https://ozkode.com.au/',
    techs: ['ReactJS', 'TailwindCSS', 'Redux'],
  },
]

const des = `Developing web apps for over 3 years. I’ve done work for agencies, consulted for startups, and
collaborated with talented people to create web applications. I develop medium to large web applications that are fast and built with best practices. The techs I used -`

const techs = [
  'NextJs',
  'ReactJs',
  'Angular',
  'Java',
  'Spring',
  'Spring Boot',
  'NodeJS',
  'ExpressJS',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Docker',
  'Jenkins',
  'Jekyll',
  'TailwindCSS',
  'Graphql',
  'VueJS',
  'Bootstrap',
  'SCSS',
  'Redux',
  'Material UI',
  'Ant Design',
  'Git',
  'Elastic Search',
]

function PortfolioPage() {
  const [sm, setSm] = useState(false)
  const [xl, setXl] = useState(false)

  useEffect(() => {
    setSm(window.matchMedia('(min-width: 480px)')?.matches)
    setXl(window.matchMedia('(min-width: 2000px)')?.matches)
  }, [])

  return (
    <PageWrapper title="Portfolio" description={des} items={techs}>
      <>
        <PageTitle title="Portfolio" description={des} items={techs} />
        {/* <Container> */}
        <div className="page-portfoliox mt-8 lg:mt-16 my-20 pb-40">
          <ul className="grid grid-cols-2 gap-2 lg:gap-4 lg:grid-cols-3 pb-20">
            {projects.map((item, i) => (
              <li
                key={item.name}
                // style={i % 2 == 0 ? { transform: 'translateY(20px)' } : {}}
              >
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="cursor-pointer rounded h-full w-full shadow-lg bg-gray-100x project-itemx rounded-md overflow-hidden lg:pb-2"
                >
                  <div className="project-visuel lazyloaded">
                    <Image
                      alt=""
                      className="lazyautosizes lazyloaded"
                      data-sizes="auto"
                      data-parent-fit="cover"
                      width={xl ? 660 : sm ? 400 : 200}
                      height={xl ? 395 : sm ? 250 : 150}
                      src={item.img}
                    />
                  </div>

                  <motion.div
                    transition={{ duration: 2 }}
                    className="py-2 px-2 lg:px-4"
                  >
                    <h3 className="project-name text-xs lg:text-lg mb-2 font-bold">
                      {item?.name}
                    </h3>
                    <div className="mb-4 flex items-center">
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="text-xs text-blue-500 mr-1 w-3"
                      />{' '}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 text-[8px] lg:text-xs"
                      >
                        {item?.link}
                      </a>
                    </div>
                    <div className="flex w-full flex-wrap">
                      {item.techs?.map((item, i) => (
                        <small
                          className="mb-1 lg:mb-2 mr-1 lg:mr-2 block rounded px-1 lg:px-2 lg:py-1 text-[8px] lg:text-xs font-bold"
                          style={{
                            color: colors2.concat(colors)[
                              i % (colors2.length + colors.length - 1)
                            ],
                            border: '1px solid',
                            borderColor: colors2.concat(colors)[
                              i % (colors2.length + colors.length - 1)
                            ],
                          }}
                        >
                          {item}
                        </small>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
        {/* </Container> */}
      </>
    </PageWrapper>
  )
}

export default PortfolioPage
