import React, { useEffect, useState } from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImage from '../../assets/img/header-img.svg'
function Banner() {
    const [loopNum, setLoopNum] = useState(0)
    const toRotate  = ["Mobile Developer","Web Developer","Backend Developer"];
    const [isDeleting,setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random()*100);
    useEffect(()=>{
        const ticker = setInterval(()=>{
            tick();
        },delta);

        return ()=>clearInterval(ticker);
    },[text]);
    const tick=()=>{
        let i  = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);
        setText(updateText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2);
        }
        if(!isDeleting && text === fullText){
            setDelta(period);
            setIsDeleting(true);
        }else if(isDeleting && text === ''){
            setIsDeleting(false);
            setLoopNum(prevLoopNum=>prevLoopNum+1);
        }
    }
  return (
    <section className='banner' id='home'>
        <Container>
            <Row className='align-items-center'>
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>
                        Welcome to my portfolio
                    </span>
                    <h1> {'Hi Im Aymen Ben Hmida '}<span className='wrap'>{text}</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque velit accusamus similique, vel cum id beatae mollitia totam nulla tenetur. Autem ut impedit fugit modi ad maxime quasi eum mollitia.</p>
                <button onClick={()=>console.log('talk')}> let's talk <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <img src={headerImage} alt='Banner img'></img>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner