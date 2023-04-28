import {useSelector} from "react-redux";
import {Progress} from "antd";

const ProgressBar=()=>{
   const data = useSelector(state => state.grouped.initialData)

    return(

        <div className="progress-bar">
            <div><h4>{data.group}</h4></div>
            <Progress percent={ data.revenue/350-30} strokeLinecap={'butt'} strokeColor={'green'} format={() => `Revenue equal to ${data.revenue} `} size={[300, 40]}/>
            <Progress percent={data.profit/170} strokeLinecap={'butt'} strokeColor={'red'} format={() => `Profit equal to ${data.profit} `} size={[300, 40]} />

            <Progress percent={data.quantity/80} strokeLinecap={'butt'} format={() => `Quantity equal to ${data.quantity} `} size={[300, 40]}/>
        </div>
    )
}

export default ProgressBar
