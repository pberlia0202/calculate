import Wrapper from './components/Wrapper'
import Screen from './components/Screen';
import Button from './components/Button';
import ButtonBox from './components/ButtonBox';
import CalcProvider from './context/CalcContext.js';
import { useEffect, useState } from 'react';


const btnValues = [
  ["C","+-","%","/"],
  [7,8,9,"x"],
  [4,5,6,"-"],
  [1,2,3,"+"],
  [0,".","="],
];

function App() {
  // const [calc, setCalc] = useState({
  //   sign: "",
  //   num:0,
  //   res:0
  // });
  return (
    
    <CalcProvider>
      <Wrapper>
      <Screen/>
      <ButtonBox>
        {btnValues.flat().map((btn,i) => (
          <Button
            value={btn}
            key={i}
          />
        ))}
      </ButtonBox>
      </Wrapper>
    </CalcProvider>

  );
}

export default App;
