import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './ImageSection.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

const builder = imageUrlBuilder(client)

function ImageSection(props) {
  const {heading, label, text, popout, image, cta, layout} = props

  if (!image) {
    return null
  }

  return (
    <div className={` ${styles.root} `}>
      <section
        className={`md:py-6 container mx-auto flex flex-col font-sans  ${
          layout ? 'md:flex-row-reverse	' : 'md:flex-row '
        }`}
      >
        <div className="md:w-1/2 ">
          <img
            src={builder.image(image).auto('format').width(2000).url()}
            className={`py-0 ${styles.image}`}
          />
        </div>
        <div className="md:w-1/2 py-6 px-6  md:px-12 flex-col  space-y-2">
          <div className="tracking-widest opacity-50   ">{label}</div>
          <h2 className="text-3xl md:text-5xl font-sans font-bold ">{heading}</h2>
          {popout && (
            <div className=" text-sm  bg-gray-50 font-normal p-4       ">
              <p className="opacity-75 ">
                {' '}
                <SimpleBlockContent blocks={popout} />
              </p>
            </div>
          )}
          <div className="space-y-2 pb-4">
            {text && <SimpleBlockContent className="font-sans " blocks={text} />}
          </div>

          {cta && cta.route && <Cta className="" {...cta} />}
        </div>
      </section>
    </div>
  )
}

ImageSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.array,
  popout: PropTypes.array,
  layout: PropTypes.boolean,

  image: PropTypes.shape({
    asset: PropTypes.shape({
      _ref: PropTypes.string,
    }),
  }),
  backgroundImage: PropTypes.string,
  tagline: PropTypes.string,
  cta: PropTypes.object,
}

export default ImageSection
