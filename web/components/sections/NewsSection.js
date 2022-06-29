import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextSection.module.css'

const builder = imageUrlBuilder(client)

function NewsSection(props) {
  const {heading, label, text, newsPosts} = props

  return (
    <div>
      <section className="mx-auto space-y-4 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="md:max-w-4xl py-32 mx-auto">
          <div className={styles.label}>{label}</div>
          <h2 className={`text-4xl font-serif mb-12 {styles.heading}`}>{heading}</h2>
          {text && <SimpleBlockContent blocks={text} />}
          {newsPosts && (
            <div>
              <div className="container m-auto ">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  {newsPosts.map((newsPost) => (
                    <div
                      key={newsPost._id}
                      className="relative p-1 pb-16  group bg-white bg-opacity-50 "
                    >
                      <div className="relative"></div>
                      <img
                        src={builder
                          .image(newsPost.backgroundImage)
                          .auto('format')
                          .width(700)
                          .url()}
                        loading="lazy"
                        width={700}
                        className="h-64 w-full object-cover  grayscale hover:grayscale-0	  transition duration-500  "
                        alt={heading}
                      />
                      <div className="relative space-y-4  p-4">
                        <h4 className="text-2xl font-serif capitalize text-yellow-900">
                          {newsPost.title}
                        </h4>
                        <p className="text-gray-600">
                          {newsPost.excerpt && <SimpleBlockContent blocks={newsPost.excerpt} />}{' '}
                        </p>
                      </div>
                      <a
                        href={newsPost.slug.current}
                        className="absolute inset-x-4 bottom-4 flex items-center space-x-2"
                      >
                        <div
                          aria-hidden="true"
                          className="h-10 w-10 flex border border-yellow-200 rounded-full"
                        >
                          <svg
                            aria-hidden="true"
                            width={24}
                            height={24}
                            fill="none"
                            className="my-auto mx-auto flex-none text-yellow-700"
                          >
                            <path
                              d="M10.75 8.75l3.5 3.25-3.5 3.25"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-yellow-600">Read more</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

NewsSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
  newsPosts: PropTypes.arrayOf(PropTypes.object),
}

export default NewsSection
