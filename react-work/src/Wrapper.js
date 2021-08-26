import React, {Component} from 'react';
import styled, {css} from 'styled-components';



// // 1. 컴포넌트 인라인 스타일링 

// class Wrapper extends Component {


//     render(){

//         const style = {
//             border: '2px solid black',
//             padding: '16px',
//         };

//         // const {children}=this.props;

//         return(
//             <>
//             <div style={style}>
//                 {/* {children} */}
//                 {this.props.children}
//             </div>
//             </>
//         )
//     }
// }

// export default Wrapper;





// // 2.styled-components

// //이것 또한 react component이므로, 대문자로 시작해야한다.
// const WrapperStyle = styled.div`
// border: 2px solid #000;
// padding: 16px;
// `;

// class Wrapper extends Component{



//     render(){

//         return(
//             <>
//             <WrapperStyle>
//                 {this.props.children}
//             </WrapperStyle>
            
            
//             </>
//         )
//     }
// }

// export default Wrapper;





//3. styled-component 추가연습


const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background-color: ${props => props.color || 'black'};
    border-radius: 50%;
    ${props =>
        props.huge &&
        css`
        width: 10rem;
        height:10rem;
    `}
`;

class Wrapper extends Component{

    render(){

        return(
            <div>
                <Circle color="red" huge/>
            </div>
        )
    }
}

export default Wrapper;