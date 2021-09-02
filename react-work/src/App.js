import './App.css';
import styled from 'styled-components';
import Counter from './Counter.js';
import Wrapper from './Wrapper.js';
import Hello from './Hello.js'
import StyledButton from './StyledButton';


const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid #dddddd;
  padding: 1rem;
`;


function App() {
  return (
    // //카운터(숫자 올리고 내리고)
    // <div>
    //  <Counter />
    // </div>

    // //wrapper props.children
    // <div>
    //   <Wrapper>
    //     <Hello name='리액트' color='pink' isSpecial/>
    //     <Hello color='red' />
    //   </Wrapper>
    // </div>
   
    //styled-component Button
    <AppBlock>
      <StyledButton>Button</StyledButton>
      <StyledButton>버튼</StyledButton>
      <StyledButton>버튼</StyledButton>
    </AppBlock>
  
  );
}

export default App;
