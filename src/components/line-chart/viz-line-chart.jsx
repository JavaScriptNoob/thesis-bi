import {useEffect, useRef} from "react";
import * as d3 from "d3";
import {Button} from "antd";
import {shallowEqual, useSelector} from "react-redux";
import {freeze} from "@reduxjs/toolkit";
import _ from 'lodash'

const VizLineChart = (props) => {
    const ref = useRef(null);


let line =[]
const arr = [...props.data.lineData]
    if (arr !== null) {

        line= _.cloneDeep(arr);
        console.log(line,99999999999999)
    }

const plotLine =()=>{

    console.log(line,'inplotline')
    const margin = {top: 10, right: 30, bottom: 30, left: 60},
        width =760 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;

// append the svg object to the body of the page
    const svg = d3.select(ref.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    if (typeof line[0].date === 'string' || line[0].date instanceof String){
    line.forEach(function (d) {
        d.date = d3.timeParse("%d/%m/%Y")(d.date);
        d.revenue = +d.revenue;
    });}
    let x = d3.scaleTime()
        .domain(d3.extent(line, function (d) { return d.date; }))
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(line, function (d) { return +d.revenue; })])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Add the line
    svg.append("path")
        .datum(line)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("d", d3.line()
            .x(function (d) { return x(d.date) })
            .y(function (d) { return y(d.revenue) })
        )



}

    useEffect(() => {
        return () => {
plotLine()


        }
    }, );


    return <div ref={ref}>

    </div>
}
export default VizLineChart
