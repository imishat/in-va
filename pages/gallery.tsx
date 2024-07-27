import Container from '@common/Container'
import { Header } from '@common/Layout'
import React from 'react'
import img2 from '../public/gallery/bg_img.png'
const Gallery = () => {
  const images = [
    '/gallery/img1.jpeg',
    '/gallery/img2.jpeg',
    '/gallery/img3.jpeg',
    '/gallery/img4.jpeg',
    '/gallery/img5.jpeg',
    '/gallery/img6.jpeg',
    '/gallery/img7.jpeg',
    '/gallery/img8.jpg',
    '/gallery/img9.jpg',
    '/gallery/img10.png',
    '/gallery/review.png',
  ]

  return (
    <div>
      <Header />
      <Container>
        <div className="container mx-auto px-4 py-8 pt-20">
          <div className="">
            {/* <PageTitle title="Contact" description={''} items={[]} isContact /> */}
            <h1 className="text-6xl font-black mt-6 mb-12">Gallery</h1>
            <div className="relative flex flex-wrap lg:flex-nowrap justify-between">
              <div className="flex-grow flex flex-col justify-between min-h-full"></div>
              <div className="pb-20">
                {/* <AboutAnimation /> */}
                <div className="mb-6">
                  <div className="lg:flex-row flex-col flex gap-4 lg:gap-8 mr-0">
                    <img
                      src={img2.src}
                      alt=""
                      className="rounded-md p-0 outlinex outline-orange-200 lg:object-cover lg:w-96"
                      style={
                        {
                          // transform: 'rotateY(180deg)',
                          // borderRight: '1px solid #f6eeee',
                        }
                      }
                    />
                    <div className="">
                      <div className="mb-6">
                        <h1 className="text-xl font-bold mb-4">
                          Smart Phone Innova 30+ Price Available
                        </h1>
                        <p className="text-gray-500">
                          Official Official prices and mobile phones are
                          available only in authorized shops. The device comes
                          with an official warranty and the device is ... That's
                          why we've dedicated ourselves to creating affordable,
                          feature-rich mobile devices that don't compromise on
                          performance, style, or innovation.
                        </p>
                      </div>
                      <div className="mb-6">
                        <h2 className="text-xl font-bold mb-4">Our Story</h2>
                        <p className="text-gray-500">
                          Our journey began with a passion for technology and a
                          commitment to make a difference. We've poured our
                          hearts and minds into designing and delivering
                          smartphones that exceed expectations. With years of
                          experience in the industry, we've combined
                          cutting-edge technology with a deep understanding of
                          user needs to offer you a device that's a perfect
                          companion for your daily life.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="relative group">
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <span className="text-white text-lg font-bold">
                    iNVA & iNVA-X{' '}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Gallery
