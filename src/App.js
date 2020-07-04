import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

export default function App() {
    const [visible, setVisible] = useState(true);
    return (
        <div>
            {/* 1、为CSSTransition内部的DOM根元素添加样式enter
                2、立即(enter样式已经完全应用到了该元素)为该元素添加样式enter-active
                3、当timeout结束后、去掉之前的样式、添加样式enter-done

                1、为CSSTransition内部的DOM根元素添加样式exit
                2、立即(exit样式已经完全应用到了该元素)为该元素添加样式exit-active
                3、当timeout结束后、去掉之前的样式、添加样式exit-done
            */}
            <CSSTransition timeout={2000} in={visible} classNames='App'>
                <h1>这里是测试样式</h1>
            </CSSTransition>
            <button onClick={() => setVisible(!visible)}>切换显示状态</button>
        </div>
    )
}
