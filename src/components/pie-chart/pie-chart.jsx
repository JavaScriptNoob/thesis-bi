import * as React from 'react';
import {useEffect,useState} from "react";

import * as d3 from "d3";

import VizPieChart from "./viz-pie-chart";


const Piechart = (props) => {
    const data = props.data;





    return (
        <div>
            <VizPieChart data={data}/>



        </div>


    );

}
export default Piechart
