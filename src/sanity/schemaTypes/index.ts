import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import author from './author'
import job from './job'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, job],
}
