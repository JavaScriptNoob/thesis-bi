import React, {useEffect, useState} from 'react';
import *  as d3 from 'd3';
import VizLineChart from "./viz-line-chart";

const LineChart = (props) => {
    const state = props.data;
    const [ready, setReady] = useState(false);



    return (
        <div className="line-chart">
            <VizLineChart />

            <h1>LineChart</h1>
        </div>
    )
};

export default LineChart;
