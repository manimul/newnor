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
      <div className={`text-center py-12   p-4 w-auto mx-auto z-10 `}>
        <div className={`  h-96 px-10 py-10 mx-auto md:w-3/4    mt-32 `}>
          {logo && (
            <>
              <img
                src={builder.image(logo).auto('format').width(800).url()}
                loading="lazy"
                className="text-white  md:w-1/4 py-4  mx-auto  "
                alt={heading}
              />
              <h1 className="  text-3xl  md:text-6xl font-sans font-bold   mx-auto ">{heading}</h1>
            </>
          )}
          {!logo && (
            <h1 className="  text-3xl  md:text-6xl font-sans font-bold  mx-auto drop-shadow-lg  ">
              {heading}
            </h1>
          )}
          <div
            className={`flex flex-col justify-center   align-middle text-center drop-shadow-lg   text-base mx-auto ${styles.tagline}`}
          >
            <div className="mx-auto text-center text-lg font-medium md:w-3/4 drop-shadow-lg ">
              {tagline && <SimpleBlockContent blocks={tagline} />}
              {ctas && (
                <div className={`text-center mx-auto justify-center ${styles.ctas}`}>
                  {ctas.map((cta) => (
                    <Cta {...cta} key={cta._key} />
                  ))}
                </div>
              )}
            </div>
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
