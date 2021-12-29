import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="CIQYP">
        <Container>
            <Title>
                CIQYP <Badge>2020</Badge>
            </Title>
            <P>
            This is a web page that explains in general what the company does and what message it wants to give to its customers.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="http://www.ciqyp.org.ar/">
                        http://www.ciqyp.org.ar/ <ExternalLinkIcon mx="2px" />
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
            <WorkImage src="/images/works/ciqyp_01.png" alt="CIQYP" />
            <WorkImage src="/images/works/ciqyp_02.png" alt="CIQYP" />
        </Container>
    </Layout>
)

export default Work