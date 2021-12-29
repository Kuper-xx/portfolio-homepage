import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="CECRA">
        <Container>
            <Title>
                CECRA <Badge>2021</Badge>
            </Title>
            <P>
            This website aims to reach customers in a better way, inform about future events and company news.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="http://www.cecra.com.ar/">
                    http://www.cecra.com.ar/ <ExternalLinkIcon mx="2px" />
                    </Link>
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
            <WorkImage src="/images/works/cecra_01.png" alt="CECRA" />
            <WorkImage src="/images/works/cecra_02.png" alt="CECRA" />
        </Container>
    </Layout>
)

export default Work