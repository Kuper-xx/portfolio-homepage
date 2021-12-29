import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbCIQYP from '../public/images/works/logo_ciqyp.png'
import thumbCECRA from '../public/images/works/logo_CECRA.png'
import thumbDL from '../public/images/works/logo_DevLearning.png'
import thumbUndecided from '../public/images/works/logo_undecided.png'
import thumbCA from '../public/images/works/logo_coder-ask.png'
import thumbPhrases from '../public/images/works/logo_phrases.png'

const Works = () => {
   return (
    
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4} mt={3}>
                    Works
                </Heading>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="CIQYP" title="CIQYP" thumbnail={thumbCIQYP}>
                        This is a web page that explains in general what the company does and what message it wants to give to its customers.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="CECRA" title="CECRA" thumbnail={thumbCECRA}>
                        This second website aims to reach customers in a better way, inform about future events and company news.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Section delay={0.2}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Old projects
                    </Heading>
                </Section>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem 
                        id="dev-learning" 
                        title="Dev Learning Blog" 
                        thumbnail={thumbDL}>
                        This is a personal blog where I wrote about my experiences and my projects.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.4}>
                        <WorkGridItem 
                        id="coder-ask" 
                        title="Coder ask" 
                        thumbnail={thumbCA}>
                        This is a forum where coders can ask questions about programming.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.5}>
                        <WorkGridItem 
                        id="undecided" 
                        title="Undecided" 
                        thumbnail={thumbUndecided}>
                        This is a personal website where I can decide randomly one of a quantity of options, 2, 3, 4, 5, or 6 options.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.6}>
                        <WorkGridItem 
                        id="phrases" 
                        title="Phrases" 
                        thumbnail={thumbPhrases}>
                        This is a personal website where I can write phrases that I like, and I can also save them.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
        </Container>
    </Layout>
   )
}

export default Works