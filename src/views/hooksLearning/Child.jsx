import React, { useEffect, useContext, useReducer, useCallback } from 'react'

export default function Child(props) {
    // const memoClick = useCallback(() => {
    //     console.log(234)
    //     console.log(props)
    // }, [])
    console.log('child')
    return (
        <div onClick={props.onAdd}>
            我是Child组件
        </div>
    )

}