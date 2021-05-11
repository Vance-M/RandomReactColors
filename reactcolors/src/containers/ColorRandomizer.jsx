import React, { Component } from 'react'
import Display from '../components/color/Display'


const colorArray = ['red', 'blue', 'green', 'yellow', 'purple']

export default class ColorRandomizer extends Component {
    state = {
        bgColor: '#FFFFFF',
        prevColor: '#000000'
    }



    handleColorChange = (colorArray) => {
        let i = (Math.floor(Math.random()) * colorArray.length)
        if(this.state.prevColor !== colorArray[i]) {
            this.setState({bgColor: colorArray[i], prevColor: colorArray[i]})
        } else if(this.state.prevColor !== colorArray[i]) {
            this.setState({bgColor: '#0000000', prevColor: '#0000000'})
        }
    }


    render() {


        setInterval(this.handleColorChange(colorArray), 1000);
    

        return (
            <div>
                <p>HelloColorRandom</p>
                <Display bgColor={this.state.bgColor} />
            </div>
        )
    }
}
