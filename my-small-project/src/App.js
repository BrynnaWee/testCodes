import React from 'react';
import './App.css';
import Hello from './Component/Hello.js'
import Wrapper from './Component/Wrapper';
import Counter from './Component/Counter';
import InputSample from './Component/InputSample';

function App() {
  return (
    ////warpper,props개념
    // <Wrapper>
    //   <Hello name='react' color='red' isSpecial/>
    //   <Hello />
    // </Wrapper>

    ////counter
    // <Counter />

    //input 상태관리
    <InputSample />

  );
}

export default App;
