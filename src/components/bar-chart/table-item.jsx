
import styles from "./bar-chart.module.css"
export const TableItem = ({data}) => {



    const handleClick = (data) => {
        console.log(data);
    };

    const handleItemClick = () => {
        handleClick(data);
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
