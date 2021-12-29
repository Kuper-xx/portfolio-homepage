import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'

import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    height: 40px;
    line-height: 21px;
    padding: 10px;

    &:hover img {
        transform: rotate(20deg);
    }
`
const Logo = () => {
    const codeIcon = `/images/codeIcon${useColorModeValue('', '-dark0')}.png`
    return(
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={codeIcon} alt="code icon" width={22} height={22} />
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                          fontFamily='Arial'     
                          ml={3}>
                              Juan Ignacio Kaupert
                    </Text>
                </LogoBox>
            </a>
        </Link>
    )
}
export default Logo