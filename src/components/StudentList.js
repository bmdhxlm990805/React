// 函数组件：rfc
// 类组件：rcc

import React from 'react'
import Student from './Student';
import './StudentList.css';
export default function StudentList(props) {
    const stus = props.stus.map(item => <Student {...item} key={item.id}/>)
    return (
        // <ul>
        //     {stus}
        // </ul>
        <table cellspacing='0'>
            <tr>
                <td>姓名</td>
                <td>性别</td>
                <td>出生年</td>
                <td>地址</td>
            </tr>
            {stus}
        </table>
    )
}
