import * as d3 from "d3";
import { useEffect, useRef } from "react";
import style from './scatter-chart.module.css'

const VizScatterChart = (props) => {
    const svgRef = useRef(null);
    const tooltipRef = useRef(null);
    useEffect(() => {
        const margin = { top: 20, right: 20, bottom: 60, left: 60 };
        const width = 800 - margin.left - margin.right;
        const height = 500 - margin.top - margin.bottom;

        const svg = d3
            .select(svgRef.current)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);
        const colors = d3
            .scaleOrdinal()
            .domain(props.data.map((d) => d.country))
            .range(["#5B6F86", "#B48EAD", "#008B8B", "#9B97AB"]);
        // Create the scales
        const xScale = d3
            .scaleLinear()
            .domain([0, d3.max(props.data, (d) => d.quantity)])
            .range([0, width]);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(props.data, (d) => d.revenue)])
            .range([height, 0]);

        // Add the x-axis
        svg
            .append("g")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(xScale));

        // Add the y-axis
        svg.append("g").call(d3.axisLeft(yScale));


        const tooltip = d3.select(tooltipRef.current)
            .style("position", "absolute")
            .style("z-index", "100")
            .style("display", "none");
        // Add the scatter plot points
        svg
            .selectAll("circle")
            .data(props.data)
            .enter()
            .append("circle")
            .attr("cx", (d) => xScale(d.quantity))
            .attr("cy", (d) => yScale(d.revenue))
            .attr("r", 5)
            .attr("fill", (d) => colors(d.country))
            .on("mousemove", (event, d) => {
                // Show the tooltip
                const tooltip = d3.select(tooltipRef.current);
                tooltip.style("display", "inline-block");
                tooltip.html(`<p>Country: ${d.country}</p><p>Quantity: ${d.quantity}</p><p>Revenue: ${d.revenue}</p>`);

                // Position the tooltip over the mouse cursor
                const tooltipWidth = tooltip.node().offsetWidth;
                const tooltipHeight = tooltip.node().offsetHeight;
                const x = Math.min(event.clientX + 10, window.innerWidth - tooltipWidth - 10);
                const y = Math.min(event.clientY + 10, window.innerHeight - tooltipHeight - 10);
                tooltip.style("left", `${x-90}px`);
                tooltip.style("top", `${y-220}px`);
            })
            .on("mouseout", () => {
                // Hide the tooltip
                const tooltip = d3.select(tooltipRef.current);
                tooltip.style("display", "none");
            });


    }, [props]);

    return <><svg ref={svgRef}></svg>
        <div ref={tooltipRef} className={style.border}></div>
    </>;
};

export default VizScatterChart;
