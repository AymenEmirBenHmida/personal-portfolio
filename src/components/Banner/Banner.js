import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'

function Banner() {
  return (
    <section>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>
                        Welcome to my portfolio
                    </span>
                    <h1> {'Hi Im Aymen Ben Hmida'}<span className='wrap'>web developer</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque velit accusamus similique, vel cum id beatae mollitia totam nulla tenetur. Autem ut impedit fugit modi ad maxime quasi eum mollitia.</p>
                <button onClick={()=>console.log('talk')}> let's talk</button>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner