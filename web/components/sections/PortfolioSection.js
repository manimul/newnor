import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextSection.module.css'

const builder = imageUrlBuilder(client)

function PortfolioSection(props) {
  const {heading, label, text, portfolios} = props

  return (
    <div>
      <section className="mx-auto space-y-4 bg-gradient-to-br from-gray-50 to-yellow-50">
        <div className="px-8 py-32 mx-auto">
          <div className="max-w-xl mx-auto text-center mb-12">
            <p className={styles.label}>{label}</p>
            <h2 className={`text-5xl font-serif mb-4  capitalize {styles.heading}`}>{heading}</h2>
            {text && <SimpleBlockContent blocks={text} />}
          </div>

          {portfolios && (
            <div>
              <div className=" m-auto  ">
                <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-2">
                  {portfolios.map((portfolio) => (
                    <div
                      key={portfolio._id}
                      className="relative p-2   group bg-white bg-opacity-50   "
                    >
                      <div className="relative">
                        <div
                          aria-hidden="true"
                          className=" group absolute inset-x-0 bottom-0 h-96 group-hover:backdrop-blur-lg  transition duration-200  cursor-pointer z-10 "
                        />

                        <img
                          src={builder.image(portfolio.image).auto('format').width(700).url()}
                          loading="lazy"
                          width={700}
                          className="h-96 w-full object-cover   transition duration-500  "
                          alt={heading}
                        />
                        <div className="absolute  text-white left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                          <img
                            src={builder.image(portfolio.logo).auto('format').width(400).url()}
                            loading="lazy"
                            className="text-white  "
                            alt={heading}
                          />
                        </div>
                        <a
                          href={portfolio.slug.current}
                          className=" opacity-0 group-hover:opacity-100  transition duration-500 absolute inset-x-4 bottom-4 left-0 right-0 mx-auto w-36  flex items-center space-x-2 z-20"
                        >
                          <div
                            aria-hidden="true"
                            className="h-10 w-10 flex border border-brown-200 rounded-full"
                          >
                            <svg
                              aria-hidden="true"
                              width={24}
                              height={24}
                              fill="none"
                              className="my-auto mx-auto flex-none text-white"
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
                          <span className="text-white">See Portfolio</span>
                        </a>
                      </div>
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

PortfolioSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
  portfolios: PropTypes.arrayOf(PropTypes.object),
}

export default PortfolioSection
