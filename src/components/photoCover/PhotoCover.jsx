import React from 'react'



const PhotoCover = ({src, alt, ...other}) => {
  return (
    <img src={src} alt={alt} {...other}  />
  )
}

export default PhotoCover