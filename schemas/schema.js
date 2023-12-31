// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//schemas
import author from './author'
import post from './post'
import blockContent from './blockContent'
import comment from './comment'
import appreciate from './appreciate'
import follower from './follower'
import followings from './following'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    author,
    post,
    blockContent,
    comment,
    appreciate,
    follower,
    followings,
  ]),
})
