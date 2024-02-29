export const ourProducts = {
  name: 'ourProducts',
  title: 'Our Products',
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
      name:"id",
      title:"ID",
      type:"string",
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'priceCross',
      title: 'Orginal Price',
      type: 'number',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
    },
    {
      name: 'totalRatings',
      title: 'No of Ratings',
      type: 'number',
    },
    {
      name: 'stars',
      title: 'No of Stars',
      type: 'number',
    },
  ],
}
