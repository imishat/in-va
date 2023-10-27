import Portfolio from '@components/Portfolio'
import CustomCursor from '@components/UI/CustomCursor'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect, useState } from 'react'
import { SafeHydrate, PageHead } from '.'
import Container from './Container'
import { Header } from './Layout'
import PageTitle from './PageTitle'

function PageWrapper({
  children,
  title,
  description,
  items,
}: {
  children: ReactElement
  title: string
  description: string
  items: string[]
}) {
  const [animationComplete, setAnimationComplete] = useState(true)
  const router = useRouter()

  const completeAnimation = () => {
    setAnimationComplete(true)
    document.body.style.overflowY = 'auto'
    const bH =
      document.getElementById('scId')?.getBoundingClientRect().height ||
      document.getElementById('scId')?.clientHeight
    if (bH) {
      document.body.style.height = `${
        bH + (router.pathname == '/portfolio' ? 200 : 0)
      }px`
    }
  }

  useEffect(() => {
    completeAnimation()
  }, [router.pathname])

  return (
    <SafeHydrate>
      {/* <CustomCursor /> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container"
      >
        <PageHead title={title} />
        <Header start={!animationComplete} />
        <Container>
          <div>
            <div className="pt-16 lg:pt-36">{children}</div>
            <div className="absolute left-0 right-0 bottom-0">
              <p className="text-gray-400 text-center text-sm py-4 pb-6">
                {/* Copyright &copy; | {new Date().getFullYear()} | iNVA */}
              </p>
            </div>
          </div>
        </Container>
      </motion.div>
    </SafeHydrate>
  )
}

export default PageWrapper
