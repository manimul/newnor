import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextSection.module.css'

function TextSection(props) {
  const {heading, label, text} = props

  return (
    <div className={styles.root}>
      <section className="md:max-w-xl p-6 mx-auto space-y-4">
        <div className={styles.label}>{label}</div>
        <h2 className={`text-3xl font-serif {styles.heading}`}>{heading}</h2>
        <div className="first-letter:text-2xl">{text && <SimpleBlockContent blocks={text} />}</div>
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
