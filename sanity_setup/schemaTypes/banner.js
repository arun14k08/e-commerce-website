export const banner = {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'smalltxt',
      title: 'Small Text',
      type: 'string',
    },
    {
      name: 'bg',
      title: 'Background Colour',
      type: 'string',
    },
  ],
}
