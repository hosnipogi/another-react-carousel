import React from "react"
import styles from "./wrapper.module.scss"

export type WrapperProps = {
  overlay?: boolean
  children?: React.ReactNode
  wrapperProps: React.HTMLAttributes<HTMLDivElement>
}

const Wrapper = React.forwardRef((props: WrapperProps, ref) => {
  const {
    children,
    overlay,
    wrapperProps: { className, ...rest },
  } = props
  return (
    <div
      ref={ref as any}
      className={`${styles.wrapper__main}${
        overlay ? ` ${styles.overlay}` : ""
      }${className ? ` ${className}` : ""}`}
      {...rest}
    >
      {children}
    </div>
  )
})

export default Wrapper
