import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

function Footer() {
  useEffect(() => {
    const homeAnimation = () => {
      let tlFooter = gsap.timeline({
        scrollTrigger: {
          trigger: 'footer',
          start: 'top center',
          end: 'top top',
          scrub: 1,
        },
      })

      tlFooter
        .from('footer h2', {
          y: -100,
          opacity: 0,
          duration: 0.6,
        })
        .from('footer .footer-links', {
          y: 100,
          opacity: 0,
          duration: 0.6,
        })
    }

    homeAnimation()
  }, [])

  return (
    <footer>
      <h2>Connect with Me</h2>
      <ul className="footer-links">
        <li>
          <motion.a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Go to iNVA's GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="w-5" />
            <span className="footer-hidden-text">GitHub</span>
          </motion.a>
        </li>
        <li>
          <motion.a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            title="Connect with iNVA on LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-5" />
            <span className="footer-hidden-text">GitHub</span>
          </motion.a>
        </li>
        <li>
          <motion.a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Follow iNVA on Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} className="w-5" />
            <span className="footer-hidden-text">Twitter</span>
          </motion.a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
