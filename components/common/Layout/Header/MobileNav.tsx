import * as React from 'react'
import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
import cn from 'classnames'
import { useDimensions } from '../../../../hooks/use-dimentions'
import { useTheme } from 'next-themes'
import { spring } from '@utils/index'
import Link from 'next/link'
import logo from '../../../../public/logo-black.png'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const MobileNav = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef: any = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className={cn('mobile-nav h-24', { 'h-full': isOpen })}
    >
      <motion.div className="background" variants={sidebar} />
      <Navigation isOpen={isOpen} />
      <MenuToggle toggle={() => toggleOpen()} />
      <h1 className="fixed right-0 top-0">
        <Link href="/?noanim=1">
          <a className="p-4 px-6 text-2xl font-bold flex">
            {' '}
            <img src={logo.src} height={35} className="h-10" alt="iNVA" />
          </a>
        </Link>
      </h1>
    </motion.nav>
  )
}
