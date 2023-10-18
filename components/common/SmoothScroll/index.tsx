import React, { ReactElement, useEffect, useRef } from 'react'
import useWindowSize from '../../../hooks/useWindowSize'

const SmoothScroll = ({ children }: { children: ReactElement }) => {
  const windowSize = useWindowSize()
  const scrollingContainerRef: any = useRef()

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  }

  useEffect(() => {
    setBodyHeight()
  }, [windowSize?.height])

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollingContainerRef.current?.getBoundingClientRect().height
    }px`
  }

  const smoothScrollingHandler = () => {
    data.current = window.scrollY
    data.previous += (data.current - data.previous) * data.ease
    data.rounded = Math.round(data.previous * 100) / 100

    if (scrollingContainerRef.current) {
      scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`
    }

    // Recursive call
    requestAnimationFrame(() => smoothScrollingHandler())
  }

  useEffect(() => {
    requestAnimationFrame(() => smoothScrollingHandler())
  }, [])

  return (
    <div className="parent-scroller">
      <div ref={scrollingContainerRef} id="scId">
        {children}
      </div>
    </div>
  )
}

export default SmoothScroll
