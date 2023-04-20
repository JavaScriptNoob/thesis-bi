import React from 'react';
import {Slider} from "antd";

function RangeSlider(props) {
    const {minValue, maxValue, onChange} = props;

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <>

    <Slider range defaultValue={[minValue, maxValue]}  onChange={handleChange} />
        </>
    );
}

export default RangeSlider;
