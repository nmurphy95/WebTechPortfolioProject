import React, { Component } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

// const useStyles = makeStyles(theme => ({
//     root: {
//         width: 300,
//     },
//     margin: {
//         height: theme.spacing(3),
//     },
// }));

class StyledSlider extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        // const classes = useStyles();

        return(
            <div>
                <Typography id="discrete-slider" gutterBottom>
                    {this.props.title}
                </Typography>
                <Slider
                    defaultValue={1.5}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={0.5}
                    marks
                    min={0.5}
                    max={3}
                    onChangeComplete={this.props.onChange(this.value)}
                />
            </div>
        )
    }

}

export default StyledSlider;
