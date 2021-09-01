import React,{Component} from 'react';

class Hello extends Component{


    static defaultProps = {
        name : '이름없음',
        color : 'pink'
    }

    render(){
        const { name, color, isSpecial } = this.props;

        return(
            <div style={{color}}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        )
    }
}

export default Hello;