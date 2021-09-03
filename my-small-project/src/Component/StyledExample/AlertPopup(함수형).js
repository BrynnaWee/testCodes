import React, { useState, useEffect } from 'react';
import styled, {css, keyframes} from 'styled-components';
import Buttons from './Buttons';

//함수형컴포넌트 기능 테스트 파일이므로, 나중에 다시 원본파일의 이름을 바꿔주어야한다.
//현재 파일은 복사본임.
//transition효과를 useEffect로 주었음

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

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${fadeIn};
    animation-fill-mode: forwards;

    ${props=> props.disappear && css`
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

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-name: ${sildeUp};
    animation-fill-mode: forwards;

    ${props=> props.disappear && css`
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


function AlertPopup ({title, children, confirmText, cancelText, onConfirm, onCancel, visible}){

    const [animate, setAnimate] = useState(false);
    const [localVisible, setLocalVisible] = useState(visible);

    useEffect(()=>{
        //visibl값이 true->false가 되는 것을 감지한다.
        //visible Props값이 바뀌는 상황
        if(localVisible && !visible){
            //250ms후에 false로 바꿔주기 위해서
            //먼저 animate값을 true로 만들어준다.
            setAnimate(true);
            setTimeout(()=>setAnimate(false),500);
        }
        //처음엔 visible이 true였으나, 부모컴포넌트에서 false로 바뀌면서
        //props상태가 바뀌니까 useEffect가 실행되는것이고,
        //아직 현재컴포넌트의 로컬props인 localVisible은 바뀌지않았다.
        //그래서 아래의 setLocalVisible함수로 변경된 visible값을 넣어주는 것이다.
        setLocalVisible(visible);
    },[localVisible,visible]);


    // if(!visible) return null;
    //animate랑 localvisible값이 false가 완전히 됐을때
    //(애니메이션이 끝났을 떄, 컴포넌트가 사라지도록 위의 코드를 아래의 코드로 바꿔준다.)
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

AlertPopup.defaultProps={
    confirmText : '확인',
    cancelText : '취소'
}

export default AlertPopup;