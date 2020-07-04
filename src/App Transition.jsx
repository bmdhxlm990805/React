import React, { useState } from 'react'
import { Transition } from 'react-transition-group';
import './App Transition.css';
const duration = 1000;
// const defaultStyle = {
//   transition: `opacity ${duration}ms ease-in-out`,
//   opacity: 0,
// }
// const transitionStyles = {
//   entering: { opacity: 1 },
//   entered: { opacity: 1 },
//   exiting: { opacity: 0 },
//   exited: { opacity: 0 },
// };

export default function App() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
     {/* in：表示当前组件的状态进入阶段为true、退出阶段为false */}
     {/* timeout：控制动画时间 */}
     {/* mountOnEnter：延迟挂载 */}
     {/* unmountOnExit：动画结束后销毁该组件、下一次在重新渲染该组件 */}
     {/* appear：首次出现渲染整个动画 */}
     {/* addEndListener={(node,done)=>{}}：状态在entering与exiting之后调用  done(立即变成最终的状态) */}

      <Transition in={inProp} timeout={duration} addEndListener={(node,done) => {
        console.log(node,'______',done)
      }}>
        {state => {
          console.log(state);
          return <div className={state}>
            I'm a fade Transition!
          </div>
        }}
      {/* {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          I'm a fade Transition!
        </div>
      )} */}
      </Transition>
      <button onClick={() => setInProp(!inProp)}>
        Click to Toggle
      </button>
    </div>
  );
}