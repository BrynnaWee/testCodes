import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import { lighten, darken } from 'polished';


const ButtonStyle = styled.button`
    /*공통스타일*/
    display: inline-block;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /*크기*/
    height: 2.25rem;
    font-size: 1rem;

    /*색상*/
    background: #228be6;
    &:hover{
        background: ${lighten(0.1, '#339af0')};
    }
    &:active{
        background:${darken(0.1, '#1c7ed6')};
    }

    /*기타*/
    &+&{
        margin-left: 1rem;
        margin-top: 1rem;
    }
`;


class StyledButton extends Component {

    render() {
        const {children, ...rest} = this.props;

        return (
         
                <ButtonStyle {...rest}>
                    {children}
                </ButtonStyle>
        
        );
    }
}

export default StyledButton;