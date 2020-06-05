
import React from 'react';
import ReactDOM from 'react-dom';
import './Pager.css';

/**
 * 分页插件
 * 属性：
 * 1、初始页码 current
 * 2、总数据量 total
 * 3、每页的条数 limit
 * 4、数字页码最多现实多少 panelNumber
 * 5、当页码改变的事件 onPageChange
 */

export default function Pager(props) {
    const pageNumber = getPageNumber(props);  //总页数
    if(pageNumber === 0){
        return null;
    }
    const min = getMinNumber(props);   //最小数字
    const max = getMaxNumber(min,pageNumber,props);   //最大数字
    const numbers = [];
    console.log('最下数:' + min,'最大数:' + max,'总页数:' + pageNumber);
    for(let i = min ; i <= max; i ++){
        numbers.push(<span key={i} className={i === props.current ? 'item active' : 'item'} onClick={() => { toPage(i, props) }}>{i}</span>)
    }
    return (
        <>
            <span
                onClick={() => { toPage(1, props) }}
                className={props.current === 1 ? 'item disabled' : 'item'}>首页</span>
            <span
                onClick={() => { toPage(props.current - 1 < 1 ? 1 : props.current - 1, props) }}
                className={props.current === 1 ? 'item disabled' : 'item'}>上一页</span>
            {numbers}
            <span
                onClick={() => { toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props) }}
                className={props.current === pageNumber ? 'item disabled' : 'item'}>下一页</span>
            <span
                onClick={() => { toPage(pageNumber, props) }}
                className={props.current === pageNumber ? 'item disabled' : 'item'}>尾页</span>
            <span className='current'>{props.current}</span>/<span>{pageNumber}</span>
        </>
    )
}
/**
 * 计算最大页码
 * @param {*} min 最小值
 * @param {*} pageNumber 总页数
 * @param {*} props 
 */
function getMaxNumber(min,pageNumber,props){
    var max = min + props.panelNumber - 1;
    if(max > pageNumber){
        max = pageNumber;
    }
    return max;
}
/**
 * 计算最小页码
 * @param {*} props 
 */
function getMinNumber(props){
    var min = props.current - Math.floor(props.panelNumber / 2);
    if(min < 1){
        min  = 1;
    }
    return min;
}
/**
 * 跳转到某一页
 * @param {*} target 目标页码
 * @param {*} props 所有属性
 */
function toPage(target, props) {
    if (props.current === target) {
        return false
    } else {
        props.onPageChange && props.onPageChange(target);
    }
}
/**
 * 总页数 = 总数据量 / 每页的条数
 * 
 */
function getPageNumber(props) {
    return Math.ceil(props.total / props.limit);

}