import React, { Component } from 'react'
import Particles from 'react-particles-js';

import props from '../utils/particles.json';

export default class Sky extends Component {
    render() {
        return (
        <div
            style={{
            background: '#003449',
            marginBottom: '1.05rem',
            height:'200px'
            }}>
            <Particles
                params={props}
                height='200px'
            />
        </div>
        )
    }
}
