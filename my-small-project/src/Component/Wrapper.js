import React, { Component } from 'react';

class Wrapper extends Component {

    render() {
            
    const style = {
        border : '2px solid #000',
        padding: '16px',
    }

        return (
            <div style={style}>
                {this.props.children}
            </div>
        );
    }
}

export default Wrapper;