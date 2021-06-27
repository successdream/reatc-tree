import styles from './index.less';
import { Transition, CSSTransition } from 'react-transition-group';
import React, { useState } from 'react'
import MyTree from '../myTree'
import Fade from '../fade'
import './index.css'
const duration = 1000;

const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
}
// 进入中是看不到的

const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1,   },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    // appear: {'font-size': '600px', opacity: 0},
    // appeared: {'font-size': '80px', color: 'yellow', opacity: 1}

};

const Home = () => {
    const [inProp, setInProp] = useState(false);
    const [show, setShow  ] = useState(false);

    // return (
    //     <div className={ styles.box }>
    //         <div>
    //         Home 页面
    //         </div>
    //     </div>
    // )
    const handelClick = () => {
        setInProp(!inProp)
    }

    const handelAppearClick = () => {
        setShow(!show)
    }

    return (
        <div>
            {/* {
                <Transition in={inProp} timeout={500} mountOnEnter={ true } unmountOnExit={ true }>
                {state => (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        <div>state: { state }</div>
                        I'm a fade Transition!
                    </div>
                )}
            </Transition>
            } */}
            <button onClick={ handelClick }>按钮</button>
            {/* <button onClick={ handelAppearClick }>显示按钮</button> */}
            {/* <Transition in={inProp} timeout={3000} mountOnEnter={ true } unmountOnExit={ true }>
               {
                   state => (
                        <div>
                            <div> { state }</div>
                            <Fade className={`fade fade-${state}`}/>
                        </div>
                   )
               }
            </Transition> */}
            <CSSTransition in={inProp} classNames="fade" unmountOnExit  timeout={300}>
                <Fade />
            </CSSTransition>
        </div>
    )

}
export default Home;