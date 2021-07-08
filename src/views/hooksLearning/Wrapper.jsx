import React, { useReducer, createContext } from 'react'
import WrapperChild from './WrapperChild'

export const CHANGECOLOR = 'CHANGECOLOR'
export const CHANGINNER = 'CHANGINNER'
export const LOADINGSTART = 'LOADINGSTART'
export const LOADINGEND = 'LOADINGEND'

const obj = {
    a: 1
}
const initalState = {
    color: "red",
    inner: {
        text: "保罗",
        size: '16px'
    },
    loading: 'false'
}

const reducer = (state, action) => {
    switch (action.type) {
        case CHANGECOLOR:
            return {
                ...state, color: action.data
            }
        case CHANGINNER:
            return {
                ...state, inner: {
                    text: action.data.text,
                    size: action.data.size
                }
            }
        case LOADINGSTART:
            return {
                ...state, loading: 'true'
            }
        case LOADINGEND:
            return {
                ...state, loading: 'false'
            }
        default:
            return state
    }
}


// 异步dispatch
function wrapperDispatch(dispatch) {
    return function (action) {
        if (isPromise(action.data)) {
            dispatch({ type: LOADINGSTART });
            action.data.then(v => {
                dispatch({ type: action.type, data: v });
                dispatch({ type: LOADINGEND });
            });
        } else {
            dispatch(action);
        }
    };
}
// shifou yibu 
function isPromise(obj) {
    // obj是有值的
    // 双叹号的作用在于， 如果变量的值为 null / undefined / 0 / ‘ ‘ 时，结果返回 false ；如果明确设置了变量的值，结果会根据变量的实际值来返回。
    return (
        !!obj &&
        (typeof obj === "object" || typeof obj === "function") &&
        typeof obj.then === "function"
    );
}

export const myContext = createContext({})
const { Provider } = myContext
export default function Wrapper(props) {
    const [state, dispatch] = useReducer(reducer, initalState)
    return (
        <div>
            {
                /** 双大括号的意义
                 * 1.外层大括号告诉你，我这要写js表达式
                 * 2.内层告诉你，我这个是变量
                 */
            }
            <Provider value={{ state, dispatch: wrapperDispatch(dispatch), obj }}>
                <WrapperChild />
            </Provider>
        </div>
    )
}
