import React, { Component } from 'react';
import styled, {css, keyframes} from 'styled-components';
import Buttons from './Buttons';




const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;
const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`;

const sildeUp = keyframes`
    from{
        transform: translateY(200px);
    }
    to{
        transform: translateY(0px);
    }
`;
const sildeDown = keyframes`
    from{
        transform: translateY(0px);
    }
    to{
        transform: translateY(200px);
    }
`;


const DarkBackground = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.8);

    animation-duration: 0.05s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;

    ${props=>props.disappear && css`
        animation-name: ${fadeOut}
    `}
`;


const PopupBlock = styled.div`
    width: 320px;
    padding: 1.5rem;
    background: #ffffff;
    border-radius: 2px;
    h3{
        margin: 0;
        font-size: 1.5rem;
    }
    p{
        font-size: 1.125rem;
    }

    animation-duration: 0.025s;
    animation-timing-function: ease-out;
    animation-name: ${sildeUp};
    animation-fill-mode: forwards;

    ${props=>props.disappear && css`
        animation-name: ${sildeDown}
    `}
`;

const ButtonGroup = styled.div`
    margin-top:3rem;
    display: flex;
    justify-content: flex-end;
`;

const ShortedGap = styled(Buttons)`
    $:not(:first-child){
        margin-left: 0.5rem !important;
    }
`;


class AlertPopup extends Component {

    static defaultProps={
        confirmText : '확인',
        cancelText : '취소'
    }

    state = {

        animate: false,
        localVisible: false
    }
    
    // componentDidMount(props){
    //     console.log('마운트될때')
    //     // this.props.visible && !animate;
    // }
    
    // componentWillUnmount(props){
    //     console.log('언마운트될때')
    // }

    componentDidUpdate(prevProps,nextProps){

        if(!prevProps.visible && this.props.visible){
            console.log('하이');
            this.setState({animate: true,
                localVisible: true})
        }else if(prevProps.visible && !this.props.visible){
            console.log('Bye');
            this.setState({...this.state, localVisible: false})
            setTimeout(()=>this.setState({...this.state, animate: false}),500);
        }
}
    

    render() {
        const {title, children, confirmText, cancelText, onConfirm, onCancel, visible}=this.props
        const {animate,localVisible}=this.state;
        // if(!visible) return null;
        if(!animate && !localVisible) return null;
        return (
            <div>
                <DarkBackground disappear={!visible}>
                    <PopupBlock disappear={!visible}>
                        <h3>{title}</h3>
                        <p>{children}</p>
                        <ButtonGroup>
                            <ShortedGap color="gray" onClick={onCancel}>{cancelText}</ShortedGap>
                            <ShortedGap color="pink" onClick={onConfirm}>{confirmText}</ShortedGap>
                        </ButtonGroup>
                    </PopupBlock>
                </DarkBackground>
            </div>
        );
    }
}

export default AlertPopup;