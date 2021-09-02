import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import Buttons from './Buttons';

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

    render() {
        const {title, children, confirmText, cancelText, onConfirm, onCancel, visible}=this.props
        
        if(!visible) return null;
        return (
            <div>
                <DarkBackground>
                    <PopupBlock>
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