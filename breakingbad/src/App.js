import React, {useState, useEffect} from "react";
import styled from "@emotion/styled";
import Sentence from './components/Sentence'

const Contain = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Btn = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover{
    cursor: pointer;
    background-size:400px;
  }
`;

function App() {

//State de frases
const[sentence, saveSentence] = useState({})


//Cargar una frase
useEffect(()=>{
  consultAPI()
},[])
//MODO USANDO .THEN
  // const consultAPI = () => {
  //   const api = fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
  //   const sentence = api.then(answer=> answer.json());
  //   sentence.then(result=> console.log(result))
    
  //   saveSentence(sentence[0])
  // };

  //MODO DE ASYNC AWAIT:
  const consultAPI = async () => {
    const api = await fetch("https://breaking-bad-quotes.herokuapp.com/v1/quotes");
    const sentence = await api.json();
    saveSentence(sentence[0])

  };

  return (
    <Contain>
      <Sentence 
      sentence={sentence}
      />
      <Btn onClick={consultAPI}>Obtener Frase</Btn>
    </Contain>
  );
}

export default App;
