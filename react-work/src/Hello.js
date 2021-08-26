import React, {Component} from 'react';

class Hello extends Component{

    static defaultProps = {
        name: '이름없음'
    }

    render(){

        const {name, color,isSpecial} = this.props;
        
        return(
            <div style={{color}}
                //{color:color} object-shorthand문법
                //그래서 {}한번 더 해준 것. 
            >
                {isSpecial && <b>*</b>}안녕하세요 {name}입니다.
            </div>
        )
    }
}


export default Hello;
