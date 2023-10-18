import * as React from 'react'
import { motion } from 'framer-motion'
import { MenuItem } from './MenuItem'
import { menus, spring } from '@utils/index'
import { useTheme } from 'next-themes'
import { Button } from '@components/UI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import cn from 'classnames'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = ({ isOpen }: { isOpen: boolean }) => {
  const { theme, setTheme } = useTheme()

  const child = {
    init: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.05,
        staggerDirection: -1,
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
    },
  }

  return (
    <div>
      <motion.ul
        variants={variants}
        className={cn('visible', { invisible: !isOpen })}
      >
        <motion.li
          initial="init"
          animate={isOpen ? 'enter' : 'init'}
          variants={child}
          style={{ marginBottom: '4rem' }}
        >
          <div
            className="switch"
            data-isOn={theme === 'dark'}
            onClick={() => {
              theme === 'dark' ? setTheme('light') : setTheme('dark')
            }}
          >
            <motion.div className="handle" layout transition={spring} />
          </div>
        </motion.li>

        {menus.map((item, i) => (
          <MenuItem i={i} key={i} />
        ))}

        <li className="flex items-center" style={{ marginTop: '4rem' }}>
          <motion.a
            initial="init"
            animate={isOpen ? 'enter' : 'init'}
            variants={child}
            href={process.env.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            title="Connect with iNVA on LinkedIn"
            className="mr-4 mb-4 rounded-full bg-accent-8 p-3"
            style={{ background: '#111111' }}
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-5 text-white" />
          </motion.a>
        </li>
      </motion.ul>
    </div>
  )
}
