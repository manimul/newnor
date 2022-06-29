import { TiersIcon } from '@sanity/icons'

export default {
  type: 'object',
  name: 'portfolioSection',
  title: 'Portfolio Section',
  icon: TiersIcon,
  fields: [
    {
      name: 'label',
      type: 'string',
      title: 'Label'
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text'
    },
    {
      name: 'portfolios',
      type: 'array',
      title: 'Portfolio',
      of: [
        {
          type: 'reference',
          to: {
            type: 'portfolioCompanies'
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Portfolio section'
      }
    }
  }
}
