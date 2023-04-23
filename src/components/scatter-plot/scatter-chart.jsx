import * as React from 'react';
import {useEffect,useState} from "react";

import * as d3 from "d3";


import {useSelector} from "react-redux";
import VizScatterChart from "./viz-scatter-chart";


const ScatterChart = () => {
    const data = useSelector(state => state.updated.initialData);





    return (
        <div>
            <VizScatterChart data={data}/>



        </div>


    );

}
export default ScatterChart
