import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Coder ask">
        <Container>
            <Title>
                Coder ask <Badge>2020</Badge>
            </Title>
            <P>
            This is a forum where coders can ask questions about programming.
            I used AngularJS for the front-end and NodeJS for the back-end with a MongoDB database.
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
            <WorkImage src="/images/works/coder-ask.png" alt="coder-ask" />
            <WorkImage src="/images/works/coder-ask_01.png" alt="coder-ask" />
            <WorkImage src="/images/works/coder-ask_02.png" alt="coder-ask" />
            <WorkImage src="/images/works/coder-ask_03.png" alt="coder-ask" />
            <WorkImage src="/images/works/coder-ask_04.png" alt="coder-ask" />
            <WorkImage src="/images/works/coder-ask_05.png" alt="coder-ask" />
        </Container>
    </Layout>
)

export default Work