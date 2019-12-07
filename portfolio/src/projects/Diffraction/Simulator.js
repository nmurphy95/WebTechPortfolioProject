import React, { Component } from 'react';
import { getValues } from './VRLCalculations';

class Simulator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            values: {},
        }
        this.updateCanvas = this.updateCanvas.bind(this);
    }

    componentDidMount() {
        let values = getValues(this.props.apertureDistance, this.props.slitWidth*0.001);
        console.log(values);
        this.setState({ values: values}, () => {
            this.rAF = requestAnimationFrame(this.updateCanvas);
        });
        
    }

    // componentDidUpdate(prevProps) {
    //     if (this.props.values !== prevProps.values) {
    //         this.setState({ values: this.props.values }, () => {
    //             this.updateCanvas();
    //         });
    //     }
    // }

    componentWillUnmount() {
        cancelAnimationFrame(this.rAf);
    }

    updateCanvas() {
        const canvas = this.refs.canvas;
        const context = canvas.getContext('2d');
        context.beginPath();
        context.lineWidth = 1;
        context.fillStyle = 'black';
        context.fillRect(0,0, canvas.width, canvas.height);
        this.draw(this.props.apertureDistance, canvas.width, canvas.height, context);
    }

    draw(apertureDistance, width, height, context /*laserColor*/) {
        var yValueMid = height/2;
        var apertureTop = yValueMid-0.1*height;
        var apertureBottom = yValueMid+0.1*height;
        context.strokeStyle = 'rgb(255, 255, 0, 0.6)';
        context.lineWidth = 3;
        var adjustedDistance = width-apertureDistance*width+0.05*width;
        context.moveTo(adjustedDistance, apertureBottom);
        context.lineTo(adjustedDistance, apertureTop);
        context.stroke();

        context.strokeStyle = 'rgb(255, 0, 0)';
        context.fillStyle = 'rgb(255, 0, 0)';
        context.beginPath();
        context.moveTo(adjustedDistance, yValueMid);
        var arrowEnd = adjustedDistance - 1.5;
        var arrowEndX = arrowEnd-0.02*width;
        context.lineTo(arrowEndX, yValueMid-0.02*height);
        context.lineTo(arrowEndX, yValueMid+0.02*height);
        context.fill();

        context.beginPath();
        context.lineWidth = 2;
        context.moveTo(0, yValueMid);
        context.lineTo(arrowEndX, yValueMid);
        context.stroke();
        console.log(height);
        
        const { values } = this.state;
        console.log(values);
        // context.save();
        for (const key in values) {
            console.log("in here");
            console.log(context);
            let opacity = values[key];

            let yEnd = Math.floor(key*20000+yValueMid);
            context.moveTo(adjustedDistance+3, yValueMid);
            context.lineWidth = 1;
            context.strokeStyle=`rgb(255, 0, 0, ${opacity})`;
            context.lineTo(width, yEnd);
            context.stroke();

            // this.drawLines(key, values[key], adjustedDistance, yValueMid);
        };
        context.restore();
        
    }

    render() {
        return (
            <div>
                <canvas ref="canvas" />
            </div>
        )
    }
}

export default Simulator;