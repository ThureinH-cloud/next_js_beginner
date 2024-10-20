import React, { CSSProperties } from 'react'
import { Html,Body,Container,Text,Link,Preview } from '@react-email/components'

const WelcomeTemplate = ({name}:{name:string}) => {
  return (
    <Html>
        <Preview>Welcome aboard!</Preview>
        <Body className='bg-white'>
            <Container>
                <Text className='font-bold text-3xl'>Hello {name}</Text>
                <Link href='https://ddsliverboss.com'>www.ddsliverboss.com</Link>
            </Container>
        </Body>
    </Html>
  )
}
const body:CSSProperties={
    background:"#fff",
}
const heading:CSSProperties = {
    fontSize:"32px"
}
export default WelcomeTemplate