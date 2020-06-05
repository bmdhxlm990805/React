import React from 'react';
import ReactDOM from 'react-dom';
import PageTest from './components/PageTest'

/**
 * 分页插件
 * 属性：
 * 1、初始页码 current
 * 2、总数据量 total
 * 3、每页的条数 limit
 * 4、数字页码最多现实多少 panelNumber
 * 
 */

ReactDOM.render(<PageTest/> ,document.getElementById('root'));