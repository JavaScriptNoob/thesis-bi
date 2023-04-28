import 'devextreme/dist/css/dx.light.css';
import React, {useEffect, useState} from 'react';
import LineChart from "./components/line-chart/line-chart";
import GroupedBarChart from "./components/bar-chart/grouped-bar-chart";
import dataset from "./data/data.json"
import * as d3 from "d3";
import {Card, Col, Layout, Row, Statistic} from "antd";
import {Content, Footer} from "antd/es/layout/layout";
import "./App.css"
import {useDispatch} from "react-redux";
import {setInitialData} from "./services/actions/data-processing";
import {setGroupedData} from "./services/actions/grouped-data";
import {setPieData} from "./services/actions/pie-data";
import {setLineData} from "./services/actions/line-data";
import TableView from "./components/table/table-view";
import ScatterChart from "./components/scatter-plot/scatter-chart";
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';

function App() {
    const [data, setData] = useState();
    const [dataGrouped, setDataGrouped] = useState(JSON.parse(JSON.stringify(dataset)))
    const [dataPie, setDataPie] = useState(JSON.parse(JSON.stringify(dataset)))
    const [dataLine, setDataLine] = useState(JSON.parse(JSON.stringify(dataset)))
    const dispatch = useDispatch()
    useEffect(() => {
        return () => {
            dispatch(setInitialData(dataset))
        };
    }, []);

    const cardStyle = {

        borderRadius: "16px",

        boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)"
    }

    useEffect(
        () => {


            let collatedValues = dataGrouped.reduce((accumulator, currentValue) => {
                let existing = accumulator.find(n => n.group === currentValue.group);
                if (existing) {
                    existing.revenue += currentValue.revenue;
                    existing.profit += currentValue.profit;
                    existing.quantity += currentValue.quantity;
                    ['date', 'product', 'country', 'id', 'e'].forEach(e => delete existing[e]);
                } else {
                    accumulator.push(currentValue)
                }
                return accumulator
            }, [])
            dispatch(setGroupedData(collatedValues))

        }, [])

    useEffect(
        () => {


            const df = d3.rollup(dataGrouped, v => d3.sum(v, d => d.revenue), d => d.country);
            const arr = Array.from(df, function (entry) {
                if (!entry[0]) {
                }
                return {country: entry[0], revenue: entry[1]};
            });
            arr.map((d, i) => Object.keys(d).forEach(key => d[key] === undefined ? arr.splice(i, 1) : {}))
            dispatch(setPieData(arr))
            setDataPie(arr)
        }, [])


    useEffect(() => {
        return () => {

            const df = d3.rollup(dataLine, v => ({
                revenue: d3.sum(v, d => d.revenue),
                profit: d3.sum(v, d => d.profit),
                quantity: d3.sum(v, d => d.quantity),
            }), d => d.date);
            console.log(dataLine, df)
            const arr = Array.from(df, ([key, value]) => ({
                date: key,
                revenue: value.revenue,
                profit: value.profit,
                quantity: value.quantity,
            }));
            console.log(arr, 'struvture')
            arr.map((d, i) => Object.keys(d).forEach(key => d[key] === undefined ? arr.splice(i, 1) : {}))
            arr.sort((a, b) => {
                const dateA = new Date(a.date.split('/').reverse().join('-'));
                const dateB = new Date(b.date.split('/').reverse().join('-'));
                return dateA - dateB;
            });


            console.log(arr, 'efter sort')

            dispatch(setLineData(arr))
            //
            console.log(arr, 'in app');


        }
    }, [])


    return (
        <div className="App">
            <Layout>
                <header className="header">
                    <div className="logo"/>
                    <ul className="app-header">
                        <li>
                            <a className="text text_type_main-large">
                                Dashboard
                            </a>

                        </li>
                        <li>
                            <a className="text text_type_main-large">
                                Thesis
                            </a>

                        </li>
                        <li>
                            <a className="text text_type_main-large">
                                Data
                            </a>

                        </li>
                        <li>
                            <a className="text text_type_main-large">
                                Profile
                            </a>

                        </li>
                    </ul>
                </header>
                <div  className="wrapper">
                <Content className={"main-tabs"}>

                        <Col span={6}>
                            <Card style={cardStyle}>
                                <Statistic
                                    title="Transactions in processing"
                                    value={73453}

                                    valueStyle={{
                                        color: '#3f8600',
                                    }}
                                    prefix={<ArrowUpOutlined/>}

                                />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card style={cardStyle}>
                                <Statistic
                                    title="Orders waiting packaging"
                                    value={93453}

                                    valueStyle={{
                                        color: '#cf1322',
                                    }}
                                    prefix={<ArrowDownOutlined/>}

                                />
                            </Card>
                        </Col> <Col span={6}>
                        <Card style={cardStyle}>
                            <Statistic
                                title="Orders passing the last mile"

                                value={945}

                                valueStyle={{
                                    color: '#cf1322',
                                }}
                                prefix={<ArrowDownOutlined/>}

                            />
                        </Card>
                    </Col>

                </Content>
                <Content className={"main-tabs"}>

                    <div className="site-layout-content">
                        <LineChart/>
                    </div>

                </Content>

                <Content className="main-tabs">
                    <Row>
                        <Col span={24}>
                            <div>
                                <GroupedBarChart/>
                            </div>
                        </Col>
                        {/*<Col span={8}>*/}
                        {/*    <div>*/}
                        {/*        {dataPie.length===4&&<Piechart data={dataPie}/>}*/}
                        {/*    </div>*/}
                        {/*</Col>*/}

                    </Row>

                </Content>
                <Content className="main-tabs">
                    <Row>
                        <Col span={24}>
                            <ScatterChart/>
                        </Col>


                    </Row>

                </Content>
                <Content className="main-tabs" >
                    <Row>
                        <Col span={24}>
                            <TableView/>
                        </Col>


                    </Row>

                </Content>

                </div>
                <Footer style={{textAlign: 'center'}}></Footer>
            </Layout>

        </div>
    )
}

export default App;
