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
    <div className={styles.root}>
      <section
        className={`container mx-auto flex flex-col font-serif  ${
          layout ? 'md:flex-row-reverse	' : 'md:flex-row '
        }`}
      >
        <div className="md:w-1/2 ">
          <img
            src={builder.image(image).auto('format').width(2000).url()}
            className={`${styles.image}`}
          />
        </div>
        <div className="md:w-1/2 p-12 flex-col  space-y-4">
          <div className="text-xs uppercase   ">{label}</div>
          <h2 className="text-3xl font-serif">{heading}</h2>
          {popout && (
            <div className="font-bold text-lg  bg-orange-50 pl-32 shadow-zinc-100 shadow-lg   py-16 bg-opacity-50 backdrop-blur-lg -m-32">
              <p className=" ">
                {' '}
                <SimpleBlockContent blocks={popout} />
              </p>
            </div>
          )}
          <div className="">
            {text && <SimpleBlockContent className="font-serif " blocks={text} />}
          </div>

          {cta && cta.route && <Cta {...cta} />}
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
