/** @jsx jsx */
/* eslint no-shadow: 0 */
import {jsx, Container, Themed, Box} from "theme-ui"
import {useSpring, animated, config} from "react-spring"
import {rgba} from "polished"
import {IGatsbyImageData} from "gatsby-plugin-image"
// import Layout from "./layout"
import Layout from "@lekoarts/gatsby-theme-emilia/src/components/layout"
import Header from "./header"
import Card from "@lekoarts/gatsby-theme-emilia/src/components/card"
import {StaticImage} from "gatsby-plugin-image"

type Props = {
    projects: {
        slug: string
        title: string
        cover: {
            childImageSharp: {
                gatsbyImageData: IGatsbyImageData
            }
        }
    }[]
}

const Projects = ({projects}: Props) => {
    const fadeUpProps = useSpring({
        config: config.slow,
        delay: 600,
        from: {opacity: 0, transform: `translate3d(0, 30px, 0)`},
        to: {opacity: 1, transform: `translate3d(0, 0, 0)`},
    })

    return (
        <Layout>
            <Header/>
            <Box as="main" variant="layout.main">
                <Box sx={{display: "flex"}}>
                    <Container sx={{
                        position: "fixed",
                        bottom: 0,
                        width: "20rem",
                        padding: "0!important",
                        paddingLeft: "1rem!important"
                    }}>
                        <StaticImage src="../assets/outfit-2.png" alt=""/>
                    </Container>
                    <Container sx={{
                        flex: "0 0 20rem",
                        // width: "256px",
                        // gridColumnStart: 1,
                        // gridColumnEnd: 2,
                        // gridRowStart: 1,
                        // gridRowEnd: 3,
                        // position: "fixed",
                    }}>
                    </Container>
                    <Container
                        sx={{
                            flexGrow: 1,
                            display: "grid",
                            gridGap: 4,
                            gridTemplateColumns: [`1fr`, `repeat(auto-fill, minmax(350px, 1fr))`],
                            alignItems: `flex-start`,
                            mt: `-8rem`
                        }}>
                        {projects.map((project, index) => {
                            const val = project.cover.childImageSharp.gatsbyImageData.backgroundColor as string
                            const shadow = rgba(val, 0.15)

                            const px = [`64px`, `32px`, `16px`, `8px`, `4px`]
                            const shadowArray = px.map((v) => `${shadow} 0px ${v} ${v} 0px`)

                            return <Card key={project.slug} eager={index === 0} item={project} overlay={val}
                                         shadow={shadowArray}/>
                        })}
                    </Container>

                    {/*<animated.div style={fadeUpProps} sx={{flexGrow: 1}}>*/}
                    {/*    <Container*/}
                    {/*        sx={{*/}
                    {/*            // mt: `-8rem`,*/}
                    {/*            mt: `-4rem`,*/}
                    {/*            display: `grid`,*/}
                    {/*            gridTemplateColumns: [`1fr`, `repeat(auto-fill, minmax(350px, 1fr))`],*/}
                    {/*            gridGap: 4,*/}
                    {/*            alignItems: `flex-start`,*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        {projects.map((project, index) => {*/}
                    {/*            const val = project.cover.childImageSharp.gatsbyImageData.backgroundColor as string*/}
                    {/*            const shadow = rgba(val, 0.15)*/}

                    {/*            const px = [`64px`, `32px`, `16px`, `8px`, `4px`]*/}
                    {/*            const shadowArray = px.map((v) => `${shadow} 0px ${v} ${v} 0px`)*/}

                    {/*            return <Card key={project.slug} eager={index === 0} item={project} overlay={val}*/}
                    {/*                         shadow={shadowArray}/>*/}
                    {/*        })}*/}
                    {/*    </Container>*/}
                    {/*</animated.div>*/}
                </Box>
            </Box>
        </Layout>
    )
}

export default Projects
