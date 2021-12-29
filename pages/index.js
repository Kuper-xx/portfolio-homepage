import NextLink from 'next/link';
import {Container, Text, List, ListItem, SimpleGrid, Button, Link, Box, Heading, Image, Icon, useColorModeValue} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import Section from '../components/section.js';
import Paragraph from '../components/paragraph.js';
import { BioSection, BioYear } from '../components/bio';
import {
    IoLogoTwitter,
    IoLogoFacebook,
    IoLogoLinkedin,
    IoLogoGithub,
    IoPhonePortrait,
    IoMail
} from 'react-icons/io5';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Page = () => {

    const [copied, setCopied] = useState(false);
    const copiedEffect = () => {
        setCopied(true); 
        setTimeout(() => {setCopied(false)}, 1000);
    }
    const variants = {
        hidden: { opacity: 0, x: 0, y: 20 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: -0, y: 20 }
    }
    return (
        <Container>
            
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} mt={3} p={3} mb={6} align="center">
                Hello, I&apos;m a full-stack developer based in Argentina!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">Juan Ignacio Kaupert</Heading>
                    <p>Web developer fullstack & data scientist</p>
                </Box>
            <Box 
             flexShrink={0}
             mt={{base: 4, md: 0}}
             ml={{md: 6}}
             align="center"
            >
                <Image
                 borderColor="whiteAlpha.800"
                 borderWidth={2} 
                 borderStyle="solid" 
                 maxWidth="100px" 
                 display="inline-block" 
                 borderRadius="full" 
                 src="/images/juani.jpg" 
                 alt="Profile Image"
                />
            </Box> 
            </Box>
	    <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                    <Paragraph>
                    My desire to satisfy the objectives of my clients through technology 
                    has led me to specialize in the area of web development, and 
                    as I like to know the full usage of the technology I became 
                    interested in full stack web development, also in my spare 
                    time I dedicate myself to learn about data science and other 
                    areas of programming.
                    </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2001</BioYear>
                    Born in Buenos Aires, Argentina.
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Completed the Secondary's Degree in Mercantile Expert with Technical Specialization in Accounting and Taxation in the School of San Francisco Javier
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Worked at 'Remonta y Veterinaria - Campo de Polo'
                </BioSection>
                <BioSection>
                    <BioYear>2019 to present</BioYear>
                    Works as a freelance
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    Data Science, Dynamic Programming, Deep Learning, Machine Learning, Drawing, Music, Cryptocurrencies, Economics & Politics
                </Paragraph>
            </Section>
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    Contact
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://twitter.com/Kuper_xx" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter} />}>
                                @Kuper_xx
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.facebook.com/profile.php?id=100001413765983" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoFacebook} />}>
                                Juan Ignacio Kaupert
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/juan-kaupert/" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin} />}>
                                Juan Ignacio Kaupert
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://github.com/Kuper-xx" target="_blank">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>
                                @Kuper-xx
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <CopyToClipboard text="juanigkaupert@gmail.com">
                            <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoMail} />} onClick={() => copiedEffect()}>
                                juanigkaupert@gmail.com
                            </Button>
                        </CopyToClipboard>
                        <AnimatePresence>
                            {copied && <motion.span exit="exit" transition={{ duration: 0.4, type: 'easeInOut' }} style={{ color: 'darkgray', marginLeft: '1em'}}>Copied!</motion.span>}
                        </AnimatePresence>
                    </ListItem>
                </List>
            </Section>                
        </Container>
    );
}

export default Page;
