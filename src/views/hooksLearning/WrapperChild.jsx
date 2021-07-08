import React, { useContext, useCallback, useState, useMemo,useEffect } from 'react'
import { myContext, CHANGECOLOR, CHANGINNER } from './Wrapper'
import WrapperComputed from './WrapperComputed'
import { get } from '@/utils/http'

export default function WrapperChild(props) {
    // 这里是mock了一个异步方法，1秒后才会返回结果，模拟请求数据
    function asyncFetch(p) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(p);
            }, 1000);
        });
    }
    const { state, dispatch } = useContext(myContext)
    const changeInner = () => {
        dispatch({
            type: CHANGINNER,
            // 模拟的异步数据，1秒后返回接口
            data: asyncFetch(
                {
                    text: "我是你爹",
                    size: '20px'
                }
            )
        })
    }

    const [count, setCount] = useState(0)
    const double = useMemo(() => {
        return count * 2
    }, [count === 2])  //关注点

    // 对应的缓存组件，箭头函数定义的每次都会加载，那么子组件也会加载
    const btnClick = useCallback(() => {
        console.log("click")
    }, [double])
    // useEffect(() => {
    //     console.log("useEffect1");
    //     setCount(1);
    //     console.log(count);
    // }, []);
    // useEffect(() => {
    //     console.log("useEffect2");
    //     console.log(count);
    // }, []);
    return (
        <div>
            <h1>
                here is WrapperChild
                <div>
                    this is WrapperText: <span style={{ color: state.color, fontSize: state.inner.size }}> {state.inner.text} </span>
                    {state.loading}
                </div>
            </h1>
            -----------------------------------------
            <h1>
                <button onClick={() => { dispatch({ type: CHANGECOLOR, data: 'blue' }) }}>changColor</button>
                <button onClick={changeInner}>changText</button>

                <div>
                    <button onClick={() => {
                        setCount(count + 1)
                    }}>点击+1
                    </button>
                    <div>Count is :{count}</div>
                </div>

            </h1>
            <WrapperComputed double={double} onClick={btnClick} />
        </div>
    )
}
