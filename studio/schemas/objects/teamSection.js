import { UsersIcon } from '@sanity/icons'

export default {
  type: 'object',
  name: 'teamSection',
  title: 'Team Section',
  icon: UsersIcon,

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
      name: 'image',
      type: 'figure',
      title: 'Image'
    },

    {
      name: 'Linkedin',
      type: 'url',
      title: 'Linkedin'
    },
    {
      name: 'teamMembers',
      type: 'array',
      title: 'Team Members',
      of: [
        {
          type: 'reference',
          to: {
            type: 'teamMember'
          }
        }
      ]
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action'
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Team Member Section'
      }
    }
  }
}
