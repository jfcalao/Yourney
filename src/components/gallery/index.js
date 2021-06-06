import React from 'react'
import './style.css'

import GalleryImage from '../galleryImage'

import {gallery} from '../../json/gallery'

const Gallery = () => {
  console.log(gallery)
  return (
    <div>
      <section className="gallery">
        <div className="container">
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
        </div>
      </section>
    </div>
  )
}

export default Gallery
