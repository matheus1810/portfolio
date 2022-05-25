import { ButtonsContainer, Container, ImgContainer, Intro, Text, TxtContainer } from "./styled";

import { useTypewriter, Cursor } from 'react-simple-typewriter'
import b from "../assets/b.jpg"


function Apresentation() {
  const { text } = useTypewriter({
    words: ['Matheus', 'Full Stack', 'Freelancer', 'Front End', 'Back End!'],
    loop: 0
  })

  return (
    <Container>
      <TxtContainer>
        <span>Hi, i'm </span>
        <span style={{ color: '#5F1A37', marginLeft: '10px' }}> {text}</span>
        <Cursor
          cursorStyle='_'
        />
      </TxtContainer>

      <Intro>

        <div>
          <ButtonsContainer>
            <button className="btn1">Baixar cv</button>
            <button className="btn2">Sobre mim</button>
          </ButtonsContainer>

          <Text>
            <p>
           Me chamo Matheus Souza Santos sou desenvolvedor full Stack,
            tenho vivência com desenvolvimento de plataformas de E-ccomerce, 
            requisiçoes HTTP com apis RestFull, orientação a objetos, integrações com 
            banco de dados utilizando MySql etc .
            </p>
          </Text>
        </div>
        <ImgContainer>
          <img src={b} />
        </ImgContainer>
      </Intro>

    </Container>
  )

}

export default Apresentation;