import React, { Component } from 'react'
import Display from '../components/color/Display'



export default class ColorRandomizer extends Component {
    state = {
        bgColor: '#FFFFFF'
    }

    randomizedColor = () => {
        const colorArray = ['red', 'blue', 'green', 'yellow', 'purple'];
        return colorArray[Math.floor(Math.random() * colorArray.length)];
    }

    handleColorChange = () => setInterval(() => {
        let newColor = this.randomizedColor();

        if(this.state.bgColor !== newColor) {
            this.setState({bgColor: newColor})
        } else if(this.state.bgColor === newColor) {
            this.setState({bgColor: '#000000'})
        }

    }, 1000);

    componentDidMount = () => {
		this.handleColorChange();
	}

    render() {
        return (
            <div>
                <Display bgColor={this.state.bgColor} />
            </div>
        )
    }
}
