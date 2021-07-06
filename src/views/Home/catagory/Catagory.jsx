import React, { useState, useRef, useEffect, Component, useReducer } from 'react'
import { CatagoryWrap } from './StyledCatagory'
import Search from '../../../components/search/Search'
import memoize from 'memoize-one' // 计算属性
import Menu from './Menu'
import { setCateTab } from '../../../store/showMap/action'
import { connect } from 'react-redux'

function Catagory(props) {
    const [tabIndex, setTabIndex] = useState(0)
    const setType = memoize(e => {
        return e === 0 ? 'category' : 'material'
    })
    const type = setType(tabIndex)
    const handleClick = e => {
        return () => {
            setTabIndex(e)
            props.setCateTab(e)
        }
    }
    return (
        <CatagoryWrap>
            <nav>
                <ul>
                    <li onClick={handleClick(0)} className={tabIndex === 0 ? 'active' : ''}>分类</li>
                    <li onClick={handleClick(1)} className={tabIndex === 1 ? 'active' : ''}>食材</li>
                    <li className={tabIndex === 0 ? 'slide' : 'slide right'}></li>
                </ul>
            </nav>
            <Search hasborder={false} hasbg={true} />
            <Menu
                type={type}
            />
        </CatagoryWrap >
    )
}
export default connect(
    state => ({}), {
    setCateTab
}
)(Catagory)