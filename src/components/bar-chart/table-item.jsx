
import styles from "./bar-chart.module.css"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {showGroup} from "../../services/actions/grouped-data";
export const TableItem = ({data}) => {
    const [isClicked, setIsClicked] = useState(false);

  const dispatch  =useDispatch()
    const handleClick = (data) => {
        console.log(data);
    };

    const handleItemClick = () => {
        handleClick(data);
        dispatch(showGroup(data))
    };
    return (


                <div className={styles.table} onClick={handleItemClick}>
                    <div > <p className={styles.text}>{data.group + " "}

                            <span >R  {data.revenue+" "}</span>
                        <span >P {data.profit+" "}</span>
                        <span >Q  {data.profit+" "}</span>
                        </p>
                    </div>
                </div>




    )

}
