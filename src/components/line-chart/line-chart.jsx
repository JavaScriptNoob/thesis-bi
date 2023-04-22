import React, {useEffect, useState} from 'react';
import *  as d3 from 'd3';
import VizLineChart from "./viz-line-chart";
import {useSelector} from "react-redux";

const LineChart = () => {

    const [ready, setReady] = useState(false);

    const success  =useSelector(state => state.line)

    return (
        <div className="line-chart">
            {success.processSuccess&&<VizLineChart data ={success}/>}


        </div>
    )
};

export default LineChart;
