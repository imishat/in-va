import GraphicAnim from '@common/GraphicAnim/GraphicAnim'
import PageWrapper from '@common/PageWrapper'
import React, { ReactElement, useState } from 'react'
import GraphicPage from '../components/common/GraphicPage/GraphicPage'
import ReactFluidScroll from 'react-fluid-scroll'
import PageTitle from '@common/PageTitle'
import { colors } from '@utils/index'
import { motion } from 'framer-motion'

const des = `I have contributed in various field. The medias are -`

const sites = ['youtube', 'Linkedn', 'Facebook']

const variants = {
  init: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
}

const child = {
  init: {
    opacity: 0,
    x: -50,
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: -50,
    transition: {
      duration: 0.5,
    },
  },
}

const BlogPage = () => {
  const [hovered, setHovered] = useState(false)
  return (
    <PageWrapper title="Blog" description={des} items={sites}>
      <>
        <PageTitle title="Blog" description={''} items={sites} />
        <motion.div
          className="mt-10 flex flex-col items-start pb-12 lg:mt-20"
          variants={variants}
          initial="init"
          animate="enter"
          exit="exit"
        >
          <motion.a
            href="https://medium.com/@/javascript-map-vs-foreach-vs-filter-vs-find-32eff92ca260"
            target="_blank"
            rel="noreferrer noopender"
            className="mb-12 lg:w-3/4"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            variants={child}
            initial={{
              x: -100,
            }}
            whileInView={{
              x: 0,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <div className="mr-auto flex flex-col-reverse justify-between p-8 shadow-lg transition-transform duration-300 hover:scale-[1.01] lg:flex-row lg:p-12">
              <div className="lg:mr-12">
                <h4 className="mb-4 text-xl font-semibold lg:text-2xl">
                  Javascript map vs forEach vs filter vs find
                </h4>
                <p className="line-clamp-3 three-line mb-4 text-sm text-accent-4">
                  Javascript has become more popular nowadays. There are a lot
                  of frameworks based on javascript that are used all over the
                  world. If anyone wants to grab that framework well then there
                  is a need to clear javascript basic concepts. One of the most
                  important parts of the javascript language is traversing
                  arrays. You need to print an array or evaluate each item in
                  the array.
                </p>
                <div className="flex flex-wrap items-center">
                  <span className="mr-4 mb-2 text-sm font-bold">Topic: </span>
                  <div className="flex">
                    <span
                      className="mb-2 mr-2 block rounded px-2 py-1 text-sm text-xs font-bold"
                      style={{
                        color: colors[0],
                        border: `1px solid ${colors[0]}`,
                      }}
                    >
                      Javascript
                    </span>
                    <span
                      className="mb-2 mr-2 block rounded px-2 py-1 text-sm text-xs font-bold"
                      style={{
                        color: colors[3],
                        border: `1px solid ${colors[3]}`,
                      }}
                    >
                      Array
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://miro.medium.com/fit/c/224/224/1*8Y_ZDPTAN9nySsagDA5ggQ.png"
                  alt=""
                  className="min-w-content mb-4 block h-full w-1/2 w-20 object-contain  lg:mb-0 lg:w-96"
                />
              </div>
            </div>
          </motion.a>

          <motion.a
            href="https://dev.to//javascript-array-and-string-common-methods-1oo0"
            target="_blank"
            rel="noreferrer noopender"
            className="mb-12 ml-auto lg:w-3/4"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            initial={{
              x: 100,
            }}
            whileInView={{
              x: 0,
              transition: {
                duration: 0.5,
              },
            }}
          >
            <div className="mr-auto flex flex-col-reverse justify-between p-8 shadow-lg transition-transform duration-300 hover:scale-[1.01] lg:flex-row lg:p-12">
              <div className="lg:mr-12">
                <h4 className="mb-4 text-xl font-semibold lg:text-2xl">
                  JavaScript Array and String common methods.
                </h4>
                <p className="line-clamp-3 three-line mb-4 text-sm text-accent-4">
                  JavaScript is an awesome language with a lot of built-in
                  objects (Array, Date, Math, and String) and their build-in
                  methods (split, sort, parseInt) which make a developer's life
                  easier.
                </p>
                <div className="flex flex-wrap items-center">
                  <span className="mr-4 mb-2 text-sm font-bold">Topic: </span>
                  <div className="flex">
                    <span
                      className="mb-2 mr-2 block rounded px-2 py-1 text-sm text-xs font-bold"
                      style={{
                        color: colors[0],
                        border: `1px solid ${colors[0]}`,
                      }}
                    >
                      Javascript
                    </span>
                    <span
                      className="mb-2 mr-2 block rounded px-2 py-1 text-sm text-xs font-bold"
                      style={{
                        color: colors[3],
                        border: `1px solid ${colors[3]}`,
                      }}
                    >
                      Array
                    </span>
                    <span
                      className="mb-2 mr-2 block rounded px-2 py-1 text-sm text-xs font-bold"
                      style={{
                        color: colors[4],
                        border: `1px solid ${colors[4]}`,
                      }}
                    >
                      String
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--dLTfDWuS--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/v22saqzfbln13erwz4q2.png"
                  alt=""
                  className="min-w-content mb-4 block h-full w-1/2 w-20 object-contain lg:mb-0 lg:w-96"
                />
              </div>
            </div>
          </motion.a>
        </motion.div>
      </>
    </PageWrapper>
  )
}

export default BlogPage
