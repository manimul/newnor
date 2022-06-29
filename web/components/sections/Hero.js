import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './Hero.module.css'
import client from '../../client'

import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}
const builder = imageUrlBuilder(client)

function Hero(props) {
  const {heading, backgroundImage, secondImage, thirdImage, tagline, ctas, logo} = props
  const images = [backgroundImage, secondImage, thirdImage]
  const [imageItem, setImageItem] = React.useState(images[0]) // <-- seed initial state
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % images.length), // <-- increment index
      6000
    )
    return () => clearInterval(timerId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    setImageItem(images[index]) // <-- update media state when index updates
  }, [index])

  console.log(imageItem)

  const style =
    backgroundImage && secondImage && thirdImage
      ? {
          backgroundImage: `url("${urlFor(imageItem).width(2000).auto('format').url()}")`,
        }
      : {backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto('format').url()}")`}

  return (
    <div className={`${styles.root}`} style={style}>
      <div className={`min-h-screen   p-4 md:max-w-5xl mx-auto z-10 `}>
        <div
          className={`flex items-center h-96 bg-black bg-opacity-10 backdrop-blur-sm px-10 py-20 justify-center mt-48 ${styles.decoration} `}
        >
          {logo && (
            <img
              src={builder.image(logo).auto('format').width(400).url()}
              loading="lazy"
              className="text-white  md:w-1/2 p-12 "
              alt={heading}
            />
          )}
          {!logo && <h1 className="  text-3xl md:w-3/4  md:text-5xl font-serif   ">{heading}</h1>}
          <div className={`w-2/4 font-thin  text-base ${styles.tagline}`}>
            {tagline && <SimpleBlockContent blocks={tagline} />}
            {ctas && (
              <div className={styles.ctas}>
                {ctas.map((cta) => (
                  <Cta {...cta} key={cta._key} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string,

  logo: PropTypes.object,
  backgroundImage: PropTypes.object,
  secondImage: PropTypes.object,
  thirdImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
}

export default Hero
