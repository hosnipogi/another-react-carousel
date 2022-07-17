import React from "react"
import styles from "./image.module.scss"

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement>

const ImageComponent = (props: ImageProps) => {
  const { className, ...rest } = props
  return (
    <img
      className={`carousel-images ${styles.image__main}${
        className ? ` ${className}` : ""
      }`}
      {...rest}
    />
  )
}

export default ImageComponent
