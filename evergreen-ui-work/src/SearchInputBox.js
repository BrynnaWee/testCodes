import React, {
  Component
} from 'react';
import {
  SearchInput
} from 'evergreen-ui';

class SearchInputBox extends Component {

  state = {
    inputValue: ''
  }

  setover = text => {
    let inputValue='';
    inputValue = text;
    this.setState({...this.state, inputValue});
  }

  check = () => console.log(this.state.inputValue);

  render() {

    const {
      inputValue
    } = this.state;

    return ( 
      <div>
      <SearchInput 
          placeholder = "Filter traits..."
          value = {inputValue}
          onChange = {e => this.setover(e.target.value)}
          onClick = {()=> this.setover('')}
      />
      <button type="button" onClick={this.check}>확인</button>
      </div>);
  };

}


export default SearchInputBox;