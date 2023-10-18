import React, { Suspense, useState } from 'react'
import {
  motion,
  MotionConfig,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import useMeasure from 'react-use-measure'
import { transition } from '@utils/index'
import Link from 'next/link'

export default function ProjectCard({ data }: any) {
  const [ref, bounds] = useMeasure({ scroll: false })
  const [isHover, setIsHover] = useState(false)
  const [isPress, setIsPress] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const hor = useTransform(mouseX, [-100, 0, 100], [10, 15, 20])
  const ver = useTransform(mouseY, [-100, 0, 100], [10, 15, 20])
  const scl = useTransform(mouseY, [-100, 0, 100], [0.9, 1, 1.1])

  const resetMousePosition = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <MotionConfig transition={transition}>
      <Link href={`${data.link}`} passHref>
        <motion.a
          target="_blank"
          rel="noopener noreferrer"
          ref={ref}
          initial={false}
          animate={isHover ? 'hover' : 'rest'}
          whileTap="press"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.2 },
            press: { scale: 1.1 },
          }}
          onHoverStart={() => {
            resetMousePosition()
            setIsHover(true)
          }}
          onHoverEnd={() => {
            resetMousePosition()
            setIsHover(false)
          }}
          onTapStart={() => setIsPress(true)}
          onTap={() => setIsPress(false)}
          onTapCancel={() => setIsPress(false)}
          onPointerMove={(e) => {
            mouseX.set(e.clientX - bounds.x - bounds.width / 2)
            mouseY.set(e.clientY - bounds.y - bounds.height / 2)
          }}
          className="project-card flex items-center justify-center"
        >
          <div className="flex-dir-col items-center">
            <motion.img
              src={data.url}
              // width="400px"
              height="200px"
              className="!w-40 !h-20 object-contain"
              // initial={{ transform: "none" }}
              animate={isHover ? { filter: 'brightness(7.5)' } : {}}
              transition={{ duration: 0.2 }}
            />
            <motion.div
              className="shapes"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
            >
              <div className="pink blush" />
              <div className="blue blush" />
              <div className="containerx">
                {/* <Suspense fallback={null}>
                  <Shapes
                    isHover={isHover}
                    isPress={isPress}
                    mouseX={mouseX}
                    mouseY={mouseY}
                  />
                </Suspense> */}
                {data?.tech?.map((item: string, i: number) => (
                  <motion.span
                    className="tech-ticket text-accent"
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={
                      isHover
                        ? {
                            opacity: 1,
                            scale: [0, 1.1, 1],
                          }
                        : {}
                    }
                    transition={{
                      ...transition,
                      duration: 0.5,
                    }}
                    style={{ x: hor, y: ver, scale: scl }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
              className="mt-4 text-center lg:text-xl font-bold"
            >
              {data.name}
            </motion.div>
          </div>
        </motion.a>
      </Link>
    </MotionConfig>
  )
}
