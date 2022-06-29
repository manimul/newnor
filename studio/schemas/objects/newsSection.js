import { InfoOutlineIcon } from '@sanity/icons'

export default {
  type: 'object',
  name: 'newsSection',
  title: 'News Section',
  icon: InfoOutlineIcon,

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
      name: 'newsPosts',
      type: 'array',
      title: 'News',
      of: [
        {
          type: 'reference',
          to: {
            type: 'news'
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
        subtitle: 'News section'
      }
    }
  }
}
