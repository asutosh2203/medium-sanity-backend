export default {
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
    },
    {
      name: 'profile',
      title: 'Profile Picture',
      type: 'image',
    },
    {
      name: 'imageUrl',
      title: 'Google Profile URL',
      type: 'string',
    },
    {
      name: 'followers',
      title: 'Followers',
      type: 'array',
      of: [{ type: 'follower' }],
    },
    {
      name: 'followings',
      title: 'Following',
      type: 'array',
      of: [{ type: 'following' }],
    },
  ],
}
