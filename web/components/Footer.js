import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import styles from './Footer.module.css'
import SimpleBlockContent from './SimpleBlockContent'
import {getPathFromSlug, slugParamToPath} from '../utils/urls'

function Footer(props) {
  const {navItems, text, router} = props
  return (
    <div className={` text-white bg-stone-900 pb-12 {styles.root} pt-0`}>
      <section className={`{[contact-section]   ${styles.gradient}  }`}>
        <div className="max-w-5xl  mx-auto flex  flex-col pt-32 pb-12 px-12 md:flex-row md:py-32 text-white md:space-x-16 ">
          <div className="md:w-1/2 space-y-4">
            {' '}
            <h2 className="text-sm uppercase text-[#E8B127]">Contact Us</h2>
            <h3 className="text-4xl text-white font-serif">Get in touch today </h3>
            <p className="">
              Do you have a business case you’d like to share, get in touch – it might be a perfect
              fit for our portfolio.
            </p>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#E8B127] h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <span className="text-[#E8B127] text-md font-serif  block">Telephone</span>
                <a>01 23 456 789</a>
              </div>
            </div>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#E8B127] h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>{' '}
              <div>
                <span className="text-[#E8B127] text-md font-serif  block">Email</span>
                <a className="underline" href="mailto:info@hcncapital.se">
                  hello@hcncapital.se
                </a>
              </div>
            </div>
            <div className="flex space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#E8B127] h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <span className="text-[#E8B127] text-md font-serif  block">Address</span>
                <a>Basunvägen 4 SE-237 42 Borgeby, Sweden</a>
              </div>
            </div>
          </div>
          <div className="[contact form section] md:w-2/3  flex flex-col shadow-3xl rounded-md">
            <form className="bg-white  h-auto  p-8 text-black">
              <h2 className="text-2xl font-serif ">Book your meeting now</h2>

              <fieldset className="flex flex-col">
                <label htmlFor="fullname" className="font-serif mt-8 ">
                  Full name<span className="text-red-500 dark:text-gray-50">*</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
                />

                <label htmlFor="email" className=" font-serif mt-4 ">
                  E-mail<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
                />

                <label htmlFor="company" className="font-serif mt-4 ">
                  Company<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
                />

                <label htmlFor="message" className=" font-serif mt-4 ">
                  Message<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500  "
                ></textarea>
                <button className="mt-8 text-white  bg-none border-2 bg-[#E8B127]  border-[#E8B127]  py-5 rounded-lg inline-block tracking-wide font-serif font-semibold ">
                  Send message
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>

      <nav className="bg-stone-900 -mt-48 pt-56">
        <ul className={`text-white ${styles.items}`}>
          {navItems &&
            navItems.map((item) => {
              const isActive = slugParamToPath(router.query.slug) === item.slug.current
              return (
                <li key={item._id} className={styles.item}>
                  <Link href={getPathFromSlug(item.slug.current)}>
                    <a data-is-active={isActive ? 'true' : 'false'} aria-current={isActive}>
                      {item.title}
                    </a>
                  </Link>
                </li>
              )
            })}
        </ul>
      </nav>
      <div className={`text-white ${styles.text}`}>
        <SimpleBlockContent blocks={text} />
      </div>
    </div>
  )
}

Footer.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  text: PropTypes.arrayOf(PropTypes.object),
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
}

export default withRouter(Footer)
