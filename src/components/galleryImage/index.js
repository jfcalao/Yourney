import React, {useEffect} from 'react'
import './style.css'

const GalleryImage = (props) => {
  const {id, text, title, url} = props
  useEffect(() => {
    const imgContent = document.querySelectorAll('.img-content-hover')

    function showImgContent(e) {
      for (var i = 0; i < imgContent.length; i++) {
        var x = e.pageX
        var y = e.pageY
        imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
    }

    document.addEventListener('mousemove', showImgContent)
    return () => {
      document.removeEventListener('mousemove', showImgContent)
    }
  }, [])
  return (
    <figure key={id} className="img-container">
      <img src={url} alt="img" />
      <div className="img-content-hover">
        <h2 className="title">{title}</h2>
        <h3 className="text">{text}</h3>
      </div>
    </figure>
  )
}

export default GalleryImage
