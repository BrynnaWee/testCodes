import React, { Component } from 'react';

class InputSample extends Component {

    state = {
        name : '',
        nickname: '',
    }

    //레퍼런스 만들기
    nameInput = React.createRef();

    onChangeInput = e => {
        e.preventDefault();

        const {name, value} = e.target;

        this.setState({
            ...this.state, 
            [name]: value,
        })
    }

    onReset = () => {
        this.setState({
            ...this.state,
            name:'',
            nickname:'',
        })
        this.nameInput.current.focus();
    }

    render() {

        const {name, nickname} = this.state

        return (
            <div>
                <input 
                name='name' 
                value={name}
                onChange={this.onChangeInput} 
                ref={this.nameInput}
                /> &nbsp;
                <input 
                name='nickname' 
                value={nickname}
                onChange={this.onChangeInput} 
                />&nbsp;

                <button onClick={this.onReset}>초기화</button>
                <div>
                    <b>이름 : {name}</b><br />
                    <b>닉네임 : {nickname}</b>
                    
                </div>
            </div>
        );
    }
}

export default InputSample;