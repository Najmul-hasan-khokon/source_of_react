import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import { Convert, toCelcias, toFarenheit } from './Converter';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c',
    };

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        const celcias = scale === 'f' ? Convert(temperature, toCelcias) : temperature;

        const Farenheit = scale === 'c' ? Convert(temperature, toFarenheit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale="c"
                    temperature={celcias}
                    onTemperatureChange={this.handleChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={Farenheit}
                    onTemperatureChange={this.handleChange}
                />

                <BoilingVerdict celcias={parseFloat(temperature)} />
            </div>
        );
    }
}
