import React, { Component } from 'react';
import StyledSlider from './StyledSlider';
import Simulator from './Simulator';
import { getValues } from './VRLCalculations';

class VRL extends Component {
    constructor(props) {
        super(props)

        this.state = {
            yValueMid: null,
            yValue: null,
            arrowEndX: null,
            arrowEndYTop: null,
            arrowEndYBottom: null,
            apertureDistance: 0.7,
            slitWidth: 1.5,
            wavelength: null,
            color: 'rgb(255, 255, 0, 0.6)',
            values: {}
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const { apertureDistance, slitWidth } = this.state;
        let values = getValues(apertureDistance, slitWidth*0.001);
        this.setState({ values: values }, () => {
            console.log(this.state.values);
        });
        console.log(this.state.values);
    }

    handleChange = (value) => {
        console.log(value)
        return;
    }



    render () {
        const { values, color, apertureDistance, slitWidth } = this.state;
        
        return (
            <div>
                <StyledSlider title="Slit Width" onChange={this.handleChange} />
                <Simulator slitWidth={slitWidth} color={color} apertureDistance={apertureDistance} />
            </div>
            
        )
    }
}

export default VRL;