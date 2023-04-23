import {useEffect, useRef, useState} from "react";
import styles from "./bar-chart.module.css"
import VizGroupChart from "./viz-group-chart";
import {Slider, Switch} from "antd";
import {useSelector} from "react-redux";
import {TableItem} from "./table-item";
const GroupedBarChart=()=> {
    const success  =useSelector(state => state.grouped)






    return (
<div className={styles.wrapper}>
        <div className={styles.container}>
            {success.groupingSuccess&& <VizGroupChart />}
            <div className={styles.scroll}>
                {success.groupedData.map((item,index)=>
                    (<TableItem key={index} data={item}/>))
                }
            </div>
        </div>

</div>
    )
    }
export  default GroupedBarChart
