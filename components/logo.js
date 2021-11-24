import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue, Box} from '@chakra-ui/react'
import styles from '@emotion/styled'
import { motion } from "framer-motion"

const LogoBox = styles.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 20px;
    margin-bottom: 10px;
    padding: 13px;

    img {
        transition: 500ms ease;
        z-index: 100000;
        top: 10px;
    }

    &:hover img {
        height: 35px;
        bottom: 4px;
    }
`

const Logo = () => {
    const logoImage = `/../public/images/dog${useColorModeValue('', '-dark')}.png`
    const MotionBox = motion(Box)
    console.log(logoImage);

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <MotionBox boxSize="25px" whileTap={{y:-10}} whileHover={{ scale: 1.5}}>
                        <Image src={ logoImage} width={20} height={20} alt="logo" />

    </MotionBox>
                    <Text color={useColorModeValue('gray.80', 'whiteAlpha.900')}
                        fontFamily='M aPLUS Rounded 1ca'
                        fontWeight="bold"
                        ml={3}

                    >
                        Lipari               
                    </Text>
                </LogoBox>
            </a>
            
        </Link>
    )
}

export default Logo