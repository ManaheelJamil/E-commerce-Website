import {client} from './client'
import type { Image } from 'sanity'
import imageUrlBuilder from '@sanity/image-url'
const imageBuilder = imageUrlBuilder(client)

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source)
}
