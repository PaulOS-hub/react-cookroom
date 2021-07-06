// import React, { useState, useEffect, useContext, useReducer, useCallback, useMemo } from 'react'
// import { Icon, Button } from 'antd-mobile'
// import { useHistory } from 'react-router'
// import { TitleBar } from '../Home/more/styledMore'
// import Child from './Child'


// const initialState = {
//     count: 0
// }

// function reducer(state, action) {
//     // 此处state默认等于useReducer传入的第二个参数
//     switch (action.type) {
//         case 'add':
//             return {
//                 ...state, count: state.count + action.data
//             }
//         case 'min':
//             return {
//                 ...state, count: state.count - action.data
//             }
//         default:
//             return state
//     }
// }
// const myContext = React.createContext(initialState)
// const { Provider, Consumer } = myContext

// export default function UseReducerDemo(props) {
//     console.log("parent")
//     let x = useContext(myContext) // 参数名为创建的context名
//     const [state, dispatch] = useReducer(reducer, initialState) // 需要传入一个reducer收集器，和一个初始状态
//     const [age, setAge] = useState(16)
//     const history = useHistory()
//     const add = () => {
//         dispatch({ type: 'add', data: 5 })
//         setAge(101)

//     }
//     const min = () => {
//         dispatch({ type: 'min', data: 5 })
//         setAge(10)
//     }
//     // const memoClick = useCallback(() => {
//     //     console.log('memoClick')
//     // }, [])
//     const memoClick = () => {
//         console.log('memoClick')
//     }
//     return (
//         <div>
//             <TitleBar
//                 icon={<Icon type="left" />}
//                 onLeftClick={() => history.goBack()}
//                 mode="dark"
//             >学习中...</TitleBar>
//             我是INDEX组件

//             <div>
//                 <Button onClick={add} type="primary" size="small" inline>加多少</Button>
//                 <Button onClick={min} style={{ marginLeft: "10px" }} type="info" size="small" inline>减多少</Button>
//             </div>

//             <Child age={age} onAdd={memoClick} state={{ marginTop: '30px' }} />
//         </div>
//     )
// }


import React, { useState, useCallback } from 'react';
 
const set = new Set();
 
export default function Callback() {
    const [count, setCount] = useState(1);
    const [val, setVal] = useState('');
 
    const callback = useCallback(() => {
        console.log(count,'count');
    }, [count]);
    set.add(callback);
 
 
    return <div>
        <h4>{count}</h4>
        <h4>{set.size}</h4>
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <input value={val} onChange={event => setVal(event.target.value)}/>
        </div>
    </div>;
}