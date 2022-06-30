import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextSection.module.css'

function TextSection(props) {
  const {heading, label, text} = props

  return (
    <div className={`  bg-gradient-to-br from-cyan-800 to-cyan-900   text-white ${styles.root}`}>
      <section className="md:max-w-xl py-24 px-6 mx-auto space-y-4">
        <div className={`tracking-widest opacity-50  `}>{label}</div>
        <h2 className={`md:text-5xl font-sans font-bold  {styles.heading}`}>{heading}</h2>
        <div className="first-letter:text-2xl text-lg">
          {text && <SimpleBlockContent blocks={text} />}
        </div>
      </section>
    </div>
  )
}

TextSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
}

export default TextSection
