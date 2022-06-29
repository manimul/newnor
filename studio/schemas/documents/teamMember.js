export default {
  name: 'teamMember',
  type: 'document',
  title: 'Team Member',
  fields: [
    {
      name: 'fullName',
      type: 'string',
      title: 'Full Name'
    },
    {
      name: 'role',
      type: 'string',
      title: 'Role'
    },
    {
      name: 'focusArea',
      type: 'string',
      title: 'Focus Area'
    },
    {
      name: 'bio',
      type: 'portableText',
      title: 'Bio'
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image'
    },
    {
      name: 'linkedin',
      type: 'url',
      title: 'Linkedin'
    }
  ],

  preview: {
    select: {
      title: 'fullName',
      media: 'image'
    }
  }
}
