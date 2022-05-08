/** @jsx jsx */
import {jsx, Heading, Flex} from "theme-ui"
import {animated, useSpring, config} from "react-spring"
import {useStaticQuery, graphql} from "gatsby"
import {StaticImage, GatsbyImage, IGatsbyImageData} from "gatsby-plugin-image"
import useEmiliaConfig from "@lekoarts/gatsby-theme-emilia/src/hooks/use-emilia-config"
import HeaderBackground from "@lekoarts/gatsby-theme-emilia/src/components/header-background"
import Location from "@lekoarts/gatsby-theme-emilia/src/assets/location"
import SocialMediaList from "@lekoarts/gatsby-theme-emilia/src/components/social-media-list"
import avt from "./avatar.png"

type AvatarStaticQuery = {
    file: {
        childImageSharp: {
            gatsbyImageData: IGatsbyImageData
        }
    }
}

const Header = () => {
    const {name, location, assetsPath} = useEmiliaConfig()
    const avatar = useStaticQuery<AvatarStaticQuery>(graphql`
    query {
      file(name: { eq: "avatar" }) {
        childImageSharp {
          gatsbyImageData(
            layout: FIXED, width: 160, height: 160, 
            placeholder: NONE
            quality: 100)
        }
      }
    }
  `)

    const fadeUpProps = useSpring({
        config: config.slow,
        from: {opacity: 0, transform: `translate3d(0, 30px, 0)`},
        to: {opacity: 1, transform: `translate3d(0, 0, 0)`},
    })
    const fadeUpPropsDelay = useSpring({
        config: config.slow,
        delay: 250,
        from: {opacity: 0, transform: `translate3d(0, 30px, 0)`},
        to: {opacity: 1, transform: `translate3d(0, 0, 0)`},
    })
    const fadeProps = useSpring({config: config.slow, from: {opacity: 0}, to: {opacity: 1}})
    const fadeLongProps = useSpring({config: config.slow, delay: 600, from: {opacity: 0}, to: {opacity: 1}})

    return (
        <Flex as="header" variant="layout.projectHead">
            <HeaderBackground/>
            <div sx={{textAlign: `center`, my: 5, zIndex: 10}}>
                <div
                    sx={{
                        overflow: `hidden`,
                        // borderRadius: `full`,
                        height: [`120px`, `160px`],
                        width: [`120px`, `160px`],
                        display: `inline-block`,
                        // boxShadow: `lg`,
                        "> div:not([data-placeholder='true'])": {
                            height: [`140px !important`, `160px !important`],
                            width: [`140px !important`, `160px !important`],
                        },
                    }}
                >
                    {avatar?.file?.childImageSharp?.gatsbyImageData ? (
                        <GatsbyImage
                            image={avatar.file.childImageSharp.gatsbyImageData}
                            alt="Avatar"/>
                    ) : (
                        <div>Place an image with the name "avatar" inside the directory "{assetsPath}"</div>
                    )}
                </div>
                <animated.div style={fadeUpProps}>
                    <StaticImage
                        loading="eager"
                        placeholder="none"
                        src="../assets/name.png" alt="鱼鱼爱学习" height="32"/>
                    {/*<Heading as="h1" variant="styles.h1" sx={{color: "white"}}>*/}
                    {/*    {name}*/}
                    {/*</Heading>*/}
                </animated.div>
                {/*<animated.div style={fadeUpPropsDelay}>*/}
                {/*    <Flex*/}
                {/*        sx={{*/}
                {/*            svg: {*/}
                {/*                width: `20px`,*/}
                {/*                height: `20px`,*/}
                {/*                ".primary": {color: `iconPrimary`},*/}
                {/*                ".secondary": {color: `iconSecondary`},*/}
                {/*                mr: 2,*/}
                {/*            },*/}
                {/*            justifyContent: `center`,*/}
                {/*            alignItems: `center`,*/}
                {/*            color: `text`,*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        <Location/> {location}*/}
                {/*    </Flex>*/}
                {/*</animated.div>*/}
                <div data-testid="social-header" sx={{mt: 4, mb: 6, a: {mx: 2}}}>
                    <animated.div style={fadeLongProps}>
                        <SocialMediaList/>
                    </animated.div>
                </div>
            </div>
        </Flex>
    )
}

export default Header
