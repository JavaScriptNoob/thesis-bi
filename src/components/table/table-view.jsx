import { Button, Space, Table } from 'antd';
import { useState } from 'react';
import {useSelector} from "react-redux";

const TableView = () => {
    const data = useSelector(state => state.updated.initialData)
    const columns = [
        {
            title: 'Name',
            dataIndex: 'id',
        },
        {
            title: 'Country',
            dataIndex: 'country',

        },
        {
            title: 'Revenue',
            dataIndex: 'revenue',
            render(text, record) {
                return {
                    props: {
                        style: { background: parseInt(text) > 1250 ? "red" : "green" }
                    },
                    children: <div>{text}</div>
                };
            }

        },
        {
            title: 'Profit',
            dataIndex: 'profit',
            render(text, record) {
                return {
                    props: {
                        style: { background: parseInt(text) > 400 ? "steelblue" : "green" }
                    },
                    children: <div>{text}</div>
                };
            }
        },
        {
            title: 'Group',
            dataIndex: 'group',

        },
        {
            title: 'Product',
            dataIndex: 'product',

        },
        {
            title: 'Date',
            dataIndex: 'date',

        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',

        },
    ];

    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    return (
    <Table columns={columns} dataSource={data} className="table-general" />
    )
};
export default TableView;
