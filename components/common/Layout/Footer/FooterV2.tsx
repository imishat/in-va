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

function FooterV2() {

  return (
    <footer className="bg-gradient-to-r from-sky-900 to-blue-900 rounded-lg shadow  mt-4 ml-4 mr-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="./logo-white.png"
              className="h-8"
              alt="Flowbite Logo"
            />
          </a>
          <ul className="flex flex-wrap gap-5 items-center mb-6 font-medium text-white sm:mb-0 ">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-400 lg:my-8" />
        <div className=" mx-auto">
          <span className="block text-white sm:text-center font-thin ">
            Lightweight and wireless charging design, great for all headphones.
            you will like this: One key to answer the phone calls, and you can get
            a perfect music while ...
          </span>
        </div>
        <span className="block mt-4 text-sm text-white sm:text-center ">
          © 2024{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            {' '}
            iNVA{' '}
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default FooterV2
