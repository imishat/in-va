const formatLog = (val: string) => {
  return val
}

export { formatLog }

// mongodb+srv://<user>:<password><cluster>.mongodb.net/url-shortner?retryWrites=true&w=majority
export const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']
export const colors2 = [
  'rgb(240, 77, 255)',
  'rgb(255, 77, 77)',
  'rgb(255, 197, 77)',
  'rgb(106, 237, 118)',
  'rgb(0, 153, 255)',
]
export const menus = [
  {
    name: 'Gallery',
    link: '/gallery',
  },
  {
    name: 'About',
    link: '/about',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
]

export const easing = [0.43, 0.13, 0.23, 0.96]
export const openSpring = { type: 'spring', stiffness: 200, damping: 30 }
export const closeSpring = { type: 'spring', stiffness: 300, damping: 35 }

export const transition = {
  type: 'spring',
  duration: 0.7,
  bounce: 0.2,
}
export const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}
