import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import client from '../../client'

import imageUrlBuilder from '@sanity/image-url'

import styles from './TextSection.module.css'
const builder = imageUrlBuilder(client)

function TeamSection(props) {
  const {heading, label, text, teamMembers} = props

  return (
    <div className={styles.root}>
      <section className="md:max-w-4xl p-6 mx-auto md:space-y-2">
        <div className="text-center md:py-12">
          <p className="tracking-widest font-semibold opacity-50">{label}</p>
          <h2
            className={` text-center max-w-3xl text-3xl md:text-5xl font-bold font-sans {styles.heading}`}
          >
            {heading}
          </h2>
        </div>

        {text && <SimpleBlockContent blocks={text} />}
        {teamMembers && (
          <div>
            <div className="container m-auto ">
              <div className="">
                {teamMembers.map((teamMember) => (
                  <div
                    key={teamMember._id}
                    className="flex flex-col md:flex-row md:even:flex-row-reverse gap-6 relative p-1 pb-16  group bg-white bg-opacity-50 "
                  >
                    <img
                      src={builder.image(teamMember.image).auto('format').width(1000).url()}
                      loading="lazy"
                      width={700}
                      className=" md:w-1/2 object-cover  	  transition duration-500  "
                      alt={heading}
                    />
                    <div className="relative space-y-2  p-4">
                      <h4 className="text-2xl font-sans font-bold text-cyan-900">
                        {teamMember.fullName}
                      </h4>
                      <p className="text-md tracking-widest font-sans ">{teamMember.role}</p>

                      <p className=" font-bold ">{teamMember.focusArea}</p>
                      <p className="text-gray-600 text-base">
                        {teamMember.bio && <SimpleBlockContent blocks={teamMember.bio} />}{' '}
                      </p>
                      <a href={teamMember.linkedin} className="underline text-cyan-800">
                        Linkedin
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

TeamSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
  teamMembers: PropTypes.arrayOf(PropTypes.object),
}

export default TeamSection
