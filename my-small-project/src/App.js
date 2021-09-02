import React, { Component } from 'react';
import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import Hello from './Component/Hello.js';
import Wrapper from './Component/Wrapper';
import Counter from './Component/Counter';
import InputSample from './Component/InputSample';
import User from './Component/User/User';
import Circle from './Component/StyledExample/Circle';
import Buttons from './Component/StyledExample/Buttons';
import { ThemeSystem } from './ThemePalette';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  &+&{
    margin-top: 1rem;
  }
`;

class App extends Component {

  render() {
    
      return (

   ////warpper,props개념
    // <Wrapper>
    //   <Hello name='react' color='red' isSpecial/>
    //   <Hello />
    // </Wrapper>

  ////counter
    // <Counter />

  // //input 상태관리
    // <InputSample />

  //배열변경 - app.js등 외부에 데이터객체있는 경우  
    //  <User />
  
  //styled-components
  
    // <Circle />
<div>
    <ThemeProvider
     theme={ThemeSystem}
     >

    <AppBlock >
    <ButtonGroup>
    <Buttons size='large'>Button</Buttons>
    <Buttons size='large' outline>Button</Buttons>
    <Buttons>Button</Buttons>
    <Buttons size='small'>Button</Buttons>
    </ButtonGroup>

    <ButtonGroup>
    <Buttons color='gray' size='large'>Button</Buttons>
    <Buttons color='gray' size='large' outline>Button</Buttons>
    <Buttons color='gray'>Button</Buttons>
    <Buttons color='gray' size='small'>Button</Buttons>
    </ButtonGroup>

    <ButtonGroup>
    <Buttons color='pink' size='large'>Button</Buttons>
    <Buttons color='pink' size='large' outline>Button</Buttons>
    <Buttons color='pink'>Button</Buttons>
    <Buttons color='pink' size='small'>Button</Buttons>
    </ButtonGroup>

    <ButtonGroup>
    <Buttons color='blue' fullWidth>Button</Buttons>
    <Buttons color='blue' fullWidth outline>Button</Buttons>
    <Buttons color='gray' fullWidth>Button</Buttons>
    <Buttons color='pink' fullWidth>Button</Buttons>
    </ButtonGroup>
    </AppBlock>

    </ThemeProvider>
    
</div>
    );
  }
}

export default App;

