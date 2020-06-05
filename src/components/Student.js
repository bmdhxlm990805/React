import React from 'react'

export default function Student({name,age,birth,address}) {
    return (
        // <li >
        //     【姓名】{name}
        //     【性别】{age === 1 ? '男' : '女'}
        //     【出生年】{birth}
        // </li>
        <tr>
            <td>{name}</td>
            <td>{age === 1 ? '男' : '女'}</td>
            <td>{birth}</td>
            <td>{address}</td>
        </tr>
    )
}
