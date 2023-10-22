export default {
  name: 'appreciatedBy',
  title: 'Appreciated By',
  type: 'document',
  fields: [
    {
      name: 'likedBy',
      title: 'Liked By',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'userId',
      title: 'UserID',
      type: 'string',
    },
  ],
}
