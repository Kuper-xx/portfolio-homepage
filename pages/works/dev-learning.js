import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Dev Learning">
        <Container>
            <Title>
                Dev Learning <Badge>2020</Badge>
            </Title>
            <P>
            This is a personal blog where I wrote about my experiences and my projects.
            I used AngularJS for the front-end and Laravel for the back-end with a MySQL database.
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
                     <span>AngularJS, Laravel, JQuery</span>   
                </ListItem>
            </List>
            <WorkImage src="/images/works/dev-learning.png" alt="Dev Learning" />
            <WorkImage src="/images/works/dev-learning_01.png" alt="dev-learning" />
            <WorkImage src="/images/works/dev-learning_02.png" alt="dev-learning" />
            <WorkImage src="/images/works/dev-learning_03.png" alt="dev-learning" />
            <WorkImage src="/images/works/dev-learning_04.png" alt="dev-learning" />
        </Container>
    </Layout>
)

export default Work