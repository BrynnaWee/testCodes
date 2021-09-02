import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const Circle1 = styled.div`
width: 5rem;
height: 5rem;
background: ${props => props.color || 'black'};
border-radius: 50%;
${props => props.huge && css`
    width: 10rem;
    height: 10rem;
`}
`

class Circle extends Component {
    render() {
        return (
            <div>
                <Circle1 color="blue" huge/>
            </div>
        );
    }
}

export default Circle;