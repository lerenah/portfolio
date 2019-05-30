import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function Background({ img, styleClass, title, children }) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <h1 className="title text-white text-center display-4 font-weight-bold">
        {title}
      </h1>
      {children}
    </BackgroundImage>
  )
}

Background.defaultProps = {
  title: "",
  styleClass: "default-background",
}
