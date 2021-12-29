import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Undecided">
        <Container>
            <Title>
                Undecided <Badge>2020-</Badge>
            </Title>
            <P>
            This is a personal website where I can decide randomly one of a quantity of options, 2, 3, 4, 5, or 6 options.
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
            <WorkImage src="/images/works/undecided_01.png" alt="undecided" />
            <WorkImage src="/images/works/undecided_02.png" alt="undecided" />
            <WorkImage src="/images/works/undecided_03.png" alt="undecided" />
        </Container>
    </Layout>
)

export default Work