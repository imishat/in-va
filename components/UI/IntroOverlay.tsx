import React from 'react'
import s from '../../public/logo-white.png'

function IntroOverlay() {
  return (
    <div className="intro-overlay relative">
      <img
        src={s.src}
        alt=""
        className="absolute z-50 h-60"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.1,
        }}
      />
      <img
        src={s.src}
        alt=""
        className="absolute z-50 h-16"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          // opacity: 0.8,
        }}
      />
      <div className="ball"></div>
      <div className="ball2"></div>
      <div className="ball3"></div>
    </div>
  )
}

export default IntroOverlay
