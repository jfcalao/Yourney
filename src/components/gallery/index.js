import React from 'react'
import './style.css'

import GalleryImage from '../galleryImage'

import {gallery} from '../../json/gallery'

const Gallery = () => {
  return (
    <div className="grid">
      {gallery.map((image) => {
        return (
          <GalleryImage
            id={image.id}
            text={image.text}
            title={image.title}
            url={image.url}
          />
        )
      })}
    </div>
  )
}

export default Gallery
