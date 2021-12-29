import { Container, Heading, SimpleGrid, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbUdemyMaster from '../public/images/courses/masterfullstack.png'
import thumbKaggleIML from '../public/images/courses/intermediate-machine-learning.png'
import thumbKaggleITDL from '../public/images/courses/intro-to-deep-learning.png'
import thumbKaggleP from '../public/images/courses/pandas.png'
import thumbKaggleCV from '../public/images/courses/computer-vision.png'
import thumbKaggleDV from '../public/images/courses/data-visualization.png'
import thumbKaggleFE from '../public/images/courses/feature-engineering.png'
import thumbGoogleM from '../public/images/courses/fundamentals-of-digital-marketing.png'

const Certificates = () => (
    <Layout title="Certificates">
        <Container>
            <Heading as="h4" fontSize={20} mb={4} mt={3}>
                Certificates
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <GridItem 
                        title="Master in Full Stack webs: Angular, Node, Laravel, Symfony +" 
                        thumbnail={thumbUdemyMaster}
                        href="https://ude.my/UC-c9e414c3-4532-4594-9c2d-29fd6153f27e">
                        It is a 33-hour course where I learned technologies such as: JavaScript, TypeScript, Angular, NodeJS, MEAN Stack, PHP, MySQL, SQL, POO, MVC, Laravel, Symfony, etc. and it also includes three tutorials on customizable web applications.
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem 
                        title="Fundamentals of Digital Marketing" 
                        thumbnail={thumbGoogleM}
                        href="/certificate/fundamentals-of-digital-marketing.pdf"
                        >
                        It is a 40-hour course where I learned the basics of digital marketing, SEO, SEM, and a lot more.
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem 
                        title="Intermediate Machine Learning"
                         thumbnail={thumbKaggleIML}
                         href="https://www.kaggle.com/learn/certification/kuperxx/intermediate-machine-learning">
                        It is a 4-hour course where I learned things like: Handle missing values, non-numeric values, pipelines, data leakage, and more.
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem 
                        title="Intro to Deep Learning" 
                        thumbnail={thumbKaggleITDL}
                        href="https://www.kaggle.com/learn/certification/kuperxx/intro-to-deep-learning">
                        It is a 4-hour course where I learned how to use TensorFlow and Keras to build and train neural networks for structured data.
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem 
                        title="Pandas" 
                        thumbnail={thumbKaggleP}
                        href="https://www.kaggle.com/learn/certification/kuperxx/pandas">
                        It is a 4-hour course where I solved short hands-on challenges to perfect your data manipulation skills.
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem 
                        title="Computer Vision"
                         thumbnail={thumbKaggleCV}
                         href="https://www.kaggle.com/learn/certification/kuperxx/computer-vision">
                        It is a 4-hour course where I learned how to build convolutional neural networks with TensorFlow and Keras and understand how computers can see.
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem 
                        title="Data Visualization" 
                        thumbnail={thumbKaggleDV}
                        href="https://www.kaggle.com/learn/certification/kuperxx/data-visualization">
                        It is a 4-hour course where I learned examples to use properly Seaborn, Matplotlib, and more libraries.
                        </GridItem>
                    </Section>
                    <Section>
                        <GridItem 
                        title="Feature Engineering" 
                        thumbnail={thumbKaggleFE}
                        href="https://www.kaggle.com/learn/certification/kuperxx/feature-engineering">
                        It is a 5-hour course where I learned better features and make better models. And also discover how to get the most out of your data.
                        </GridItem>
                    </Section>
                </SimpleGrid>
        </Container>
    </Layout>
)

export default Certificates
