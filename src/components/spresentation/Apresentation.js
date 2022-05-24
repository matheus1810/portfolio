import { Container } from "./styled";

import { useTypewriter } from 'react-simple-typewriter'

function Apresentation() {
  const { text } = useTypewriter({
    words: ['Matheus','Full Stack', 'Freelancer', 'Front End', 'Back End!'],
    loop: 0
  })

  return (
    <Container>
      <div className='App'>
        <div>
          <h1>Hi i'm </h1>
          <span>{text}</span>
        </div>
      </div>
    </Container>
  )

}

export default Apresentation;