import React, { useMemo, memo, useCallback, useState } from 'react'
import MoreEffect from './MoreEffect'
export default memo(function WrapperComputed(props) {


    console.log('render了')
    const { double } = props
    return (
        <div>
            --------------------------WrapperComputed
            <h1> 
                <div>Double is :{double}</div>
            </h1>
            <MoreEffect />
        </div>
    )
})
