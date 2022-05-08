import * as React from "react"
import {StaticImage} from "gatsby-plugin-image"
import OriginalBG from "@lekoarts/gatsby-theme-emilia/src/assets/bg-pattern"

const BGPattern = () => (
    <StaticImage
        // src="./dumbledore.jpg"
        // src="./back-to-hogwarts.png"
        src="./headmaster.jpeg"
        // src="./spring-festival.jpg"
        objectFit="cover"
        objectPosition="bottom"
    />
)

// export default OriginalBG
export default BGPattern
