import React, { useEffect, useRef } from "react"
import Wrapper, { WrapperProps } from "./components/Wrapper"
import Image, { ImageProps } from "./components/Image"
import imageStyles from "./components/Image/image.module.scss"

type CarouselProps = {
  images: string[]
  children?: React.ReactNode
  duration?: number
  overlay?: boolean
  wrapperProps?: WrapperProps["wrapperProps"]
  imageProps?: ImageProps
  pauseOnHover?: boolean
}

const CarouselComponent = ({
  images,
  children,
  duration = 4000,
  imageProps,
  wrapperProps = {},
  overlay = true,
  pauseOnHover = false,
}: CarouselProps) => {
  const wrapper = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bg = wrapper.current
    const nodes = bg!.getElementsByClassName("carousel-images")
    let current = nodes.length - 1
    let timerId: any

    nodes[current].classList.add(imageStyles.active)

    const pause = () => {
      clearInterval(timerId)
    }

    const start = () => {
      timerId = setInterval(() => {
        current = current === nodes.length - 1 ? 0 : current + 1
        nodes[current === 0 ? nodes.length - 1 : current - 1].classList.remove(
          imageStyles.active
        )
        nodes[current].classList.add(imageStyles.active)
      }, duration)
    }

    if (pauseOnHover) {
      bg?.addEventListener("mouseenter", pause)
      bg?.addEventListener("mouseleave", start)
    }

    start()

    return () => {
      clearInterval(timerId)
      bg?.removeEventListener("mouseenter", pause)
      bg?.removeEventListener("mouseleave", start)
    }
  }, [duration, pauseOnHover])

  return (
    <Wrapper ref={wrapper} overlay={overlay} wrapperProps={wrapperProps}>
      {images.map((img) => (
        <Image key={img} alt={img} loading="lazy" {...imageProps} src={img} />
      ))}
      {children}
    </Wrapper>
  )
}

export default CarouselComponent
