import {useEffect, useRef, useState} from "react";
import styles from "./bar-chart.module.css"
import VizGroupChart from "./viz-group-chart";
import {Slider, Switch} from "antd";
import {useSelector} from "react-redux";
const GroupedBarChart=()=> {
    const success  =useSelector(state => state.grouped.groupingSuccess)






    return (

        <div className={styles.container}>
            {success&& <VizGroupChart />}
        </div>
    )
    }
export  default GroupedBarChart
