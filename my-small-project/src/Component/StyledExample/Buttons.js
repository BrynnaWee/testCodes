import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = css`
        ${({theme, color, outline}) => {

            const selected = theme.ThemeColor.palette[color];

            return css`
                background: ${selected};
                &:hover{
                    background: ${lighten(0.1, selected)};
                }
                &:active{
                    background: ${darken(0.1, selected)};
                }
                
                ${outline && css`
                    color: ${selected};
                    background: white;
                    border: 1px solid ${selected};
                    &:hover{
                            color: white;
                            background: ${selected};
                        }
                `}
            `;
        }}
`;

const sizeStyles = css`
        ${({theme, size}) =>{
            const height = theme.ButtonSize[size].height;
            const fontSize = theme.ButtonSize[size].fontSize;

            return css`
                height: ${height};
                font-size: ${fontSize};
            `}}            
    `;

const fullWidthStyles = css`
            ${props => 
                props.fullWidth && css`
                width: 100%;
                content-justify: center;

                &:not(:first-child){
                    margin-left: 0 ;
                    margin-top: 1rem;
                }
            `}
            }
`;


const StyledButton = styled.button`
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

/*기타*/
&:not(:first-child) {
    margin-left: 1rem;
}

/*크기*/
${sizeStyles}

/*색상*/
${colorStyles}

/*fullWidth*/
${fullWidthStyles}
   
`;



class Buttons extends Component {

    // componentDidMount() {
    //     console.log(this.props);
    //   }

    static defaultProps ={
        color: 'blue',
        size: 'medium'
    }
    
    render() {
        const {children, color, size, fullWidth, outline, ...rest} = this.props;       

        return(
            
          <>          
         <StyledButton color={color} size={size} fullWidth={fullWidth} outline={outline} {...rest}>
                {children}
         </StyledButton>               
     </>
        )
        
    }
}

export default Buttons;