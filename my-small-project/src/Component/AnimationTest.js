import React, { Component } from 'react';
import './animation.css';

class AnimationTest extends Component {
    render() {
        return (
         
    <div class="card-container">
            <div className="card">
                <div className="side">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/29841/jimmy.jpg" alt="Jimmy Eat World" />        
                </div>
                <div className="side back">Jimmy Eat World</div>
            </div>
    </div>
        );
    }
}

export default AnimationTest;


