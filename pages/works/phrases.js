import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Phrases">
        <Container>
            <Title>
                Phrases <Badge>2020</Badge>
            </Title>
            <P>
            This is a personal website where I can write phrases that I like, and I can also save them in a txt file, which is used in the page view where all the saved phrases are displayed.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                <Meta>The project was created for local use.</Meta>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                     <Meta>Stack</Meta>
                     <span>PHP, Javascript</span>   
                </ListItem>
            </List>
            <WorkImage src="/images/works/phrases_01.png" alt="phrases" />
            <WorkImage src="/images/works/phrases_02.png" alt="phrases" />
            <WorkImage src="/images/works/phrases_03.png" alt="phrases" />
        </Container>
    </Layout>
)

export default Work